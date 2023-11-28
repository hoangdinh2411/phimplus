import { Metadata, ResolvingMetadata } from "next";
import dynamic from "next/dynamic";

import React from "react";
import { fetchListMovieByCategories } from "~/services/movieApi";
import Container from "@mui/material/Container";
import MuiPagination from "../../_pages/list/Pagination";
const ListMovie = dynamic(() => import("~/app/_pages/home/ListMovie"), {
  ssr: false,
});
import Filter from "~/app/_pages/list/Filter";
import { getFilterQueries } from "~/helpers/functions";
import NotFoundForFilter from "~/app/_pages/list/NotFound";
import { APP_CONFIG } from "~/helpers/config";

interface Props {
  params: { slug: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata(
  { params: { slug }, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  if (!slug.includes("danh-sach") || !slug.includes("the-loai"))
    return {
      title: APP_CONFIG.NAME,
      description: APP_CONFIG.DESCRIPTION,
    };

  let filterQueries = getFilterQueries(searchParams);
  const { data } = await fetchListMovieByCategories(
    slug.join("/") + filterQueries
  );

  const previousImage = (await parent).openGraph?.images || [];

  if (data?.items.length === 0) {
    return {};
  }
  return {
    title: data?.seoOnPage.titleHead,
    description: data?.seoOnPage?.descriptionHead,
    openGraph: {
      title: data?.titlePage,
      description: data?.seoOnPage.descriptionHead,
      images: [...data?.seoOnPage.og_image, ...previousImage],
    },
  };
}

export default async function Page({ params: { slug }, searchParams }: Props) {
  let filterQueries = getFilterQueries(searchParams);

  const { data } = await fetchListMovieByCategories(
    slug.join("/") + filterQueries
  );

  if (!data || data?.items.length === 0) {
    return <NotFoundForFilter />;
  }
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        px: {
          xs: 8,
          lg: 0,
        },
      }}
    >
      <Filter slug={slug} searchParams={searchParams} />
      <ListMovie listMovie={data.items} seeMore={false} />
      <MuiPagination
        filterQueries={filterQueries}
        totalItem={data.params?.pagination.totalItems}
        totalItemPerPage={data.params?.pagination.totalItemsPerPage}
        page={Number(searchParams.page) || 1}
      />
    </Container>
  );
}

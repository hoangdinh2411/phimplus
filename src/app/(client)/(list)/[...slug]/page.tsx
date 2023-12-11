import { Metadata, ResolvingMetadata } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';
import { fetchListMovieByCategories } from '~/services/movieApi';
import Container from '@mui/material/Container';
import MuiPagination from '~/app/_pages/danh-sach/Pagination';
import Filter from '~/app/_pages/danh-sach/Filter';
import { getFilterQueries } from '~/helpers/functions';
import { notFound } from 'next/navigation';
const ListCategoryMovie = dynamic(
  () => import('~/components/UI/ListCategoryMovie'),
  { ssr: false }
);

interface Props {
  params: { slug: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata(
  { params: { slug }, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  let filterQueries = getFilterQueries(searchParams);
  const { data } = await fetchListMovieByCategories(
    slug.join('/') + filterQueries
  );

  const previousImage = (await parent).openGraph?.images || [];

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
    slug.join('/') + filterQueries
  );

  if (!data || data?.items.length === 0) {
    return notFound();
  }
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        px: {
          xs: 4,
          lg: 0,
        },
      }}
      component='section'
    >
      <Filter slug={slug} searchParams={searchParams} />
      <ListCategoryMovie
        listMovie={data.items ? data.items : []}
        seeMore={false}
      />
      <MuiPagination
        filterQueries={filterQueries}
        totalItem={data.params?.pagination.totalItems}
        totalItemPerPage={data.params?.pagination.totalItemsPerPage}
        page={Number(searchParams.page) || 1}
      />
    </Container>
  );
}

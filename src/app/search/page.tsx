import { Metadata, ResolvingMetadata } from 'next';
import React from 'react';
import { fetchSearchMovie } from '~/services/movieApi';
import Container from '@mui/material/Container';
import ListMovie from '../_pages/home/ListMovie';
import MuiPagination from '../_pages/list/Pagination';
import NotFoundForSearch from '../_pages/search/NotFoundForSearch';
import { getFilterQueries } from '~/helpers/functions';
import Typography from '@mui/material/Typography';
interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata(
  { searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { data } = await fetchSearchMovie(String(searchParams.keyword));
  if (data?.items.length === 0) {
    return {
      title: 'Không tìm thấy phim cho từ khóa ' + searchParams.keyword,
    };
  }
  const previousImage = (await parent).openGraph?.images || [];
  return {
    title: data?.seoOnPage.titleHead,
    description: data?.seoOnPage.descriptionHead,
    openGraph: {
      title: data?.titlePage,
      description: data?.seoOnPage.descriptionHead,
      images: [...data?.seoOnPage.og_image, ...previousImage],
    },
  };
}
export default async function SearchMovie({ searchParams }: Props) {
  let filterQueries = getFilterQueries(searchParams);
  const { data } = await fetchSearchMovie(filterQueries || '');
  if (!data || data?.items.length === 0) {
    return <NotFoundForSearch />;
  }

  return (
    <Container maxWidth={false}>
      <Typography variant='h5' component='h5' my={16}>
        Kết quả tìm kiếm cho: <mark>{searchParams.keyword}</mark>
      </Typography>
      <ListMovie listMovie={data.items} seeMore={false} />
      <MuiPagination
        filterQueries={filterQueries}
        totalItem={data?.params.pagination.totalItems}
        totalItemPerPage={data?.params.pagination.totalItemsPerPage}
        page={Number(searchParams.page) || 1}
      />
    </Container>
  );
}

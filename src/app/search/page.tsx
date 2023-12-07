import { Metadata, ResolvingMetadata } from 'next';
import React from 'react';
import { fetchSearchMovie } from '~/services/movieApi';
import Container from '@mui/material/Container';
import MuiPagination from '../_pages/list/Pagination';
import { getFilterQueries } from '~/helpers/functions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MovieCard from '~/components/UI/MovieCard';
import ListMovieSkeleton from '~/components/UI/Skeleton/ListMovieSkeleton';
import MoviesNotFound from './MoviesNotFound';
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
    return <MoviesNotFound />;
  }

  return (
    <Container maxWidth={false}>
      <Typography variant='h5' component='h5' my={16}>
        Kết quả tìm kiếm cho: <mark>{searchParams.keyword}</mark>
      </Typography>
      <Box
        mb={{
          xs: 16,
          lg: 20,
        }}
        component='section'
      >
        <Grid spacing={8} container my={4} ml={-8}>
          {data ? (
            data?.items.map((item: any, index: number) => {
              return (
                <Grid key={index} item md={3} sm={4} xs={6}>
                  <MovieCard
                    name={item.name}
                    slug={item.slug}
                    thumbnail={item.thumb_url}
                    tagTitle={item.category && item.category[0].name}
                  />
                </Grid>
              );
            })
          ) : (
            <ListMovieSkeleton />
          )}
        </Grid>
      </Box>
      <MuiPagination
        filterQueries={filterQueries}
        totalItem={data?.params.pagination.totalItems}
        totalItemPerPage={data?.params.pagination.totalItemsPerPage}
        page={Number(searchParams.page) || 1}
      />
    </Container>
  );
}

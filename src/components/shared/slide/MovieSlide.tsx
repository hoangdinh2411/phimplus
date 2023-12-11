'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Container from '@mui/material/Container';
import { IMovieDetail } from '~/types/movie';
import Title from '~/app/_pages/home/ListMovie/Title';
import MovieCard from '~/components/UI/MovieCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
interface Props {
  items: IMovieDetail[];
  title?: string;
  seeMore?: boolean;
  href?: string;
}

export default function MovieSlide({
  items,
  title,
  seeMore = true,
  href,
}: Props) {
  return (
    <>
      {title ? <Title seeMore={seeMore} title={title} href={href} /> : null}
      <Container
        component='article'
        maxWidth={false}
        disableGutters
        sx={{
          py: 0,
          px: 0,
          '.swiper-button-next , .swiper-button-prev': {
            ':hover': {
              backgroundColor: 'background.paper',
              width: {
                xs: 32,
                md: 50,
              },
              height: {
                xs: 32,
                md: 50,
              },
              borderRadius: '50%',
              transition: 'all 0.2s',
            },
            ':after': {
              color: 'text.primary',
              fontSize: {
                xs: 16,
                md: 24,
              },
            },
          },
        }}
      >
        <Swiper
          // install Swiper modules
          modules={[Navigation]}
          slidesPerView={2}
          navigation
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            600: {
              slidesPerView: 3,
            },
            800: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }}
        >
          {items?.map((item) => {
            return (
              <SwiperSlide key={item._id}>
                <MovieCard
                  name={item.name}
                  slug={item.slug}
                  thumbnail={item.thumb_url}
                  tagTitle={`${item.quality}  ${item.lang}`}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </>
  );
}

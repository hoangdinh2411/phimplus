'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Container from '@mui/material/Container';
import { IMovieDetail } from '~/types/movie';
import Title from '~/app/_pages/home/ListMovie/Title';
import Cart from '~/components/UI/Card';

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
        component='div'
        maxWidth={false}
        disableGutters
        sx={{
          py: 20,
          '.swiper-button-next , .swiper-button-prev': {
            ':hover': {
              backgroundColor: 'background.paper',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              transition: 'all 0.2s',
            },
            ':after': {
              color: 'text.primary',
              lineHeight: '50px',
              fontSize: '25px',
            },
          },
        }}
      >
        <Swiper
          // install Swiper modules
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={2}
          navigation
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            600: {
              slidesPerView: 3,
            },
            800: {
              slidesPerView: 4,
            },
          }}
        >
          {items?.map((item) => {
            return (
              <SwiperSlide key={item._id}>
                <Cart
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

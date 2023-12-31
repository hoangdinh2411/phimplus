'use client';
import React from 'react';
import Container from '@mui/material/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import { IMovieDetail } from '~/types/movie';
import Content from './Content';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
interface Props {
  items: IMovieDetail[];
}
export default function AdsSlide({ items }: Props) {
  return (
    <React.Fragment>
      <Container
        component='article'
        maxWidth='xl'
        disableGutters
        sx={{
          height: {
            xs: 350,
            sm: 450,
            md: 550,
            lg: 650,
          },
          mb: 30,
          overflow: 'hidden',
          '.swiper-pagination-bullet': {
            display: {
              xs: 'none',
              md: 'inline-block',
            },
            width: '20px',
            height: '4px',
            borderRadius: '5px',
            backgroundColor: '#fff',
          },
          '.swiper-pagination-bullet-active': {
            width: '40px',
            display: {
              xs: 'none',
              md: 'inline-block',
            },
          },
        }}
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          style={{
            height: '100%',
          }}
        >
          {items &&
            items?.map((item, index) => {
              return (
                <SwiperSlide
                  key={index}
                  style={{
                    height: '100%',
                    width: '100%',
                  }}
                >
                  <Content item={item} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Container>
    </React.Fragment>
  );
}

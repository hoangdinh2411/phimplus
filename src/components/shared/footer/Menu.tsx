'use client';
import Grid from '@mui/material/Grid';
import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import useApp from '~/hooks/useApp';
import { MENU_INFORMATION } from '~/helpers/config';
import NextLink from 'next/link';
export default function Menu() {
  const { categories, countries } = useApp();
  const menuFooter = [
    {
      name: 'categories',
      title: 'Phim mới',
      menu: categories.slice(0, 5),
    },
    { name: 'countries', title: 'Phim Hay', menu: countries.slice(0, 5) },
    {
      name: 'information',
      title: 'Thông tin',
      menu: MENU_INFORMATION,
    },
  ];
  return (
    <Grid item xs={12} lg={6} mt={0} container justifyContent='space-between'>
      {menuFooter.map((item, index) => {
        return (
          <Grid item xs={4} key={index}>
            <Typography
              variant='h3'
              component='p'
              id={item.name}
              fontSize={16}
              fontWeight='bolder'
              pb={4}
            >
              {item.title}
            </Typography>
            <List aria-labelledby={item.name}>
              {item.menu.map((itemMenu, index) => {
                return (
                  <ListItem key={index} sx={{ px: 0 }} component='li'>
                    <Link
                      href={itemMenu.slug}
                      fontSize='12px'
                      fontWeight={500}
                      underline='hover'
                      component={NextLink}
                      sx={{
                        display: 'block',
                        width: '100%',
                        py: 4,
                      }}
                    >
                      {itemMenu.name}
                    </Link>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        );
      })}
    </Grid>
  );
}

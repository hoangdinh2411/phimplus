'use client';
import React from 'react';
import { MENU_BAR } from '~/helpers/config';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import Popover from '@mui/material/Popover';
import Grid from '@mui/material/Grid';
import useApp from '~/hooks/useApp';
import { Item } from '~/types/app';
import { usePathname } from 'next/navigation';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
type Props = {};

function MenuBar({}: Props) {
  const pathname = usePathname();
  const appContext = useApp();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [subMenu, setSubMenu] = React.useState<Item[]>([]);

  const showSubMenu = (event: React.MouseEvent<HTMLElement>, key: string) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    if (key === 'categories') setSubMenu(appContext.categories);
    if (key === 'countries') setSubMenu(appContext.countries);
  };

  const closeSubMenu = () => {
    if (anchorEl) {
      setAnchorEl(null);
    }
  };

  const isOpen = Boolean(anchorEl);
  return (
    <List
      sx={{
        display: {
          lg: 'inline-flex',
          xs: 'none',
        },
      }}
      disablePadding
    >
      {MENU_BAR.map((page) => (
        <ListItem
          key={page.id + page.title}
          title={page.title}
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Link
            noWrap
            variant='h6'
            href={page.path}
            onClick={
              page.path !== '' ? () => {} : (e) => showSubMenu(e, page.key)
            }
            sx={{
              color: !pathname.includes(page.active)
                ? 'text.secondary'
                : 'primary.dark',
              display: 'flex',
              alignItems: 'center',
            }}
            component={NextLink}
          >
            {page.title}
            {page.path === '' ? (
              <KeyboardArrowDownOutlinedIcon
                sx={{
                  ml: 2,
                }}
              />
            ) : null}
          </Link>

          {page.path === '' && (
            <Popover
              id={isOpen ? page.title : ''}
              open={page.path === '' && isOpen}
              onClose={closeSubMenu}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              sx={{
                top: '10px',
              }}
            >
              <Grid container spacing={4} maxWidth={600} padding={8}>
                {subMenu.map((item: Item) => (
                  <Grid key={item.slug} item md={3} marginY={4}>
                    <Link
                      noWrap
                      padding={3}
                      sx={{
                        '&:hover': {
                          backgroundColor: 'primary.dark',
                          borderRadius: 3,
                        },
                        margin: 'auto',
                      }}
                      variant='h6'
                      color='text.secondary'
                      href={item.slug}
                      component={NextLink}
                      onClick={closeSubMenu}
                    >
                      {item.name}
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Popover>
          )}
        </ListItem>
      ))}
    </List>
  );
}
export default React.memo(MenuBar);

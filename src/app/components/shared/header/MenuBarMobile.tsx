'use client';
import React from 'react';
// import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Brand from './Brand';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import Grid from '@mui/material/Grid';
import { MENU_BAR } from '~/helpers/config';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Item } from '~/types/app';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import useApp from '~/hooks/useApp';
import { usePathname } from 'next/navigation';

type Props = {};

export default function MenuBarMobile({}: Props) {
  const appContext = useApp();
  const pathname = usePathname();

  const [open, setOpen] = React.useState(false);
  const [subMenu, setSubMenu] = React.useState<Item[]>([]);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const closeSubMenu = () => {
    if (anchorEl) {
      setAnchorEl(null);
    }
  };

  const openSidebar = () => {
    setOpen(true);
  };
  const showSubMenu = (event: React.MouseEvent<HTMLElement>, key: string) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    if (key === 'categories') setSubMenu(appContext.categories);
    if (key === 'countries') setSubMenu(appContext.countries);
  };
  const closeSidebar = () => {
    setOpen(false);
    closeSubMenu();
  };

  React.useEffect(() => {
    closeSidebar();
  }, [pathname]);

  React.useLayoutEffect(() => {
    function toggleSubmenu() {
      const width = window.innerWidth;
      if (width > 1140) {
        closeSidebar();
        return;
      }
    }
    window.addEventListener('resize', toggleSubmenu);
    return () => window.removeEventListener('resize', toggleSubmenu);
  }, []);
  const isOpen = Boolean(anchorEl);
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: 'flex', lg: 'none' },
        marginRight: 8,
      }}
    >
      <IconButton siz-e='large' color='inherit' onClick={openSidebar}>
        <MenuIcon
          sx={{
            width: 24,
            height: 24,
          }}
        />
      </IconButton>
      <Drawer
        anchor='left'
        onClose={closeSidebar}
        open={open}
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 280,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box
          component='section'
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 100,
          }}
        >
          <Brand position='center' />
        </Box>
        <List sx={{}} disablePadding>
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
                sx={{
                  color: !pathname.includes(page.active)
                    ? 'text.secondary'
                    : 'primary.dark',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onClick={
                  page.path !== '' ? () => {} : (e) => showSubMenu(e, page.key)
                }
                component={NextLink}
              >
                {page.title}
                {page.path === '' ? (
                  <KeyboardArrowRightOutlinedIcon
                    sx={{
                      color: 'primary.dark',
                      ml: 2,
                    }}
                  />
                ) : null}
              </Link>

              {page.path === '' && (
                <Drawer
                  anchor='left'
                  open={page.path === '' && isOpen}
                  onClose={closeSidebar}
                  sx={{
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                      width: 280,
                      height: '100%',
                      boxSizing: 'border-box',
                    },
                  }}
                >
                  <Grid container spacing={2} maxWidth={300} padding={8}>
                    <Grid item xs={12} marginBottom={4}>
                      <ArrowBackOutlinedIcon
                        onClick={closeSubMenu}
                        sx={{
                          color: 'primary.dark',
                          fontSize: 32,
                        }}
                      />
                    </Grid>
                    {subMenu.map((item: Item) => (
                      <Grid key={item.id} item xs={6} marginY={4}>
                        <Link
                          noWrap
                          padding={3}
                          sx={{
                            color: pathname.includes(item.slug)
                              ? 'error.main'
                              : 'text.primary',
                            '&:hover': {
                              lg: {
                                backgroundColor: 'primary.dark',
                                borderRadius: 3,
                              },
                            },
                            margin: 'auto',
                            width: '100%',
                          }}
                          variant='h6'
                          color='text.secondary'
                          href={item.slug}
                          component={NextLink}
                        >
                          {item.name}
                        </Link>
                      </Grid>
                    ))}
                  </Grid>
                </Drawer>
              )}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

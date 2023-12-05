'use client';
import React from 'react';
import { MENU_BAR } from '~/helpers/config';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Popover from '@mui/material/Popover';
import Grid from '@mui/material/Grid';
import useApp from '~/hooks/useApp';
import { Item } from '~/types/app';
import { usePathname } from 'next/navigation';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { InitialStateAppContextType } from '~/provider/AppContextProvider';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
type Props = {};

function MenuBar({}: Props) {
  const pathname = usePathname();
  const appContext: InitialStateAppContextType = useApp();
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
            href={page.path}
            onClick={
              page.path !== '' ? () => {} : (e) => showSubMenu(e, page.key)
            }
            prefetch={false}
          >
            <Typography
              variant='body1'
              component='span'
              color='text.primary'
              noWrap
              sx={{
                color: !pathname.includes(page.active)
                  ? 'text.secondary'
                  : 'primary.dark',
                display: 'flex',
                alignItems: 'center',
                ':hover': {
                  color: 'primary.dark',
                },
              }}
              textAlign='center'
            >
              {page.title}
              {page.path === '' ? (
                <KeyboardArrowDownOutlinedIcon
                  sx={{
                    ml: 2,
                  }}
                />
              ) : null}
            </Typography>
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
                horizontal: 'center',
              }}
              sx={{
                top: '10px',
              }}
            >
              <Grid container spacing={4} maxWidth={600} padding={8}>
                {subMenu.map((item: Item) => (
                  <Grid key={item.slug} item md={3} marginY={4}>
                    <Link
                      href={item.slug}
                      onClick={closeSubMenu}
                      prefetch={false}
                    >
                      <Typography
                        component='span'
                        variant='body1'
                        color='text.primary'
                        noWrap
                        textAlign='center'
                        sx={{
                          ':hover': {
                            backgroundColor: 'primary.dark',
                            borderRadius: 3,
                          },
                        }}
                      >
                        {item.name}
                      </Typography>
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

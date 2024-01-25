'use client';
import React from 'react';

import Container from '@mui/material/Container';
import MenuBar from './MenuBar';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Collapse from '@mui/material/Collapse';
import { useRouter } from 'next/navigation';
import { APP_ROUTERS } from '~/helpers/config';
type Props = {};
function Navbar({}: Props) {
  const router = useRouter();
  const [searchBar, setSearchBar] = React.useState<boolean>(false);
  const searchBarRef = React.useRef<HTMLInputElement>(null);

  function closeSearchBar() {
    setSearchBar(false);
    searchBarRef.current!.value = '';
  }

  function search() {
    const value = searchBarRef.current?.value;
    router.push(`${APP_ROUTERS.SEARCH}?keyword=${value}`);
  }
  function handleClickOnSearchIcon() {
    if (searchBar && searchBarRef?.current?.value) {
      if (!searchBarRef.current) return;
      search();
      return;
    }
    setSearchBar(true);
  }

  function handleEnterToSearchFilm(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== 'Enter') return;
    if (!searchBarRef.current) return;
    search();
  }

  return (
    <Container
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'right',
      }}
    >
      <MenuBar />

      <ClickAwayListener onClickAway={closeSearchBar}>
        <Box
          component='aside'
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: 'auto',
            position: {
              xs: 'absolute',
              sm: 'relative',
            },
          }}
        >
          <Collapse
            orientation='horizontal'
            in={searchBar}
            timeout={200}
            sx={{
              flex: 1,
              '.MuiCollapse-wrapper': {
                '.MuiCollapse-wrapperInner': {
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              },
            }}
          >
            <TextField
              inputRef={searchBarRef}
              id='search'
              placeholder='Search'
              fullWidth
              variant='outlined'
              sx={{
                width: '100%',
                mx: 3,
              }}
              onKeyDown={handleEnterToSearchFilm}
            />
          </Collapse>
          <SearchOutlinedIcon
            onClick={handleClickOnSearchIcon}
            sx={{
              cursor: 'pointer',
            }}
          />
        </Box>
      </ClickAwayListener>
    </Container>
  );
}

export default React.memo(Navbar);

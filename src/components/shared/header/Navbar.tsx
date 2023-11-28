"use client";
import React from "react";

import Container from "@mui/material/Container";
import MenuBar from "./MenuBar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Collapse from "@mui/material/Collapse";
import { useRouter } from "next/navigation";
type Props = {};
function Navbar({}: Props) {
  const router = useRouter();
  const [searchBar, setSearchBar] = React.useState<boolean>(false);
  const searchBarRef = React.useRef<HTMLInputElement>(null);
  function toggleSearchBar() {
    setSearchBar((prev) => !prev);
  }
  function closeSearchBar() {
    setSearchBar(false);
    searchBarRef.current!.value = "";
  }

  function searchFilm(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Enter") return;
    if (!searchBarRef.current) return;
    const value = searchBarRef.current?.value;
    router.push(`/search?keyword=${value}`);
    searchBarRef.current!.value = "";
  }
  return (
    <Container
      sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "right",
      }}
    >
      <MenuBar />

      <ClickAwayListener onClickAway={closeSearchBar}>
        <Box
          component="aside"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Collapse
            orientation="horizontal"
            in={searchBar}
            timeout={200}
            sx={{
              flex: 1,
              ".MuiCollapse-wrapper": {
                ".MuiCollapse-wrapperInner": {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
              },
            }}
          >
            <TextField
              inputRef={searchBarRef}
              id="search"
              placeholder="Search"
              fullWidth
              variant="outlined"
              sx={{
                mx: 3,
              }}
              onKeyDown={searchFilm}
            />
          </Collapse>
          <SearchOutlinedIcon
            onClick={toggleSearchBar}
            sx={{
              cursor: "pointer",
            }}
          />
        </Box>
      </ClickAwayListener>
    </Container>
  );
}

export default React.memo(Navbar);

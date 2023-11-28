"use client";
import Pagination from "@mui/material/Pagination";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
interface Props {
  filterQueries: string | undefined;
  totalItem: number;
  totalItemPerPage: number;
  page: number;
}
export default function MuiPagination({
  filterQueries,
  totalItem,
  totalItemPerPage,
  page,
}: Props) {
  const router = useRouter();
  const path = usePathname();

  function handleChangePage(
    event: React.ChangeEvent<unknown>,
    selectedPage: number
  ) {
    let url = path;
    if (!filterQueries || filterQueries.includes("?page=")) {
      url += `?page=${selectedPage}`;
    } else {
      if (!filterQueries?.includes("page=")) {
        url += `${filterQueries}&page=${selectedPage}`;
      } else {
        url += `${filterQueries.substring(
          0,
          filterQueries.indexOf("&page")
        )}&page=${selectedPage}`;
      }
    }
    router.push(url);
  }

  return (
    <Pagination
      count={Math.ceil(totalItem / totalItemPerPage)}
      variant="outlined"
      shape="rounded"
      page={page}
      onChange={handleChangePage}
      siblingCount={4}
      boundaryCount={4}
      sx={{
        py: 8,
      }}
    />
  );
}

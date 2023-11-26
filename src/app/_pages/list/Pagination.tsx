'use client';
import Pagination from '@mui/material/Pagination';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
interface Props {
  totalItem: number;
  totalItemPerPage: number;
  page: number;
}
export default function MuiPagination({
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
    router.push(`${path}?page=${selectedPage}`);
  }
  return (
    <Pagination
      count={Math.ceil(totalItem / totalItemPerPage)}
      variant='outlined'
      shape='rounded'
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

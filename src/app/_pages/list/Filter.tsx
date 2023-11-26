'use client';
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMore from '@mui/icons-material/ExpandMore';
import BasicSelect from '~/components/UI/BasicSelect';
import { MENU_LIST, SORT_FIELD, SPECIAL_PATH } from '~/helpers/config';
import useApp from '~/hooks/useApp';
import { getDataSelect, listYear } from '~/helpers/functions';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

interface IFilter {
  sort_field: string;
  pathname: string;
  category: string;
  country: string;
  year: string;
}
interface Props {
  slug: string[];
  searchParams: { [key: string]: string | string[] | undefined };
}
export default function Filter({ slug, searchParams }: Props) {
  const pathname = slug.join('/');
  const { sort_field, category, country, year } = searchParams;

  const router = useRouter();
  const { categories, countries } = useApp();
  const arrayYear = listYear();
  const [filter, setFilter] = useState<IFilter>({
    sort_field: '_id',
    pathname: '',
    category: 'all',
    country: 'all',
    year: 'all',
  });
  const [isShowAccordion, setIsShowAccordion] = useState<boolean>(false);
  const [isChanged, setIsChanged] = useState<boolean>(false);

  React.useLayoutEffect(() => {
    function showAccordion() {
      const width = window.innerWidth;
      if (width > 960) {
        setIsShowAccordion(false);
      } else {
        setIsShowAccordion(true);
      }
    }
    window.addEventListener('resize', showAccordion);
    return () => window.removeEventListener('resize', showAccordion);
  }, []);

  const getSpecialPath = (name: string) => {
    if (
      pathname.includes(SPECIAL_PATH.DANH_SACH) &&
      name === SPECIAL_PATH.DANH_SACH
    ) {
      return pathname;
    }
    if (pathname.includes(name)) {
      return pathname.substring(pathname.lastIndexOf('/') + 1);
    }
    return undefined;
  };

  const getSearchParam = (param: string | string[] | undefined) => {
    if (param === undefined || String(param) === '') {
      return undefined;
    }
    return String(param);
  };

  useEffect(() => {
    setFilter({
      sort_field: getSearchParam(sort_field) || '_id',
      category:
        getSpecialPath(SPECIAL_PATH.THE_LOAI) ||
        getSearchParam(category) ||
        'all',
      country:
        getSpecialPath(SPECIAL_PATH.QUOC_GIA) ||
        getSearchParam(country) ||
        'all',
      year: getSearchParam(year) || 'all',
      pathname: getSpecialPath(SPECIAL_PATH.DANH_SACH) || 'danh-sach/phim-moi',
    });
  }, [slug, searchParams]);

  type FilterName = keyof IFilter;
  function isFilterName(name: string): name is FilterName {
    return ['sort_field', 'pathname', 'category', 'country', 'year'].includes(
      name
    );
  }

  const handleSetFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFilter = filter;
    if (isFilterName(event.target.name)) {
      newFilter[event.target.name] = event.target.value;
      setFilter({ ...newFilter });
      if (!isChanged) {
        setIsChanged(true);
      }
    }
  };

  const handleFilterMovie = () => {
    if (!isChanged) {
      return;
    }
    const valueFilter = filter;
    for (const [key, value] of Object.entries(valueFilter) as [
      keyof IFilter,
      string
    ][]) {
      if (value === 'all') {
        valueFilter[key] = '';
      }
    }
    router.replace(
      `/${valueFilter.pathname}?sort_field=${valueFilter.sort_field}&category=${valueFilter.category}&country=${valueFilter.country}&year=${valueFilter.year}`
    );
  };

  return (
    <Accordion
      sx={{
        p: 8,
        mt: 8,
        borderRadius: '8px !important',
      }}
    >
      {isShowAccordion ? (
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-label='Expand'
          aria-controls='-content'
          id='-header'
        >
          <Typography>Duyệt Phim</Typography>
        </AccordionSummary>
      ) : null}
      <AccordionDetails>
        <Grid container spacing={8} sx={{ alignItems: 'center' }}>
          <Grid item xl='auto' md={4} xs={12}>
            <BasicSelect
              value={filter.sort_field}
              handleChange={handleSetFilter}
              name='sort_field'
              data={SORT_FIELD}
            />
          </Grid>

          <Grid item xl='auto' md={4} xs={12}>
            <BasicSelect
              value={filter.pathname}
              handleChange={handleSetFilter}
              name='pathname'
              data={[...MENU_LIST]}
            />
          </Grid>
          <Grid item xl='auto' md={4} xs={12}>
            <BasicSelect
              value={filter.category}
              handleChange={handleSetFilter}
              name='category'
              data={[
                { id: '0', name: 'Tất cả các thể loại', slug: 'all' },
                ...getDataSelect(categories),
              ]}
            />
          </Grid>

          <Grid item xl='auto' md={4} xs={12}>
            <BasicSelect
              value={filter.country}
              handleChange={handleSetFilter}
              name='country'
              data={[
                { id: '0', name: 'Tất cả quốc gia', slug: 'all' },
                ...getDataSelect(countries),
              ]}
            />
          </Grid>

          <Grid item xl='auto' md={4} xs={12}>
            <BasicSelect
              value={filter.year}
              handleChange={handleSetFilter}
              name='year'
              data={[
                { id: '0', name: 'Tất cả quốc các năm', slug: 'all' },
                ...arrayYear,
              ]}
            />
          </Grid>

          <Grid item xl='auto' md={4} xs={12}>
            <Button
              variant='contained'
              size='large'
              sx={{ fontSize: '14px', textTransform: 'math-auto' }}
              onClick={handleFilterMovie}
            >
              Lọc Phim
            </Button>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

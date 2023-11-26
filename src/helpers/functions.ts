import { Item } from '~/types/app';

export const joinToStringFromArray = (array: Item[] = []) => {
  return array.map((item) => item.name).join(', ');
};

export function listYear(): Item[] {
  const currentYear = new Date().getFullYear();
  const startYear = 2010;
  const yearArray: Item[] = [];
  for (let year = currentYear; year >= startYear; year--) {
    const item: Item = {
      id: `${year}`,
      name: `${year}`,
      slug: `${year}`,
    };
    yearArray.push(item);
  }
  return yearArray;
}

export function getDataSelect(values: Item[]): Item[] {
  return values.map((item) => ({
    ...item,
    slug: item.slug.substring(item.slug.lastIndexOf('/') + 1),
  }));
}

export function searchParamsToFilterQueries(obj: any) {
  var str = '';
  for (var p in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, p)) {
      str += `&${p}=${obj[p]}`;
    }
  }
  return str.replace('&', '?');
}

export function getFilterQueries(searchParams: {
  [key: string]: string | string[] | undefined;
}) {
  let filterQueries;
  if (searchParams) {
    filterQueries = searchParamsToFilterQueries(searchParams);
  }

  return filterQueries;
}

import { GALLERY } from "~/helpers/config";
import request from "./request";
import { IMovieWithSeo, IListMovieWithSeo } from "~/types/movie";

export const fetchListNewMovie = async () => {
  const res = await request<IListMovieWithSeo>(
    `/v1/api/danh-sach/phim-moi?year=${new Date().getFullYear()}}`,
    {
      next: { revalidate: 3600 },
    }
  );

  return res.data;
};

export const getMovieBySlug = async (slug: string) => {
  return await request<IMovieWithSeo>("/v1/api/phim/" + slug);
};

export const fetchListMovieByCategories = async (categories: string) => {
  const res = await request<IListMovieWithSeo>(`/v1/api/${categories}`, {
    next: { revalidate: 3600 },
  });
  return res;
};

// export const fetchListMovieByGallery = async (categories: string) => {
//   const res = await request<IListMovieWithSeo>(`/v1/api/${categories}`, {
//     next: { revalidate: 3600 },
//   });
//   return res;
// };

export const fetchListSingleMovieByGallery = async () => {
  const res = await request<IListMovieWithSeo>(
    "/v1/api" + GALLERY.single.slug,
    {
      next: { revalidate: 3600 },
    }
  );

  return res.data;
};

export const fetchListSeriesMovieByGallery = async () => {
  const res = await request<IListMovieWithSeo>(
    "/v1/api" + GALLERY.series.slug,
    {
      next: { revalidate: 3600 },
    }
  );
  return res.data;
};

export const fetchListCartoonByGallery = async () => {
  const res = await request<IListMovieWithSeo>(
    "/v1/api" + GALLERY.cartoon.slug,
    {
      next: { revalidate: 3600 },
    }
  );
  return res.data;
};

export const fetchUpcomingMovie = async () => {
  const res = await request<IListMovieWithSeo>(
    "/v1/api" + GALLERY.upcoming.slug,
    {
      next: { revalidate: 3600 },
    }
  );
  return res.data;
};

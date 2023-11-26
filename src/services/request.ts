export const OPHIM_API_URL = 'https://ophim1.com/';
export interface IResponse<T> {
  data: T;
  msg?: string;
  status?: string;
}
export function handleError(res: IResponse<any>) {
  throw new Error(res.msg);
}

export default function request<T>(
  url: string,
  // `RequestInit` is a type for configuring
  // a `fetch` request. By default, an empty object.
  config: any = {},
  session_id: string = '',
  timeout: number = 10000
  // This function is async, it will return a Promise:
): Promise<IResponse<T>> {
  // Inside, we call the `fetch` function with
  // a URL and config given:
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  if (session_id) {
    config.credentials = 'include';
    config.headers['Cookie'] = `session_id=${session_id}`;
  }
  return (
    fetch(OPHIM_API_URL + url, {
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...config.headers,
      },
      ...config,
    })
      // When got a response call a `json` method on it
      .then((response) => {
        clearTimeout(id);
        return response.json();
      })
      // and return the result data.
      .then((data) => {
        return data as T;
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          return {
            message: 'Request timeout, please try again later',
            status: 'error',
          };
        }
        return error;
      })
  );

  // We also can use some post-response
  // data-transformations in the last `then` clause.
}

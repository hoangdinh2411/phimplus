import { NextResponse, type NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const endPathName = ['phim', 'danh-sach', 'the-loai', 'xem-phim'];
  const endSlug = request.url.split('/');

  if (endPathName.includes(endSlug[endSlug.length - 1])) {
    return NextResponse.redirect(new URL('/', request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};

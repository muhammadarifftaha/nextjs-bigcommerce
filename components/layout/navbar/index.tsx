import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import LogoSquare from 'components/logo-square';
import Link from 'next/link';
import { Suspense } from 'react';
const { SITE_NAME } = process.env;

export default async function Navbar() {
  return (
    <nav className="sticky left-0 top-0 z-[500] flex w-full items-center justify-between bg-neutral-50 shadow-lg dark:bg-neutral-950 md:h-12">
      <Link
        href="/"
        className="mr-2 flex h-full w-full items-center justify-start bg-yellow-500 md:w-auto lg:mr-6"
      >
        <LogoSquare />
        <h1 className="m-0 px-4 text-sm font-medium uppercase text-black">{SITE_NAME}</h1>
      </Link>

      {/* <div className="hidden justify-center md:flex md:w-1/3">
          <Search />
        </div> */}
      <div className="flex justify-end md:w-1/3">
        <Suspense fallback={<OpenCart />}>
          <Cart />
        </Suspense>
      </div>
    </nav>
  );
}

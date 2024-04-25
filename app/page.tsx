import BannerCarousel from '@/components/banner-carousel';
import getHomepageBanners from '@/lib/contentful/queries/get-homepage-banners';
import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import { Suspense } from 'react';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and BigCommerce.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  const banners = await getHomepageBanners();
  return (
    <>
      <BannerCarousel banners={banners} />
      <ThreeItemGrid />
      <Suspense>
        <Carousel />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}

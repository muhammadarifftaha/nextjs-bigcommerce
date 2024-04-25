import { ContentfulBanners } from '@/types/contentful';
import Image from 'next/image';
import { Button } from './ui/button';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

export default function BannerCarousel({ banners }: { banners: ContentfulBanners[] }) {
  return (
    <>
      <Carousel
        opts={{
          loop: true
        }}
      >
        <CarouselContent>
          {banners.map((banner, i) => (
            <CarouselItem
              key={`banner-${i}`}
              className="relative flex h-[500px] w-full flex-col items-center justify-center"
            >
              <Image
                src={`https:${banner.backgroundImage.fields.file.url}`}
                alt={banner.backgroundImage.fields.title}
                width={banner.backgroundImage.fields.file.details.image.width}
                height={banner.backgroundImage.fields.file.details.image.height}
                className="absolute left-0 top-0 h-full w-full object-cover"
              />
              <div className="z-10 flex h-2/3 w-4/5 flex-col items-start justify-center gap-2 bg-white/70 px-20">
                <h2 className="text-2xl font-semibold">{banner.heading}</h2>
                <p className="font-bold">{banner.subheading}</p>
                <p className="line-clamp-3">{banner.text}</p>

                <Button variant={'default'}>{banner.label}</Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}

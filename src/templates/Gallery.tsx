'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

export const Gallery = ({ images }: { images: string[] }) => {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 10000 })]}
      className="w-full"
    >
      <CarouselContent className="">
        {images.map((image, index) => (
          <CarouselItem
            key={index}
          >
            <div className='w-full relative h-160 rounded-lg overflow-hidden'>
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover"
            />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

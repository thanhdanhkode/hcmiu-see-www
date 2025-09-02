import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Header } from '@/features/Landing/Header'
import { Section } from '@/features/Landing/Section'
import { Footer } from '@/templates/Footer'
import Image from 'next/image'

export default function () {
  return (
    <>
      <Header />
      <div className="px-3 xl:px-6 mt-3 w-full relative">
        <AspectRatio
          ratio={24 / 10}
          className="relative w-full [&_img]:rounded-md"
        >
          <Image
            src={
              'https://w.ladicdn.com/s1440x717/5ed55ee180bb8b3b45fbd94c/202508-cover_iuwf25_2048x898_2-20250823160109-4ou7h.png'
            }
            alt=""
            fill
            objectFit="cover"
          />
        </AspectRatio>
      </div>
      <Section>
        <div></div>
      </Section>
      <Footer />
    </>
  )
}

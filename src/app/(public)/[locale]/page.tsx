import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Course } from '@/features/Landing/Course'
import { Header } from '@/features/Landing/Header'
import { Section } from '@/features/Landing/Section'
import { Footer } from '@/templates/Footer'
import { Gallery } from '@/templates/Gallery'
import { NavbarMobile } from '@/templates/Navbar'
import Image from 'next/image'

export default function () {
  return (
    <>
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
            className="object-cover"
          />
        </AspectRatio>
      </div>
      <Section>
        <Course
          courses={[
            {
              id: 'EE',
              image: 'https://see.hcmiu.edu.vn/wp-content/uploads/2022/12/image-668202985-949781.png',
            },
            {
              id: 'AC',
              image: 'https://see.hcmiu.edu.vn/wp-content/uploads/2022/12/Electrical-Engineering.jpg',
            },
            {
              id: 'Twining',
              image: 'https://see.hcmiu.edu.vn/wp-content/uploads/2022/12/Electrical-Engineering.jpg',
            },
            {
              id: 'MS',
              image: 'https://see.hcmiu.edu.vn/wp-content/uploads/2022/12/Electrical-Engineering.jpg',
            },
          ]}
        />
      </Section>
      <Section>
        <div className="w-full flex items-center justify-center font-bold text-2xl sm:text-4xl my-6">
          <span>Gallery</span>
        </div>
        <Gallery
          images={[
            'https://see.hcmiu.edu.vn/wp-content/uploads/2016/11/518150098_1149313757239991_6171955645683911009_n.jpg',
            'https://see.hcmiu.edu.vn/wp-content/uploads/2016/11/518355521_1149313403906693_7043573213676788176_n.jpg',
            'https://see.hcmiu.edu.vn/wp-content/uploads/2016/11/517391337_1149313837239983_5069974868469144244_n.jpg',
            'https://see.hcmiu.edu.vn/wp-content/uploads/2016/11/518118172_1149313347240032_6006756759669767906_n.jpg',
          ]}
        />
      </Section>
      <div className="h-12"></div>
      <div className="h-16 sm:hidden"></div>
    </>
  )
}

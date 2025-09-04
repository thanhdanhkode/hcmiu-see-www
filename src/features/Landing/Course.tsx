import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export const Course = ({ courses }: { courses: any[] }) => {
  const t = useTranslations('Landing')
  return (
    <>
      <div className="w-full flex justify-center items-center text-2xl sm:text-4xl font-bold my-6">
        <span>{t('Course.title')}</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
        {courses.map((course, index) => (
          <Card
            key={index}
            className="p-2 w-full gap-3"
          >
            <CardContent className="p-2">
              <AspectRatio
                ratio={1}
                className="relative w-full [&_img]:rounded-md"
              >
                <Image
                  src={course.image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </AspectRatio>
              <div className="text-lg font-medium mt-6 line-clamp-2">
                <span>{t(`Course.${course.id}.name`)}</span>
              </div>
              <div className="text-sm mt-1 line-clamp-3">
                <span>{t(`Course.${course.id}.description`)}</span>
              </div>
            </CardContent>
            <CardFooter className="p-2">
              <Button className="w-full">{t(`Course.action.view`)}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  )
}

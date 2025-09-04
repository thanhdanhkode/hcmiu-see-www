import { Section } from '@/features/Landing/Section'

export default async function ({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  return (
    <Section>
      <div className="h-screen">
        About Us - {slug} - {locale}
      </div>
    </Section>
  )
}

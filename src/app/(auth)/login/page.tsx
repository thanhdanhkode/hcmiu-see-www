import { Section } from '@/features/Landing/Section'

export default async function ({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ callbackUrl?: string }>
}) {
  const { locale } = await params
  const { callbackUrl } = await searchParams
  return <>Login</>
}

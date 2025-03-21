import { BentoGridGallery } from '@/components/BentoGridGallery'
import { Hero } from '@/components/Hero'
import { RecentEventGallery } from '@/components/RecentEventGallery'
import { Reviews } from '@/components/Reviews'

export default function Home() {
  return (
    <>
      <Hero />
      <BentoGridGallery />
      <Reviews />
      <RecentEventGallery />
    </>
  )
}

import { Container } from '@/components/Container'
import Image from 'next/image'
import AsianetNewsLogo from '@/images/asianetnewsLogo.png'
import AsianetLogo from '@/images/brandlogo1.png'
import { Button } from './Button'


export function Footer() {
  return (
    <footer>
    <Container>
      <div className="flex flex-col items-center pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
      <Button  color="cyan" className="ml-4 flex-none">
              <span className="hidden lg:inline">Register Now</span>
              <span className="lg:hidden">Register Now</span>
            </Button>
        <p className="mt-6 text-sm text-gray-500 md:mt-0">
          &copy; Asianet {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </Container>
  </footer>
  )
}

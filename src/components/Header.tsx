"use client"
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { RedDiamondIcon } from '@/components/DiamondIcon'
import AsianetLogo from '@/images/new logo.png'
import Image from 'next/image'

export function Header() {
  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className='mt-10 lg:mt-0 lg:grow lg:basis-0 flex items-center'>
          <div className='relative h-12 flex items-center'>
            <Image
              src={AsianetLogo}
              alt='Asianet Logo'
              width={183}
              height={100}
              className='h-24 w-auto object-contain'
              priority
            />
          </div>
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto border-b border-blue-600/10 py-4 font-mono text-sm whitespace-nowrap text-sky-900 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p className='flex items-center'>
              <time dateTime="2025-04-01">01</time>
              <span className="mx-1">-</span>
              <time dateTime="2025-04-02" className='font-semibold'>02 of April, 2025</time>
            </p>
            <RedDiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <p className='font-semibold'>Calicut, KL</p>
            <RedDiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <p className="font-medium italic">Trade Centre</p>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="#">Register Now</Button>
        </div>
      </Container>
    </header>
  )
}

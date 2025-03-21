'use client'

import * as Headless from '@headlessui/react'
import { clsx } from 'clsx'
import {
    MotionValue,
    motion,
    useMotionValueEvent,
    useScroll,
    useSpring,
    type HTMLMotionProps,
} from 'framer-motion'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import useMeasure, { type RectReadOnly } from 'react-use-measure'
import { Container } from './Container'


const testimonials = [
    {
        img: '/testimonials/event-1.jpg',
        title: 'Engineering Careers Summit',
        date: 'March 15-17, 2023',
        location: 'Kochi, Kerala',
        venue: 'Marriott Convention Center',
    },
    {
        img: '/testimonials/event-2.jpg',
        title: 'Medical Education Fair',
        date: 'February 10-12, 2023',
        location: 'Bangalore, Karnataka',
        venue: 'Taj Vivanta',
    },
    {
        img: '/testimonials/event-3.jpg',
        title: 'Arts and Humanities Showcase',
        date: 'January 25-27, 2023',
        location: 'Chennai, Tamil Nadu',
        venue: 'ITC Grand Chola',
    },
    {
        img: '/testimonials/event-1.jpg',
        title: 'Higher Education Festival',
        date: 'December 18-20, 2022',
        location: 'Trivandrum, Kerala',
        venue: 'Leela Raviz',
    },
    {
        img: '/testimonials/event-2.jpg',
        title: 'Science & Technology Expo',
        date: 'November 5-7, 2022',
        location: 'Coimbatore, Tamil Nadu',
        venue: 'Residency Towers',
    },
    {
        img: '/testimonials/event-3.jpg',
        title: 'Study Abroad Conference',
        date: 'October 15-16, 2022',
        location: 'Hyderabad, Telangana',
        venue: 'HICC Convention Center',
    },
]

function TestimonialCard({
    title,
    date,
    location,
    venue,
    img,
    bounds,
    scrollX,
    ...props
}: {
    img: string
    title: string
    date: string
    location: string
    venue: string
    bounds: RectReadOnly
    scrollX: MotionValue<number>
} & HTMLMotionProps<'div'>) {
    let ref = useRef<HTMLDivElement | null>(null)

    let computeOpacity = useCallback(() => {
        let element = ref.current
        if (!element || bounds.width === 0) return 1

        let rect = element.getBoundingClientRect()

        if (rect.left < bounds.left) {
            let diff = bounds.left - rect.left
            let percent = diff / rect.width
            return Math.max(0.5, 1 - percent)
        } else if (rect.right > bounds.right) {
            let diff = rect.right - bounds.right
            let percent = diff / rect.width
            return Math.max(0.5, 1 - percent)
        } else {
            return 1
        }
    }, [ref, bounds.width, bounds.left, bounds.right])

    let opacity = useSpring(computeOpacity(), {
        stiffness: 154,
        damping: 23,
    })

    useLayoutEffect(() => {
        opacity.set(computeOpacity())
    }, [computeOpacity, opacity])

    useMotionValueEvent(scrollX, 'change', () => {
        opacity.set(computeOpacity())
    })

    return (
        <motion.div
            ref={ref}
            style={{ opacity }}
            {...props}
            className="relative flex aspect-9/16 w-72 shrink-0 snap-start scroll-ml-[var(--scroll-padding)] flex-col justify-end overflow-hidden rounded-2xl sm:aspect-3/4 sm:w-96 shadow:lg"
        >
            <img
                alt={`Event: ${title}`}
                src={img}
                className="absolute inset-x-0 top-0 h-full w-full object-cover"
            />
            <div
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl bg-linear-to-t from-[#05539A]/70 from-[calc(7/16*100%)] ring-1 ring-[#05539A]/10 ring-inset sm:from-25%"
            />
            <figure className="relative p-8">
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                    <div className="flex items-center text-white/90">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        <p className="text-sm/6">{date}</p>
                    </div>
                    <div className="flex items-center text-white/90">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <p className="text-sm/6">{location}</p>
                    </div>
                    <div className="flex items-center text-white/90">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                        <p className="text-sm/6">{venue}</p>
                    </div>
                </div>
            </figure>
        </motion.div>
    )
}


export function RecentEventGallery() {
    let scrollRef = useRef<HTMLDivElement | null>(null)
    let { scrollX } = useScroll({ container: scrollRef })
    let [setReferenceWindowRef, bounds] = useMeasure()
    let [activeIndex, setActiveIndex] = useState(0)

    useMotionValueEvent(scrollX, 'change', (x) => {
        setActiveIndex(Math.floor(x / scrollRef.current!.children[0].clientWidth))
    })

    function scrollTo(index: number) {
        let gap = 32
        let width = (scrollRef.current!.children[0] as HTMLElement).offsetWidth
        scrollRef.current!.scrollTo({ left: (width + gap) * index })
    }

    return (
        <div className="overflow-hidden py-16 sm:py-18 bg-[#F0F7FF]">
            <Container>
                <div ref={setReferenceWindowRef}>
                    <h2 className="text-base font-semibold text-sky-700">PAST EDUCATIONAL EVENTS</h2>
                    <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
                        Explore our previous events
                    </h1>
                    <p className="mt-4 text-lg text-blue-700">
                        Browse through our successful past educational expos and conferences that have connected thousands of students with opportunities.
                    </p>
                </div>
            </Container>
            <div
                ref={scrollRef}
                className={clsx([
                    'mt-16 flex gap-8 px-[var(--scroll-padding)]',
                    '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
                    'snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth',
                    '[--scroll-padding:max(--spacing(6),calc((100vw-(var(--container-2xl)))/2))] lg:[--scroll-padding:max(--spacing(8),calc((100vw-(var(--container-7xl)))/2))]',
                ])}
            >
                {testimonials.map(({ img, title, date, location, venue }, eventIndex) => (
                    <TestimonialCard
                    key={eventIndex}
                    title={title}
                    date={date}
                    location={location}
                    venue={venue}
                    img={img}
                    bounds={bounds}
                    scrollX={scrollX}
                    onClick={() => scrollTo(eventIndex)}
                  >
                    {title}
                    </TestimonialCard>
                ))}
                <div className="w-[42rem] shrink-0 sm:w-[54rem]" />
            </div>
            <Container className="mt-16">
                <div className="flex justify-between">
                    <div className="hidden sm:flex sm:gap-2">
                        {testimonials.map(({ title }, eventIndex)=> (
                            <Headless.Button
                                key={eventIndex}
                                onClick={() => scrollTo(eventIndex)}
                                data-active={
                                    activeIndex === eventIndex ? true : undefined
                                }
                                aria-label={`Scroll to event: ${title}`}
                                className={clsx(
                                    'size-2.5 rounded-full border border-transparent bg-sky-200 transition',
                                    'data-active:bg-sky-700 data-hover:bg-sky-400',
                                    'forced-colors:data-active:bg-[Highlight] forced-colors:data-focus:outline-offset-4',
                                )}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

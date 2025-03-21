"use client"

import { Container } from '@/components/Container'
import Image from 'next/image'

// Import sample images - replace these with your actual images
import workshopImage from '@/images/event-training-1.jpg'
import workshopImage2 from '@/images/event-training-2.jpg'
import workshopImage3 from '@/images/event-training-3.jpg'

export function BentoGridGallery() {
  return (
    <section className="py-20 sm:py-32 overflow-hidden">
      <Container>
        <h2 className="text-base font-semibold text-sky-700">EDUCATION EXPO 2025</h2>
        <p className="mt-2 max-w-2xl text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl font-display">
          Discover top-tier educational opportunities
        </p>
        
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {/* Workshop & Training */}
          <div className="relative lg:col-span-3 group">
            <div className="absolute inset-px rounded-2xl bg-white/80 backdrop-blur-sm max-lg:rounded-t-3xl lg:rounded-tl-3xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl shadow-lg">
              <div className="h-80 overflow-hidden">
                <Image
                  alt="Workshops and training sessions"
                  src={workshopImage}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-8 pt-6 flex-1">
                <h3 className="text-sm font-semibold text-sky-700">Workshops & Training</h3>
                <p className="mt-2 text-xl font-medium tracking-tight text-blue-900">
                  Hands-on learning experiences
                </p>
                <p className="mt-3 text-base text-blue-700">
                  Interactive sessions led by industry experts to develop practical skills and gain certifications in various educational disciplines.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-2xl ring-1 shadow-sm ring-sky-900/5 max-lg:rounded-t-3xl lg:rounded-tl-3xl" />
          </div>

          {/* Scholarship Programs */}
          <div className="relative lg:col-span-3 group">
            <div className="absolute inset-px rounded-2xl bg-white/80 backdrop-blur-sm lg:rounded-tr-3xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl shadow-lg">
              <div className="h-80 overflow-hidden">
                <Image
                  alt="Scholarship programs for students"
                  src={workshopImage2}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-8 pt-6 flex-1">
                <h3 className="text-sm font-semibold text-sky-700">Scholarship Programs</h3>
                <p className="mt-2 text-xl font-medium tracking-tight text-blue-900">
                  Funding your education journey
                </p>
                <p className="mt-3 text-base text-blue-700">
                  Explore various scholarship opportunities from leading universities and institutions for undergraduate and postgraduate studies.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-2xl ring-1 shadow-sm ring-sky-900/5 lg:rounded-tr-3xl" />
          </div>

          {/* Career Counseling */}
          <div className="relative lg:col-span-2 group">
            <div className="absolute inset-px rounded-2xl bg-white/80 backdrop-blur-sm lg:rounded-bl-3xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl shadow-lg">
              <div className="h-60 overflow-hidden">
                <Image
                  alt="Career counseling services"
                  src={workshopImage3}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 pt-4 flex-1">
                <h3 className="text-sm font-semibold text-sky-700">Career Counseling</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-blue-900">
                  Expert guidance for your future
                </p>
                <p className="mt-2 text-sm text-blue-700">
                  One-on-one sessions with experienced counselors to help you choose the right educational path.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-2xl ring-1 shadow-sm ring-sky-900/5 lg:rounded-bl-3xl" />
          </div>

          {/* Study Abroad */}
          <div className="relative lg:col-span-2 group">
            <div className="absolute inset-px rounded-2xl bg-white/80 backdrop-blur-sm" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl shadow-lg">
              <div className="h-60 overflow-hidden">
                <Image
                  alt="Study abroad opportunities"
                  src={workshopImage}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 pt-4 flex-1">
                <h3 className="text-sm font-semibold text-sky-700">Study Abroad</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-blue-900">
                  Global education opportunities
                </p>
                <p className="mt-2 text-sm text-blue-700">
                  Connect with international universities and learn about visa processes, accommodation, and cultural experiences.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-2xl ring-1 shadow-sm ring-sky-900/5" />
          </div>

          {/* Admission Support */}
          <div className="relative lg:col-span-2 group">
            <div className="absolute inset-px rounded-2xl bg-white/80 backdrop-blur-sm max-lg:rounded-b-3xl lg:rounded-br-3xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl shadow-lg">
              <div className="h-60 overflow-hidden">
                <Image
                  alt="Admission support services"
                  src={workshopImage2}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 pt-4 flex-1">
                <h3 className="text-sm font-semibold text-sky-700">Admission Support</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-blue-900">
                  Streamlined application process
                </p>
                <p className="mt-2 text-sm text-blue-700">
                  Guidance on entrance exams, application requirements, and interview preparation for your dream institution.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-2xl ring-1 shadow-sm ring-sky-900/5 max-lg:rounded-b-3xl lg:rounded-br-3xl" />
          </div>
        </div>
      </Container>
    </section>
  )
}
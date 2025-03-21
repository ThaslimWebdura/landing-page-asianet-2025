"use client"

import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { useState } from 'react'
import { StickyMobileRegister } from './StickyMobileRegister'

export function Hero() {
  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    usePhoneForWhatsapp: true,
  }
  
  const [formData, setFormData] = useState(initialFormData)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target

    setFormData(prev => {
      const newData = {
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }

      // If "use phone for WhatsApp" is checked, update WhatsApp field to match phone
      if (name === 'usePhoneForWhatsapp' && checked) {
        newData.whatsapp = prev.phone
      } else if (name === 'phone' && prev.usePhoneForWhatsapp) {
        newData.whatsapp = value
      }

      return newData
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Handle form submission logic here
      console.log('Form submitted:', formData)
      
      // Reset form and show success message
      setFormData(initialFormData)
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // After 5 seconds, reset the form visibility for new submissions
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1000)
  }
  
  const resetForm = () => {
    setIsSubmitted(false)
  }
  return (
    <div className="relative py-20 sm:pt-36 lg:py-32 sm:pb-24">
      <BackgroundImage className="-top-36 -bottom-14" />
      <Container className="relative">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          {/* Left Column - Existing Content */}
          <div className="lg:w-1/2">
            <h1 className="font-display text-4xl font-bold tracking-tighter text-sky-700 sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="sr-only">Domestic Education Expo - </span>An educational expo for aspiring students.
            </h1>
            <div className="mt-6 space-y-4 font-display text-lg md:text-xl lg:text-2xl tracking-tight text-blue-900">
              <p>
              Explore a wide range of academic opportunities, connect with top universities, 
              and get expert guidance on your education journey.
              </p>
              <p>
              At the Domestic Education Expo, you'll discover the latest courses, scholarships, 
              and career paths to help you make informed decisions about your future.
              </p>
            </div>
            {/* <Button href="#" className="mt-10 w-full sm:w-auto lg:hidden">
              Register Now
            </Button> */}
          </div>

          {/* Right Column - Registration Form */}
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <div className="rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl p-6 sm:p-8">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-sky-700">
                Register for the event
              </h2>
              <p className="mt-2 text-base text-blue-900">
                Fill in your details to secure your spot at the conference.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-900">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border border-blue-300 px-3 py-2 text-blue-900 placeholder-blue-400 shadow-sm focus:border-sky-700 focus:outline-none focus:ring-1 focus:ring-sky-700"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-900">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border border-blue-300 px-3 py-2 text-blue-900 placeholder-blue-400 shadow-sm focus:border-sky-700 focus:outline-none focus:ring-1 focus:ring-sky-700"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-blue-900">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border border-blue-300 px-3 py-2 text-blue-900 placeholder-blue-400 shadow-sm focus:border-sky-700 focus:outline-none focus:ring-1 focus:ring-sky-700"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="usePhoneForWhatsapp"
                    name="usePhoneForWhatsapp"
                    checked={formData.usePhoneForWhatsapp}
                    onChange={handleInputChange}
                    className="h-4 w-4 rounded border-blue-300 text-sky-700 focus:ring-sky-700"
                  />
                  <label htmlFor="usePhoneForWhatsapp" className="ml-2 block text-sm text-blue-900">
                    Use same number for WhatsApp
                  </label>
                </div>

                {!formData.usePhoneForWhatsapp && (
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-blue-900">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border border-blue-300 px-3 py-2 text-blue-900 placeholder-blue-400 shadow-sm focus:border-sky-700 focus:outline-none focus:ring-1 focus:ring-sky-700"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>
                )}

                <div>
                  <Button className="w-full">
                    Register Now
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-x-10 gap-y-6 sm:gap-x-16 sm:gap-y-10 
                       lg:mt-20 lg:grid-flow-col lg:grid-cols-4 lg:justify-center lg:text-center">
          {[
            ['Institutions', '18'],
            ['Students Attending', '2,091'],
            ['Venue', 'Trade Center'],
            ['Location', 'Calicut'],
          ].map(([name, value]) => (
            <div key={name} className="lg:mx-auto">
              <dt className="font-mono text-sm text-red-700">{name}</dt>
              <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>

      <StickyMobileRegister />
    </div>
  )
}

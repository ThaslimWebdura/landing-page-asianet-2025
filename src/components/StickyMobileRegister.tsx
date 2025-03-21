"use client"

import { useEffect, useState } from "react";
import { Button } from "./Button";


export function StickyMobileRegister() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Only show the sticky button after scrolling down a bit
        const handleScroll = () => {
            // Show after scrolling 150px
            const scrollY = window.scrollY
            setIsVisible(scrollY > 1000)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-sm shadow-lg transform transition-transform duration-300 sm:hidden ${isVisible ? 'translate-y-0' : 'translate-y-full'
            }`}>
            <Button href="#register-form" className="w-full">
                Register Now
            </Button>
        </div>
    )
}
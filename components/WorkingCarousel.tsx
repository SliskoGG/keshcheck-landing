'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function WorkingCarousel() {
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lifestyle%20Fintech%20App%20with%20AI%20Chatbot-p5I2tVh986IT5YRRU1xtVXRmZxCKpG.png",
      alt: "KeshCheck AI Chat Interface",
      title: "AI Chat"
    },
    {
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=800&fit=crop&crop=center",
      alt: "KeshCheck Dashboard",
      title: "Dashboard"
    },
    {
      src: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=800&fit=crop&crop=center",
      alt: "KeshCheck Savings Goals",
      title: "Goals"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 1500)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative h-[600px] rounded-2xl overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            width="350"
            height="700"
            alt={image.alt}
            className="w-full h-full object-cover rounded-2xl"
            priority={index === 0}
          />
          
          {/* Image title overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 rounded-b-2xl">
            <h3 className="text-white font-bold text-xl">{image.title}</h3>
            <p className="text-white/90 text-sm">
              {index === 0 && "Razgovaraj sa AI-jem kao sa prijateljem!"}
              {index === 1 && "Vidi sve troškove na jednom mestu!"}
              {index === 2 && "Ostvari finansijske ciljeve lakše!"}
            </p>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full shadow-lg transition-all duration-300 ${
              index === currentImage ? 'bg-white scale-110' : 'bg-white/50'
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  )
}

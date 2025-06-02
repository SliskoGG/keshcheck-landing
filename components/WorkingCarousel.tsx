'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function ModernCarousel() {
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lifestyle%20Fintech%20App%20with%20AI%20Chatbot-p5I2tVh986IT5YRRU1xtVXRmZxCKpG.png",
      alt: "KeshCheck AI Chat Interface",
      title: "AI Chat",
      description: "Razgovaraj sa AI-jem kao sa prijateljem!",
      color: "from-purple-500 to-pink-500"
    },
    {
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=800&fit=crop&crop=center",
      alt: "KeshCheck Dashboard",
      title: "Smart Dashboard", 
      description: "Vidi sve troškove na jednom mestu!",
      color: "from-blue-500 to-cyan-500"
    },
    {
      src: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=800&fit=crop&crop=center",
      alt: "KeshCheck Savings Goals",
      title: "Savings Goals",
      description: "Ostvari finansijske ciljeve lakše!",
      color: "from-green-500 to-emerald-500"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative w-full max-w-lg mx-auto">
      
      {/* Main Carousel Container with 3D Effect */}
      <div className="relative h-[650px] perspective-1000">
        
        {/* Background Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${images[currentImage].color} opacity-20 blur-3xl scale-110 rounded-3xl transition-all duration-1000`}></div>
        
        {/* Main Image Container */}
        <div className="relative h-full bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
          
          {/* Images */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <Image
                src={image.src}
                width="400"
                height="650"
                alt={image.alt}
                className="w-full h-full object-cover rounded-3xl"
                priority={index === 0}
              />
              
              {/* Dynamic Color Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${image.color} opacity-10 rounded-3xl`}></div>
            </div>
          ))}

          {/* Floating Info Card */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/30 transform transition-all duration-700">
            <div className="flex items-center space-x-3 mb-2">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${images[currentImage].color} shadow-lg`}></div>
              <h3 className="text-gray-900 font-bold text-lg">{images[currentImage].title}</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{images[currentImage].description}</p>
          </div>
        </div>

        {/* Side Navigation Dots - Vertical */}
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`group relative transition-all duration-300 ${
                index === currentImage ? 'scale-110' : 'scale-100 hover:scale-105'
              }`}
            >
              <div className={`w-4 h-4 rounded-full shadow-lg transition-all duration-300 ${
                index === currentImage 
                  ? `bg-gradient-to-r ${image.color} shadow-lg` 
                  : 'bg-white/50 hover:bg-white/70'
              }`}></div>
              
              {/* Tooltip */}
              <div className={`absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                index === currentImage ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
              }`}>
                {image.title}
              </div>
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-6 left-6 right-24 h-1 bg-white/20 rounded-full overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r ${images[currentImage].color} transition-all duration-300 animate-pulse`}
            style={{
              width: `${((currentImage + 1) / images.length) * 100}%`
            }}
          ></div>
        </div>
      </div>

      {/* Thumbnail Preview */}
      <div className="flex justify-center space-x-3 mt-6">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`relative w-16 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
              index === currentImage 
                ? 'border-white shadow-xl scale-110' 
                : 'border-white/30 hover:border-white/60 scale-100'
            }`}
          >
            <Image
              src={image.src}
              width="64"
              height="80"
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${image.color} ${
              index === currentImage ? 'opacity-20' : 'opacity-40'
            } transition-opacity duration-300`}></div>
          </button>
        ))}
      </div>
    </div>
  )
}

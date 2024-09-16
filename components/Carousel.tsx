import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="overflow-hidden absolute" ref={emblaRef}>
      <div className="flex w-screen h-screen">
        <div
          className="w-screen h-screen bg-cover"
          style={{ backgroundImage: `url("/images/carousel/slide-1.jpg")` }}
        ></div>
      </div>
    </div>
  )
}

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="overflow-hidden absolute" ref={emblaRef}>
      <div className="flex w-screen h-screen">
        <div
          className="w-screen h-screen bg-cover"
          style={{
            backgroundImage: `url("/images/carousel/slide-1.jpg")`,
            flex: '0 0 100%',
          }}
        />
        <div
          className="w-screen h-screen bg-cover"
          style={{
            backgroundImage: `url("/images/carousel/slide-2.jpg")`,
            flex: '0 0 100%',
          }}
        />
        <div
          className="w-screen h-screen bg-cover"
          style={{
            backgroundImage: `url("/images/carousel/slide-3.jpg")`,
            flex: '0 0 100%',
          }}
        />
      </div>
    </div>
  )
}

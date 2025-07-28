'use client'

import { Medium } from '@/app/types/product'
import { useState } from 'react'
import VideoPlayer from '../ui/VideoPlayer'

type Props = {
  media: Medium[]
}

export default function TrailerCarousel({ media }: Props) {
  console.log(media)
  const [index, setIndex] = useState(0)

  if (!media || media.length === 0) return null

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + media.length) % media.length)
  }

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % media.length)
  }

  const current = media[index]

  return (
    <div className="w-full bg-white border rounded-md shadow-sm overflow-hidden">
      <div className="relative aspect-video">
        {current.resource_type === 'video' ? (
          <VideoPlayer url={current.resource_value} />
        ) : (
          <img
            src={current.resource_value}
            alt="Trailer"
            className="w-full h-full object-cover"
          />
        )}

        {/* Navigation Arrows */}
        {media.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
            >
              ›
            </button>
          </>
        )}
      </div>
    </div>
  )
}

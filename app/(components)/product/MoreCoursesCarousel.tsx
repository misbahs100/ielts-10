'use client'

import { useEffect, useState } from 'react'
import Skeleton from '../ui/Skeleton'
import Link from 'next/link'

type Course = {
  slug: string
  title: string
  thumbnailUrl: string
  price?: number
}

export default function MoreCoursesCarousel() {
  const [courses, setCourses] = useState<Course[] | null>(null)

  useEffect(() => {
    async function fetchCourses() {
      // Replace with real API if available
      const res = await fetch('/api/more-courses')
      const data = await res.json()
      setCourses(data)
    }
    fetchCourses()
  }, [])

  if (!courses) {
    return (
      <div className="flex space-x-4 overflow-x-auto">
        {[...Array(3)].map((_, idx) => (
          <Skeleton key={idx} className="w-48 h-60 flex-shrink-0 rounded-lg" />
        ))}
      </div>
    )
  }

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">Some More Courses</h2>
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {courses.map((c) => (
          <Link key={c.slug} href={`/product/${c.slug}`}>
            <a className="w-48 flex-shrink-0 bg-white rounded-lg shadow hover:shadow-md transition">
              <img
                src={c.thumbnailUrl}
                alt={c.title}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="p-2">
                <h3 className="text-sm font-medium">{c.title}</h3>
                {c.price && (
                  <p className="text-sm text-gray-600 mt-1">৳ {c.price}</p>
                )}
              </div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  )
}

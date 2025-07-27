// app/(components)/product/InstructorSection.tsx
'use client'

import { Section } from "@/app/types/product"


type Props = {
  sections: Section[]
}

export default function InstructorSection({ sections }: Props) {
  const instructorSection = sections?.find((s) => s.type === 'instructor')
  if (!instructorSection) return null

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">{instructorSection.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {instructorSection.items.map((instructor, idx) => (
          <div
            key={idx}
            className="flex gap-4 items-center border p-4 rounded-lg bg-white shadow-sm"
          >
            {instructor.image && (
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-16 h-16 object-cover rounded-full"
              />
            )}
            <div>
              <h3 className="text-lg font-bold">{instructor.name}</h3>
              <p className="text-sm text-gray-600">{instructor.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

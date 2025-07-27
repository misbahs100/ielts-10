// app/(components)/product/CourseLayoutSection.tsx
'use client'

import { Section } from "@/app/types/product"


type Props = {
  sections: Section[]
}

export default function CourseLayoutSection({ sections }: Props) {
  const layoutSection = sections?.find((s) => s.type === 'features')
  if (!layoutSection) return null

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">{layoutSection.title}</h2>
      <div className="space-y-2">
        {layoutSection.items?.map((item: string, idx: number) => (
          <div key={idx} className="p-3 bg-gray-100 rounded-md text-gray-800">
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}

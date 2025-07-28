'use client'

import { Section } from '@/app/types/product'
import InstructorDescription from './InstructorDescription'

type Props = {
  sections: Section[]
}

export default function CourseDetails({ sections }: Props) {
  const detailsSection = sections?.find((s) => s.type === 'about')

  if (!detailsSection) return null

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">{detailsSection.name}</h2>
      <div className="prose prose-sm md:prose-base max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: detailsSection.description }} />
      {detailsSection.values?.map((item: any, idx: number) => (
            <InstructorDescription key={idx} description={item.description} />
        ))}
    </section>
  )
}

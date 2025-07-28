'use client'

import { Section } from '@/app/types/product'

type Props = {
  sections: Section[]
}

export default function ExclusiveFeatures({ sections }: Props) {
  const exclusive = sections?.find((s) => s.type === 'feature_explanations')

  if (!exclusive) return null

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">{exclusive.name}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {exclusive.values?.map((item: any, idx: number) => (
          <div
            key={idx}
            className="p-4 bg-gray-100 rounded-md border shadow-sm text-gray-800"
          >
            {item.title}
          </div>
        ))}
      </div>
    </section>
  )
}

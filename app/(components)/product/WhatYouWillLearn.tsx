// app/(components)/product/WhatYouWillLearn.tsx
'use client'

import { Section } from "@/app/types/product"


type Props = {
  sections: Section[]
}

export default function WhatYouWillLearn({ sections }: Props) {
  const learnSection = sections?.find((s) => s.type === 'pointers')
  if (!learnSection) return null

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">{learnSection.title}</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {learnSection.items?.map((item: string, idx: number) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

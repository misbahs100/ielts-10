import { Section } from "@/app/types/product"


type Props = {
  sections: Section[]
}

export default function WhatYouWillLearn({ sections }: Props) {
  const learnSection = sections?.find((s) => s.type === 'pointers')
  if (!learnSection) return null

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">{learnSection.name}</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {learnSection.values?.map((item: {color: string, id: string, icon: string, text: string}, idx: number) => (
          <li key={idx}>{item.text}</li>
        ))}
      </ul>
    </section>
  )
}

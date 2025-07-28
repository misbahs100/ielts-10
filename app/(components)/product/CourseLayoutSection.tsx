import { Section } from "@/app/types/product"


type Props = {
  sections: Section[]
}

export default function CourseLayoutSection({ sections }: Props) {
  console.log("course: ", sections)
  const layoutSection = sections?.find((s) => s.type === 'features')
  if (!layoutSection) return null

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">{layoutSection.name}</h2>
      <div className="space-y-2">
        {layoutSection?.values?.map((item: {title: string, subtitle: string, id: string, icon: string}, idx: number,) => (
          <div key={idx} className="p-3 bg-gray-100 rounded-md text-gray-800">
            {item.title}
          </div>
        ))}
      </div>
    </section>
  )
}

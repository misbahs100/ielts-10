// app/(components)/InstructorDescription.tsx

type Props = {
    description: string
  }
  
  export default function InstructorDescription({ description }: Props) {
    return (
      <div
        className="prose prose-sm md:prose-base lg:prose-lg max-w-none text-gray-700"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    )
  }
  
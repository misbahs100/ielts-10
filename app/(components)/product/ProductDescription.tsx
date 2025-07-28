type Props = {
    html: string
  }
  
  export default function ProductDescription({ html }: Props) {
    return (
      <div
        className="prose prose-sm md:prose-base max-w-none text-gray-700"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  }
  
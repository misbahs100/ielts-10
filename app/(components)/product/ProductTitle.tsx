// app/(components)/product/ProductTitle.tsx
type Props = {
    title: string
  }
  
  export default function ProductTitle({ title }: Props) {
    return (
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
        {title}
      </h1>
    )
  }
  
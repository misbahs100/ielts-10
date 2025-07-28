import { Checklist as ChecklistType } from '@/app/types/product'

type Props = {
  items: ChecklistType[]
}

export default function Checklist({ items }: Props) {
  console.log(items)
  if (!items || items.length === 0) return null

  return (
    <ul className="mt-4 space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
          <img src={item.icon} className='w-5 h-5'/>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  )
}

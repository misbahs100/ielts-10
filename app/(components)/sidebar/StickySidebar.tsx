'use client'

import PriceTag from './PriceTag'
import CTASection from './CTASection'
import Checklist from './Checklist'
import { CtaText, Checklist as ChecklistType } from '@/app/types/product'

type Props = {
  cta: CtaText
  checklist: ChecklistType[]
}

export default function StickySidebar({ cta, checklist }: Props) {
  return (
    <div className="sticky top-4 p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
      <PriceTag />
      <div className="my-4">
        <CTASection cta={cta} />
      </div>
      <Checklist items={checklist} />
    </div>
  )
}

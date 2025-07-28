import Button from '../ui/Button'
import { CtaText } from '@/app/types/product'

type Props = {
  cta: CtaText
}

export default function CTASection({ cta }: Props) {
  if (!cta?.name) return null

  return (
    <div>
      <Button>{cta.name}</Button>
    </div>
  )
}

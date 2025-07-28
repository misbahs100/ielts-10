import Button from '../ui/Button'
import { CtaText } from '@/app/types/product'

type Props = {
  cta: CtaText
}

export default function CTASection({ cta }: Props) {
  console.log(cta)
  if (!cta?.name) return null

  return (
    <div>
      <Button>{cta.name}</Button>
    </div>
  )
}

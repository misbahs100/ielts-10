export interface Medium {
    name: string
    resource_type: string
    resource_value: string
    thumbnail_url: string
  }
  
  export interface Checklist {
    icon: string
    text: string
  }
  
  export interface Seo {
    title: string
    description: string
  }
  
  export interface CtaText {
    name: string
    value: string
  }
  
  export interface Section {
    type: string
    bg_color: string
    description: string
    name: string
    order_idx: number
    values: any[]
  }
  
  export interface ProductData {
    data: ProductData
    slug: string
    id: number
    title: string
    description: string
    media: Medium[]
    checklist: Checklist[]
    seo: Seo
    cta_text: CtaText
    sections: Section[]
  }
  
import { Metadata } from 'next'

export function genersateMetadata(seo: { title: string; description: string }): Metadata {
  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
    },
  }
}

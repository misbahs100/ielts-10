'use client'

import { ProductData } from '@/app/types/product'
import ProductTitle from '../product/ProductTitle'
import ProductDescription from '../product/ProductDescription'
import InstructorSection from '../product/InstructorSection'
import CourseLayoutSection from '../product/CourseLayoutSection'
import WhatYouWillLearn from '../product/WhatYouWillLearn'
import ExclusiveFeatures from '../product/ExclusiveFeatures'
import CourseDetails from '../product/CourseDetails'
import TrailerCarousel from '../product/TrailerCarousel'
import PriceTag from '../sidebar/PriceTag'
import CTASection from '../sidebar/CTASection'
import Checklist from '../sidebar/Checklist'

export function ProductPage({ data }: { data: ProductData }) {
  console.log("main: ", data)
  return (
    <main className="w-full px-4 md:px-8 max-w-screen-xl mx-auto py-8">
      {/* <div>
        <img src="" alt="" />
      </div> */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* left (2/3) */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          <ProductTitle title={data.title} />
          <ProductDescription html={data.description} />

          {/* optional: sticky horizontal nav */}

          <InstructorSection sections={data.sections} />
          <CourseLayoutSection sections={data.sections} />
          <WhatYouWillLearn sections={data.sections} />
          <ExclusiveFeatures sections={data.sections} />
          <CourseDetails sections={data.sections} />
        </div>

        {/* right(1/3) */}
        <div className="w-full lg:w-1/3 space-y-4">
          <TrailerCarousel media={data.media} />
          <div className="sticky top-4 z-10 space-y-4">
            <PriceTag />
            <CTASection cta={data.cta_text} />
            <Checklist items={data.checklist} />
          </div>
        </div>
      </div>
    </main>
  )
}

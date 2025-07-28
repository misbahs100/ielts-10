'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/app/utils/cn'

type Tab = {
  id: string
  label: string
}

type Props = {
  tabs: Tab[]
  activeTab: string
  setActiveTab: (id: string) => void
}

export default function StickyNavTabs({ tabs, activeTab, setActiveTab }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (el) {
      const offset = direction === 'left' ? -200 : 200
      el.scrollBy({ left: offset, behavior: 'smooth' })
    }
  }

  return (
    <div className="sticky top-0 z-10 bg-white shadow-sm border-y">
      <div className="flex items-center gap-2 px-4 py-2">
        <button onClick={() => scroll('left')} className="p-1 rounded hover:bg-gray-100">
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide whitespace-nowrap flex-1"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition',
                activeTab === tab.id
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button onClick={() => scroll('right')} className="p-1 rounded hover:bg-gray-100">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

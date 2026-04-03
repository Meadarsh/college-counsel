import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const Loading = () => {
  return (
    <div className="flex flex-col w-full mt-20  p-2 lg:py-10 lg:px-16 gap-10">
    <Skeleton className="h-[30vw] lg:w-[75%] w-full rounded-xl" />
    <div className="space-y-2 lg:mt-12 mt-6">
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  </div>
  )
}

export default Loading
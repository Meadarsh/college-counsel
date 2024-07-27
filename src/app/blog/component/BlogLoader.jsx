import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const BlogLoader = () => {
  return (
    <div className="grid gap-4 p-2 lg:gap-5 grid-cols-1 items-stretch sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
   { [1,2,3,4,5,6,7,8,9,10,11,12].map((num)=>(
     <div key={num} className="flex flex-col mb-6 space-y-4">
     <Skeleton className="h-[130px] w-[280px] rounded-xl" />
     <div className="space-y-2">
       <Skeleton className="h-4 w-[250px]" />
       <Skeleton className="h-4 w-[200px]" />
     </div>
   </div>
   ))  }
  </div>
  )
}

export default BlogLoader
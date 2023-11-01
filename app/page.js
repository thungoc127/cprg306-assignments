import Image from 'next/image'
import Link from 'next/link'
import EventList from './week2/studentInfo'

export default function Home() {
  return (
    <div class="flex gap-4">
      <div className=" flex-auto w-60 order-2 bg-gray-200 p-4 border border-gray-300">
        <h1 className="text-3xl font-bold mb-4">CPRG 306: Web Development 2 - Assignments</h1>
        <EventList />
      </div>

      <div className="flex-initial w-32 order-1 bg-blue-200 p-4 border border-blue-300">
        <Link href="/week2" className="block text-blue-500 hover:underline mb-2">
          Week 2
        </Link>
        <Link href="/week3" className="block text-blue-500 hover:underline mb-2">
          Week 3
        </Link>
        <Link href="/week4" className="block text-blue-500 hover:underline mb-2">
          Week 4
        </Link>
        <Link href="/week5" className="block text-blue-500 hover:underline mb-2">
          Week 5
        </Link>
        <Link href="/week6" className="block text-blue-500 hover:underline mb-2">
          Week 6
        </Link>
        <Link href="/week7" className="block text-blue-500 hover:underline mb-2">
          Week 7
        </Link>
      </div>
      
    </div>
  )
}
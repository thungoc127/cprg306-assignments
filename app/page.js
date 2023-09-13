import Image from 'next/image'
import Link from 'next/link'
import EventList from './week2/studentInfo'

export default function Home() {
  return (
    <div>
      <Link href="/week2">CPRG 306: Web Development 2 - Assignments</Link>

      <EventList/>
    </div>
  )
}

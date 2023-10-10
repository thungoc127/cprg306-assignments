import Image from 'next/image'
import Link from 'next/link'
import EventList from './week2/studentInfo'

export default function Home() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <EventList/>
      <Link href="/week2">Week2</Link>
      <br/>
      <Link href="/week3">Week3</Link>
      <br/>
      <Link href="/week4">Week4</Link>
    </div>
  )
}

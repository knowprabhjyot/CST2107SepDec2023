import Image from 'next/image'
import Section from './components/Section';

export default function Home() {

  return (
    <div>

      {/* Sections Popular movies */}

      <Section title="popular" />

      {/* Sections Now Playing */}

      <Section title="now_playing" />


      {/* Sections Top Rated*/}

      <Section title="top_rated" />


      {/* Sections Upcoming */}

      <Section title="upcoming" />


    </div>
  )
}

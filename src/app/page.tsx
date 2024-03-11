import About from '@/components/home/About'
import Contact from '@/components/home/Contact'
import Hero from '@/components/home/Hero'
import Projects from '@/components/home/Projects'
import Skills from '@/components/home/Skills'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

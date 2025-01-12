import { motion } from 'motion/react'
import { useState, useRef } from 'react'
import Hero from "./components/Hero"
import Info from "./components/Info"
import ImageCards from "./components/ImageCards"

export default function App() {
  const [render, setRender] = useState(false);
  return (
    <div className="relative"> 
      <Hero/>
      <section className='absolute top-0 z-20'>
        <ImageCards/>
      </section>
    </div>
  )
}
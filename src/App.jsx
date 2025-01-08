import { motion } from 'motion/react'
import { useState, useRef } from 'react'
import Hero from "./components/Hero"
import Info from "./components/Info"

export default function App() {
  const [render, setRender] = useState(null);
  const imageRef = useRef();
  return (
    <div className="relative"> 
      <Hero/>
      <section className="absolute bottom-0 right-0 flex h-20 gap-2 m-5 overflow-hidden p-2 w-1/4">
                <motion.img 
                    onHoverStart={()=> setRender(1)} 
                    initial={{scale:0, x:"400%"}}  
                    className="h-full w-1/3 img-slide rounded-lg" 
                    src="/augustus3.png" 
                    alt="" 
                    ref={imageRef}
                />
                <motion.img initial={{ x:"400%"}}  className="h-full w-1/3 img-slide rounded-lg" src="/Las-Medulas,-Spain.jpg" alt="" />
                <motion.img initial={{ x:"400%"}}  className="h-full w-1/3 img-slide rounded-lg" src="/Vatnajokull-Iceland.jpg" alt="" />

            </section>
    </div>
  )
}
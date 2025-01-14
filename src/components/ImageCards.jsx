import { motion } from 'motion/react'
import { animate, stagger } from 'motion'
import { useEffect } from 'react'
import { animateHover, reverseHover, handleClick } from '../animations'
import ImageWrapper from './ImageWrapper'

export default function ImageCards() {
    useEffect(() => {
        animate('img', {scale:1, x:0}, {delay:stagger(0.4), ease:"easeInOut", type:"spring", stiffness:60, damping:10})
    },[])
    return(
        <main className='relative h-screen w-screen'>
            <motion.section initial={{opacity:0}} className='border-2 bg-orange-400 h-full w-full' id='first'>

            </motion.section>
            <section className='absolute bottom-0 right-0 flex h-20 gap-2 m-5 overflow-hidden p-2 w-1/4'>
                <ImageWrapper position='first' image_path='/augustus3.png'/>
            </section>
        </main>
    )

}
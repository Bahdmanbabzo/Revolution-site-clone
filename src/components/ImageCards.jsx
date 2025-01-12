import { motion } from 'motion/react'
import { animate, stagger } from 'motion'
import { useEffect } from 'react'

export default function ImageCards() {
    useEffect(() => {
        animate('img', {scale:1, x:0}, {delay:stagger(0.2), ease:"easeInOut", type:"spring", stiffness:60, damping:10})
    },[])
    return(
        <main className='relative h-screen w-screen'>
            <section className='w-1/2 h-full border-2 '>

            </section>
            <section className='absolute bottom-0 right-0 flex h-20 gap-2 m-5 overflow-hidden p-2 w-1/4'>
                <motion.img 
                    initial={{scale:0, x:"400%"}}  
                    className="h-full w-1/3 img-slide rounded-lg" 
                    src="/augustus3.png" 
                />
                <motion.img 
                    initial={{scale:0, x:"400%"}}  
                    className="h-full w-1/3 img-slide rounded-lg" 
                    src="/augustus3.png" 
                />
            </section>
        </main>
    )

}
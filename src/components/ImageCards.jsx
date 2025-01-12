import { motion } from 'motion/react'
import { animate, stagger } from 'motion'
import { useEffect } from 'react'

export default function ImageCards() {
    function animateHover(id) {
        animate(
            `#${id}`,
            {
                clipPath:["polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", " polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"],
                opacity: 1
            },
            {duration:0.5, ease:"easeInOut", type:"tween"}
        )
    }
    function reverseHover(id) {
        animate(
            `#${id}`,
            {
                clipPath:[ " polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)","polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",],
                opacity: 0
            },
            {duration:0.5, ease:"easeInOut", type:"tween"}
        )
    }
    useEffect(() => {
        animate('img', {scale:1, x:0}, {delay:stagger(0.4), ease:"easeInOut", type:"spring", stiffness:60, damping:10})
    },[])
    return(
        <main className='relative h-screen w-screen'>
            <motion.section initial={{opacity:0}} className='border-2 bg-orange-400 h-full w-1/2' id='first'>

            </motion.section>
            <section className='absolute bottom-0 right-0 flex h-20 gap-2 m-5 overflow-hidden p-2 w-1/4'>
                <motion.img 
                    initial={{scale:0, x:"400%"}}  
                    onHoverStart={() => animateHover("first")}
                    onHoverEnd={() => reverseHover("first")}
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
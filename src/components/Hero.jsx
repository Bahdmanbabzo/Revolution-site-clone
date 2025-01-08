import { motion } from "motion/react"
import { animate, stagger } from "motion"
import { useEffect } from "react"

export default function Hero() {
    useEffect(() => {
        const sequence = [
            [".roll-in", { y: "0%" }, { delay: stagger(0.2), ease: "easeInOut", type: "spring", stiffness: 60, damping: 10 }],
            ["img", { x:"0%", scale:1}, { delay: stagger(0.2), ease: "easeInOut", type: "spring", stiffness: 20, damping: 10 }]
        ]
        animate(sequence)
    },[])
    return(
        <div className="h-screen w-screen grid place-items-center bg-[#E4E3E2]">
            <section className="flex flex-col justify-center items-center">
                <div className="overflow-hidden h-max w-max font-Tinos text-6xl">
                    <motion.p initial={{y:"100%"}} className="h-full w-full roll-in">Lorem, ipsum</motion.p>
                </div>
                <div className="overflow-hidden h-max w-max font-Tinos text-6xl">
                    <motion.p initial={{y:"100%"}} className="h-full w-full roll-in">Lorem, ipsum dolor.</motion.p>
                </div> <div className="overflow-hidden h-max w-max">
                    <motion.p initial={{y:"100%"}} className="h-full w-full roll-in font-Silkscreen text-6xl font-extrabold ">Lorem.</motion.p>
                </div>
            </section>
        </div>
    )
}
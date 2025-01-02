import { motion } from "motion/react"
import { animate, stagger } from "motion"
import { useEffect } from "react"

export default function Hero() {
    useEffect(() => {
        animate(".roll-in", {y: ["100%", "0%"]}, {delay: stagger(0.2), ease:"easeInOut", type:"spring", stiffness:60, damping:10})
    },[])
    return(
        <div className="h-screen w-screen grid place-items-center bg-[#E4E3E2]">
            <section>
                <div className="overflow-hidden h-max w-max">
                    <motion.p initial={{y:"100%"}} className="h-full w-full roll-in">Lorem, ipsum</motion.p>
                </div>
                <div className="overflow-hidden h-max w-max">
                    <motion.p initial={{y:"100%"}} className="h-full w-full roll-in">Lorem, ipsum dolor.</motion.p>
                </div> <div className="overflow-hidden h-max w-max">
                    <motion.p initial={{y:"100%"}} className="h-full w-full roll-in">Lorem.</motion.p>
                </div>
            </section>
        </div>
    )
}
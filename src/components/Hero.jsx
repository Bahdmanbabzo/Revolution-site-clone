import { motion } from "motion/react"
import { animate, stagger } from "motion"
import { useEffect } from "react"

export default function Hero() {
    useEffect(() => {
        animate(".roll-in", {y: ["100%", "0%"]}, {delay: stagger(0.2), ease:"easeInOut", type:"spring", stiffness:43, damping:30})
    },[])
    return(
        <div className="h-screen w-screen flex bg-[#E4E3E2]">
            <section>
                <div className="overflow-hidden h-max w-max">
                    <motion.p initial={{y:"100%"}} className="h-full w-full roll-in">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro?</motion.p>
                </div>
                <div className="overflow-hidden h-max w-max">
                    <motion.p initial={{y:"100%"}} className="h-full w-full roll-in">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro?</motion.p>
                </div> <div className="overflow-hidden h-max w-max">
                    <motion.p initial={{y:"100%"}} className="h-full w-full roll-in">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro?</motion.p>
                </div>
            </section>
        </div>
    )
}
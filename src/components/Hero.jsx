import { motion } from "motion/react"
import { animate, stagger } from "motion"
import { useEffect } from "react"

export default function Hero() {
    useEffect(() => {
        animate(".roll-in", {y: ["100%", "0%"]}, {delay: stagger(0.2), ease:"easeInOut", type:"spring", stiffness:60, damping:10})
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
            <section className="absolute bottom-0 right-0 border-2 border-black flex w-1/3 h-32">
                <img src="" alt="" className="h-full w-1/4" /><img src="" alt="" className="h-full w-1/4" /><img src="" alt="" className="h-full w-1/4" /><img src="" alt="" className="h-full w-1/4" />
            </section>
        </div>
    )
}
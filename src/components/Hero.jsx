import { motion } from "motion/react"
import { animate, delay, stagger } from "motion"
import { useEffect } from "react"

export default function Hero() {
    useEffect(() => {
        animate(".roll-in", {y:"0%"}, {delay: stagger(0.2), ease:"easeInOut", type:"spring", stiffness:60, damping:10})
        animate("img", {scale: [0.5,1], x: "0%"}, {delay: stagger(0.2), ease:"easeInOut", type:"spring", stiffness:60, damping:10})
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
            <section className="absolute bottom-0 right-0 flex h-20 gap-2 m-5 overflow-hidden">
                <motion.img initial={{scale:0, x:"100%"}}  className="h-full w-1/3 img-slide rounded-lg" src="/augustus3.png" alt="" />
                <motion.img initial={{scale:0, x:"100%"}}  className="h-full w-1/3 img-slide rounded-lg" src="/Las-Medulas,-Spain.jpg" alt="" />
                <motion.img initial={{scale:0, x:"100%"}}  className="h-full w-1/3 img-slide rounded-lg" src="/Vatnajokull-Iceland.jpg" alt="" />

            </section>
        </div>
    )
}
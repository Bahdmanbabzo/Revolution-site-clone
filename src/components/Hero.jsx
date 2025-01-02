import { motion } from "motion/react"

export default function Hero() {
    return(
        <div className="h-screen w-screen flex bg-[#E4E3E2]">
            <div className="overflow-hidden h-max w-max">
                <motion.p
                    initial={{ y: "100%"}}
                    animate={{ y: "0%"}}
                    transition={{ duration: 1}}
                    className="h-full w-full"
                >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro?</motion.p>
            </div>
        </div>
    )
}
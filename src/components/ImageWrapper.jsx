import { motion } from 'motion/react'; 
import { animateHover, reverseHover, handleClick } from '../animations';

export default function ImageWrapper({position, image_path}) {
    return (
        <motion.img 
            initial={{scale:0, x:"400%"}}  
            onHoverStart={() => animateHover(`${position}`)}
            onHoverEnd={() => reverseHover(`${position}`)}
            onClick={() => handleClick(`${position}`)}
            className="h-full w-1/3 img-slide rounded-lg" 
            src={image_path} 
        />
    )
}
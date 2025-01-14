import { animate } from "motion"

function animateHover(id) {
    animate(
        `#${id}`,
        {
            clipPath:["polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", "  polygon(0 0, 50% 0, 50% 100%, 0 100%)"],
            opacity: 1
        },
        {duration:0.5, ease:"easeInOut", type:"tween"}
    )
}
function reverseHover(id) {
    animate(
        `#${id}`,
        {
            clipPath:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
            opacity: 0
        },
        {duration:0.5, ease:"easeInOut", type:"tween"}
    )
}
function handleClick(id) {
    animate(
        `#${id}`,
        {
            clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        },
        {duration:0.5, ease:"easeInOut", type:"tween"}
    )
}

export { animateHover, reverseHover, handleClick }
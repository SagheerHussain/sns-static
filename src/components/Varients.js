export const fadeAnimation = (direction, delay) => {
    return {
        hidden: {
            y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
            x: direction === "right" ? 80 : direction === "left" ? -80 : 0
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: .7,
                delay: delay,
                ease: [.25, .25, .25, .25]
            }
        }
    }
}
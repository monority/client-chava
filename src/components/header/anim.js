
export const menuSlide = {
    initial: {
        x: "100%"
    },
    enter: {
        x:"0%",
        transition: {duration: 0.8, ease:[0.77, 0.0, 0.175, 1.0]}
    },
    exit: {
        x:"100%",
        transition: {duration: 0.8, ease:[0.77, 0.0, 0.175, 1.0]}
    }
}
export const slide = {
    initial: {
        x: "280px"
    },
    enter: (i)=> ({
        x: 0,
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}
    }),
    
    exit: (i)=> ({
        x:"100%",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}
    }),
}
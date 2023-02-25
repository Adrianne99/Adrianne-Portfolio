import React from 'react'
import { motion, useScroll } from 'framer-motion'

function ScrollAnimation() {

    const { scrollYProgress } = useScroll()

    return (
        <>
            <motion.div
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    right: 0,
                    left: 0,
                    height: 3,
                    background: "cyan",
                    transformOrigin: "0%",
                    zIndex: "10000"
        }}
            >
            </motion.div>
        </>
    )
}

export default ScrollAnimation
import { motion } from 'framer-motion'
import React from 'react'
import Popular from '../component/Popular'
import { Veggie } from '../component/Veggie'

function Home() {
  return (
    <motion.div
    animate={{opacity:1}}
    initial={{opacity: 0}}
    exit={{duration: 0}}
    transition={{duration: 0.5}}
    >
        <Veggie/>
        <Popular/>
    </motion.div>
  )
}

export default Home
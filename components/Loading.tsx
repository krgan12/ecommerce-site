'use client'
import Logo from './Logo'
import { motion } from 'motion/react'
import { Loader2 } from 'lucide-react'

function Loading() {
  return (
    <div className='flex min-h-screen w-full bg-white left-0 top-0 items-center justify-center'>
        <div className='flex flex-col justify-center gap-1'>
            <Logo>Tulos</Logo>
            <motion.div animate={{scale: [1,1.1,1]}}
            transition={{repeat: Infinity, duration: 1.5}}
             className='flex items-start space-x-2 text-green-800 relative right-10'>
                <Loader2 className='animate-spin' /> <span className='font-semibold tracking-wide'>Tulos is loading...</span>
            </motion.div>
        </div>
    </div>
  )
}

export default Loading
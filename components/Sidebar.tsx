import React, { FC } from 'react';
import { motion } from "motion/react"
import Logo from './Logo';
import { X } from 'lucide-react';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({isOpen, onClose}) => {
  return (
    <div className={`fixed inset-y-0 left-0 z-50 bg-darkColor/50 shadow-xl hoverEffect w-full ${isOpen ? 'translate-x-0': '-translate-x-full'}`}>
        <motion.div className='min-w-72 max-w-96 bg-darkColor text-white/90 h-full p-10 border-r border-r-white flex flex-col gap-6'>
            <div className='flex items-center justify-between'>
                <Logo className='text-white'>Tulos</Logo>
                <button className='hover:text-red-500 hoverEffect' onClick={onClose}><X className=''/></button>
            </div>
        </motion.div>
    </div>
  )
}

export default Sidebar
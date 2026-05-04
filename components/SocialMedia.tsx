import React from 'react'
import { TooltipProvider, TooltipTrigger, Tooltip, TooltipContent } from './ui/tooltip'
import Link from 'next/link'
import { Github, Linkedin, Instagram, Youtube, Facebook, Slack } from "lucide-react"
import { cn } from '@/lib/utils'
// import { Tooltip } from 'radix-ui'

interface Props {
    className?: string,
    iconClassName?: string, // icon name
    tooltipClassName?: string, // hover text + hv text bg
}

const socialLink = [
    {
        title: "Youtube",
        href: "https://www.youtube.com/JMB12",
        target: "_blank",
        icon: <Youtube className='w-5 h-5'/>
    },
    {
        title: "Github",
        href: "https://github.com/JMBoulos12",
        target: "_blank",
        icon: <Github className='w-5 h-5'/>
    },
    {
        title: "LinkedIn",
        href: "https://linkedin.com/in/jmboulos/",
        target: "_blank",
        icon: <Linkedin className='w-5 h-5'/>
    },
    {
        title: "Facebook",
        href: "https://www.youtube.com/@reactjsBD",
        target: "_blank",
        icon: <Facebook className='w-5 h-5'/>
    },
    {
        title: "Slack",
        href: "https://www.youtube.com/@reactjsBD",
        target: "_blank",
        icon: <Slack className='w-5 h-5'/>
    },
]

function SocialMedia({className, iconClassName, tooltipClassName}: Props) {
  return ( <TooltipProvider>
    <div className={cn('flex items-center gap-3.5', className)}>
        {socialLink?.map((item) => (
            <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
                {/* <Link href={item?.href} target={item?.target} rel='noopener noreferrer' className={cn('p-2 border rounded-full hover:text-white hover:border-white hoverEffect', iconClassName)}>
                    {item?.icon}
                </Link> */}
                <a
    href={item.href}
    target={item.target}
    rel="noopener noreferrer"
    className={cn(
      'p-2 border rounded-full hover:text-white hover:border-white hoverEffect',
      iconClassName
    )}
  >
    {item.icon}
  </a>
            </TooltipTrigger>
            <TooltipContent className={cn('bg-white text-darkColor font-semibold', tooltipClassName)}>
                {item?.title}
            </TooltipContent>
        </Tooltip>
        ))}
    </div>
  </TooltipProvider>
  )
}

export default SocialMedia
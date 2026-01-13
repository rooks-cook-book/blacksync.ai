"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, FileText, CreditCard, Info, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Link, useLocation } from "wouter"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  defaultActive?: string
}

export function AnimeNavBar({ items, className, defaultActive = "Home" }: NavBarProps) {
  const [mounted, setMounted] = useState(false)
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const [location] = useLocation()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const activeTab = items.find(item => item.url === location)?.name || defaultActive

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(url.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed top-5 left-0 right-0 z-[9999]">
      <div className="flex justify-center pt-6">
        <motion.div 
          className="flex items-center gap-1 bg-black/50 border border-white/10 backdrop-blur-lg py-1.5 px-1.5 rounded-full shadow-lg relative"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name
            const isHovered = hoveredTab === item.name

            const isExternal = item.url.startsWith('http')
            const Component = isExternal ? 'a' : Link

            return (
              <Component
                key={item.name}
                href={item.url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                onClick={(e) => handleClick(e as any, item.url)}
                onMouseEnter={() => setHoveredTab(item.name)}
                onMouseLeave={() => setHoveredTab(null)}
                className={cn(
                  "relative cursor-pointer text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300",
                  "text-white/70 hover:text-white",
                  isActive && "text-white"
                )}
              >
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full -z-10 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0.3, 0.5, 0.3],
                      scale: [1, 1.03, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="absolute inset-0 bg-primary/25 rounded-full blur-md" />
                  </motion.div>
                )}

                <span className="relative z-10 flex items-center gap-2">
                  <Icon size={14} strokeWidth={2.5} />
                  <span className="hidden sm:inline">{item.name}</span>
                </span>
          
                <AnimatePresence>
                  {isHovered && !isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    />
                  )}
                </AnimatePresence>

                {isActive && (
                  <motion.div
                    layoutId="anime-mascot"
                    className="absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="relative w-10 h-10">
                      <motion.div 
                        className="absolute w-8 h-8 bg-white rounded-full left-1/2 -translate-x-1/2"
                        animate={
                          hoveredTab ? {
                            scale: [1, 1.1, 1],
                            rotate: [0, -5, 5, 0],
                            transition: {
                              duration: 0.5,
                              ease: "easeInOut"
                            }
                          } : {
                            y: [0, -2, 0],
                            transition: {
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }
                        }
                      >
                        <div className="absolute w-1.5 h-1.5 bg-black rounded-full left-[25%] top-[40%]" />
                        <div className="absolute w-1.5 h-1.5 bg-black rounded-full right-[25%] top-[40%]" />
                        <div className="absolute w-3 h-1.5 border-b-2 border-black rounded-full left-[30%] top-[55%]" />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </Component>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

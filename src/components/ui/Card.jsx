import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const Card = forwardRef(({ 
  children, 
  variant = 'default', 
  className = '',
  hover = false,
  ...props 
}, ref) => {
  const baseStyles = "rounded-lg overflow-hidden"
  
  const variants = {
    default: "bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700",
    elevated: "bg-white dark:bg-gray-800 shadow-md",
    outlined: "border border-gray-200 dark:border-gray-700 bg-transparent",
    glass: "bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 shadow-sm",
  }
  
  const hoverStyles = hover ? "transition-all duration-300 hover:shadow-md hover:-translate-y-1" : ""
  
  const variantStyle = variants[variant] || variants.default
  
  return (
    <motion.div
      ref={ref}
      className={`${baseStyles} ${variantStyle} ${hoverStyles} ${className}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  )
})

Card.displayName = 'Card'

export default Card
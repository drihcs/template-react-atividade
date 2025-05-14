import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  disabled = false,
  icon = null,
  iconPosition = 'left',
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-all focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
  
  const variants = {
    primary: "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 focus:ring-2 focus:ring-primary-300 dark:focus:ring-primary-900",
    secondary: "bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 focus:ring-2 focus:ring-secondary-300 dark:focus:ring-secondary-900",
    accent: "bg-accent-500 text-white hover:bg-accent-600 active:bg-accent-700 focus:ring-2 focus:ring-accent-300 dark:focus:ring-accent-900",
    success: "bg-success-500 text-white hover:bg-success-600 active:bg-success-700 focus:ring-2 focus:ring-success-300 dark:focus:ring-success-900",
    error: "bg-error-500 text-white hover:bg-error-600 active:bg-error-700 focus:ring-2 focus:ring-error-300 dark:focus:ring-error-900",
    outline: "bg-transparent border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-700 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700",
    ghost: "bg-transparent text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700",
    link: "bg-transparent text-primary-500 hover:text-primary-600 p-0 underline-offset-4 hover:underline focus:ring-0",
  }
  
  const sizes = {
    xs: "text-xs px-2.5 py-1.5",
    sm: "text-sm px-3 py-2",
    md: "text-sm px-4 py-2",
    lg: "text-base px-5 py-2.5",
    xl: "text-base px-6 py-3",
  }
  
  const variantStyle = variants[variant] || variants.primary
  const sizeStyle = sizes[size] || sizes.md
  
  return (
    <motion.button
      ref={ref}
      className={`${baseStyles} ${variantStyle} ${sizeStyle} ${className}`}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </motion.button>
  )
})

Button.displayName = 'Button'

export default Button
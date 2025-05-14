import { forwardRef } from 'react'

const Input = forwardRef(({ 
  label,
  helperText,
  error,
  className = '',
  ...props 
}, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`
          w-full px-3 py-2 bg-white dark:bg-gray-800 border rounded-md 
          text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500
          focus:outline-none focus:ring-2 focus:border-transparent transition-colors
          ${error 
            ? 'border-error-500 focus:ring-error-300 dark:focus:ring-error-800' 
            : 'border-gray-300 dark:border-gray-700 focus:ring-primary-300 dark:focus:ring-primary-800'}
          ${className}
        `}
        {...props}
      />
      {(helperText || error) && (
        <p className={`text-sm ${error ? 'text-error-500' : 'text-gray-500 dark:text-gray-400'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input
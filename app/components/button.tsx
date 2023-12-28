import React from 'react'
import { cn } from '../utils'

type ButtonProps = {
  children: React.ReactNode
  onClick: (e: any) => void
  disabled?: boolean
  className?: string
}

function Button({ children, onClick, disabled, className }: ButtonProps) {
  return (
    <button className={cn(className, 'border border-fg px-4 py-1 rounded-md', disabled && 'opacity-45')} disabled={disabled} onClick={(e) => onClick(e)}>
      {children}
    </button>
  )
}

export default Button

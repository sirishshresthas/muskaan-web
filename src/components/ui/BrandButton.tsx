import type { ReactNode } from 'react'

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ' +
  'bg-brand-primary text-white ' +
  'ring-1 ring-brand-accent/30 dark:ring-brand-accent/40 ' +
  'hover:bg-brand-secondary hover:shadow-[0_0_28px_#f59e0b40] dark:hover:shadow-[0_0_32px_#f59e0b59] ' +
  'disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none'

const SIZE = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-8 py-4 text-base',
}

type Props = {
  children: ReactNode
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  size?: keyof typeof SIZE
  disabled?: boolean
  className?: string
}

export function BrandButton({ children, href, onClick, type = 'button', size = 'md', disabled, className = '' }: Props) {
  const cls = `${BASE} ${SIZE[size]} ${className}`
  if (href) return <a href={href} className={cls}>{children}</a>
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  )
}

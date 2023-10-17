import { ReactNode } from 'react'

interface ProfileButtonProps {
  children: React.ReactNode
}

export function ProfileButton({ children }: ProfileButtonProps) {
  return (
    <button className="px-6 py-4 bg-gray-300 rounded-2xl text-start">
      {children}
    </button>
  )
}

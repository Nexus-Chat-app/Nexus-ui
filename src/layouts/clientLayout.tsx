import React from 'react'
import Sidebar from '../components/layouts/Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden">
      <div className='flex max-w-screen-xl max-h-screen mx-auto bg-black my-4'>
        <Sidebar />
        <main className="flex-grow pt-16">
          {children}
        </main>
      </div>
    </div>
  )
}
import React from 'react'
import Sidebar from '../components/layouts/Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden flex items-center justify-center max-w-screen-xl mx-auto">
      <div className='flex flex-col-reverse md:flex-row h-[95vh] w-full my-4 mx-4 '>
        <Sidebar />
        <main className="w-full">
          {children}
        </main>
      </div>
    </div>
  )
}
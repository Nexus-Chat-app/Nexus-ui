import React from 'react'
import Sidebar from '../components/layouts/Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden flex items-center justify-center ">
      <div className='flex max-w-screen-xl h-[95vh] md:mx-auto my-4 w-full mx-4 '>
        <Sidebar />
        <main className="flex-grow w-full">
          {children}
        </main>
      </div>
    </div>
  )
}
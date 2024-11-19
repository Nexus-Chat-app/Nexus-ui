// import Navbar from '@/components/layouts/Navbar'
import TestNavebar from '@/components/layouts/TestNavebar'
import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <TestNavebar />
      <main className="flex w-5/6 h-screen justify-center items-center rounded-10 bg-green-200 mx-auto mt-20">
        {children}
      </main>
    </div>
  )
}
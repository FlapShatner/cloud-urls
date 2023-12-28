'use client'

import QuoteURLsComponent from './components/quote'
import Form from './components/form'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-8 '>
      {/* <QuoteURLsComponent /> */}
      <Form />
    </main>
  )
}

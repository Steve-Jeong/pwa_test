import Link from 'next/link'
import React from 'react'

const Privacy = () => {
  return (
    <div>
      <div className='text-3xl font-extrabold text-blue-600'>Privacy Terms</div>
      <Link href="/" className='px-4 py-2 bg-amber-500 hover:bg-amber-300'>Go Home</Link>
    </div>
  )
}

export default Privacy
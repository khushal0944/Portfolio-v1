import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex justify-center gap-y-5 items-center flex-col h-screen'>
      <h2 className='text-6xl font-serif font-black'>404 Page Not Found</h2>
      <p className='text-3xl font-serif font-black gray'>Could not find requested resource</p>
      <Link href="/" className='text-xl font-serif font-black underline underline-offset-4 hover:text-gray-400'>Back to Home</Link>
    </div>
  )
}
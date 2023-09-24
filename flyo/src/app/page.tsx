import Image from 'next/image'
import { Raleway } from 'next/font/google';
import { Open_Sans } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '400', '700'],
  style: ['normal', 'italic', 'normal'],
  variable: '--raleway'
});
 
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'normal'],
  variable: '--open_sans'
});

export default function Home() {
  return (
  <>
    <main style={raleway.style}>
      <div className='bg-white dark:bg-red-500'>
        <h1 className={`text-3xl`}>West</h1>
      </div>
    </main>
  </>
  )
}

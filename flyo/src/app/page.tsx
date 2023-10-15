'use client'
import Image from 'next/image'
import { Raleway } from 'next/font/google';
import { Open_Sans } from 'next/font/google';
import { useEffect } from 'react';
import illIntro from 'public/images/illustration-intro.png';
import accessAIcon from 'public/images/icon-access-anywhere.svg';
import securityIcon from 'public/images/icon-security.svg';
import collabIcon from 'public/images/icon-collaboration.svg';
import iconAnyfile from 'public/images/icon-any-file.svg';
import illustrateIcon from 'public/images/illustration-stay-productive.png';
import arrowIcon from 'public/images/icon-arrow.svg';

import { themeIcon, setCall } from './lightToDarkToggleScript';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '400', '700'],
  style: ['normal', 'italic', 'normal'],
  variable: '--raleway'
});

function setMode(){
  if(localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
    document.documentElement.classList.add('dark');
  }
  else{
    document.documentElement.classList.remove('dark');
  }
  themeIcon();
  setCall();
}
export default function Home() {
  useEffect(() => {setMode()}, []);
  return (
  <>
    <header className='container mx-auto mt-10 px-6 text-center h-40 md:h-20'>
      {/* dynamic logo */}
      <div className="bg-logo-light-mode dark:bg-logo-dark-mode bg-no-repeat h-20 w-48 mx-auto md:mx-0 md:absolute top-10 left-10">
      </div>
      {/* menu */}
      <div className="flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10">
        <a href="#features" className="hover:text-accentCyan">Features</a>
        <a href="#testimonials" className="hover:text-accentCyan">Testimonials</a>

        {/* dark/light mode switch */}
        <button id="theme-toggle" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
          {/* Dark SVG Icon */}
          <svg
            id="theme-toggle-dark-icon"
            className="w-5 h-5 hidden"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            ></path>
          </svg>
          {/* Light SVG Icon */}
          <svg
            id="theme-toggle-light-icon"
            className="w-5 h-5 hidden"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </header>

    <section id="hero" className="bg-curvy-light-mode dark:bg-curvy-dark-mode bg-no-repeat bg-contain bg-bottom">
      <div className="container mx-auto px-6 text-center md:pt-20 pb-52">
        <Image src={illIntro} className='mx-auto' alt=''/>
        <h1 className="max-w-2xl mx-auto mb-10 text-3xl font-bold leading-normal mt-14 md:text-4xl">
          All your files in one secure location, assessible anywhere.
        </h1>
        <p className="max-w-sm mx-auto mb-10 text-sm md:max-w-xl md:text-lg">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className="p-3 rounded-full shadow-lg shadow-cyan-500 w-52 bg-accentCyan hover:scale-95 hover:shadow-none transition-all duration-200">
          Get Started
        </button>
      </div>
    </section>
    <section id='features' className='pt-12 bg-gray-50 dark:bg-darkBlue1'>
      <div className="container mx-auto px-6 pb-32">
        <div className="flex flex-col items-center justify-center space-y-24 text-center md:flex-row md:space-y-0">
          {/* items section 1 */}
          <div className="flex flex-col items-center space-y-2 md:1/2">
            <div className="flex items-center justify-center h-24 mb-6">
              <Image src={accessAIcon} alt=''/>
            </div>
            <h3 className="text-xl font-bold">
              Access your file from anywhere.
            </h3>
            <p className="max-w-md">
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 md:1/2">
            <div className="flex items-center justify-center h-24 mb-6">
              <Image src={securityIcon} alt=''/>
            </div>
            <h3 className="text-xl font-bold">
              Security you can trust.
            </h3>
            <p className="max-w-md">
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center mt-28 justify-center space-y-24 text-center md:flex-row md:space-y-0">
          {/* items section 2 */}
          <div className="flex flex-col items-center space-y-2 md:1/2">
            <div className="flex items-center justify-center h-24 mb-6">
              <Image src={collabIcon} alt=''/>
            </div>
            <h3 className="text-xl font-bold">
              Access your file from anywhere.
            </h3>
            <p className="max-w-md">
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 md:1/2">
            <div className="flex items-center justify-center h-24 mb-6">
              <Image src={iconAnyfile} alt=''/>
            </div>
            <h3 className="text-xl font-bold">
              Security you can trust.
            </h3>
            <p className="max-w-md">
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* productive section */}
    <section id="productive" className='bg-white dark:bg-darkBlue'>
      {/* contaier */}
      <div className="container flex flex-col items-center mx-auto px-6 pt-24 pb-32 md:flex-row md:space-x-16">
        <div className='md:w-1/2'>
          <Image src={illustrateIcon} className='mb-10' alt=''/>
        </div>
        <div className="flex flex-col items-start md:w-1/2">
          <div className="flex flex-col space-y-5">
            <h4 className="max-w-md text-xl font-bold md:text-4xl">
              Stay productive, wherever you are
            </h4>
            <p className='text-md md:text-lg'>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className='text-md md:text-lg'>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
          {/* link */}
          <div className='group block mt-4'>
            <a href="#" className="border-b border-accentCyan text-accentCyan">
              See how Flyo works
              <Image src={arrowIcon} className='inline ml-1 group-hover:translate-x-1 duration-200' alt=''/>
            </a>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

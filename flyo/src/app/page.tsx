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
import quoteIcon from 'public/images/bg-quotes.png';
import prof1 from 'public/images/profile-1.jpg';
import prof2 from 'public/images/profile-2.jpg';
import prof3 from 'public/images/profile-3.jpg';
import phoneIcon from 'public/images/icon-phone.svg';
import emailIcon from 'public/images/icon-email.svg';
import fbIcon from 'public/images/facebook.svg';
import XIcon from 'public/images/twitter.svg';
import InstaIcon from 'public/images/instagram.svg';

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
          <div className='group relative'>
            <Image id='introImg' src={illIntro} className='mx-auto' alt=''></Image>
            <div id='items-div' className="item-gradient"></div>
          </div>
        <h1 className="max-w-2xl mx-auto mb-10 text-3xl font-bold leading-normal mt-14 md:text-4xl">
          All your files in one secure location, assessible anywhere.
        </h1>
        <p className="max-w-sm mx-auto mb-10 text-sm md:max-w-xl md:text-lg">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <a href='#early-access' className="p-4 px-14 rounded-full shadow-lg shadow-cyan-500 w-52 bg-accentCyan hover:scale-95 hover:shadow-none transition-all duration-200">
          Get Started
        </a>
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
          <Image src={illustrateIcon} className='mb-10 dark:hover:bg-green-500 dark:hover:shadow-xl duration-200 dark:hover:shadow-green-600 dark:hover:rounded-xl' alt=''/>
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
            <a href="#" className="border-b border-accentCyan text-accentBlue dark:text-accentCyan">
              See how Flyo works
              <Image src={arrowIcon} className='inline ml-1 group-hover:translate-x-1 duration-200' alt=''/>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* testimonials section */}
    <section id="testimonials" className="bg-gray-50 dark:bg-darkBlue">
      <div className="container mx-auto px-6 pt-12 pb-80 md:pb-96">
        {/* boxes */}
        <div className="relative flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12">
          <Image src={quoteIcon} alt='' className='absolute left-1 -top-2 w-10 md:-top-16 md:w-20'></Image>
          {/* box 1 */}
          <div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3">
            <p className="text-sm leading-5 md:text-lg">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            {/* customer info */}
            <div className="flex space-x-4">
              <Image src={prof1} alt='' className='w-10 h-10 rounded-full'></Image>
              <div>
                <h5 className="text-sm font-semibold">
                  Satish Patel
                </h5>
                <p className="text-xs font-extralight">
                  Founder & CEO. Huddle
                </p>
              </div>
            </div>
          </div>
          {/* box 2 */}
          <div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3">
            <p className="text-sm leading-5 md:text-lg">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            {/* customer info */}
            <div className="flex space-x-4">
              <Image src={prof2} alt='' className='w-10 h-10 rounded-full'></Image>
              <div>
                <h5 className="text-sm font-semibold">
                  Bruce McKenzie
                </h5>
                <p className="text-xs font-extralight">
                  Founder & CEO. Huddle 2
                </p>
              </div>
            </div>
          </div>
          {/* box 3 */}
          <div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3">
            <p className="text-sm leading-5 md:text-lg">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            {/* customer info */}
            <div className="flex space-x-4">
              <Image src={prof3} alt='' className='w-10 h-10 rounded-full'></Image>
              <div>
                <h5 className="text-sm font-semibold">
                  Eva Boyd
                </h5>
                <p className="text-xs font-extralight">
                  Founder & CEO. Huddle 3
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* early access section */}
    <section id="early-access" className="relative px-6 dark:bg-darkBlue2 md:px-0">
      <div className="flex flex-col relative -top-40 max-w-4xl mx-auto p-10 px-6 space-y-6 text-center rounded-2xl bg-gray-200 dark:bg-darkBlue1 md:px-16">
        <h5 className="text-2xl font-bold">
          Get early access today
        </h5>
        <p className="text-sm">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        {/* input & button */}
        <div className="flex flex-col items-start space-y-6 md:flex-row md:space-y-0 md:space-x-6">
          <div className="w-full md:flex-1">
            <input type="text" className="text-black w-full px-10 py-3 rounded-full focus:outline-none" placeholder='email@example.com'/>
          </div>
          <button className="w-full text-md md:text-lg hover:animate-pulse p-3 px-4 md:px-6 rounded-full bg-accentCyan md:w-56 hover:scale-95">
            Get Started For Free
          </button>
        </div>
      </div>
    </section>

    {/* footer */}
    <footer className="bg-darkBlue2 text-white">
      <div className="container mx-auto md:pt-12 px-5 pb-10">
        {/* all items container */}
        <div className="flex flex-col md:flex-row justify-between space-y-24 md:space-y-0">
          {/* email & phone */}
          <div className="mt-10 space-y-6">
            <div className="flex items-center space-x-3 md:-mt-10">
              <div className='w-6'>
                <Image className='scale-10' src={phoneIcon} alt=''></Image>
              </div>
              <div className='uppercase'>
                +1-xxx-xxx-xxxx
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className='w-6'>
                <Image className='scale-10' src={emailIcon} alt=''></Image>
              </div>
              <div>
                example@fylo.com
              </div>
            </div>
          </div>
          
          {/* menus */}
          <div className="flex flex-col space-y-10 text-xl md:text-base md:space-x-20 md:space-y-0 md:flex-row">
            <div className="flex flex-col space-y-3">
              <a href='#' className='hover:translate-x-1 duration-200 md:hover:scale-110 md:hover:translate-x-0'>About</a>
              <a href='#' className='hover:translate-x-1 duration-200 md:hover:scale-110 md:hover:translate-x-0'>Jobs</a>
              <a href='#' className='hover:translate-x-1 duration-200 md:hover:scale-110 md:hover:translate-x-0'>Press</a>
              <a href='#' className='hover:translate-x-1 duration-200 md:hover:scale-110 md:hover:translate-x-0'>Blog</a>
            </div>
            <div className="flex flex-col space-y-3">
              <a href='#' className='hover:translate-x-1 duration-200 md:hover:scale-110 md:hover:translate-x-0'>Contact Us</a>
              <a href='#' className='hover:translate-x-1 duration-200 md:hover:scale-110 md:hover:translate-x-0'>Term</a>
              <a href='#' className='hover:translate-x-1 duration-200 md:hover:scale-110 md:hover:translate-x-0'>Privacy</a>
            </div>
          </div>

          {/* social */}
          <div className="flex justify-center pb-10 space-x-3">
            <div>
              <a href="#" className=' '><Image className='p-2 w-auto bg-darkBlue rounded-full ficon' alt='' src={fbIcon}></Image></a>
            </div>
            <div>
              <a href="#"><Image className='p-2 w-auto bg-darkBlue rounded-full ficon' alt='' src={XIcon}></Image></a>
            </div>
            <div>
              <a href="#"><Image className='p-2 w-auto bg-darkBlue rounded-full ficon' alt='' src={InstaIcon}></Image></a>
            </div>
          </div>
          
        </div>
      </div>
    </footer>

  </>
  )
}

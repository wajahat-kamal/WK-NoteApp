import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col items-center justify-center ">
        
        <div className="text-black  text-lg font-semibold flex flex-col md:flex-row md:gap-5 gap-1 md:mb-0 mb-5">
          <a className='hover:text-blue-950' href="https://wajahat-kamal-portfolio.vercel.app" target='_blank' >Explore the <span className='text-blue-950'>Portfolio</span> of NoteApp's <span className='text-blue-950'>Creator.</span></a>
          <a className='hover:text-blue-950' href="https://github.com/wajahat-kamal/WK-NoteApp.git" target='_blank' >View the source code of this <span className='text-blue-950'>Note App.</span></a>
        </div>

        <div className="text-black  text-lg font-semibold flex flex-col md:flex-row md:gap-5 gap-1">
          <p>
            © {currentYear} <span className='text-blue-950'>Wajahat Kamal</span> Wajahat Kamal. All rights reserved.
          </p>
          <p>Build with React js and TailwindCSS.</p>
          <p>Created in June 2025.</p>

        </div>
         
        </div>

      </div>
    </footer>
  )
}

export default Footer;


import { ArrowRightIcon } from "@heroicons/react/solid"
import linkedin from '../projectpics/linkedin.svg'
import github from '../projectpics/github.svg'
import React from "react"

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#about" className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Ameen Nazeer
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="https://www.linkedin.com/in/ameen-nazeer-42307b13a/" target='_blank' rel='noreferrer' className="mr-5">
             <img width='40px' src={linkedin} alt="LinkedIn"/>
          </a>
          <a href="https://github.com/ameennazeer12" target='_blank' rel='noreferrer' className="mr-5">
             <img width='40px' src={github} alt="LinkedIn"/>
          </a>

        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}

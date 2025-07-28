import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20 ">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full ">
        {/* Logo & Description */}
        <div>
          <h3 className="text-white text-xl font-bold mb-2">
            10 Minute School
          </h3>
          <p className="text-sm">
            Take your IELTS preparation to the next level with top instructors and structured lessons.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a className="hover:underline">About Us</a></li>
            <li><a className="hover:underline">Contact</a></li>
            <li><a className="hover:underline">Privacy Policy</a></li>
            <li><a className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-white font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4 mb-2">
            <Facebook className='hover:cursor-pointer'/><Instagram className='hover:cursor-pointer' /><Linkedin className='hover:cursor-pointer' /><Youtube className='hover:cursor-pointer' />
          </div>
          <p className="text-sm">Call us: 16910<br />Email: info@10minuteschool.com</p>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs">
        © 2015–{new Date().getFullYear()} 10 Minute School. All rights reserved.
      </div>
    </footer>
  )
}

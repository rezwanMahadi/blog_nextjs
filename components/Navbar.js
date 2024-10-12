"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { ModeToggle } from '@/components/theme-btn'
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



const Navbar = () => {

  return (
    <nav className="p-4 bg-gray-200/50 dark:bg-gray-700/50 sticky top-0 backdrop-blur-sm font-[family-name:var(--font-ubuntu-medium)]">
      <div className="container mx-auto flex justify-between items-center">
        {/* <div className="text-xl font-bold ml-10">
          MahadiBlog
        </div> */}
        <Image
          className="hidden dark:flex dark: ml-4 md:ml-10 aspect-auto"
          src="/logo_black.png"
          alt="Next.js logo"
          width={150}
          height={38}
          priority
        />
        <Image
          className="aspect-auto dark:hidden ml-4 md:ml-10"
          src="/logo_white.png"
          alt="Next.js logo"
          width={150}
          height={50}
          priority
        />
        <div className="flex md:hidden mr-3">
          <Sheet>
            <SheetTrigger>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <Image
                    className="hidden dark:flex aspect-auto"
                    src="/logo_black.png"
                    alt="Next.js logo"
                    width={150}
                    height={38}
                    priority
                  />
                  <Image
                    className="aspect-auto dark:hidden"
                    src="/logo_white.png"
                    alt="Next.js logo"
                    width={150}
                    height={50}
                    priority
                  />
                </SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col justify-center text-[20px] space-y-5 mt-10">
                    <Link href="/" className="border-b pb-3">Home</Link>
                    <Link href="/about" className="border-b pb-3">About</Link>
                    <Link href="/contact" className="border-b pb-3">Contact</Link>
                    <Link href="/blog" className="border-b pb-3">Blog</Link>
                    <div className="flex flex-col space-y-4">
                      <Button variant="outline">Log in</Button>
                      <Button variant="outline">Sign up</Button>
                      <ModeToggle />
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex-col md:text-[20px] md:flex md:flex-row md:space-x-10 md:mr-10 hidden">
          <Link className="hover:text-gray-400" href="/">Home</Link>
          <Link className="hover:text-gray-400" href="/about">About</Link>
          <Link className="hover:text-gray-400" href="/contact">Contact</Link>
          <Link className="hover:text-gray-400" href="/blog">Blog</Link>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Log in</Button>
            <Button variant="outline">Sign up</Button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

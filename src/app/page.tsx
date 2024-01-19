import TypewriterTitle from "@/components/TypewriterTitle";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import {ArrowRight} from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-gradient-to-r min-h-screen grainy from-rose-100 to-teal-100 border-2 border-black">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-fadeIn">
        <h1 className="font-custom text-7xl text-center text-gray-800">
          NeuroMosaic <span className="text-blue-600 font-bold">Note Taking</span> Assistant
        </h1>
        <div className="mt-4"></div>
        <h2 className="font-semibold text-4xl text-center text-slate-700">
          <TypewriterTitle/>
        </h2>
        <div className="mt-8"></div>
        <div className="flex justify-center">
          <Link href="/dashboard">
            <Button className="bg-blue-600 hover:bg-blue-700 transition duration-300">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" strokeWidth={3}/>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}


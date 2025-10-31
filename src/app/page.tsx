import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/theme-toggle"
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import Image from 'next/image'

const LandingPage = async () => {
    // Removed auto-redirect to allow landing page access even when logged in
    // const { userId } = auth()
    // if (userId) {
    //     return redirect('/mail')
    // }
    return (
        <>
            {/* <div className="h-screen w-full bg-white absolute inset-0">
            </div> */}
            <div className="absolute z-[-1] bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_80%)]">
            </div>
            <div className="min-h-screen flex flex-col items-center pt-56 relative z-[10]">
                <h1 className="bg-gradient-to-r text-center from-gray-300 font-bold text-6xl to-gray-900 inline-block text-transparent bg-clip-text">
                    The minimalistic, <br />AI-powered email client.
                </h1>
                <div className="h-12"></div>
                <p className="text-xl mb-8 text-blue-300 max-w-xl text-center">
                    Smartmail is a minimalistic, AI-powered email client that empowers you to manage your email with ease.
                </p>
                <div className="space-x-4">
                    <Button className="relative group overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:shadow-blue-500/50 active:scale-105">
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                        <Link href="/mail" className="relative z-10">Get Started</Link>
                    </Button>
                    <Link href='https://start-saas.com?utm=normalhuman' className="inline-block">
                        <Button 
                            variant="outline" 
                            className="relative group overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(147,197,253,0.6)] hover:shadow-blue-300/50 hover:border-blue-400/50 active:scale-105 hover:bg-blue-50/10 dark:hover:bg-blue-950/20"
                        >
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-blue-300/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                            <span className="relative z-10">Learn More</span>
                        </Button>
                    </Link>
                </div>
                
                {/* Companies Carousel */}
                <div className="w-full mt-12 mb-0 overflow-hidden">
                    <div className="flex animate-scroll-left">
                        {Array.from({ length: 3 }).map((_, duplicateIndex) => (
                            ['company1', 'company2', 'company3'].map((company, idx) => (
                                <div key={`${company}-${duplicateIndex}-${idx}`} className="shrink-0 text-2xl font-semibold text-gray-400 whitespace-nowrap px-16">
                                    {company}
                                </div>
                            ))
                        ))}
                    </div>
                </div>

                <div className="mt-12 max-w-5xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Experience the power of:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white border rounded-lg shadow-md p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-2 hover:border-blue-400 cursor-pointer group">
                            <h3 className="text-xl font-semibold mb-2 text-blue-300 group-hover:text-blue-500 transition-colors duration-300">AI-driven email RAG</h3>
                            <p className="text-black group-hover:text-gray-700 transition-colors duration-300">Automatically prioritize your emails with our advanced AI system.</p>
                        </div>
                        <div className="bg-white border rounded-lg shadow-md p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-2 hover:border-blue-400 cursor-pointer group">
                            <h3 className="text-xl font-semibold mb-2 text-blue-300 group-hover:text-blue-500 transition-colors duration-300">Full-text search</h3>
                            <p className="text-black group-hover:text-gray-700 transition-colors duration-300">Quickly find any email with our powerful search functionality.</p>
                        </div>
                        <div className="bg-white border rounded-lg shadow-md p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-2 hover:border-blue-400 cursor-pointer group">
                            <h3 className="text-xl font-semibold mb-2 text-blue-300 group-hover:text-blue-500 transition-colors duration-300">Shortcut-focused interface</h3>
                            <p className="text-black group-hover:text-gray-700 transition-colors duration-300">Navigate your inbox efficiently with our intuitive keyboard shortcuts.</p>
                        </div>
                    </div>
                </div>
                <Image src='/demo.png' alt='demo' width={1000} height={1000} className='my-12 border rounded-md transition-all hover:shadow-2xl hover:scale-[102%] shadow-xl w-[70vw] h-auto' />
                <div className="flex items-center space-x-4 mb-10">
                    <Link href="/sign-in" className="text-sm hover:underline">Sign In</Link>
                    <Link href="/sign-up" className="text-sm hover:underline">Sign Up</Link>
                    <ModeToggle />
                </div>
            </div>
        </>
    )
}

export default LandingPage
'use client'

import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"

export default function GetStartedButton() {
    const router = useRouter()
    
    const handleClick = () => {
        router.push('/sign-in')
    }
    
    return (
        <Button 
            onClick={handleClick}
            className="relative group overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:shadow-blue-500/50 active:scale-105"
        >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
            <span className="relative z-10">Get Started</span>
        </Button>
    )
}


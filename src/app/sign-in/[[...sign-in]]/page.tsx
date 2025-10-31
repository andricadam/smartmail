import { SignIn } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function Page({
    searchParams,
}: {
    searchParams: { redirect_url?: string } | Promise<{ redirect_url?: string }>
}) {
    const { userId } = await auth()
    const params = searchParams instanceof Promise ? await searchParams : searchParams
    
    // If user is already signed in, redirect them to mail or the redirect_url
    // This prevents authenticated users from seeing the sign-in page
    if (userId) {
        const redirectUrl = params.redirect_url || '/mail'
        redirect(redirectUrl)
    }
    
    // Show sign-in form for unauthenticated users
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <SignIn 
                appearance={{
                    elements: {
                        // You can customize Clerk elements here
                        // rootBox: "your-custom-class",
                    }
                }}
                afterSignInUrl={params.redirect_url || '/mail'}
            />
        </div>
    )
}
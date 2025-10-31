import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <SignIn 
                appearance={{
                    elements: {
                        // You can customize Clerk elements here
                        // rootBox: "your-custom-class",
                    }
                }}
            />
        </div>
    )
}
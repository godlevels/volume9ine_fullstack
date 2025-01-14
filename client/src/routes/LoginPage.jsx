import { SignIn } from "@clerk/clerk-react"

const LoginPage = () => {
    return (
        <div className="flex items-center justify-center h-[cal{100vh-80px}]">
            <SignIn signUpUrl="/register" />
        </div>
    )
}

export default LoginPage 
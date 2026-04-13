import { createClient } from "@/lib/supabase/client";
import { useState } from "react";

export const LoginComponent = () => {

    const supabase = createClient();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithPassword({
        email,
        password
        })

        if (error) alert(error.message)
        else window.location.href = '/dashboard'
    }

    return (
        <section className="m-auto">
            <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-xl min-w-md">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
                <p className="text-gray-500 text-sm">Please sign in to your account</p>
            </div>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="you@example.com" onChange={e => setEmail(e.target.value)}  />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input type="password"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="••••••••" onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2 text-blue-600 rounded" /> Remember me
                    </label>
                    <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
                </div>
                <button onClick={handleLogin} className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">Sign
                    In</button>
            </form>
            <div className="mt-6 text-center text-sm">
                <p className="text-gray-500">Don't have an account? <a href="signup.html"
                        className="text-blue-600 font-bold hover:underline">Sign Up</a></p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <a href="index.html"
                    className="text-gray-400 hover:text-gray-600 text-sm flex items-center justify-center gap-2">
                    &larr; Back to Home
                </a>
            </div>
        </div>
        </section>
        
    )
}

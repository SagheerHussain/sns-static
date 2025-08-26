import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import loginBg from "/Images/login.jpg";
import { BeatLoader } from 'react-spinners';

const ForgetPassword = () => {

    // React Hook Form
    const { register, handleSubmit, formState: { errors } } = useForm();

    // State Variables
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    // Forget Password Function
    const forgetPassword = async (data) => {
        setLoading(true);
        try {
            const response = await fetch(`https://skynetsilicon-website-backend.vercel.app/api/auth/forget-password`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error("Email invalid");
            const result = await response.json();
            if (result.success) {
                setMessage(result.message)
            }
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    return (
        <>
            <div className="w-screen flex items-center justify-center h-screen bg-[#010205ee]">
                <div className="lg:w-[50%] xl:w-[40%] 2xl:w-[33%] p-3 relative rounded-none z-[999] shadow-2xl" style={{ background: `url(${loginBg})` }}>
                    <div className="after:content-[''] after:block after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-gradient-to-r from-[#000000e7] to-[#00042aee] after:z-[-1]"></div>
                    <h2 className="mx-3 text-white text-lg relative inline font-medium after:content-[''] after:block after:w-[100%] after:h-[2px] after:translate-y-2 after:absolute after:bottom-0 after:left-0 after:bg-[#393e66]">SIGN IN</h2>
                    {error && <p className="text-red-600">{error}</p>}

                    {/* Form */}
                    <form className="p-3 z-[99999] mt-4" onSubmit={handleSubmit(forgetPassword)}>
                        <div className="mb-4">
                            <label className="block text-gray-300 mb-2 ps-2">Email</label>
                            <div className="flex items-center bg-[#393e6653] p-2 rounded-full w-full">
                                <span className="text-gray-400 mr-2">🔑</span>
                                <input {...register("email", { required: true })} type="email" placeholder="Email" className="form-control w-full bg-transparent focus:outline-none focus:bg-transparent text-white placeholder:text-zinc-400 focus:shadow-none border-none" />
                            </div>
                        </div>

                        <button disabled={loading} className={`w-full bg-[#393e66c5] rounded-full text-zinc-300 py-2 font-semibold ${loading ? "opacity-50" : "opacity-100 hover:bg-[#393e66ed]"}`}>
                            {loading ? <BeatLoader size={12} color='#fff' /> : "Send Verification Link"}
                        </button>

                        {message && <p className='text-green-700 mt-3'>{message}</p>}
                    </form>
                </div>
            </div>
        </>
    )
}

export default ForgetPassword

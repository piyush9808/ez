import React from 'react'
import rocket from '../assets/rocket.png'
import { Button } from '@mui/material'
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();

    const gotocreate = () => {
        navigate("/CreateChallenge")
    }
    return (
        <div className='bg-slate-500 '>
            {/* banner */}

            <div className="bg-[#003145] text-white py-4 px-8 flex justify-between items-center">
                {/* Left Section */}
                <div className="max-w-lg">
                    <h2 className="text-4xl font-bold mb-4">
                        Accelerate Innovation with Global AI Challenges
                    </h2>
                    <p className="text-lg mb-8">
                        AI Challenges at DPhi simulate real-world problems. It is a great place
                        to put your AI/Data Science skills to test on diverse datasets, allowing
                        you to foster learning through competitions.
                    </p>

                    <Button variant='contained'
                        onClick={() => gotocreate()}
                        className="bg-white text-teal-900 font-semibold py-3 px-6 rounded-lg ">
                        Create Challenge
                    </Button>

                </div>

                {/* Right Section (Rocket Image) */}
                <div className="w-1/3 bg-white">
                    <img
                        src={rocket}
                        alt="Rocket"
                        className="w-full"
                    />
                </div>
            </div>

            {/* stats*/}

            <div>
                <div className="bg-teal-900 py-8">
                    <div className="container mx-auto flex justify-around text-center text-white">
                        {/* First Stat */}
                        <div className="flex flex-col items-center">
                            <div className="bg-teal-800 p-4 rounded-full mb-4">
                                {/* Icon for AI model submissions */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 7l6 6m0 0l6-6m-6 6V1m0 16a9 9 0 100 18 9 9 0 000-18z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold">100K+</h3>
                            <p className="text-sm">AI model submissions</p>
                        </div>

                        <div className="border-r border-white"></div>

                        {/* Second Stat */}
                        <div className="flex flex-col items-center">
                            <div className="bg-teal-800 p-4 rounded-full mb-4">
                                {/* Icon for Data Scientists */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 2a10 10 0 11-6.14 18 10.001 10.001 0 010-16H9m6 9l2 2m0-2l-2 2"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold">50K+</h3>
                            <p className="text-sm">Data Scientists</p>
                        </div>

                        <div className="border-r border-white"></div>

                        {/* Third Stat */}
                        <div className="flex flex-col items-center">
                            <div className="bg-teal-800 p-4 rounded-full mb-4">
                                {/* Icon for AI Challenges */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12a2 2 0 11-2 2h5a2 2 0 11-2 2v-4zm0 0V8m0 4a2 2 0 11-2 2m-6 0a2 2 0 11-2 2h5a2 2 0 11-2 2v-4zm0 0V8m0 4a2 2 0 11-2 2"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold">100+</h3>
                            <p className="text-sm">AI Challenges hosted</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
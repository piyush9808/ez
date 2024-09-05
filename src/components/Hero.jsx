import React from 'react'
import rocket from '../assets/rocket.svg'
import { Button } from '@mui/material'
import { useNavigate } from "react-router-dom";
import yellowbar from '../assets/yellowbar.png'
import ai from '../assets/ai.png'
import data from '../assets/data.png'
import ai2 from '../assets/ai2.png'

const Hero = () => {
    const navigate = useNavigate();

    const gotocreate = () => {
        navigate("/CreateChallenge")
    }

    return (
        <div className=' '>


            {/* banner */}

            <div className="bg-[#003145] text-white py-28 px-48 flex justify-around items-center">
                {/* Left Section */}

                <div className="w-3/5 ">

                    <div className='flex gap-2 mb-8'>

                        <img src={yellowbar} className='absolute top-56 left-44 bg-black' alt="" />
                        <h2 className=" text-5xl font-medium mb-4">
                            Accelerate Innovation <br />with Global AI Challenges
                        </h2>

                    </div>

                    <p className="text-lg mb-6">
                        AI Challenges at DPhi simulate real-world problems. It is a great place
                        to put your AI/Data Science skills to test on diverse datasets, allowing
                        you to foster learning through competitions.
                    </p>


                    <button variant='contained'
                        onClick={() => gotocreate()}
                        className="bg-white text-teal-900 font-semibold py-3 px-6 rounded-lg ">
                        Create Challenge
                    </button>

                </div>

                {/* Right Section (Rocket Image) */}

                <div className="">
                    <img
                        src={rocket}
                        alt="Rocket"
                        className="w-full"
                    />
                </div>

            </div>

            {/* stats*/}

            <div>
                <div className="bg-[#002A3B] py-12 px-20">
                    <div className="container mx-auto flex justify-around text-center text-white">

                        {/* First Stat */}
                        <div className="flex items-center align-middle">

                            <div className=" p-4 rounded-full mb-4">
                                {/* Icon for AI model submissions */}
                              <img src={ai} alt="" />
                            </div>
                            <div className='flex flex-col'>
                            <h3 className="text-2xl font-bold">100K+</h3>
                            <p className="text-sm">AI model submissions</p>
                            </div>
                        </div>

                        <div className="border-r h-20 items-center border-white"></div>

                        {/* Second Stat */}
                        <div className="flex items-center align-middle">

                            <div className=" p-4 rounded-full mb-4">
                                {/* Icon for AI model submissions */}
                              <img src={data} alt="" />
                            </div>
                            <div className='flex flex-col '>
                            <h3 className="text-2xl font-bold">50K+</h3>
                            <p className="text-sm">Data Scientists</p>
                            </div>
                        </div>

                        <div className="border-r border-white"></div>

                        {/* Third Stat */}
                        <div className="flex items-center align-middle">

                            <div className=" p-4 rounded-full mb-4">
                                {/* Icon for AI model submissions */}
                              <img src={ai2} alt="" />
                            </div>
                            <div className='flex flex-col'>
                            <h3 className="text-2xl font-bold">100+</h3>
                            <p className="text-sm">Challenges Accepted</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
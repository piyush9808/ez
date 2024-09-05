import React from 'react';
import prove from '../assets/prove.png'
import learn from '../assets/learn.png'
import challenge from '../assets/challenge.png'
import earn from '../assets/earn.png'
const Banner = () => {
  return (
    <div className="py-16 bg-[#ffffff]">
      {/* Header */}
      <h2 className="text-center text-3xl font-bold mb-12">
        Why Participate in <span className="text-green-600">AI Challenges?</span>
      </h2>

      {/* Four Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Box 1 */}
        <div className="p-8 bg-[#F8F9FD] rounded-lg shadow-lg">
          <div className="mb-4">

            {/* Icon */}

            <img src={prove} alt="" />

          </div>
          <h3 className="text-xl font-semibold mb-2">Prove your skills</h3>
          <p className="text-gray-600">
            Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.
          </p>
        </div>

        {/* Box 2 */}
        <div className="p-8 bg-gray-50 rounded-lg shadow-lg ">
          <div className="mb-4">
            {/* Icon */}
           <img src={learn} alt="" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Learn from community</h3>
          <p className="text-gray-600">
            One can look and analyze the solutions submitted by other Data Scientists in the community and learn from them.
          </p>
        </div>

        {/* Box 3 */}
        <div className="p-8 bg-gray-50 rounded-lg shadow-lg ">
          <div className="mb-4">
            {/* Icon */}
            <img src={challenge} alt="" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Challenge yourself</h3>
          <p className="text-gray-600">
            There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.
          </p>
        </div>

        {/* Box 4 */}
        <div className="p-8 bg-gray-50 rounded-lg shadow-lg ">
          <div className="mb-4">
            {/* Icon */}
          <img src={earn} alt="" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Earn recognition</h3>
          <p className="text-gray-600">
            You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

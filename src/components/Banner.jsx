import React from 'react';

const Banner = () => {
  return (
    <div className="py-16 bg-white">
      {/* Header */}
      <h2 className="text-center text-3xl font-bold mb-12">
        Why Participate in <span className="text-green-600">AI Challenges?</span>
      </h2>

      {/* Four Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Box 1 */}
        <div className="p-8 bg-gray-50 rounded-lg shadow-lg text-center">
          <div className="mb-4">
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mx-auto text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m-3-8V6h-6v4h6zm0 0h6m-3-8V6h-6v4h6zm0 0h6"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Prove your skills</h3>
          <p className="text-gray-600">
            Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.
          </p>
        </div>

        {/* Box 2 */}
        <div className="p-8 bg-gray-50 rounded-lg shadow-lg text-center">
          <div className="mb-4">
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mx-auto text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4zm0 4v4m-4 0h8"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Learn from community</h3>
          <p className="text-gray-600">
            One can look and analyze the solutions submitted by other Data Scientists in the community and learn from them.
          </p>
        </div>

        {/* Box 3 */}
        <div className="p-8 bg-gray-50 rounded-lg shadow-lg text-center">
          <div className="mb-4">
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mx-auto text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m0-16C6.477 4 2 8.477 2 14h20c0-5.523-4.477-10-10-10z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Challenge yourself</h3>
          <p className="text-gray-600">
            There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.
          </p>
        </div>

        {/* Box 4 */}
        <div className="p-8 bg-gray-50 rounded-lg shadow-lg text-center">
          <div className="mb-4">
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mx-auto text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m-3.172-8.828A4 4 0 1015.17 7.172a4 4 0 00-6.342 6.343z"
              />
            </svg>
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

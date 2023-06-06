import React from 'react';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen text-black text-center bg-rose-600 '>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-red-600'>Skills</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center p-8 rounded-2xl bg-white'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <i class="devicon-html5-plain-wordmark colored text-9xl"></i>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <i class="devicon-css3-plain-wordmark colored text-9xl"></i>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <i class="devicon-javascript-plain colored text-9xl"></i>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <i class="devicon-react-original-wordmark colored text-9xl"></i>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <i class="devicon-sass-original colored text-9xl"></i>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <i class="devicon-nodejs-plain-wordmark colored text-9xl"></i>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <i class="devicon-mongodb-plain-wordmark colored text-9xl"></i>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <i class="devicon-tailwindcss-original-wordmark colored text-9xl"></i>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skills;
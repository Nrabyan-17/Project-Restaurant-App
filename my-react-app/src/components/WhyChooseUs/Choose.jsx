import React from 'react';
import { FaBus } from 'react-icons/fa';

const Choose = () => {
    return (
        <>
            <div className="py-14 md:py-28 bg-gray-50">

                <div className='w-full'>
                    {/* Text Section */}
                    <h1 className='pb-16 tracking-wider text-2xl font-semibold text-dark text-center'>Why Choose Us</h1>

                    {/* Card Section */}
                    <div>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-16 sm:gap-4 mx-10'>
                            {/* Card 1 */}
                            <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
                                <p className='text-black/70 font-semibold '>Lorem ipsum dolor, sit amet.</p>
                                <p className='rotate-90 text-5xl text-rose-500'>....</p>
                                <FaBus className='text-5xl text-rose-500' />
                            </div>

                            {/* Card 2 */}
                            <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
                                <FaBus className='text-5xl text-cyan-500' />
                                <p className='rotate-90 text-5xl text-cyan-500'>....</p>
                                <p className='text-black/70 font-semibold '>Lorem ipsum dolor, sit amet.</p>
                            </div>

                            {/* Card 3 */}
                            <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
                                <p className='text-black/70 font-semibold '>Lorem ipsum dolor, sit amet.</p>
                                <p className='rotate-90 text-5xl text-rose-500'>....</p>
                                <FaBus className='text-5xl text-rose-500' />
                            </div>

                            {/* Card 4 */}
                            <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
                                <FaBus className='text-5xl text-cyan-500' />
                                <p className='rotate-90 text-5xl text-cyan-500'>....</p>
                                <p className='text-black/70 font-semibold '>Lorem ipsum dolor, sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Choose;
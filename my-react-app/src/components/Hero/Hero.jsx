import React from 'react';
import Hero1 from '../../assets/Hero.png';
import HeroBg from '../../assets/HeroBg.png';
import PrimaryButton from '../Shared/PrimaryButton';
const Hero = () => {

    const BgStyle = {
        backgroundImage: `url(${HeroBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: "100%",
        height: "100%"
    }   

    return (
        <>
         <div style={BgStyle} className='relative z-[-1]'>

            <div className="container py-16 sm:py-0">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">

                    {/* Text Content Section */}
                    <div className='space-y-7 text-dark order-2 sm:order-1 mx-10'>
                        <h1 className='text-5xl'>Fresh & healty meal plan <span className='text-rose-500 font-cursive text-7xl'>Delivery</span> in Indonesia</h1>
                        <p className=''>Delicious Meals Delivered to your door </p>

                        {/* Button Section */}
                        <div>
                            <PrimaryButton />
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className='relative z-30 order-1 sm:order-2'>
                        <img src={Hero1} alt="gambar makanan" className='w-full sm:scale-105 sm:translate-y-5'/>
                    </div> 

                </div>

            </div>

         </div>
        </>
    )

}

export default Hero;
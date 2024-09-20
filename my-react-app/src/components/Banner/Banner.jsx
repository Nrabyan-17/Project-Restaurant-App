import React from 'react';
import Apple from '../../assets/img/apple.png';
import Kiwi from '../../assets/img/kiwi.png';
import Leaf from '../../assets/img/leaf.png';
import Lemon from '../../assets/img/lemon.png';
import Tomato from '../../assets/img/tomato.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {

    return (
        <>
          <div className="w-full py-14 relative">

            <div className="text-center py-16 tracking-wider text-2xl font-semibold text-dark mx-4">
                <h1>Taste the healthy difference</h1>
            </div>

            {/* Text Section */}
            <div className='space-y-10'>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10 mx-4">
                  <div></div>
                    <div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non temporibus minus est qui esse voluptatum dicta rerum, consectetur asperiores vel autem molestias et ab expedita? Cupiditate sequi quae eaque. Nam!</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10 mx-4">
                    <div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non temporibus minus est qui esse voluptatum dicta rerum, consectetur asperiores vel autem molestias et ab expedita? Cupiditate sequi quae eaque. Nam!</p>
                    </div>
                </div>
            </div>

            {/* Button Section */}
            <div className='flex justify-center mt-8 sm:mt-14'>
              <PrimaryButton />
            </div>

            {/* Image Section */}
            <div className='absolute top-16 left-16 sm:bottom-0 sm-left-0 opacity-50 sm:opacity-100'>
              <img src={Leaf} alt="" className='max-w-[160px]' />
            </div>

            <div className='absolute bottom-16 left-16 sm:bottom-0 sm-left-0 opacity-50 sm:opacity-100'>
              <img src={Tomato} alt="" className='max-w-[200px]' />
            </div>

            <div className='absolute top-9 -right-1 sm:bottom-0 sm-left-0 opacity-50 sm:opacity-100'>
              <img src={Lemon} alt="" className='max-w-[160px]' />
            </div>

            <div className='absolute hidden sm:block bottom-0 right-0'>
              <img src={Apple} alt="" className='max-w-[160px]' />
            </div>

            <div className='absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100'>
              <img src={Kiwi} alt="" className='max-w-[160px]' />
            </div>

          </div>


        </>
    )
}

export default Banner;
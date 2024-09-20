import { FaPhone } from 'react-icons/fa';
import { IoLocationSharp }from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';   

const Footer1 = () => {

    return (
        <>
            <div className="text-white mt-20">

                <div className="w-full bg-gradient-to-b from-rose-600 to-rose-800 rounded-t-3xl p-5">
                    {/* Heading Section */}
                    <h1 className='text-center font-semibold text-3xl text-yellow py-10'>Contact Us</h1>

                    {/* Grid Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6">

                            <div className='text-center space-y-4'>
                                <div className='flex justify-center'>
                                    <IoLocationSharp className='text-5xl'/>
                                </div>
                                <p>
                                No.11 PS 2, Jl. Penjaringan Asri II Jl. Penjaringan Asri VI, Penjaringan Sari, Kec. Rungkut, Surabaya, Jawa Timur 60297
                                </p>
                            </div>

                            {/* Address Section */}
                            <div className='text-center space-y-4'>
                                <div className='flex justify-center'>
                                    <MdEmail className='text-5xl'/>
                                </div>
                                <div>
                                    <p>indo@gofood.com</p>
                                    <p>info@gofood.com</p>
                                </div>
                            </div>

                            {/* Phone Number Section */}
                            <div className='text-center space-y-4'>
                                <div className='flex justify-center'>
                                    <FaPhone className="text-5xl"/>
                                </div>
                                <p>+62 888 0496 0683    WhatsApp</p>
                            </div>

                        </div>

                        <div>
                            <p className='text-center py-8'>© 2024 by GoFood, All Rights Reserved.</p>
                        </div>
                </div>
            </div>
        </>
    )

}

export default Footer1;
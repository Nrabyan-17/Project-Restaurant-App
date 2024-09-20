import Polygon from '../../assets/img/polygon.png'
import vectorWave from '../../assets/img/vector-wave.png'

const Footer = () => {

    const bgStyle = {
        backgroundImage: `url(${Polygon})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: "100%",
        height: "100%",
        position: "relative",
    }

    return (
        <div style={bgStyle} className='py-14'>

            <div className="w-full min-h-[500px] relative z-10">
                <h1 className="pt-20 text-center font-semibold tracking-wider text-3xl">About Us</h1>

                {/* Text Section */}
                <div className='bg-white/80 my-5 py-10 mx-10 px-10'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto doloremque reiciendis quo amet doloribus magni! Quo, ipsum vitae dolorem beatae, sit mollitia quas a soluta minima praesentium ut, repellat officia?
                    A accusantium provident facere quibusdam, porro eligendi dolores illo modi officia, voluptatem itaque. Alias necessitatibus provident, voluptate, hic accusamus nisi velit placeat mollitia possimus aut dolores magnam perspiciatis, quasi exercitationem.
                    Odit quo aliquid quasi debitis velit odio dicta ipsum, architecto esse maiores doloremque dignissimos vel magnam inventore nobis aliquam amet consequuntur obcaecati, aspernatur delectus rerum quam accusamus. Sequi, quaerat voluptatum!</p>
            
                </div>

            </div>

             {/* Wave Vector */}
             <div className='absolute top-0 right-0 w-full'>
                <img src={vectorWave} alt="" className='mx-auto'/>
            </div>


        </div>
    )
}

export default Footer;
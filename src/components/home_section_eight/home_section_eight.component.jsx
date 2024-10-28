// style
import './home_section_eight.style.css';
// react icons
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaHeart, FaRegCreditCard } from "react-icons/fa";
import { LuClock9 } from "react-icons/lu";
import CustomButton from '../custom_button/custom_button.component';

const HomeSectionEight = () => {
    return(
        <section className="w-full flex items-center relative min-h-[100vh] max-h-[880px] home_section_eight_bg bg-cover bg-fixed bg-no-repeat">
            {/* bg-overlay */}
            <div className="bg-[#00000059] z-[0] w-full h-full absolute top-0"></div>
            {/* adjuster */}
            <div className="max-w-[1200px] relative z-[0] w-[90%] mx-auto py-[25px] md:py-[40px]">
                {/* heading */}
                <h1 className='text-[4rem] henny-penny-regular text-center text-white'>Don't Wait...</h1>
                <h1 className='text-[4rem] henny-penny-regular text-center text-white'>Elevate Your Style with Glamour Sketches Today</h1>
                {/* sub heading */}
                <h3 className='text-[2rem] text-center text-white'>Unveil the latest trends and timeless pieces that redefine your wardrobe – shop now and transform your look effortlessly</h3>
                {/* specs */}
                <div className='flex flex-col md:flex-row items-center gap-[10px] justify-between text-white py-[20px]'>
                    {/* fast delivery */}
                    <div className='flex gap-[10px]'>
                        {/* icon */}
                        <LiaShippingFastSolid className='text-[2rem]' />
                        {/* description */}
                        <p className='text-[1.4rem]'>Fast Delivery</p>
                    </div>
                    {/* Satisfaction Guaranteed */}
                    <div className='flex gap-[10px]'>
                        {/* icon */}
                        <FaHeart className='text-[2rem]' />
                        {/* description */}
                        <p className='text-[1.4rem]'>100% Satisfaction Guaranteed</p>
                    </div>
                    {/* Secure Shopping */}
                    <div className='flex gap-[10px]'>
                        {/* icon */}
                        <FaRegCreditCard className='text-[2rem]' />
                        {/* description */}
                        <p className='text-[1.4rem]'>Secure Shopping</p>
                    </div>
                    {/* Money Back Guarantee */}
                    <div className='flex gap-[10px]'>
                        {/* icon */}
                        <LuClock9 className='text-[2rem]' />
                        {/* description */}
                        <p className='text-[1.4rem]'>30 Day Money Back Guarantee</p>
                    </div>
                </div>
                {/* button */}
                <div className='w-fit mt-[20px] mx-auto'>
                    <CustomButton colorWhite>BUY NOW</CustomButton>
                </div>
            </div>
        </section>
    )
}

export default HomeSectionEight;
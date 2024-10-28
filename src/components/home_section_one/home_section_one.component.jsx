// css
import CustomButton from '../custom_button/custom_button.component';
import './home_section_one.style.css';
// react icons
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaHeart, FaRegCreditCard } from "react-icons/fa";
import { LuClock9 } from "react-icons/lu";

const HomeSectionOne = () => {
    return(
        <section className="w-full flex items-center relative min-h-[100vh] max-h-[880px] home_section_one_bg bg-cover bg-fixed bg-no-repeat bg-center">
            {/* bg-overlay */}
            <div className="bg-[#00000059] z-[0] w-full h-full absolute top-0"></div>
            {/* adjuster */}
            <div className="max-w-[1200px] relative z-[1] w-[90%] mx-auto py-[25px] md:py-[40px]">
                {/* heading */}
                <h1 className='text-[4rem] henny-penny-regular text-center text-white'>Glamourous Clothing</h1>
                {/* sub heading */}
                <h3 className='text-[2rem] text-center text-white'>FOR YOU</h3>
                {/* button */}
                <div className='w-fit mt-[30px] mx-auto'>
                    <CustomButton colorWhite>BUY NOW</CustomButton>
                </div>
            </div>
            {/* specs */}
            <div className='max-w-[1200px] w-[90%] left-[50%] transform -translate-x-[50%] flex bottom-0 flex-col md:flex-row items-center gap-[10px] justify-between text-white absolute py-[20px]'>
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
        </section>
    )
}

export default HomeSectionOne;
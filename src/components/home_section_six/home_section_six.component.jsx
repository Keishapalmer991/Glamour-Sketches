// react icons
import { GiClothes } from "react-icons/gi";
import { FaUserTie, FaRegStar } from 'react-icons/fa';
import { MdSwapHoriz } from 'react-icons/md';
import CustomButton from "../custom_button/custom_button.component";

const HomeSectionSix = () => {
    return(
        <section className="w-full bg-white">
            {/* adjuster */}
            <div className="max-w-[1200px] py-[25px] md:py-[40px] relative z-[1] w-[90%] mx-auto">
                {/* heading */}
                <h1 className="text-[3rem] text-center pacifico-regular">The Glamour Sketches Difference</h1>
                {/* sub heading */}
                <h3 className="text-[2rem] text-center mt-[10px]">Effortless Style, Timeless Fashion</h3>
                {/* grid */}
                <div className="grid mt-[30px] w-full gap-[20px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {/* Premium fabrics */}
                    <div className="flex flex-col gap-[10px] items-center">
                        {/* icon */}
                        <div className="p-[15px] border rounded-full border-[#d3a2ad] w-fit">
                            <GiClothes className="text-[3rem] text-[#d3a2ad]" />
                        </div>
                        {/* title */}
                        <p className="font-semibold text-center text-[2rem] text-[#d3a2ad]">Premium Fabrics</p>
                        {/* description */}
                        <p className="text-[1.4rem] text-center">Our collections feature only the finest fabrics, offering comfort, durability, and elegance that elevates your style for any occasion.</p>
                    </div>
                    {/* Designed with You in Mind */}
                    <div className="flex flex-col gap-[10px] items-center">
                        {/* icon */}
                        <div className="p-[15px] border rounded-full border-[#d3a2ad] w-fit">
                            <FaUserTie className="text-[3rem] text-[#d3a2ad]" />
                        </div>
                        {/* title */}
                        <p className="font-semibold text-center text-[2rem] text-[#d3a2ad]">Designed with You in Mind</p>
                        {/* description */}
                        <p className="text-[1.4rem] text-center">At Glamour Sketches, we create pieces that not only look stunning but also feel great, empowering you with confidence and grace in every step.</p>
                    </div>
                    {/* Instantly Transformative */}
                    <div className="flex flex-col gap-[10px] items-center">
                        {/* icon */}
                        <div className="p-[15px] border rounded-full border-[#d3a2ad] w-fit">
                            <MdSwapHoriz className="text-[3rem] text-[#d3a2ad]" />
                        </div>
                        {/* title */}
                        <p className="font-semibold text-center text-[2rem] text-[#d3a2ad]">Instantly Transformative</p>
                        {/* description */}
                        <p className="text-[1.4rem] text-center">Whether it’s a day at the office or an evening out, our versatile designs allow you to seamlessly transition from casual to chic in an instant.</p>
                    </div>
                    {/* Your Style, Your Choice */}
                    <div className="flex flex-col gap-[10px] items-center">
                        {/* icon */}
                        <div className="p-[15px] border rounded-full border-[#d3a2ad] w-fit">
                            <FaRegStar className="text-[3rem] text-[#d3a2ad]" />
                        </div>
                        {/* title */}
                        <p className="font-semibold text-center text-[2rem] text-[#d3a2ad]">Your Style, Your Choice</p>
                        {/* description */}
                        <p className="text-[1.4rem] text-center">Mix and match our carefully curated pieces to create outfits that are uniquely yours, letting your personal style shine effortlessly.</p>
                    </div>
                </div>
                {/* button */}
                <div className='w-fit mt-[20px] mx-auto'>
                    <CustomButton colorBrown>BUY NOW</CustomButton>
                </div>
            </div>
        </section>
    )
}

export default HomeSectionSix;
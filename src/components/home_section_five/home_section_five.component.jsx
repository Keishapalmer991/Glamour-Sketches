import './home_section_five.style.css';
// react icons
import { FaUserAlt } from "react-icons/fa";

const HomeSectionFive = () => {
    return(
        <section className="w-full flex items-center relative min-h-[100vh] md:max-h-[880px] home_section_five_bg bg-cover bg-fixed bg-no-repeat">
            {/* bg-overlay */}
            <div className="bg-[#00000059] z-[0] w-full h-full absolute top-0"></div>
            {/* adjuster */}
            <div className="max-w-[1200px] relative z-[1] w-[90%] mx-auto py-[25px] md:py-[40px]">
                {/* heading */}
                <h1 className='text-[4rem] henny-penny-regular text-center text-white'>Why You'll Love Our Clothes</h1>
                {/* grid */}
                <div className="grid mt-[30px] w-full gap-[20px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {/* Premium fabrics */}
                    <div className="flex flex-col gap-[10px] items-center bg-white p-[20px] rounded-2xl">
                        {/* icon */}
                        <div className="p-[15px] border rounded-full border-[#d3a2ad] w-fit">
                            <FaUserAlt className="text-[3rem] text-[#d3a2ad]" />
                        </div>
                        {/* title */}
                        <p className="font-semibold text-center text-[2rem] text-[#d3a2ad]">John Doe</p>
                        {/* description */}
                        <p className="text-[1.4rem] text-center">Our collections feature only the finest fabrics, offering comfort, durability, and elegance that elevates your style for any occasion.</p>
                    </div>
                    {/* Designed with You in Mind */}
                    <div className="flex flex-col gap-[10px] items-center bg-white p-[20px] rounded-2xl">
                        {/* icon */}
                        <div className="p-[15px] border rounded-full border-[#d3a2ad] w-fit">
                            <FaUserAlt className="text-[3rem] text-[#d3a2ad]" />
                        </div>
                        {/* title */}
                        <p className="font-semibold text-center text-[2rem] text-[#d3a2ad]">Smith Jack</p>
                        {/* description */}
                        <p className="text-[1.4rem] text-center">At Glamour Sketches, we create pieces that not only look stunning but also feel great, empowering you with confidence and grace in every step.</p>
                    </div>
                    {/* Instantly Transformative */}
                    <div className="flex flex-col gap-[10px] items-center bg-white p-[20px] rounded-2xl">
                        {/* icon */}
                        <div className="p-[15px] border rounded-full border-[#d3a2ad] w-fit">
                            <FaUserAlt className="text-[3rem] text-[#d3a2ad]" />
                        </div>
                        {/* title */}
                        <p className="font-semibold text-center text-[2rem] text-[#d3a2ad]">John snow</p>
                        {/* description */}
                        <p className="text-[1.4rem] text-center">Whether it’s a day at the office or an evening out, our versatile designs allow you to seamlessly transition from casual to chic in an instant.</p>
                    </div>
                    {/* Your Style, Your Choice */}
                    <div className="flex flex-col gap-[10px] items-center bg-white p-[20px] rounded-2xl">
                        {/* icon */}
                        <div className="p-[15px] border rounded-full border-[#d3a2ad] w-fit">
                            <FaUserAlt className="text-[3rem] text-[#d3a2ad]" />
                        </div>
                        {/* title */}
                        <p className="font-semibold text-center text-[2rem] text-[#d3a2ad]">Lamine Yamal</p>
                        {/* description */}
                        <p className="text-[1.4rem] text-center">Mix and match our carefully curated pieces to create outfits that are uniquely yours, letting your personal style shine effortlessly.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSectionFive;
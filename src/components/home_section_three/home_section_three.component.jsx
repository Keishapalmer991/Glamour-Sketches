// css
import CustomButton from '../custom_button/custom_button.component';
import './home_section_three.style.css';

const HomeSectionThree = () => {
    return(
        <section className="w-full">
            {/* adjuster */}
            <div className="max-w-[1200px] relative z-[1] w-full md:w-[90%] mx-auto">
                <div className="flex flex-col md:flex-row w-full">
                    {/* img */}
                    <div className="w-full min-h-[500px] md:bg-scroll bg-fixed home_section_three_bg bg-cover bg-center bg-no-repeat md:w-[50%] relative">
                        {/* bg-overlay */}
                        <div className="bg-[#d1b5bb3d] z-[0] w-full h-full absolute top-0"></div>
                    </div>
                    {/* description */}
                    <div className="w-full md:w-[50%] bg-[#d1b5bb] py-[30px]">
                        <div className="flex w-[90%] mx-auto h-full items-center">
                            <div>
                                {/* heading */}
                                <h1 className='text-[3rem] md:mt-0 mt-[20px] font-bold text-center md:text-left henny-penny-regular'>Elevate Your Wardrobe at Home</h1>
                                {/* sub heading */}
                                <p className='text-[1.4rem] text-center md:text-left mt-[20px]'>
                                    Discover effortless style by exploring our curated collection from the comfort of your home. 
                                    From statement pieces to everyday essentials, Glamour Sketches brings you the latest in fashion to help you look and feel your best.
                                </p>
                                <p className='text-[1.4rem] mt-[20px]'>Glamour Sketches offer:</p>
                                <ul className='list-none mt-[10px] flex flex-col gap-[10px]'>
                                    <li className='text-[1.4rem] relative pl-6 before:absolute before:left-0 before:top-[0.6rem] before:w-2 before:h-2 before:bg-[#a54e14] before:transform before:rotate-45 before:content-[""]'>
                                        Timeless wardrobe staples that elevate your everyday style
                                    </li>
                                    <li className='text-[1.4rem] relative pl-6 before:absolute before:left-0 before:top-[0.6rem] before:w-2 before:h-2 before:bg-[#a54e14] before:transform before:rotate-45 before:content-[""]'>
                                        Statement pieces designed to turn heads at any occasion
                                    </li>
                                    <li className='text-[1.4rem] relative pl-6 before:absolute before:left-0 before:top-[0.6rem] before:w-2 before:h-2 before:bg-[#a54e14] before:transform before:rotate-45 before:content-[""]'>
                                        Trendsetting accessories to complete your unique look
                                    </li>
                                </ul>
                                <div className='w-fit mx-auto md:mx-0 mt-[20px]'>
                                    <CustomButton colorBrown><span className='text-[1.4rem]'>BUY NOW</span></CustomButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSectionThree;
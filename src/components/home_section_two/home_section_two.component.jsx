// images
import Handbag from '../../assets/home_section_two.webp';
import CustomButton from '../custom_button/custom_button.component';

const HomeSectionTwo = () => {
    return(
        <section className="w-full bg-white">
            {/* adjuster */}
            <div className="max-w-[1200px] py-[25px] md:py-[40px] relative z-[1] w-[90%] mx-auto">
                {/* heading */}
                <h1 className="text-[3rem] text-center pacifico-regular">What is <span className="text-[3rem] pacifico-regular font-bold">Glamour</span>Sketches</h1>
                {/* sub heading */}
                <h3 className="text-[2rem] text-center mt-[10px]">Discover Your Unique Style with Glamour Sketches Where Fashion Meets Art.</h3>
                {/* flex */}
                <div className="flex flex-col mt-[20px] items-center gap-[20px] md:flex-row">
                    {/* img */}
                    <div className='md:w-[40%]'>
                        <img src={Handbag} alt="Handbag" />
                    </div>
                    {/* description */}
                    <div className='md:w-[60%] flex items-center md:items-start flex-col gap-[20px]'>
                        <p className='text-[1.4rem] text-justify'>
                            At Glamour Sketches, we believe that fashion is an expression 
                            of individuality. Our collections are thoughtfully designed to 
                            inspire confidence and creativity, offering timeless pieces that 
                            blend contemporary trends with artistic flair. Whether you're 
                            looking for elegant evening wear, chic casual outfits, or statement 
                            accessories, Glamour Sketches curates styles that elevate your personal 
                            wardrobe. Explore our world, where every sketch tells a story, and every 
                            piece is crafted to make you stand out. Let your fashion journey begin with 
                            Glamour Sketches, where style meets sophistication.
                        </p>
                        <div className='w-fit'>
                            <CustomButton colorBrown><span className='text-[1.4rem]'>BUY NOW</span></CustomButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSectionTwo;
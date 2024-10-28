// images
import ClothRack from '../../assets/home_section_four.webp';
import CustomButton from '../custom_button/custom_button.component';

const HomeSectionFour = () => {
    return(
        <section className="w-full bg-white">
            {/* adjuster */}
            <div className="max-w-[1200px] py-[25px] md:py-[40px] relative z-[1] w-[90%] mx-auto">
                {/* heading */}
                <h1 className="text-[3rem] text-center pacifico-regular">Amazing Features</h1>
                {/* sub heading */}
                <h3 className="text-[2rem] text-center mt-[10px]">Discover the Future of Fashion with Glamour Sketches</h3>
                {/* image */}
                <div className="w-fit mx-auto md:max-w-[50%]">
                    <img src={ClothRack} alt="Cloth Rack" />
                </div>
                {/* button */}
                <div className='w-fit mx-auto mt-[30px]'>
                    <CustomButton colorBrown>SHOP NOW</CustomButton>
                </div>
            </div>
        </section>
    )
}

export default HomeSectionFour;
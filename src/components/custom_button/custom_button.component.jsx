import { Link } from "react-router-dom"

const CustomButton = ({children, clickFunction, colorWhite, colorBrown}) => {
    return(
        <Link onClick={clickFunction} className={`text-[1.8rem] bg-transparent flex items-center justify-center py-[1rem] px-[2rem] min-w-[200px] border transition-all ${colorWhite? 'text-white border-white hover:text-[#000000] hover:bg-white' : ''} ${colorBrown? 'text-[#a54e14] border-[#a54e14] hover:text-white hover:bg-[#a54e14]' : ''}`}>
            {children}
        </Link>
    )
}

export default CustomButton;
import { Route, Routes } from "react-router-dom"
import HomePage from "../../pages/home/home.page";
import Header from "../header/header.component";
import Footer from "../footer/footer.component";

const PublicArea = () => {
    const baseRoute = '/';
    return(
        <div>
            {/* Header */}
            <Header />
            {/* padding */}
            <div className="mb-[65px]"></div>
            {/* Routes */}
            <Routes>
                <Route path={baseRoute} exact element={<HomePage/>} />
            </Routes>
            {/* footer */}
            <Footer />
        </div>
    )
}

export default PublicArea;
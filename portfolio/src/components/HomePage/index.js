import { Component } from "react";
// import Header from "./Header";
import HomeBody from "./HomeBody";
import Footer from "./Footer";

class HomePage extends Component {
    render() {
        return (
            <>
                {/* <Header/> */}
                <HomeBody/>
                <Footer/>
            </>
        )
    }
}

export default HomePage
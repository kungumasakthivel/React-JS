import { Component } from "react";
// import Header from "../HomePage/Header";
import AboutBody from "./AboutBody";
import Footer from "../HomePage/Footer";

class AboutPage extends Component {
    render() {
        return(
            <>
                {/* <Header/> */}
                <AboutBody/>
                <Footer/>
            </>
        )
    }
}

export default AboutPage;
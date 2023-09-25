import { Component } from "react";
// import Header from "../HomePage/Header";
import ContactBody from "./ContactBody";
import Footer from "../HomePage/Footer";

class ContactPage extends Component {
    render() {
        return (
            <>
                {/* <Header/> */}
                <ContactBody/>
                <Footer/>
            </>
        )
    }
}

export default ContactPage 
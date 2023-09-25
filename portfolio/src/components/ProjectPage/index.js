import { Component } from "react"
// import Header from "../HomePage/Header"
import ProjectBody from "./ProjectBody"
import Footer from "../HomePage/Footer"

class ProjectPage extends Component {
    render() {
        return(
            <>
                {/* <Header/> */}
                <ProjectBody/>
                <Footer/>
            </>
        )
    }
}

export default ProjectPage
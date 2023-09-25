import { Component } from "react";
import './index.css'

class HomeBody extends Component {
    render() {
        return (
            <div className="body">
                <h4 className="para1">Hello, I am</h4>
                <h2 className="para2">Kunguma</h2>
                <h1 className="para3 ">Sakthivel</h1>
                <h6 className="para4">Young aspiring <span className="hignlight">Software Developer</span></h6>
            </div>
        )
    }
}

export default HomeBody
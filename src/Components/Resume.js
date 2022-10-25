import React from "react"
import General from './GeneralInfo'
import Experience from "./Experience";
import Education from "./Education";
import './Style.css'

class Resume extends React.Component{
    render(){
        return(
            <div>
                <h1>Resume App</h1>
                <General/>
                <Experience/>
                <Education/>
            </div>                                                           
        )        
    }
}
export default Resume;
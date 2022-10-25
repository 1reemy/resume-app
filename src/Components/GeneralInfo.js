import React from "react";

class General extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            general : {
                name :"Kareem Campbell",
                title : "Electrical Engineer",
                address : "Spanish Town Jamaica",
                tele : "(123)876-0549",
                email : "ezreemy@ezsellops.com",
                summary : "I am an engineer of 10 years expereince",
                skills : "Electrical Engineering Design, Maintenance, Javascript"                
            },
            submit : ""
        } 
        this.handleChange = this.handleChange.bind(this) 
        this.handleSubmit = this.handleSubmit.bind(this)      
    }
    handleChange = (e) => {
        const {name, value} = e.target        
        this.setState({            
            general:{
                ...this.state.general,
                [name] : value,
            }           
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const obj = this.state.general        
        this.setState({            
            submit : obj
        })       
    }
    render(){
        const {name, title, address, tele, email, summary, skills} = this.state.general
        return(
            <div className = "input">
                <form className = "data" onSubmit={this.handleSubmit}>
                    <label>Name:<input name = "name" type = "text" value = {name} onChange= {this.handleChange} placeholder="name"/></label>
                    <label>Title:<input name = "title" type = "text" value ={title} onChange = {this.handleChange} placeholder = "title"/></label>
                    <label>Address:<input name = "address" type = "text" value ={address} onChange = {this.handleChange} placeholder = "address"/></label>
                    <label>Telephone #:<input name = "tele" type = "text" value = {tele} onChange = {this.handleChange} placeholder = "tele"/></label>
                    <label>Email:<input name = "email" type = "text" value ={email} onChange = {this.handleChange} placeholder = "email"/></label>
                    <label>Profile:<textarea name = "summary" type = "text" value ={summary} onChange = {this.handleChange}></textarea></label>
                    <label>Skills:<textarea name = "skills" type = "text" value ={skills} onChange = {this.handleChange}></textarea></label>
                    <div className = "buttonPress"><button type = "submit">Submit</button></div>
                </form>
                <div className = "preview">
                    <h2>{this.state.submit.name}</h2>
                    <h2>{this.state.submit.title}</h2>
                    <p>{this.state.submit.address}</p>
                    <p>Tel#:{this.state.submit.tele}<span>Email:{this.state.submit.email}</span></p>
                    <h4>Profile:</h4>                    
                    <p>{this.state.submit.summary}</p>
                    <h4>Skills</h4>
                    <p>{this.state.submit.skills}</p>
                </div>
            </div>            
        )       
    }
}
export default General
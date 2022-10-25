import React from "react";

class Experience extends React.Component{ 
    constructor(props){
        super(props)
        this.state = {
            experience : [{
                company : "",
                position : "",
                time : "",
                desc : "" 
            }],
            submit : ""
        }        
        this.handleSubmit = this.handleSubmit.bind(this)      
    }
    handleChange(id, e){ 
        let data = this.state.experience; 
        data[id][e.target.name] = e.target.value;
        this.setState({data});
    }
    addExp(){
        const newExperience = {
            company : "",
            position : "",
            time : "",
            desc : ""
        }
        this.setState({
            experience : [...this.state.experience, newExperience]
        })
    }
    deleteExp(id){
        let experience = this.state.experience
        experience.splice(id, 1)
        this.setState({experience})
    }
    handleSubmit(e){
        e.preventDefault()
        const arr = this.state.experience.map((val, id) => {
            return (                
                <div key = {id}>
                    <h3>{val.company}</h3>
                    <h4>{val.position}</h4>
                    <h4>{val.time}</h4>
                    <p>{val.desc}</p>
                </div>
            )
        })
        this.setState({
            submit:arr
        })
    } 
    render(){     
        return(
            <div className = "input">            
                <form onSubmit={this.handleSubmit}>
                    <h2>Work Experience</h2>
                    {this.state.experience.map((val,i) => (
                            <div className="experience" key = {i}>
                                <label>Company:<input name = "company" type = "text" value = {val.company || ""} onChange = {e => this.handleChange(i, e)} placeholder = "Company" /></label>
                                <label>Position:<input name = "position" type = "text" value = {val.position || ""} onChange = {e => this.handleChange(i, e)} placeholder = "Position"/></label>
                                <label>Time:<input name = "time" type = "text" value = {val.time || ""} onChange = {e => this.handleChange(i, e)} placeholder = "Time" /></label>
                                <label>Role:<textarea name = "desc" type = "text" value = {val.desc || ""} onChange = {e => this.handleChange(i, e)} ></textarea></label>
                                {
                                    i ? <div className = "buttonPress"><button type = "button" onClick = {() => this.deleteExp(i)}>Remove</button></div> : null
                                }
                                <div className = "buttonPress">
                                    <button onClick = {() => this.addExp()}>Add</button>
                                    <button type = "submit">Submit</button>
                                </div>
                            </div>                          
                        )                            
                    )}
                </form>
                <div className = "preview">
                    <h2>Work Experience</h2>
                    <div>{this.state.submit}</div>
                </div>                             
            </div>            
        )
    }
}
export default Experience
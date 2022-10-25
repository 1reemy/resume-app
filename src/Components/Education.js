import React from "react";

class Education extends React.Component{ 
    constructor(props){
        super(props)
        this.state = {
            education : [{
                school : "",
                award : "",
                time : "",
                desc : "" 
            }],
            submit : ""
        }        
        this.handleSubmit = this.handleSubmit.bind(this)      
    }
    handleChange(id, e){ 
        let data = this.state.education; 
        data[id][e.target.name] = e.target.value;
        this.setState({data});
    }
    addExp(){
        const newEducation = {
            school : "",
            award : "",
            time : "",
            desc : ""
        }
        this.setState({
            experience : [...this.state.education, newEducation]
        })
    }
    deleteExp(id){
        let education = this.state.education
        education.splice(id, 1)
        this.setState({education})
    }
    handleSubmit(e){
        e.preventDefault()
        const arr = this.state.education.map((val, id) => {
            return (                
                <div key = {id}>
                    <h3>{val.school}</h3>
                    <h4>{val.award}</h4>
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
                    <h2>Education</h2>
                    {this.state.education.map((val,i) => (
                            <div className="experience" key = {i}>
                                <label>School:<input name = "school" type = "text" value = {val.school || ""} onChange = {e => this.handleChange(i, e)} placeholder = "School" /></label>
                                <label>Award:<input name = "award" type = "text" value = {val.award || ""} onChange = {e => this.handleChange(i, e)} placeholder = "Award"/></label>
                                <label>Time:<input name = "time" type = "text" value = {val.time || ""} onChange = {e => this.handleChange(i, e)} placeholder = "Time" /></label>
                                <label>Courses:<textarea name = "desc" type = "text" value = {val.desc || ""} onChange = {e => this.handleChange(i, e)} ></textarea></label>
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
                    <h2>Education</h2>
                    <div>{this.state.submit}</div>
                </div>                             
            </div>            
        )
    }
}
export default Education
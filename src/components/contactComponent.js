import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            orientation : "",
        }
        this.handleOrientation = this.handleOrientation.bind(this);
    }

    handleOrientation(){
        if (window.innerWidth >= window.innerHeight) {
            this.setState({orientation:"landscape"})  
        }
         else  {
             this.setState({orientation:"portrait"})
        }
    }

    componentWillMount(){
        this.handleOrientation()
    }
    componentDidMount(){
       
        window.addEventListener("resize",this.handleOrientation)
    }
        
    render(){
        var grid = this.state.orientation === "portrait" ? "col-12 pt-3" : "col-6" ; 
        var row =  this.state.orientation === "portrait" ? "row" : "d-flex flex-row-reverse pt-3";
        return(
            <div className= "contact-page">
                <div className = "container-fluid">
                

                    <h1 className ="text-center contact-header"> Contact </h1>

                    <div className = {row} >
                    <div className = {grid}>
                        <p>
                            Have an idea for that perfect center piece kitchen dinning table?  Looking for the right shelf to complete your industrial minimalist office or study room? I wanna hear about it!
                            Please fill out this form and I will get back to you as soon as I can. Thank You!
                        </p>
                    </div> 
                    <div className = {grid}>
                        <Form>
                            <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="name" name="name" id="name" placeholder="Name" />

                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Email" />

                            <Label for="phone">Phone</Label>
                            <Input type="phone" name="phone" id="phone" placeholder="Phone" />


                            </FormGroup>

                            <FormGroup>
                                <Label for="message">Message</Label>
                                <Input type="textarea" name="message" id="message" />
                            </FormGroup>
                            <div className = "text-center send-btn">
                                SEND
                            </div>
                        </Form>
                    </div>



                    </div>

                 </div>
            </div>
        );
    }
}

export default Contact 
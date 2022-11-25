import Status from "./form"
import React, { Component } from 'react';
import Displaystatus from "./displaystatus";
import '../App.css';


export default class Statusindex extends Component{
    constructor(props){
        super(props);
        this.state = {
          messages: "", 
          new_message:[]
        }
    }
    // to store in set message
    getStatus=(status)=>{
        this.setState({
            messages:status.target.value
        })
    }
    // to store in set new_message
    new_message=()=>{
        let updated=[this.state.messages,...this.state.new_message]
        this.setState({
            messages:"",
            new_message:updated
        })
    }
    // to delete
    delete=(id)=>{
        let delete_status=[...this.state.new_message]
        delete_status.splice(id,1)
        this.setState({
            new_message:delete_status
        })
    }
   render(){
    return(<>
        <div className="container">
            <Status getStatus={this.getStatus} new_message={this.new_message}/>
            <div>
                <table className="table mt-5">
                            <thead>
                                <tr>
                                    <th scope="col" className="text-center heading">ID</th>
                                    <th scope="col" className="text-center heading">To Do</th>
                                    <th scope="col" className="text-center heading">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.new_message.map((items,index)=>{
                                    return(<Displaystatus  key={index} status={items} delete_status={this.delete} id={index} />)
                                })
                            }
                            </tbody>
                </table>
            </div>
        </div>

    </>)
   }
}
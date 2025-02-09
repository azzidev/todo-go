import React, {Component} from "react";
import axios from "axios";
import {Card, Header, Form, Input, Icon} from "semant-ui-react"

let endpoint = "http://localhost:9000";

class ToDoList extends Component{
    constructor(props) {
        super(props);

        this.state = {
            task: "",
            items: [],
        };
    }
    componentDidMount(){
        this.getTask();
    }

    render(){
        return(
            <div>
                <div className="row">
                    <Header className="header" as="h2" color="lightgreen">TO DO LIST</Header>
                </div>
            </div>
        )
    }
}

export default ToDoList;
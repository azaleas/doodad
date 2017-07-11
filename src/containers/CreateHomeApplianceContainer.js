import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Redirect from 'react-router-dom/Redirect';

import { Button, Modal, Dropdown} from 'semantic-ui-react';

import api from './../utils/api';

import types from './../utils/typesData';

class CreateHomeApplianceContainer extends Component {

    constructor(props) {
        super(props);
        this.state={
            title: '',
            types: types,
            subTypes: [],
            subTypeEnable: false,
            type: '',
            subType: '',
            fieldErrors: {},
            redirect: false,
        }
    }


    onTitleChange = (event) => {
        this.setState({
            title: event.target.value  
        })
    }

    componentDidMount(){
        this.setState({
            type: Object.keys(this.state.types)[0],
        })
    }
    componentWillReceiveProps(){
        this.setState({
            redirect: false,
        })
    }

    onTypeChange = (event, object) => {
        const type = object.value;
        this.setState({
            type,
        });

        if(this.state.types[type].subTypes){
            this.setState({
                subTypeEnable: true,
                subTypes: this.state.types[type].subTypes,
                subType: Object.keys(this.state.types[type].subTypes)[0],
            })
        }
        else{
            this.setState({
                subTypeEnable: false,
                subType: '',
            })
        }
    }

    onSubTypeChange = (event, object) => {
        const subType = object.value;
        this.setState({
            subType,
        });
    }

    modalClose = () => {
        this.setState({
            title: '',
            subTypeEnable: false,
            type: Object.keys(this.state.types)[0],
            subType: '',
            fieldErrors: {},
        })
    }

    formSubmit = (event) =>{

        event.preventDefault();

        const fieldErrors = this.validate(this.state.title, this.state.type);

        this.setState({
            fieldErrors,
        });
        
        if(Object.keys(fieldErrors).length >= 1) return;

        let type = this.state.type;

        let dataObject = {
            type,
            value: this.state.types[type].value,
        }

        if(this.state.subType){
            type = `${this.state.subType}-${(type === "machine" ? "switch" : type)}`;

            dataObject = Object.assign(
                {}, 
                {type},
                this.state.types[this.state.type].subTypes[this.state.subType]
            )
        }

        const data = {
            name: this.state.title,
            data: dataObject,
        }

        
        api.createHomeAppliance(data)
            .then((response) => {
                this.setState({
                    redirect: true,
                    title: '',
                    subTypeEnable: false,
                    type: Object.keys(this.state.types)[0],
                    subType: '',
                    fieldErrors: {},
                })
            })

    }

    validate = (title, type) => {
        const errors = {};
        if(!title || typeof(title) === "undefined"){
            errors.title = true;
        }
        if(!type || typeof(type) === "undefined"){
            errors.type = true;
        }
        return errors;
    }


    render() {
        const type = this.state.type;
        return (
            (this.state.redirect)
            ?(
                <Redirect push to="/home" />
            )
            :(
                <div className="create-homeappliance">
                    <Modal 
                        trigger={
                            <div className="tac">
                                <br/>
                                <Button 
                                    color="green"
                                    inverted>
                                    New Home Appliance
                                </Button>
                            </div>
                        } 
                        onClose={this.modalClose}
                        size="small"
                        closeIcon='close'>
                        <Modal.Content>
                            <form 
                                onSubmit={this.formSubmit}
                                className="ui form">
                                <div className={"field " + 
                                    (this.state.fieldErrors.title ? "error" : "")}>
                                    <input 
                                        type="text"
                                        name="title"
                                        onChange={this.onTitleChange}
                                        value={this.state.title}
                                        placeholder="Appliance name"/>
                                </div>
                                <div className={"field " + 
                                    (this.state.fieldErrors.type ? "error" : "")}>
                                    <Dropdown 
                                        selection 
                                        onChange={this.onTypeChange}
                                        value={(!type.length ? Object.keys(this.state.types)[0] : type)} 
                                        options={Object.keys(this.state.types).map((el) => {
                                            return (
                                                {
                                                    key: el,
                                                    value: el,
                                                    text: this.state.types[el].definition
                                                }
                                            )    
                                        })} />
                                </div>
                                {
                                    (this.state.subTypeEnable)
                                    ? (
                                        <div className={"field " + 
                                            (this.state.fieldErrors.subType ? "error" : "")}>
                                            <Dropdown 
                                                selection 
                                                onChange={this.onSubTypeChange}
                                                value={this.state.subType || Object.keys(this.state.subTypes)[0]} 
                                                options={Object.keys(this.state.subTypes).map((el) => {
                                                    return (
                                                        {
                                                            key: el,
                                                            value: el,
                                                            text: el.toUpperCase()
                                                        }
                                                    )    
                                                })} />
                                        </div>
                                    )
                                    :(<p></p>)
                                }
                                <div className="tac">
                                    <input 
                                        type="submit" 
                                        className="ui button small green" 
                                        value="Submit"/>
                                </div>
                            </form>
                        </Modal.Content>
                    </Modal>
                </div>
            )
        );
    }
}

CreateHomeApplianceContainer.propTypes = {
    className: PropTypes.string,
};

export default CreateHomeApplianceContainer;

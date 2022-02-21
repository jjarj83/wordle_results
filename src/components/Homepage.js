import React, {Component} from "react";
import Modal from 'react-modal';
import PostModal from "./PostModal";
import FileList from "./FileList";
import {Button, ThemeProvider} from "@mui/material";
import "./Style.css";

class Homepage extends Component {
    state = {
        isOpen: false
    };

    constructor(e) {
        super(e);
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)

    }

    openModal() {
        this.setState({isOpen: true});
    }

    closeModal(response) {
        this.setState({isOpen: false});
    }

    afterOpen() {
        console.log("Modal just opened");
    }

    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <Button variant='contained' color={"buttons"} onClick={this.openModal}>Submit Wordle
                    Results</Button>
                <Modal
                    isOpen={this.state.isOpen}
                    onAfterOpen={this.afterOpen}
                    onRequestClose={this.closeModal}
                    contentLabel={"Make PostModal"}
                    ariaHideApp={false}
                >
                    <Button variant='contained' color={"buttons"} onClick={this.closeModal}>Close</Button>
                    <PostModal closeModalFunction={this.closeModal}/>
                </Modal>
                <br/>
                <br/>
                <FileList/>
            </ThemeProvider>
        );
    }
}

export default Homepage;
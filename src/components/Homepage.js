import React, {Component} from "react";
import Modal from 'react-modal';
import PostModal from "./PostModal";
import FileList from "./FileList";
import {Alert, Button, Collapse, IconButton, ThemeProvider} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import "./Style.css";

class Homepage extends Component {
    state = {
        isOpen: false,
        positiveAlert: false,
        alreadySubmitted: false,
    };

    //To over simplify, think of the modal as running in a seperate thread,
    // so this constructor binds the same instance of the functions and variables together into the modal,
    // letting us control the same data.
    constructor(e) {
        super(e);
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    //Opens Modal
    openModal() {
        this.setState({isOpen: true});
    }

    //Closes modal, with a case for if the submission was just sent, show the alert and grey out the button
    closeModal(response) {
        if (response === 1) {
            this.setState({isOpen: false, positiveAlert: true, alreadySubmitted: true});
        }
        this.setState({isOpen: false});
    }

    //Is called after the modal finishes opening, currently just here so i remember it exists, doesn't do anything
    afterOpen() {
        console.log("Modal just opened");
    }

    render() {
        return (
            //Theme provider gives us access to the custom button colors
            <ThemeProvider theme={this.props.theme}>
                <Button variant='contained' color={"buttons"} disabled={this.state.alreadySubmitted}
                        onClick={this.openModal}>
                    Submit Wordle Results
                </Button>
                {/*Not rendered in line, will overlay page*/}
                <Modal isOpen={this.state.isOpen} onAfterOpen={this.afterOpen} onRequestClose={this.closeModal}
                       contentLabel={"Make Post Modal"} ariaHideApp={false}>
                    <Button variant='contained' color={"buttons"} onClick={this.closeModal}>Close</Button>
                    <PostModal closeModalFunction={this.closeModal}/>
                </Modal>
                <br/>
                {/*A transition element to smoothly place alert on screen*/}
                {/*SX tag is shortcut to add css. Currently unused*/}
                <Collapse in={this.state.positiveAlert}>
                    <Alert
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    this.setState({positiveAlert: false});
                                }}
                            >
                                <CloseIcon fontSize="inherit"/>
                            </IconButton>
                        }
                        sx={{}}
                    >
                        Successfully submitted results
                    </Alert>
                </Collapse>
                <br/>
                <FileList/>
            </ThemeProvider>
        );
    }
}

export default Homepage;
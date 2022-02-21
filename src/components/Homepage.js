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

    constructor(e) {
        super(e);
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    openModal() {
        this.setState({isOpen: true});
    }

    closeModal(response) {
        if (response === 1) {
            this.setState({isOpen: false, positiveAlert: true, alreadySubmitted: true});
        }
        this.setState({isOpen: false});
    }

    afterOpen() {
        console.log("Modal just opened");
    }

    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <Button variant='contained' color={"buttons"} disabled={this.state.alreadySubmitted}
                        onClick={this.openModal}>Submit Wordle
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
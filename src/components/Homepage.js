import React, {Component} from "react";
import Modal from 'react-modal';
import PostModal from "./PostModal";
import FileList from "./FileList";

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

    closeModal() {
        this.setState({isOpen: false});
    }

    afterOpen() {
        console.log("Modal just opened");
    }

    render() {
        return (
            <div>
                <button onClick={this.openModal}>Submit Wordle Results</button>
                <Modal
                    isOpen={this.state.isOpen}
                    onAfterOpen={this.afterOpen}
                    onRequestClose={this.closeModal}
                    contentLabel={"Make PostModal"}
                >
                    <button onClick={this.closeModal}>Close</button>
                    <PostModal/>
                </Modal>
                <FileList/>
            </div>
        );
    }
}

export default Homepage;
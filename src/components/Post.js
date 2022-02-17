import React, {Component} from "react";
import './Style.css';
import {uploadResults} from "../firebase/firestore";

//File docs: https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
//React docs simple forms: https://reactjs.org/docs/forms.html
//Blank space: https://stackoverflow.com/questions/40264084/best-practice-when-adding-whitespace-in-jsx

class Post extends Component {
    state = {
        status: 0,
        isOpen: true,
    }

    constructor(e) {
        super(e);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        if (e.target['result'].value === '') {
            alert("There is no items to upload");
        } else {
            let result = e.target['result'].value
            let wordle = result.match(/^\d+|\d+\b|\d+(?=\w)/g)
            console.log(wordle)
            console.log(wordle.length)
            if (wordle.length === 3) {
                uploadResults(e.target['name'].value, e.target['result'].value, e.target['message'].value, parseInt(wordle[0]), parseInt(wordle[1])).then(result => {
                    alert('Results successfully uploaded!');
                    this.setState({status: 1})
                })
            } else {
                alert("The wordle results string is broken. make sure you pasted it right")
            }
        }
    }

    render() {
        if (this.state.status === 0) {
            return (
                <div>
                    Post results here
                    <br/>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                            <input type={"text"} id={'name'}/>
                        </label>
                        <br/>
                        <label>Copy and paste results from wordle here
                            <input type={'text'} id={'result'}/>
                        </label>
                        <br/>
                        <label>
                            Comments to post with the results?
                            <input type={'text'} id={'message'}/>
                        </label>
                        <br/>
                        <br/>
                        <label>Post: <span> </span>
                            <input type={'submit'} id={'submit'} value={'Submit'}/>
                        </label>
                    </form>
                </div>);
        } else if (this.state.status === 1) {
            return (
                <div>
                    Success Posting
                </div>
            );
        } else {
            return (
                <div>
                    Error?
                </div>
            );
        }
    }
}

export default Post;
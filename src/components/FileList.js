import React, {Component} from "react";
import './Style.css';
import {queryByResults} from "../firebase/firestore";

class FileList extends Component {
    state = {
        files: [
            <tr key={0}>
                <td>
                    Results Downloading
                </td>
            </tr>
        ]
    };

    componentDidMount() {
        let wordle = 243 + (((new Date(new Date().toLocaleDateString()).getTime()) - (new Date("2/17/2022")).getTime()) / (1000 * 3600 * 24))

        this.findResults(wordle)
    }

    findResults(wordleID) {
        console.log(wordleID)
        let wordleResults = [];
        queryByResults(wordleID).then((result) => {
            if (result !== undefined && result.length !== 0) {
                result.forEach((doc) => {
                    doc = doc.data();
                    console.log(typeof doc['submissionTime'])
                    wordleResults.push(
                        <tr key={doc['user'] + doc['wordle']}>
                            <td>
                                {doc['user']}
                            </td>
                            <td>
                                {doc['result']}
                            </td>
                            <td>
                                {doc['message']}
                            </td>
                            <td>
                                {doc['submissionTime']}
                            </td>
                        </tr>
                    );
                });
                this.setState({results: wordleResults});
            }
        });
    }

    renderFolderContents() {
        return <table>
            <thead>
            <tr>
                <th>Results</th>
            </tr>
            </thead>
            <tbody>
            {this.state.results}
            </tbody>
            <tfoot>
            <tr>
                <td>The end</td>
            </tr>
            </tfoot>
        </table>;
    }

    render() {
        return (
            <div className={'FileList'}>
                {this.renderFolderContents()}
            </div>
        );
    }
}

export default FileList
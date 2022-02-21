import React, {Component} from "react";
import './Style.css';
import {queryByResults} from "../firebase/firestore";
import {Card, CardContent, Grid, Typography} from "@mui/material";

class FileList extends Component {
    state = {
        wordle: 243 + (((new Date(new Date().toLocaleDateString()).getTime()) - (new Date("2/17/2022")).getTime()) / (1000 * 3600 * 24)),
        files: []
    };

    componentDidMount() {
        this.findResults(this.state.wordle)
    }

    findResults(wordleID) {
        console.log(wordleID)
        let wordleResults = [];
        queryByResults(wordleID).then((result) => {
            if (result !== undefined && result.length !== 0) {
                result.forEach((doc) => {
                    doc = doc.data();
                    wordleResults.push(
                        this.resultCard(doc)
                    );
                });
                this.setState({results: wordleResults});
            }
        });
    }

    resultCard(doc) {
        return (
            <Grid item>
                <Card sx={{width: 400}}>
                    <CardContent className={'FileCard'}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Typography sx={{fontSize: 20}} color={"text.primary"} gutterBottom>
                                    {doc['guess']}/6 : {doc['user']}
                                </Typography>
                                <Typography variant={"h6"} component={"div"}>
                                    {doc['message']}
                                </Typography>
                                <Typography variant={'body2'}>
                                    {new Date(doc['submissionTime']).toLocaleString()}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography sx={{fontSize: 15}} color={'text.secondary'}
                                            style={{whiteSpace: 'pre-line'}}>
                                    {doc['result']}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        );
    }


    renderFolderContents() {
        return (
            <div>
                <Grid container spacing={1} direction={"column"} alignItems={"center"} justify={"center"}>
                    {this.state.results}
                </Grid>
            </div>
        );
    }

    render() {
        return (
            <div className={'FileList'}>
                <Typography variant={'h4'}>
                    Results for Wordle: {this.state.wordle}
                </Typography>
                <br/>
                {this.renderFolderContents()}
            </div>
        );
    }
}

export default FileList
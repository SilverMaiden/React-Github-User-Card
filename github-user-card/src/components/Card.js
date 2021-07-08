import React from 'react';
import { Card } from 'reactstrap';

const GitCard = (props) => {



    return(
        <>
            <Card className="git-card">
                <img src={props.data.avatar_url} />
                <span>
                    <p>Username: {props.data.login} </p>
                    <p> Name: {props.data.name} </p>
                    <p> Followers: {props.data.followers} </p>
                    <p> Following: {props.data.following}</p>
                </span>
            </Card>
        </>

    )
}

export default GitCard;

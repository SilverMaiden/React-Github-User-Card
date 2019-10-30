import React from 'react';
import Card from './Card';
import axios from 'axios';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            responseData: {},
            usersArr: [],
            currentUser:"silvermaiden",
        }
    };

    componentDidMount() {
        axios.get(`https://api.github.com/users/${this.state.currentUser}`)
        .then(response => {
            this.setState({usersArr: [this.state.usersArr, response.data]})
            this.setState({followersArr: [...this.state.followersArr, response.data.followers]})
            console.log(this.state.followersArr);
            this.state.followersArr.forEach(person => {
                axios.get(`https://api.github.com/users/${person.login.toLowerCase()}`)
                .then(response => {
                    this.setState({usersArr: [...this.state.usersArr, response.data]})
                })
            })
        })
    };



    render() {
        return (
            <>
            {console.log(this.state.usersArr)}
                <h1> HOME PAGE </h1>
                <Card data={this.state.responseData} />
            </>

        )
    }
}

export default Home;

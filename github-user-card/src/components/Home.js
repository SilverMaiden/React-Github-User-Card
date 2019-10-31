import React from 'react';
import GitCard from './Card';
import axios from 'axios';

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            followersUrlArr: [],
            usersArr: [],
            currentUser:"silvermaiden",
        }
    };

    componentDidMount() {
        axios.get(`https://api.github.com/users/${this.state.currentUser}`)
        .then(response => {
            this.setState({usersArr: [...this.state.usersArr, response.data]})
            this.setState({followersUrlArr: [...this.state.followersUrlArr, response.data.followers_url]})
            axios.get(`${this.state.followersUrlArr}`)
            .then(response => {
                response.data.forEach(person => {
                    let username = person.login.toLowerCase();
                    axios.get(`https://api.github.com/users/${username}`)
                    .then(response => {
                        this.setState({usersArr: [...this.state.usersArr, response.data]})

                    })
                })
            })
        })
    };



    render() {
        return (
            <div className="card-container">
                <h1> Github Cards </h1>
                {console.log(this.state.usersArr)}
                {this.state.usersArr.map(user => (
                    <GitCard data={user} />
                ))}
            </div>

        )
    }
}

export default Home;

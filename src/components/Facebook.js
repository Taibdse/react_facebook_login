import React from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';

class Facebook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            userId: '',
            name: '',
            email: '',
            picture: ''
        };
    }

    componentClicked = () => {
        console.log('Clicked');
    }

    responseFacebook = response => {
        console.log(response)
        this.setState({ 
            isLoggedIn: true, 
            userId: response.userID, 
            name: response.name, 
            email: response.email, 
            picture: response.picture.data.url 
        });
    }

    render() {
        let fbContent;
        if(this.state.isLoggedIn){
            fbContent = (
                <div style={{ width: '400px', 
                margin:'autho', 
                background:'#f4f4f4',
                padding: '20px',
                color: "#282c34"
                }}>
                    <img src={this.state.picture} />
                    <h2>Welcome {this.state.name}</h2>
                    Email: {this.state.email}
                </div>
            );
        } else {
            fbContent = (
                <FacebookLogin
                appId="2685676194782277"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />
            );
        }

        return (
            <div>
                {fbContent}
            </div>
        );
    }
}

Facebook.propTypes = {};

export default Facebook;

import React, {Component} from 'react';
import Loading from "../components/Loading";
import {getUserData} from "../redux/actions";
import {connect} from "react-redux";


class Splash extends Component {
    render() {
        const {rehydrated} = this.props;

        if (rehydrated === true) {
            const {user, getUserData} = this.props;
            let api_token = '';
            if (user)
                api_token = user.api_token;
            getUserData(api_token);
        }

        return (
            <Loading color="#fff"/>
        )
    }
}

const mapStateToProps = ({auth, rehydrated}) => {
    const {user} = auth;
    return {user, rehydrated};
};

export default connect(mapStateToProps, {getUserData})(Splash);
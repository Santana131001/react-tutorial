import React from 'react'

class LoginController extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username : "",
            password : "",
            styleCard: "login-padding-card",
            error : false
        }
    }
    onClick = (username, password) => {
        if(username==="admin" && password==="admin"){
            this.setState({
                error : false
            })
            this.props.history.push("/dashboard");
        }else{
            this.setState({
                error : true,
                styleCard : "login-padding-card-error"
            })
        }
    }
    onChangeInput = (state, e) => {
        this.setState({ [state]: e.target.value })
    }
}

export default LoginController
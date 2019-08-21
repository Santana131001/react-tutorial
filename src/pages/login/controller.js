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
    onChangeInput = (state, event) => {
        this.setState({ [state]: event.target.value })
        console.log(event.target.value)
        console.log("Ini State Username : ", this.state.username)
    }
}

export default LoginController
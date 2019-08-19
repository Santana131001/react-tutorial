import React from 'react'

class LoginController extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpenReady: false,
            dataEka: [{
                name: "Eka Puspa Dewi",
                lahir: "Bandung, 26 Maret 2001",
                instagram: "@ekaapsd",
                wa: "+62 896-5669-4201",
                idLine: "Ekaaapd"
            }]
        }
    }
    onClickOpenReady = (e) => {
        if (this.state.isOpenReady) {
            this.setState({ isOpenReady: false })
        } else {
            this.setState({ isOpenReady: true })
        }
    }
}

export default AboutController
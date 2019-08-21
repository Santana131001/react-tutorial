import React from 'react'
import './style.scss'

class Input extends React.Component {
    render() {
        const { value = '', classNameWrapper = '', info = null, label = null, placeholder = '', type = '', className = 'form-group ', onChange = () => { }, onClick = () => { }, disabled = false, icon = '', pass = '', classNamePassword = '' } = this.props
        return (

            <div className={"".concat(classNameWrapper)}>
                {label ? <label>{label}</label> : null}
                <input placeholder={placeholder} type={type} value={value} className={"form-control input-default ".concat(className)} disabled={disabled} onChange={onChange}></input>
                {pass ?
                    <img className={classNamePassword} src={"static/icons/".concat(icon, ".png")}
                        onClick={onClick}
                    />
                    :
                    null
                }
                {info ? <small id="emailHelp" className="form-text text-muted">{info}</small> : null}

            </div>
        )
    }
}



export default Input
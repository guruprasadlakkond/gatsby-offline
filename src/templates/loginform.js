import React from 'react'
import createElements from '../utils/compGenerator'
import ReactDOM from 'react-dom'
import axios from 'axios'
//editing it
export default class LoginFrom extends React.Component {

    /* createElements = (appForm) => {

        return appForm.webElementGroups.map(elements => {

            let comp = elements.webElements.map(cwe => {

                switch (cwe.coreWebElement.type) {
                    case 'text':
                        return (
                        <div>
                            <label>
                                {cwe.labelTranslated}
                            </label>
                            <input 
                        type="{cwe.coreWebElement.type}" 
                        name="{cwe.coreWebElement.name}"
                        key="{cwe.coreWebElement.name}"/>
                        </div>)
                    case 'password':
                        return (
                        <div>
                            <label>
                                {cwe.labelTranslated}
                            </label>
                            <input 
                        type="{cwe.coreWebElement.type}" 
                        name="{cwe.coreWebElement.name}"
                        key="{cwe.coreWebElement.name}"/>
                        </div>)
                    case 'submit':
                        return (<div>
                            <button 
                        type="{cwe.coreWebElement.type}" 
                        name="{cwe.coreWebElement.name}"
                        key="{cwe.coreWebElement.name}" >
                                {cwe.labelTranslated}</button>
                            </div>)

                    default : 
                        return ''
                }
            })
            return comp
        })

    } */

    componentWillMount = () => {
        console.log('component will mount');
    }

    loginHandler = () => {

        var username = ReactDOM.findDOMNode(this.refs.username).value
        var password = ReactDOM.findDOMNode(this.refs.password).value
        console.log(username)
        console.log(password)
        axios.post('/login',{
            username,
            password
        }).then(response => {
            console.log(response.data)
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        /* var elements = this.createElements(this.props.pathContext.data).reduce((a,c,ci) => {
            return a + c;
        }); */

        var elements = createElements(this.props.pathContext.data,this.loginSubmitHandler);

        console.log(elements)
        return (
            <div>
                <h1>Login</h1>
                {elements}
            </div>
        )
    }

}
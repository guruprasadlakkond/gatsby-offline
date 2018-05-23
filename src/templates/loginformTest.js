import React from 'react'
import createElements from '../utils/compGenerator'
import ReactDOM from 'react-dom'
import axios from 'axios'

export default class LoginFrom extends React.Component {

    state = {
        data : {}
    }
    
    componentWillMount = () => {

        console.log(this.props.pathContext.appID);
        console.log(this.props.pathContext.formID)

        var appID = this.props.pathContext.appID ;
        var formID = this.props.pathContext.formID;
        axios({
            url: '/'+ appID + '/webform/login/' + formID,
            auth:{
                Username:'braun_270_enca',
                Password:'s&UkkPxpVT&j76W#'
            },
            headers: {'Access-Control-Allow-Origin': '*'},
            baseURL : 'http://stage.grs-pg.com/rest/app'}).then(response => {
            console.log(response)
            this.setState({data:JSON.parse(response)});
        }).catch(err => {
            console.log(err)
            this.setState({data:err.message})
        })
        /* request.get('http://stage.grs-pg.com/rest/app/'+ this.props.pathContext.appID + '/webform/login/' + this.props.pathContext.formID, (err, response, body) => {

            // if(response.)
            this.setState({data:JSON.parse(body)});
        }).auth('braun_270_enca', 's&UkkPxpVT&j76W#') */
    }

    loginHandler = () => {
        var username = ReactDOM.findDOMNode(this.refs.username).value
        var password = ReactDOM.findDOMNode(this.refs.password).value
        axios.post('/login',{
            username,
            password
        }).then(response => {
            console.log(response.data)

            localStorage.setItem('braunToken', response.data)
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        /* var elements = this.createElements(this.props.pathContext.data).reduce((a,c,ci) => {
            return a + c;
        }); */

        console.log(this.state.data)
        var elements = this.state.data.webFormId !== undefined ? createElements(this.state.data,this.loginSubmitHandler) : null;

        return (
            <div>
                <h1>Login</h1>
                {elements}
            </div>
        )
    }

}
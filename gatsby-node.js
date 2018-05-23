/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const request = require('request');
const path = require('path');

exports.createPages = ({graphql, boundActionCreators}) => {
    const { createPage } = boundActionCreators

    const loginTemplate = path.resolve('src/templates/loginForm.js')
    let appId = 270;
    let webFormId = 1343;
    return new Promise((resolve, reject) => {

        request.get('http://stage.grs-pg.com/rest/app/270/webform/login/1343', (err, response, body) => {
            resolve(createPage({
                path :'/login',
                component : loginTemplate,
                context : {
                    data : JSON.parse(body)
                }
            }));
            // resolve(body);
        }).auth('braun_270_enca', 's&UkkPxpVT&j76W#')
        
    }).then(()=>{

        var loginTemplate =  path.resolve('src/templates/loginformTest.js');
        
        var grs = require('./data/en-US/grs.json');
        createPage({
            path :'/testlogin',
            component : loginTemplate,
            context : {
                appID : 270,
                formID : 1343
            }
        })
    })
}
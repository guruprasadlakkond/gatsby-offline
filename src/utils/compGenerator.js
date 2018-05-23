import React from 'react'

export default (appForm, submitBtnHandler) => {

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
                    key="{cwe.coreWebElement.name}"
                    ref="username"/>
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
                    key="{cwe.coreWebElement.name}"
                    ref="password"/>
                    </div>)
                case 'submit':
                    return (<div>
                        <button 
                    type="{cwe.coreWebElement.type}" 
                    name="{cwe.coreWebElement.name}"
                    key="{cwe.coreWebElement.name}" 
                    onClick={submitBtnHandler}>
                            {cwe.labelTranslated}</button>
                        </div>)

                default : 
                    return ''
            }
        })
        return comp
    })
}

import React, { cloneElement } from 'react'


//{...props} spread -> componente filho recebe todas as propriedades do componente pai

export default (props) => {

    return (

        <div>
            {
                React.Children.map(props.children, child => {
                    return cloneElement(child, props)

                })
                
                }
                        
        </div>

    )

}
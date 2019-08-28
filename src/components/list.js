import React, { Component } from 'react'

class List extends Component {

    
    render() {

        const { elements } = this.props;

        return (
            <div>
                <ul>
                    {elements.map(element => <li>{element}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default List;

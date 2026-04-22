import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <ul className="list">
                {this.props.items.map(item => {
                    const typeClass = item.type.toLowerCase();
                    return (
                        <li key={item.name}>
                            <span>{item.name}</span>
                            <span className={`item-type ${typeClass}`}>{item.type}</span>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default List;
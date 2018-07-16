import React, { Component } from 'react';

class Dropdown extends Component {
    state = {
        selected: this.props.value || 'Developer',
        listOpen: false,
        list: [{
            id: 0,
            title: 'Software Engineer'
        },{
            id: 1,
            title: 'Developer'
        },{
            id: 2,
            title: 'Front End Developer'
        },{
            id: 3,
            title: 'Product Manager'
        },{
            id: 4,
            title: '.NET Developer'
        },{
            id: 5,
            title: 'Java Developer'
        },{
            id: 6,
            title: 'Quality Assurance Engineer'
        }]
    }
    
    toggleList(){
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    }

    selectedItem(event) {
        if(this.props.onChange) {
            this.props.onChange({
                target: {
                    value: event.target.dataset.value,
                    name: this.props.name
                }
            });
        }
        this.toggleList();
    }

    render() {
        const { list, listOpen, selected } = this.state;
        return(
            <div className="dropdown">
                <label className="dropdown__label dropdown__label--top">{this.props.label}</label>
                <div className="dropdown__header" onClick={() => this.toggleList()}>
                    <div className="dropdown__header-title">{this.props.value}</div>
                </div>
                {listOpen && <ul className="dropdown__list">
                    {list.map((item) => (
                        <li className="dropdown__list-item" onClick={this.selectedItem.bind(this)} key={item.id} data-value={item.title}>{item.title}</li>
                    ))}
                </ul>}
                <span>{ this.props.errors ? this.props.errors : '' }</span>
            </div>
        )
    }
}

export default Dropdown;
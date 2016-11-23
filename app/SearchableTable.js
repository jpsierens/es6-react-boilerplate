/*
*	Searchable Table
*	Author: Jean-Pierre Sierens
*	===========================================================================
*/

import React from 'react';

export default class SearchableTable extends React.Component {
	constructor() {
		super();
		// Initial state of the component
		this.state = {filterText: ''};
	}
	handleUserInput(filterText) {
		// When there's a change in the state, the component and all its 
		// sub-components get updated.
		this.setState({filterText: filterText});
	}
	render() {
		return (
			<div>
				<SearchBar 
					filterText={this.state.filterText}
					onUserInput={this.handleUserInput.bind(this)}
				/>
				<Table 
					data={this.props.data} 
					filterText={this.state.filterText}
				/>
			</div>
		);
	}
}

class SearchBar extends React.Component {
	handleChange() {
		// passing filter data up by using a callback
		this.props.onUserInput(
			// ref is like the id
			this.refs.filterTextInput.value
		);
	}
	render() {
		return (
			<form>
				<input 
					type="text" 
					placeholder="Search for one keyword..." 
					ref="filterTextInput"
					value= {this.props.filterText}
					onChange= {this.handleChange.bind(this)} 
				/>
			</form>
		);
	}
}

class Table extends React.Component {
	render() {
		let sections = [];
		let data = this.props.data;
		data.forEach(function(product) {
			if (product.name.indexOf(this.props.filterText) === -1) {
				return;
			}
			sections.push(<Section key={product.name} data={product} />);
		}.bind(this));
		return (
			<div>{sections}</div>
		);
	}
}

class Section extends React.Component {
	render() {
		return (
			<div>
				<p>{this.props.data.name} = {this.props.data.price} </p>
			</div>
		);
	}
}

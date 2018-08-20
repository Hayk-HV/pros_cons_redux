import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import changeItem from '../actions/change';
import { connect } from 'react-redux';
import Item from '../components/items';
import deleteItem from '../actions/delete';
import addItem from '../actions/add'

class ProsConsList extends Component {
	constructor(props) {
		super(props);
		this.renderItem = this.renderItem.bind(this);
	}

	changeAdd(arr, listName, id, index) {
		if( arr.length === index + 1 ) {
			return (value, index) => {
				this.props.onAddItem(listName) && this.props.onChangeItem (value, id, listName)
				}
			}else {
			 return (value, index) => {
				this.props.onChangeItem (value, id, listName)
				if( value === "" ) {
						return this.props.onDelInput(index, listName);
					}
				}
			}
	}

	renderItem(arr, listName) {
		return (value, key) =>	<Item 
								 key={key}
								 index={key}
								 id={value.id}
								 value={value.name}
								 changeAdd={(this.changeAdd(arr, listName, value.id, key))}
								 />
	}

	render() {

		return(
			<div className='OneTwo'>
				<div className='One'>
					{this.props.listOne.map(this.renderItem(this.props.listOne, 'one'))}
				</div>
				<div className='One'>
					{this.props.listTwo.map(this.renderItem(this.props.listTwo, 'two'))}
				</div>
			</div>			
		);
	}
}

const mapStateToProps = (state) => {
	return { listOne: state.list.one,
			 listTwo: state.list.two }
};
const mapActionsToProps = (dispatch) => {
	return { 
		onChangeItem: bindActionCreators(changeItem,dispatch),
		onDelInput: bindActionCreators(deleteItem,dispatch),
		onAddItem: bindActionCreators(addItem,dispatch)
	}
}

const NewApp = connect(mapStateToProps,mapActionsToProps)(ProsConsList);

export default NewApp;
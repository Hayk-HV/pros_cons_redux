const changeItem = (name, id,listName) => {
	return {
		type: 'CHANGE_ITEM',
		payload: { name,
				   id,
				   listName
				},
	}
}

export default changeItem;
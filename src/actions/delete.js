const deleteItem = (id, listName) => {
	return {
		type: 'DELETE_INPUTE',
		payload: { id,
				   listName
				}
	}
}

export default deleteItem;
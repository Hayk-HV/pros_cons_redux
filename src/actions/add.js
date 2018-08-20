const addItem = (listName) => {
	return {
		type: 'ADD_ITEM',
		payload: {
			name: "",
			id: Date.now().toString(),
			listName
		}
	}
}

export default addItem;
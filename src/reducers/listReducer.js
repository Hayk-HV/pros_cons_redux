let initialState = {
					 one: [{ name: '', id: Date.now().toString(), listName: 'one' }],
					 two: [{ name: '', id: Date.now().toString(), listName: 'two' }],
				   };

const list = (state = initialState, action ) => {
	switch (action.type) {
		case 'ADD_ITEM':
		if(action.payload.listName === 'one') {
			return {
				...state,
				one: [...state.one, action.payload],
			}
		}else {
			return {
				...state,
				two: [...state.two, action.payload],
			}
		}
		case 'CHANGE_ITEM':
		if(action.payload.listName === 'one') {
			return {
				...state,
				one: state.one.map( state => change( state, action ) )
			}
		}else {
			return {
				...state,
				two: state.two.map( state => change( state, action ) )
			}
		}
		case 'DELETE_INPUTE':
		if(action.payload.listName === 'one') {
				let arr = state.one;
				arr.splice(action.payload.id, 1)
				return {
					...state,
					one: arr
				}
			}else if(action.payload.listName === 'two') {
				let arr = state.two;
				arr.splice(action.payload.id, 1)
				return {
					...state,
					two: arr
				}
			}
		
		default: 
		return {
			...state,
		}
  }
}

const change = (state, action) => {
switch(action.type) {
	case 'CHANGE_ITEM':
	if(state.id === action.payload.id) {
	return {
		...state,
		name: action.payload.name,
	}
}
	default:
	return {
		...state
		}
	}
}

export default list;

export default function stockReducer(state = [], action) {
	switch (action.type) {
		case "CREATE_STOCK":
			return [...state, { ...action.stock }];
		default:
			return state;
	}
}
import { FORM_DATA } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FORM_DATA:
			return [...state, action.payload];
	}
	return state;
}
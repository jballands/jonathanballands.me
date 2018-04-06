import reducerRegistry from 'reducers/reducerRegistry';

export function loanBurndownReducer(state = {}, action) {
	return state;
}

reducerRegistry.register('loanBurndown', loanBurndownReducer);

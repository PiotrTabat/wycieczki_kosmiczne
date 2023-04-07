const shoppingCartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const itemToAdd = action.payload;
            const existingItemIndex = state.findIndex(item => item.id === itemToAdd.id);

            if (existingItemIndex >= 0) {

                const existingItem = state[existingItemIndex];
                const updatedItem = { ...existingItem, quantity: existingItem.quantity + 1 };
                const updatedState = [ ...state ];
                updatedState[existingItemIndex] = updatedItem;
                return updatedState;
            } else {

                const newItem = { ...itemToAdd, quantity: 1 };
                return [ ...state, newItem ];
            }

        case 'REMOVE_FROM_CART':
            const itemToRemove = action.payload;
            const itemToRemoveIndex = state.findIndex(item => item.id === itemToRemove.id);

            if (itemToRemoveIndex >= 0) {

                const updatedState = [ ...state ];
                updatedState.splice(itemToRemoveIndex, 1);
                return updatedState;
            } else {
                return state;
            }

        case 'CLEAR_CART':
            return [];

        default:
            return state;
    }
};

export default shoppingCartReducer;

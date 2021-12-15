const initialState = {
    transactions: [{ id: 1, text: 'Flower', amount: -1000 },
      { id: 2, text: 'Salary', amount: 2000 },
      { id: 3, text: 'Book', amount: -100 },
      { id: 4, text: 'Camera', amount: 750 }]
}

export default function account(state = initialState, action) {
    switch(action.type) {
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        case "UPDATE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.map( transaction => {
                    if (transaction.id === action.payload.id) {
                        return action.payload;
                    }
                    return transaction;
                })
            }
        default:
            return state;
    }
}
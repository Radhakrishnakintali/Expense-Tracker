import rootReducer from '../../redux/reducers/account';

test('render reducer with ADD_TRANSACTION action type', () => {
    const initialState = {
        transactions: [{ id: 1, text: 'Flower', amount: -1000 },
          { id: 2, text: 'Salary', amount: 2000 },
          { id: 3, text: 'Book', amount: -100 },
          { id: 4, text: 'Camera', amount: 750 }
        ]
    }
    const payload = {id:5,text:"data",amount:200};
    const action = { type: 'ADD_TRANSACTION', payload: payload };
    const expectedState  = {
        ...initialState,
        transactions: [...initialState.transactions, payload]
    }
    expect(rootReducer(undefined, action)).toEqual(expectedState);

});

test('returns the correct state', () => {
    const payload = {id:5,text:"data",amount:200};
    const action = { type: 'ADD_TRANSACTION', payload: payload };
    expect(rootReducer(undefined, action)).toMatchSnapshot();
});

test('render reducer with DELETE_TRANSACTION action type', () => {
    const initialState = {
        transactions: [{ id: 1, text: 'Flower', amount: -1000 },
          { id: 2, text: 'Salary', amount: 2000 },
          { id: 3, text: 'Book', amount: -100 },
          { id: 4, text: 'Camera', amount: 750 }
        ]
    }
    const payload = 4;
    const action = { type: 'DELETE_TRANSACTION', payload: payload };
    const expectedState  = {
        ...initialState,
        transactions: initialState.transactions.filter(transaction => transaction.id !== payload)
    }
    console.log(expectedState);

    expect(rootReducer(undefined, action)).toEqual(expectedState);

});

test('render reducer with UPDATE_TRANSACTION action type', () => {
    const initialState = {
        transactions: [{ id: 1, text: 'Flower', amount: -1000 },
          { id: 2, text: 'Salary', amount: 2000 },
          { id: 3, text: 'Book', amount: -100 },
          { id: 4, text: 'Camera', amount: 750 }
        ]
    }
    const payload = { id: 4, text: 'Camera', amount: 1000 };
    const action = { type: 'UPDATE_TRANSACTION', payload: payload };
    const expectedState  = {
        ...initialState,
        transactions: initialState.transactions.map( transaction => {
            if (transaction.id === payload.id) {
                return payload;
            }
            return transaction;
        })
    }
    console.log(expectedState);

    expect(rootReducer(undefined, action)).toEqual(expectedState);

});

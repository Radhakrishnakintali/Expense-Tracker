import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as selectActions from '../../redux/actions/accounts';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);
const store = mockStore();

beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
});

test('Dispatches the correct deleteTransaction action and payload', () => {
    const expectedAction = [
      {
        'payload': 1,
        'type': 'DELETE_TRANSACTION',
      },
    ];

    store.dispatch(selectActions.deleteTransaction(1));
    expect(store.getActions()).toEqual(expectedAction);
});

test('Dispatches the correct action and payload1', () => {
    store.dispatch(selectActions.deleteTransaction(1));
    expect(store.getActions()).toMatchSnapshot();
});

test('Dispatches the correct action and payload', () => {
    const expectedAction = [
      {
        'payload': {id:1,text:"data",amount:200},
        'type': 'ADD_TRANSACTION',
      },
    ];

    store.dispatch(selectActions.addTransaction({id:1,text:"data",amount:200}));
    expect(store.getActions()).toEqual(expectedAction);
});

test('Dispatches the correct update transaction action and payload', () => {
    const expectedAction = [
      {
        'payload': {id:1,text:"data",amount:200},
        'type': 'UPDATE_TRANSACTION',
      },
    ];

    store.dispatch(selectActions.updateTransaction({id:1,text:"data",amount:200}));
    expect(store.getActions()).toEqual(expectedAction);
});
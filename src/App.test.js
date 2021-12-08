import {render, screen, cleanup} from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers/index';

const initialState = {
    transactions: [{ id: 1, text: 'Flower', amount: -20 },
      { id: 2, text: 'Salary', amount: 300 },
      { id: 3, text: 'Book', amount: -10 },
      { id: 4, text: 'Camera', amount: 150 }]
}


function renderwithRedux(ui, {initialState, store = createStore(rootReducer,initialState)} = {}) {
    return {
    ...render(<Provider store={store}>{ui}</Provider>), store
    }
}

test('test', () => {
    renderwithRedux(<App/>);
    // const homeElement = screen.getAllByTestId('homeElement');
    // expect(homeElement).toBeInTheDocument();
})
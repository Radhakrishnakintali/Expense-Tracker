import {render, fireEvent} from '@testing-library/react';
import Home from '../components/Home';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../redux/reducers/index';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { configure } from "enzyme";
import { AddTransaction } from '../components/AddTransaction';
import Adapter from 'enzyme-adapter-react-15';

configure({adapter: new Adapter()});
const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);
const store = mockStore();



const initialState = {
    transactions: [{ id: 1, text: 'Flower', amount: -20 },
      { id: 2, text: 'Salary', amount: 300 },
      { id: 3, text: 'Book', amount: -10 },
      { id: 4, text: 'Camera', amount: 150 }]
}


function renderwithRedux(ui, {initialState, store = createStore(rootReducer,initialState,applyMiddleware(thunk))} = {}) {
    return {
    ...render(<Provider store={store}>{ui}</Provider>), store
    }
}

beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
});

test('financial_flow_chart', () => {
    const { getByText } = renderwithRedux(<Home/>);
    const homeElement = getByText('financial_flow_chart');
    //console.log(homeElement);
    expect(homeElement).toBeInTheDocument();
})

test('should render Transaction List', () => {
    const {getByTestId} = renderwithRedux(<Home/>);
    const homeElement = getByTestId('transactionListData');
    //console.log(homeElement);
    expect(homeElement).toBeInTheDocument();
})

test('should render list of transactions', () => {
    const {getByTestId} = renderwithRedux(<Home/>);
    const flowerElement = getByTestId('transaction0');
    const salaryElement = getByTestId('transaction1');
    const bookElement = getByTestId('transaction2');
    const cameraElement = getByTestId('transaction3');
    expect(flowerElement).toBeInTheDocument();
    expect(salaryElement).toBeInTheDocument();
    expect(bookElement).toBeInTheDocument();
    expect(cameraElement).toBeInTheDocument();
})

test('should render list of transactions1', () => {
    const {getByTestId} = renderwithRedux(<Home/>);
    const flowerElement = getByTestId('btntransaction0');
    const salaryElement = getByTestId('transaction1');
    const bookElement = getByTestId('transaction2');
    const cameraElement = getByTestId('transaction3');
    expect(flowerElement).toBeInTheDocument();
    expect(salaryElement).toBeInTheDocument();
    expect(bookElement).toBeInTheDocument();
    expect(cameraElement).toBeInTheDocument();
})

test('delete fire event', () => {
    const {getByTestId, container } = renderwithRedux(<Home/>);
    const deleteflowerElement = getByTestId('btntransaction0');
    console.log(deleteflowerElement)
    fireEvent.click(deleteflowerElement);
    container.querySelector('.minus')
    expect(container.firstChild).toMatchSnapshot()
})

test('should render Add Transacion Component', () => {
    const {getByTestId} = renderwithRedux(<Home/>);
    const addTransactionElement = getByTestId('addTransaction');
    expect(addTransactionElement).toBeInTheDocument();
})

test("render AddTransaction" , () => {
    const handleSubmitMock = jest.fn();
    const transaction = { };
    const { getByTestId } = renderwithRedux(<AddTransaction transaction= {transaction} clearData={handleSubmitMock}/>);
    const formElement = getByTestId('btnAddTransaction');

    expect(formElement).toBeInTheDocument();
    //fireEvent.click(formElement);
    //expect(handleSubmitMock).toBeCalled();
})

test("Click on AddTransaction button" , () => {
    const handleSubmitMock = jest.fn();
    const transaction = { };
    const { getByTestId } = renderwithRedux(<AddTransaction transaction= {transaction} clearData={handleSubmitMock}/>);
    const formElement = getByTestId('btnAddTransaction');
    fireEvent.click(formElement);
    expect(handleSubmitMock).toBeCalled();
})
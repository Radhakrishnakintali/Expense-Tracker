export function deleteTransaction(id){
    return (dispatch) => {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }
}

export function addTransaction(transaction){
    return (dispatch) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        });
    }
}

export function updateTransaction(updatedTransaction) {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_TRANSACTION",
            payload: updatedTransaction
        });
    }
}
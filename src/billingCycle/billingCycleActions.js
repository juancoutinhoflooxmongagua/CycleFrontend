import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api/billingCycles'

export function getList() {
    const request = axios.get(BASE_URL) // Removido o '/billingCycles'
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

function submit(values, method) {
    return dispatch => {
        axios[method](BASE_URL, values) // Removido o '/billingCycles'
            .then(resp => {
                dispatch({
                    type: 'BILLING_CYCLE_CREATED',
                    payload: resp.data
                })
            })
            .catch(err => {
                dispatch({
                    type: 'BILLING_CYCLE_CREATION_ERROR',
                    payload: err.response.data
                })
            })
    }
}
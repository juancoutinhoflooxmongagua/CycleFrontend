import axios from 'axios';
import { toastr } from 'react-redux-toastr';

const BASE_URL = 'http://localhost:3003/api';

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`);
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    };
}

export function createBillingCycle(values) {
    return dispatch => {
        const id = values._id ? values._id : '';

        axios.post(`${BASE_URL}/billingCycles${id ? '/' + id : ''}`, values, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso.');
                dispatch(getList()); // Atualiza a lista após o POST
            })
            .catch(e => {
                if (e.response) {
                    if (e.response.data && e.response.data.errors) {
                        e.response.data.errors.forEach(error => toastr.error('Erro', error));
                    } else {
                        toastr.error('Erro', `Erro do servidor: ${e.response.statusText}`);
                    }
                } else {
                    toastr.error('Erro', 'Erro desconhecido. Verifique o servidor.');
                }
            });
    };
}

export function showUpdate(billingCycle) {
    return {
        type: 'BILLING_CYCLE_SELECTED',
        payload: billingCycle
    };
}
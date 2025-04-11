import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api/billingCycles'

export function getSummary() {
    const request = axios.get(BASE_URL + '/summary')
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}

import Axios from 'axios'

/*

    --- CONNECTION WITH THE BACKEND ---
This bit of code allows Axios to have the 
basic information needed in order to connect
to the Laravel API. 
    --- *************************** ---

*/

const axios = Axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default axios
import axios from 'axios';
// require('dotenv/config');


const Token = () => {
    return new Promise((resolve, reject) => {        
        setTimeout(() => {
            const apiToken = axios.create({
                // baseURL: tokenUrl,                
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            })            
            // apiToken.post('', `grant_type=${grant_type}&client_id=${clientId}&client_secret=${clientSecret}`).then(response => {
            //     sessionStorage.setItem('Token', response.data.access_token);                
            //     token = response.data.access_token;
            //     resolve(token);
            // })
        }, 2000);
    })
}
export default Token;
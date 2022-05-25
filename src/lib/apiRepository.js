import axios from "./axiosHelper";

export class apiRepository {

    async createLead(email){
        return axios.post('/v1/leads',{
            email: email
        })
    }

    async getOtpData(otp){
        return await axios.get('/v1/users',{params:{
            otp : otp
        }})
    }

    async createOrUpdateUser(){
        let transactionForm = localStorage.getItem('transaction_form') ? JSON.parse(localStorage.getItem('transaction_form')) : null
        let userInfo = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : null
        if(!userInfo){
            try{
              let resp = await axios.post('v1/users',{
                name: transactionForm.name,
                email: transactionForm.email,
                country: transactionForm.country,
                industry: transactionForm.industry.value,
                country_code: transactionForm.country.value,
              })
              localStorage.setItem('auth',JSON.stringify(resp.data))
            }catch(error){
              console.log(error)
            }
        }else{

        }
    }

    async addWallets(){

    }

    async createOrder(token_id,tNumber,discount,address){
        let form = JSON.parse(localStorage.getItem('transaction_form'))
        let items = form.basket.map((el,i) => {return el.qty})
        return await axios.post('v1/orders',{
            parcel_quantities: [...items].reverse(),
            tracking_number: tNumber,
            discount: discount,
            status: 'open',
            erc20_payment_token_id: token_id,
            created_by: address
        })
    }

    async updateOrder(){

    }

}

export default apiRepository
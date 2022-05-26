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
                name: transactionForm?.name,
                email: transactionForm?.email,
                country: transactionForm?.country,
                industry: transactionForm?.industry?.value,
                country_code: transactionForm?.country?.value,
              })
              localStorage.setItem('auth',JSON.stringify(resp.data))
            }catch(error){
                // update user here
                console.log(error)
            }
        }else{
            try{
                let resp = await axios.post('v1/users/'+userInfo.id,{
                  name: transactionForm?.name,
                  email: transactionForm?.email,
                  country: transactionForm?.country,
                  industry: transactionForm?.industry?.value,
                  country_code: transactionForm?.country?.value,
                })
                localStorage.setItem('auth',JSON.stringify(resp.data))
              }catch(error){
                  // update user here
                  console.log(error)
              }
        }
    }

    async addWallets(data){
        let userInfo = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : null
        return await axios.post('v1/users/'+userInfo.id,{
            id: userInfo.id,
            wallets: [{
                wallet_name: data.wallet,
                wallet_address: data.address,
                last_connected_at: new Date().getTime()
            }]
        })
    }

    async createOrder(token_id,tNumber,discount,address){
        let form = JSON.parse(localStorage.getItem('transaction_form'))
        let items = form.basket.map((el,i) => {return el.qty})
        let order = localStorage.getItem('order') ? JSON.parse(localStorage.getItem('order')) : null
        let path = 'v1/orders'
        let userInfo = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : null

        if(order != null){
            path+= '/'+order.id
        }
        order = await axios.post(path,{
            parcel_quantities: [...items].reverse(),
            tracking_number: tNumber,
            discount: discount,
            status: 'open',
            erc20_payment_token_id: token_id,
            created_by: userInfo.id
        })
        order = order.data
        localStorage.setItem('order',JSON.stringify(order))
        return order
    }

    async updateOrderTx(data){
        let order = localStorage.getItem('order') ? JSON.parse(localStorage.getItem('order')) : null
        return await axios.post('v1/orders/'+order.id,{
            status: data.order_status,
            transactions: [{
                parcel_quantities: data.parcel_quantities,
                amount_paid: data.amount,
                bc_tx_id: data.bc_tx_id,
                status: data.status,
                from_address: data.address
            }]
        })
    }

}

export default apiRepository
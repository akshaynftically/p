import axios from "./axiosHelper";

export class apiRepository {

    async createLead(data){
        console.log(data)
        return axios.post('/v1/leads',{
            ...data
        })
    }

    // async getOtpData(otp){
    //     return
    //     return await axios.get('/v1/users',{params:{
    //         otp : otp
    //     }})
    // }

    getCookie(cookieName) {
        let name = cookieName + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
    }

    async createOrUpdateUser(data){
        let userInfo = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : null
        let firstReferredBy = this.getCookie('referral_first_touch')
        let referredBy = this.getCookie('referral_last_touch')
        let utmFirstTouch = this.getCookie('utm_first_touch') === '' ? undefined : JSON.parse(this.getCookie('utm_first_touch'))
        let utmLastTouch = this.getCookie('utm_last_touch') === '' ? undefined :JSON.parse(this.getCookie('utm_last_touch'))

        if(!userInfo){
            try{
              let resp = await axios.post('v1/users',{
                first_referred_by: firstReferredBy,
                referred_by: referredBy,
                utm_first_touch: utmFirstTouch,
                utm_last_touch: utmLastTouch,
                wallets: [{
                    wallet_name: data.wallet,
                    wallet_address: data.address,
                    last_connected_at: new Date().getTime()
                }]
              })
              console.log(resp)
              if(resp.status === 200){
                    console.log('user updated')
                    // gtm create user
                    window.dataLayer.push({
                        "event" : "user-updated",
                        "user_id" : resp.data.id,
                        "user" : resp.data
                    })
              }else if(resp.status === 201){
                    console.log('user created')
                    // gtm create user
                    window.dataLayer.push({
                        "event" : "user-created",
                        "user_id" : resp.data.id,
                        "user" : resp.data
                    })
              }
              localStorage.setItem('auth',JSON.stringify(resp.data))
            }catch(error){
                throw error
            }
        }else{
            try{
                let resp = await axios.post('v1/users/'+userInfo.id,{
                  first_referred_by: firstReferredBy,
                  referred_by: referredBy,
                  utm_first_touch: utmFirstTouch,
                  utm_last_touch: utmLastTouch,
                  wallets: [{
                    wallet_name: data.wallet,
                    wallet_address: data.address,
                    last_connected_at: new Date().getTime()
                }]
                })
                localStorage.setItem('auth',JSON.stringify(resp.data))
              }catch(error){
                  throw error
              }
        }
    }

    async getUserById(id){
        return await axios.get('/v1/users/'+id)
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

    async createOrder(token_id,discount, firstReferredBy, referredBy, utmFirstTouch, utmLastTouch, address,prices,chain_id){
        let form = JSON.parse(localStorage.getItem('transaction_form'))
        let items = form.basket.map((el,i) => {return el.qty})
        let order = localStorage.getItem('order') ? JSON.parse(localStorage.getItem('order')) : null
        let path = 'v1/orders'
        let userInfo = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : null

        if(order != null){
            path+= '/'+order.id
        }
        order = await axios.post(path,{
            chain_id: chain_id,
            parcel_quantities: items,
            parcel_prices: prices,
            discount: discount,
            status: 'open',
            erc20_payment_token_id: token_id,
            created_by: userInfo.id,
            first_referred_by: firstReferredBy,
            referred_by: referredBy,
            utm_first_touch: utmFirstTouch,
            utm_last_touch: utmLastTouch
        })
        
        order = order.data
        localStorage.setItem('order',JSON.stringify(order))
        return order
    }

    async updateOrderTx(data){
        let order = localStorage.getItem('order') ? JSON.parse(localStorage.getItem('order')) : null
        return await axios.post('v1/orders/'+order.id,{
            status: data.order_status,
            conversion_factor: data.conversion_factor,
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
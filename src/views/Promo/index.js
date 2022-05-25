// Sections
import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {Main, Second, Third, Fourth, Fifth, Sixth, Seventh, Eighth, Ninth} from './sections'
import apiRepsitory from 'lib/apiRepository'
import { useDispatch } from 'react-redux'
import { setTransactionForm } from 'app/TransactionFormSlice'
const Promo = () => {
  const [searchParams,setSearchParams] = useSearchParams()
  const otp = searchParams.get('otp')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    (async() => {
      if(otp != null){
        let resp = await new apiRepsitory().getOtpData(otp)
        console.log(resp)
        if(resp.status === 200){
          let user = resp.data[0]
          localStorage.setItem('auth',JSON.stringify(user))
          dispatch(setTransactionForm({name: user.name, email: user.email}))
          navigate('reserve-land')
        }
      }
    })()
  },[])

  return (
    <div className='bg-[#161718] text-white lg:pb-[80px]'>
      <Main />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Seventh />
      <Ninth />
      <Eighth />
    </div>
  )
}

export default Promo

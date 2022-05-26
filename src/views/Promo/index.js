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
  
  const getUtmParameters =()  => {
    let utmData = {};
    let utmParamProvided = false;
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
      let pair = vars[i].split("=");
      let utmKey = pair[0];
      if (utmKey.substring(0, 4).toLowerCase() == 'utm_') {
        utmData[utmKey] = decodeURIComponent(pair[1]);
        utmParamProvided = true;
      }
    }
    if (utmParamProvided) return (utmData);
    else return (false);
  }
  const isCookieExists =(name)  =>{
    var found = false;
    document.cookie.split(";").forEach(function(e) {
      var cookie = e.split("=");
      if (name === cookie[0].trim()) {
        found = true;
      }
    })
    return found;
  }
  
  const getTopLevelDomain = (domain) => {
    var parts = domain.split('.');
    var topLevelDomain = parts.slice(-2).join('.');
    return topLevelDomain;
  }

  const createCookie =(name, value, days) =>{
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/;domain=" + getTopLevelDomain(window.location.hostname);
  }

  useEffect(() => {
    (async() => {
      //Get UTM Prameters
			let utmParams = JSON.stringify(getUtmParameters());
      // create first touch UTM cookie
			if (!isCookieExists('utm_first_touch') && utmParams !== 'false') {
				createCookie('utm_first_touch', utmParams, 365);
			}
			// create/update last touch UTM cookie
			if (utmParams !== 'false') createCookie('utm_last_touch', utmParams, 10);

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

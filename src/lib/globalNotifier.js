import React from 'react'
import { toast } from 'react-toastify';

const contractMessages = {
    // contract messeage => actual notify message
    "LandReserver: is not running" : "Currentry stopped land reservation",
    "LandReserver: Payment Token is not valid or disabled":"Payment Token is not valid or disabled",
    "LandReserver: Buyer not whitelisted":"You are not eligible to reserve land",
    "LandReserver: At least 1 parcel of any size required" : "You need to select at least 1 size to eligible for claim",
    "LandReserver: MATIC sent should be >= payable price":"MATIC sent should be >= payable price",
    "LandReserver: Not enough Premint Passes with Token Id:":"Not enough Premint Passes with Token Id:",
    "LandReserver: Invalid Payment Token":"Invalid Payment Token",
}

const getPlainString = (resp) =>{
    if(typeof resp == 'object'){
        return JSON.stringify(resp)
    }
    if(typeof resp == 'string'){
        return resp
    }
    if(typeof resp == 'undefined'){
        return ''
    }
}

const notify = (message,type = '') => {
    if(type === ''){
        toast(message, {
                icon: () => <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5145 0.0828645L16.2504 4.81786V11.5145L11.5145 16.2504H4.81786L0.0820312 11.5145V4.81786L4.81786 0.0820312H11.5145V0.0828645ZM7.1662 10.4995V12.1662H8.83286V10.4995H7.1662ZM7.1662 3.83286V8.83286H8.83286V3.83286H7.1662Z" fill="white" fillOpacity="0.8"/>
                            </svg>
                ,
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark'
        });
    }
    if(type === 'error'){
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark'
        });
    }
}

const globalErrorNotifier = (err) => {
    // check if any blockchain error is comming
    console.log(err)
    for (const [key, value] of Object.entries(contractMessages)) {
        if(getPlainString(err).includes(key)){
            notify(value,'error')
        }
    }
    // check for user rejected action
    if(typeof err != "undefined" && typeof err.code != "undefined" && err.code === 4001){
        notify("Transaction rejected",'error')
    }
    // show notifier for comearth scope
    if(typeof err != "undefined" && typeof err.scope != "undefined" && err.scope === 'comearth'){
        notify(err.message,'error')
    }
}

export default globalErrorNotifier
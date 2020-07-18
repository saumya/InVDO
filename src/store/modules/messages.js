// Store

import Utils from './utils'


const state = {
    info: 'VueX in Action',
    is_busy: false
}

const getters = {
    getInfoMessage: state=> state.info,
    getWhetherBusy: state=> state.is_busy
}

const actions = {
    update_info_message_action: ({commit} ,newMessage)=>( commit('UPDATE_INFO', newMessage) ),
    update_busy_status_action: ({commit}, newStatus)=>( commit('UPDATE_BUSY_STATUS', newStatus) ),
    test_api_action: ({state,commit},payload)=>{
        console.log('test_api_action : payload', payload)
        console.log('test_api_action : state', state)
        const url = Utils.api.endpoint + Utils.api.info
        fetch(url)
        .then(success=>{
            //console.log('success',success)
            if(success.status == '200'){
                success.json().then(function(result){
                    //console.log(result)
                    commit('UPDATE_INFO', result)
                },function(error2){
                    console.log('error : 2 : ', error2)
                })
            }
        }).catch(error1=>console.log('error: 1 :', error1))
    }
}

const mutations = {
    UPDATE_INFO: (state,message)=>(state.info=message),
    UPDATE_BUSY_STATUS: (state,status)=>(state.is_busy=status)
}

export default {state,getters,actions,mutations}
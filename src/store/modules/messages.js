// Store

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
    update_busy_status_action: ({commit}, newStatus)=>( commit('UPDATE_BUSY_STATUS', newStatus) )
}

const mutations = {
    UPDATE_INFO: (state,message)=>(state.info=message),
    UPDATE_BUSY_STATUS: (state,status)=>(state.is_busy=status)
}

export default {state,getters,actions,mutations}
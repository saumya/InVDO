// Store

import Utils from './utils'


const state = {
    app_version: '0.2.0',
    info: 'VueX in Action',
    is_busy: false,
    popular:[],
    trending:[],
    search_list:[],
    /* Spring - Blender Open Movie */
    /* selectedVideoId:'WhWc3b3KhnY', */
    selectedVideoData:{
        videoId: "WhWc3b3KhnY"
    }
}

const getters = {
    getAppVersion: state=> state.app_version,
    getInfoMessage: state=> state.info,
    getWhetherBusy: state=> state.is_busy,
    getPopularList: state=> state.popular,
    getTrendingList: state=> state.trending,
    getSearchList: state=> state.search_list,
    //getSelectedVideoId: state=> state.selectedVideoId,
    getSelectedVideo: state=> state.selectedVideoData
}

const actions = {
    update_info_message_action: ({commit} ,newMessage)=>( commit('UPDATE_INFO', newMessage) ),
    update_busy_status_action: ({commit}, newStatus)=>( commit('UPDATE_BUSY_STATUS', newStatus) ),
    //update_selected_videoId_action: ({commit}, newVideoId)=>( commit('UPDATE_SELECTED_VIDEO_ID', newVideoId) ),
    update_selected_video_action: ({commit}, newVideo)=>( commit('UPDATE_SELECTED_VIDEO', newVideo) ),

    test_api_action: ({commit,state},payload)=>{
        console.log('test_api_action : payload', payload)
        console.log('test_api_action : commit', commit)
        console.log('test_api_action : state', state)
        
    },
    get_info_action: ({commit})=>{
        console.log('get_info_action : ')
        const url = Utils.api.endpoint + Utils.api.info
        fetch(url)
        .then(success=>{
            //console.log('success',success)
            if(success.status == '200'){
                success.json().then(function(result){
                    console.log(result)
                    commit('UPDATE_INFO', result)
                },function(error2){
                    console.log('error : 2 : ', error2)
                })
            }
        }).catch(error1=>console.log('error: 1 :', error1))
    },
    get_top_action: ()=>{
        console.log('get_top_action : ')
        const url = Utils.api.endpoint + Utils.api.top
        console.log(url)
    },
    get_popular_action: ({commit})=>{
        console.log('get_popular_action : ')
        const url = Utils.api.endpoint + Utils.api.popular
        
        console.log(url)
        fetch(url).then(success=>{
            if(success.status == '200'){
                success.json().then(result=>commit('UPDATE_POPULAR_LIST', result),error2=>console.log('error:2:',error2))
            }
        }).catch(error1=>console.log('error:1:',error1))
        
    },
    get_trending_action: ({commit})=>{
        const url = Utils.api.endpoint + Utils.api.trending
        /*
        fetch(url).then(success=>{
            if(success.status == '200'){
                success.json().then(result=>commit('UPDATE_TRENDING_LIST', result),error2=>console.log('error:2:',error2))
            }
        }).catch(error1=>console.log('error:1:',error1))
        */
        Utils.actions.callTheApiEndpointAction(commit,url)
    },
    trending_by_music_action: ({commit})=>{
        const url = Utils.api.endpoint + Utils.api.trending + '/?type=Music'
        /*
        fetch(url).then(success=>{
            if(success.status == '200'){
                success.json().then(result=>commit('UPDATE_TRENDING_LIST', result),error2=>console.log('error:2:',error2))
            }
        }).catch(error1=>console.log('error:1:',error1))
        */
        Utils.actions.callTheApiEndpointAction(commit,url)
    },
    trending_by_movies_action: ({commit})=>{
        const url = Utils.api.endpoint + Utils.api.trending + '/?type=Movies'
        /*
        fetch(url).then(success=>{
            if(success.status == '200'){
                success.json().then(result=>commit('UPDATE_TRENDING_LIST', result),error2=>console.log('error:2:',error2))
            }
        }).catch(error1=>console.log('error:1:',error1))
        */
       Utils.actions.callTheApiEndpointAction(commit,url)
    },
    trending_by_gaming_action: ({commit})=>{
        const url = Utils.api.endpoint + Utils.api.trending + '/?type=Gaming'
        /*
        fetch(url).then(success=>{
            if(success.status == '200'){
                success.json().then(result=>commit('UPDATE_TRENDING_LIST', result),error2=>console.log('error:2:',error2))
            }
        }).catch(error1=>console.log('error:1:',error1))
        */
       Utils.actions.callTheApiEndpointAction(commit,url)
    },
    trending_by_news_action: ({commit})=>{
        const url = Utils.api.endpoint + Utils.api.trending + '/?type=News'
        /*
        fetch(url).then(success=>{
            if(success.status == '200'){
                success.json().then(result=>commit('UPDATE_TRENDING_LIST', result),error2=>console.log('error:2:',error2))
            }
        }).catch(error1=>console.log('error:1:',error1))
        */
       Utils.actions.callTheApiEndpointAction(commit,url)
    },
    search_video_action: ({commit}, payload)=>{
        console.log('search_video_action : payload', payload)
        
        const url = Utils.api.endpoint + Utils.api.search + '?q=' + payload
        fetch(url).then(success=>{
            if(success.status == '200'){
                success.json().then(result=>commit('UPDATE_SEARCH_LIST', result),error2=>console.log('error:2:',error2))
            }
        }).catch(error1=>console.log('error:1:',error1))
    },
}

const mutations = {
    UPDATE_INFO: (state,message)=>(state.info=message),
    UPDATE_BUSY_STATUS: (state,status)=>(state.is_busy=status),
    UPDATE_POPULAR_LIST: (state,populars)=>(state.popular=populars),
    UPDATE_TRENDING_LIST: (state,trendings)=>(state.trending=trendings),
    UPDATE_SEARCH_LIST: (state, searches)=>(state.search_list=searches),
    //UPDATE_SELECTED_VIDEO_ID: (state, videoId)=>(state.selectedVideoId=videoId),
    UPDATE_SELECTED_VIDEO: (state, video)=>(state.selectedVideoData=video)
}
//
export default {state,getters,actions,mutations}
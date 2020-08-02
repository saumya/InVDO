// Store

import Utils from './utils'


const state = {
    app_version: '0.6.2',
    info: 'VueX in Action',
    is_busy: false,
    popular:[],
    trending:[],
    search_list:[],
    /* Spring - Blender Open Movie : WhWc3b3KhnY */
    /* CoffeeRun - Blender OpenMovie : PVGeM40dABA */
    /* selectedVideoId:'WhWc3b3KhnY', */
    selectedVideoData:{
        videoId: "PVGeM40dABA"
    },
    // adaptiveFormats
    mediaURLs: {
        webms: [{container:'', url:''}],
        mp4s: [{container:'', url:''}],
        webmAudios: [{container:'', url:''}]
    },
    // formatStreams
    streamURLs: [
        {url: "", }
    ],
    // live streams
    /* isLiveVideo: false, */
    hlsUrl: ""
}

const getters = {
    getAppVersion: state=> state.app_version,
    getInfoMessage: state=> state.info,
    getWhetherBusy: state=> state.is_busy,
    getPopularList: state=> state.popular,
    getTrendingList: state=> state.trending,
    getSearchList: state=> state.search_list,
    //getSelectedVideoId: state=> state.selectedVideoId,
    getSelectedVideo: state=> state.selectedVideoData,
    getSelectedMediaURLs: state=> state.mediaURLs,
    getStreamURLs: state=> state.streamURLs,
    getLiveStreamURL: state=> state.hlsUrl
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
        //const url = Utils.api.endpoint + Utils.api.search + '?q=' + payload + '&page=1'

        fetch(url).then(success=>{
            if(success.status == '200'){
                success.json().then(result=>commit('UPDATE_SEARCH_LIST', result),error2=>console.log('error:2:',error2))
            }
        }).catch(error1=>console.log('error:1:',error1))
    },
    get_video_urls_action: ({commit}, payload)=>{
        console.log('get_video_urls_action', payload)
        const videoId = payload.videoId
        const isLiveVideo = payload.liveNow
        console.log('video id', videoId)
        console.log('Live', isLiveVideo)
        //console.log('commit', commit)
        const url = Utils.api.endpoint + Utils.api.videos + videoId + Utils.api.videoUrls
        
        console.log('get_video_urls_action: url', url)

        // &local=true
        // ref: https://github.com/iv-org/invidious/wiki/Always-use-%22local%22-to-proxy-video-through-the-server-without-creating-an-account

        fetch(url).then(success=>{
            success.json().then(result=>{
                console.log('RESULT',result)

                // WebM / Video
                const webms = result.adaptiveFormats.filter(item=> {
                    let result = false
                    if(item.container==='webm'){
                        if(item.type.indexOf('video/webm') !== -1){
                            result = true
                        }
                    }
                    return result
                } )

                const mp4s = result.adaptiveFormats.filter(item=> item.container==='mp4' )

                const webmAudios = result.adaptiveFormats.filter(item=> {
                    let result = false
                    if(item.container==='webm'){
                        if(item.type.indexOf('audio/webm') !== -1){
                            result = true
                        }
                    }
                    return result
                })

                const streams = result.formatStreams

                let liveStreamURL = ''
                if(payload.liveNow){
                    liveStreamURL = result.hlsUrl
                }
                

                console.log('mp4s', mp4s)
                console.log('webms', webms)
                console.log('webmAudios', webmAudios)
                console.log('streams', streams)
                console.log('liveStreamURL', liveStreamURL)

                commit('UPDATE_BUSY_STATUS', false)
                commit('UPDATE_MEDIA_URLS', { webms, mp4s, webmAudios })
                commit('UPDATE_STREAM_URLS', streams)
                commit('UPDATE_LIVE_URL', liveStreamURL)

                

            },error2=>console.log('ERROR:2:',error2))
        },error1=>console.log('ERROR:1:',error1))
    }
}

const mutations = {
    UPDATE_INFO: (state,message)=>(state.info=message),
    UPDATE_BUSY_STATUS: (state,status)=>(state.is_busy=status),
    UPDATE_POPULAR_LIST: (state,populars)=>(state.popular=populars),
    UPDATE_TRENDING_LIST: (state,trendings)=>(state.trending=trendings),
    UPDATE_SEARCH_LIST: (state, searches)=>(state.search_list=searches),
    //UPDATE_SELECTED_VIDEO_ID: (state, videoId)=>(state.selectedVideoId=videoId),
    UPDATE_SELECTED_VIDEO: (state, video)=>(state.selectedVideoData=video),
    UPDATE_MEDIA_URLS: (state, mediaUrlObj)=>(state.mediaURLs=mediaUrlObj),
    UPDATE_STREAM_URLS: (state, streams)=>(state.streamURLs=streams),
    UPDATE_LIVE_URL: (state, liveStreamUrl)=>(state.hlsUrl=liveStreamUrl)
}
//
export default {
    namespaced: true,
    state, getters, actions, mutations}
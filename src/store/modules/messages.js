// Store

import Utils from './utils'


const state = {
    app_version: '0.3.1',
    info: 'VueX in Action',
    is_busy: false,
    popular:[],
    trending:[],
    search_list:[],
    /* Spring - Blender Open Movie */
    /* selectedVideoId:'WhWc3b3KhnY', */
    selectedVideoData:{
        videoId: "WhWc3b3KhnY"
    },
    // adaptiveFormats
    mediaURLs: {
        webms: [{container:'', url:''}],
        mp4s: [{container:'', url:''}],
        webmAudios: [{container:'', url:''}]
    },
    // formatStreams
    streamURLs: [
        {url: "https://r1---sn-ab5sznld.googlevideo.com/videoplayback?expire=1596038864&ei=cEohX5K0CJK_gwPGoL34Bw&ip=204.48.28.211&id=o-AMDDDkPbZo3MpB7R-_j57jDZoebBIOjL9Nl4JyHFzwu4&itag=18&source=youtube&requiressl=yes&mh=jY&mm=31%2C29&mn=sn-ab5sznld%2Csn-ab5l6nzk&ms=au%2Crdu&mv=m&mvi=1&pl=22&initcwndbps=197500&vprv=1&mime=video%2Fmp4&gir=yes&clen=16825670&ratebypass=yes&dur=208.561&lmt=1577642421386695&mt=1596017143&fvip=1&fexp=23883098&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAK42BY5JaYp8jmjF3kQi6DTMSdXGp0Iq5fj8eVIKXKNGAiAPWC6U7KxdIi1z8Znv9bQrxPtAgAO9MdOInG1Wycyatw%3D%3D&sig=AOq0QJ8wRgIhAIQOom8leFR5YBE0-HF6yEnJclOULDo0D5zPWfYACSD7AiEAvNRq6LuJJWbN7g9EB914Qv1UGSUE6muyhiw2UC_SEV4=&host=r1---sn-ab5sznld.googlevideo.com", }
    ]
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
    getStreamURLs: state=> state.streamURLs
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
        //console.log('commit', commit)
        const url = Utils.api.endpoint + Utils.api.videos + payload + Utils.api.videoUrls
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

                console.log('mp4s', mp4s)
                console.log('webms', webms)
                console.log('webmAudios', webmAudios)
                console.log('streams', streams)

                commit('UPDATE_MEDIA_URLS', { webms, mp4s, webmAudios })
                commit('UPDATE_STREAM_URLS', streams)

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
    UPDATE_STREAM_URLS: (state, streams)=>(state.streamURLs=streams)
}
//
export default {
    namespaced: true,
    state, getters, actions, mutations}
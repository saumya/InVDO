// utils.js
//
// API
//
// TODO: further divide TREDNING into categories
// https://invidio.us/feed/trending
// https://invidio.us/feed/trending?type=Music&region=GB
// type= Music / News / Gaming / Movies
// by Region : https://invidio.us/api/v1/trending/?region=GB
// 
// ultimately: googlevideo.com
// 
//

const utils = {
    info: "Util : info : 1.0.0",
    api:{
        endpoint: 'https://invidio.us/api/v1',
        info: '/stats',

        /* /:id */
        video: '/videos/',
        annotations: '/annotations/',
        comments: '/comments/',
        insights: '/insights/',
        captions: '/captions/',

        trending: '/trending',
        top: '/top',
        popular: '/popular',

        search: '/search/',
        suggestions: '/suggestions/',

        mix: '/mixes/',
        playlist: '/playlist/',

        /* /:ucid */
        channels: '/channels/',
        channel_search: '/channels/search/',
        channel_comments: '/channels/comments/',
        channel_playlists: '/channels/playlists/',
        channel_latest: '/channels/latest/',
        channel_videos: '/channels/videos/',
    },
    actions:{
        callTheApiEndpointAction: (commit, url)=>{
            //console.log(url) :  https://invidio.us/api/v1/trending
            console.log('callTheApiEndpoint', url)
            fetch(url).then(success=>{
                if(success.status == '200'){
                    success.json().then(result=>commit('UPDATE_TRENDING_LIST', result),error2=>console.log('error:2:',error2))
                }
            }).catch(error1=>console.log('error:1:',error1))
        }
    }
}

export default utils
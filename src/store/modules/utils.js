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
//

// =======================================================================================
// videos
// https://invidio.us/api/v1/videos/aqz-KE-bpKQ?fields=videoId,title,description&pretty=1

// search
// https://invidio.us/api/v1/search?q=movie&page=22&pretty=1
// https://invidio.us/api/v1/search?q=movie&page=1&sort_by=relevance&pretty=1
// https://invidio.us/api/v1/search?q=movie&page=1&sort_by=relevance&date=today&pretty=1
// https://invidio.us/api/v1/search?q=movie&page=1&sort_by=relevance&date=today&duration=short&pretty=1
// https://invidio.us/api/v1/search?q=movie&page=1&sort_by=relevance&date=today&duration=short&type=video&pretty=1
// https://invidio.us/api/v1/search?q=movie&page=1&sort_by=relevance&date=today&duration=short&type=video&features=hd&pretty=1
// https://invidio.us/api/v1/search?q=movie&page=1&sort_by=relevance&date=today&duration=short&type=video&features=hd&region=US&pretty=1

// https://invidio.us/api/v1/search?q=movie&region=GB&fields=videoId,title,description&pretty=1

// https://invidio.us/api/v1/search?q= movie &page=22&pretty=1

//
// =======================================================================================
//
// public instances : 
// https://github.com/iv-org/invidious/wiki/Invidious-Instances
// https://instances.invidio.us/
//
// https://invidio.us/api/v1 : shut down : September 1 2020
// https://invidious.snopyta.org/
// 

const utils = {
    info: "Util : info : 1.0.0",
    api:{
        /* apiServer: Will be set by the user in Application */
        /* apiServer: 'https://invidious.snopyta.org/', */
        endpoint: '/api/v1',
        info: '/stats',

        /* /:id */
        videos: '/videos/',
        /** player */
        videoUrls: '?fields=videoId,adaptiveFormats,formatStreams,hlsUrl',
        /** player */
        
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
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
    }
}

export default utils
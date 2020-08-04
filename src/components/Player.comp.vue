<template>
    <section class="section">
        <div>

            <!-- Player : Embed -->
            <!--
            <div style="padding:10px; width:580px; height:335px; background:#EEE;">
                
                <iframe width="560" height="315" title="Video" style="background:#000;" 
                    :src="nocookiesUrl"
                    frameborder="0" 
                    allow='autoplay; encrypted-media' 
                    allowfullscreen>
                </iframe>
            </div>
            -->

            <!-- Player : Adaptive format -->
            <!--
            <div v-if="mediaURLs.mp4s[0].container !=='' ">
                
                <div style="padding:10px; width:580px; height:435px; background:#EEE;">
                    <video controls width="560" height="315" ref="videoPlayer">
                        <source type="video/webm" :src="mediaURLs.webms[0].url">
                        <source type="video/mp4" :src="mediaURLs.mp4s[0].url">
                    </video>
                    <audio controls :src="mediaURLs.webmAudios[0].url" ref="audioPlayer" />
                    
                    <div class="controls">
                        <button v-on:click="onVideoPlayClick">Play</button>
                    </div>
                </div>

            </div>
            -->

            {{ isAppBusy ? "Busy. Please wait..." : "" }}
            {{ (streamURLs.length>0) ? "" : "No Stream URLs found. Probably it is live. Live videos are work in progress. I am working my best to resolve this as soon as possible." }}

            <!-- Player : Stream -->
            <div v-if="!isAppBusy">

                <div v-if="streamURLs.length>0">
                    <!--
                    <div class="buttons" >
                        <button class="button is-success" v-on:click="onVideoPlayClick">Start</button>
                        <button class="button is-success" v-on:click="onVideoPauseClick">Pause / Play</button>
                    </div>
                    -->
                    {{/* JSON.stringify(streamURLs) */}}
                    <div class="buttons has-addons">
                        <button v-for="item in streamURLs" :key="item.resolution" class="button" v-on:click="onVideoResolutionClick(item.url)"> {{item.resolution}} </button>
                        <button class="button is-success" v-on:click="onVideoPauseClick">Pause / Play</button>
                    </div>

                    <div>
                        <video controls width="560" height="315" ref="videoPlayer_2">
                            <!-- <source type="video/mp4" :src="streamURLs[0].url+'&local=true'"> -->
                            <!--
                                ref: 
                                Always use "local" to proxy video through the server without creating an account
                                
                                1. &local=true
                                2. https://github.com/iv-org/invidious/wiki/Always-use-%22local%22-to-proxy-video-through-the-server-without-creating-an-account

                                You can enable DASH by appending &quality=dash to the end of a video's URL
                                1. https://github.com/iv-org/invidious/wiki/Geoblocking,-available-video-quality-and-DASH
                            -->
                        </video>
                    </div>
                </div>
                
            </div>

            <!-- Player : Live Stream -->
            <div class="has-background-info-light">
                <!--
                <div>{{ Hls.isSupported() ? "Yes" : "No" }}</div>
                <div>{{ selectedVideo.liveNow ? "Live Player" : "Stream Player"}}</div>

                <div>Live URL = {{ liveURL }}</div>
                <div>{{ (liveURL=="") ? "No Live URL" : "Live URL Avialable" }}</div>
                -->

                <div v-if="isLiveURLAvailable">

                    <div class="buttons">
                        <button class="button is-warning" v-on:click="onLivePlayClick"> Start Live Video </button>
                    </div>
                    <video controls width="560" height="315" ref="videoPlayerLive">
                        <source type="application/x-mpegURL" :src="liveURL+'&local=true'">
                    </video>
                    
                </div>

            </div>
        

        </div>
        <div>
            <div> {{selectedVideo.title}}</div>
            <div> By- {{selectedVideo.author}}</div>
            <div>
                <span>Views- <strong>{{selectedVideo.viewCount}}</strong> </span> |
                <span>Published- <strong>{{selectedVideo.publishedText}}</strong> </span> | 
                <span>Length- <strong>{{ (selectedVideo.lengthSeconds) }} secs</strong> </span>
            </div>
            <div>
                <span>Live- <strong>{{selectedVideo.liveNow?"Yes":"No"}}</strong> </span> |
                <span>Paid- <strong>{{selectedVideo.paid?"Yes":"No"}}</strong> </span> | 
                <span>Premium- <strong>{{selectedVideo.premium?"Yes":"No"}}</strong> </span> | 
                <span>Upcoming- <strong>{{selectedVideo.isUpcoming?"Yes":"No"}}</strong> </span>
            </div>
            
            <div style="padding:1em;">
                {{selectedVideo.description}}
            </div>
            <div>
                <div>Open in</div>
                <button class="button" v-on:click="onOpenInYoutubeClick">Youtube</button>
                <button class="button" v-on:click="onOpenInInvidiousClick">Invidious</button>
            </div>
            
            <!--
            <button class="button" v-on:click="onGetVideoUrlClick">Get Video URL</button>
            <button class="button" v-on:click="onLoadVideoClick"> Load Video </button>
            -->

            <!--
            <video 
                data-dashjs-player autoplay 
                src="https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd" 
                controls>
            </video>
            -->

            <!--
            <div>Mp4</div>
            {{ mediaURLs.mp4s[0].container }}-{{ mediaURLs.mp4s[0].url }}
            <div>WebM</div>
            {{ mediaURLs.webms[0].container }}-{{ mediaURLs.webms[0].url }}
            -->
            <!--
            <div>
                <div>Stream</div>
                {{ streamURLs[0].url }}
            </div>
            -->

        </div>
        <div style="margin-top:1em">
            <h1 class="title">Audio Only Players</h1>
            <h2 class="subtitle">Different Quality audios</h2>
            <ul id="audio_players">
                <li v-for="item in mediaURLs.webmAudios" :key="item.bitrate">
                    <audio controls :src="item.url" ref="audioPlayer" />
                </li>
            </ul>
        </div>
        <div>
            {{/* JSON.stringify(mediaURLs.webmAudios) */}}
        </div>

        
        
    </section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'PlayerComponent',
    data: function(){
        // videoURLs
        //let mp4URL = 'https://r6---sn-ab5l6nzl.googlevideo.com/videoplayback?expire=1595968903&ei=JzkgX_LpIoW-8wTQ7KqwCg&ip=206.189.239.130&id=o-AEPnVESxnF9K1KGSQyMZcmopiSqqcZUC8HbdDqIRMH0B&itag=394&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C298%2C299%2C302%2C303%2C308%2C313%2C315%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=aP&mm=31%2C29&mn=sn-ab5l6nzl%2Csn-ab5szn7y&ms=au%2Crdu&mv=m&mvi=6&pl=24&initcwndbps=227500&vprv=1&mime=video%2Fmp4&gir=yes&clen=5210538&dur=634.566&lmt=1595386728556378&mt=1595947173&fvip=6&keepalive=yes&fexp=23883097&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgEmMfPz9DYSjS7rNwdLHMOB451bvp7cIiwf8zwHG77pkCIHeBrNwnZmpQd0u459Rrdf68JYYzefaCRnuvQqhbPEki&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgOhoLMQfYY241UUuykMjNk0adUKeKgZLCi_VMLqdZb64CIQDAyJc0jalINPuBWdFYwqc0UGEuSN7iPwjPZgR-PEGC_A%3D%3D&host=r6---sn-ab5l6nzl.googlevideo.com'
        //let webMURL = 'https://r6---sn-ab5l6nzl.googlevideo.com/videoplayback?expire=1595968903&ei=JzkgX_LpIoW-8wTQ7KqwCg&ip=206.189.239.130&id=o-AEPnVESxnF9K1KGSQyMZcmopiSqqcZUC8HbdDqIRMH0B&itag=278&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C298%2C299%2C302%2C303%2C308%2C313%2C315%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=aP&mm=31%2C29&mn=sn-ab5l6nzl%2Csn-ab5szn7y&ms=au%2Crdu&mv=m&mvi=6&pl=24&initcwndbps=227500&vprv=1&mime=video%2Fwebm&gir=yes&clen=6792637&dur=634.566&lmt=1544611205996376&mt=1595947173&fvip=6&keepalive=yes&fexp=23883097&c=WEB&txp=5532432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAJd3cyCo3UDgchG39O-6xyW3zaQTV7jmiod3M3sx9zNCAiAFuFTUb9iTZUQyaHf4hkgcIkU9C8YMFs-anbcYawpQ2A%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgOhoLMQfYY241UUuykMjNk0adUKeKgZLCi_VMLqdZb64CIQDAyJc0jalINPuBWdFYwqc0UGEuSN7iPwjPZgR-PEGC_A%3D%3D&host=r6---sn-ab5l6nzl.googlevideo.com'

        //
        return({
            selectedMp4 : '',
            selectedWebm : ''
        })
    },
    computed: {
        ...mapGetters({
            version : 'messages/getAppVersion', 
            isAppBusy : 'messages/getWhetherBusy',
            selectedVideo : 'messages/getSelectedVideo',
            mediaURLs: 'messages/getSelectedMediaURLs',
            streamURLs: 'messages/getStreamURLs',
            liveURL: 'messages/getLiveStreamURL'
        }),
        isLiveURLAvailable: function(){
            if(this.liveURL===''){
                return false
            }else{
                return true
            }
        },
        nocookiesUrl: function(){
            //const url = ('https://www.youtube-nocookie.com/embed/'+this.getSelectedVideoId)
            const url = ('https://www.youtube-nocookie.com/embed/'+this.selectedVideo.videoId)
            return url
        },
        // https://invidio.us/watch?v=
        // https://invidious.snopyta.org/watch?v=
        //invidiousUrl: function(){ return ('https://invidio.us/watch?v='+this.selectedVideo.videoId) } 
        invidiousUrl: function(){ return ('https://invidious.snopyta.org/watch?v='+this.selectedVideo.videoId) } 
    },

    // Lifecycle Hook
    // ref: https://vuejs.org/v2/api/#created
    // ref: https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks
    //
    created: function(){
        console.log('Player : Created')
        console.log( 'this.selectedVideo.videoId', this.selectedVideo.videoId )
        this.setAppAsBusy(true)
        //this.getVideoUrlsToPlay( this.selectedVideo.videoId )
        this.getVideoUrlsToPlay( this.selectedVideo )
        //
        
        //var video_live = document.getElementById('video_live')
        //var videoSrc = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'
        
        //console.log('-------------------------------------')
        //console.log('Live Video : query :', video_live)
        /*
        console.log('-------------------------------------')
        console.log( this.mediaURLs )
        console.log('-------------------------------------')
        */
    },
    destroyed: function(){
        console.log('Player : destroyed')
    },

    methods: {
        ...mapActions({
            setAppAsBusy : 'messages/update_busy_status_action',
            getVideoUrlsToPlay : 'messages/get_video_urls_action'
        }),
        onOpenInYoutubeClick: function(){
            const url = 'https://www.youtube.com/watch?v=' + this.selectedVideo.videoId
            //const newWindow = window.open(url)
            window.open(url)

            //
            // ref: https://github.com/Dash-Industry-Forum/dash.js
            // var url = "https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd";
            // var player = dashjs.MediaPlayer().create();
             // player.initialize(document.querySelector("#videoPlayer"), url, true);
            //
            // Dash : .mpd format for videos
            // using Dash: https://reference.dashif.org/dash.js/latest/samples/index.html
        },
        onOpenInInvidiousClick: function(){
            window.open( this.invidiousUrl )
        },
        onGetVideoUrlClick: function(){
            console.log('onGetVideoUrlClick', this.selectedVideo.videoId)
            this.getVideoUrlsToPlay( this.selectedVideo.videoId )
        },
        onLoadVideoClick: function(){
            console.log('onLoadVideoClick')
            console.log( this.$refs.videoPlayer_2 )
            this.$refs.videoPlayer_2.load();
        },
        onVideoPlayClick: function(){
            //console.log(event)
            //console.log(event.target)
            /*
            // Adaptive player
            this.$refs.videoPlayer.load();
            this.$refs.videoPlayer.play();
            this.$refs.audioPlayer.play();
            */

           this.$refs.videoPlayer_2.src = this.streamURLs[0].url
           // Streaming player
           this.$refs.videoPlayer_2.load();
           this.$refs.videoPlayer_2.play();
        },
        onVideoPauseClick: function(){
            if(this.$refs.videoPlayer_2.paused){
                this.$refs.videoPlayer_2.play();
            }else{
                this.$refs.videoPlayer_2.pause();
            }
        },
        onVideoResolutionClick: function(url){
            console.log( 'onVideoResolutionClick', url )
            this.$refs.videoPlayer_2.src = url
           // Streaming player
           this.$refs.videoPlayer_2.load();
           this.$refs.videoPlayer_2.play();
        },
        onLivePlayClick: function(){
            console.log('onLivePlayClick')
            //console.log('Live Video : ref :', this.$refs.videoPlayerLive)
            console.log('Live URL', this.liveURL)
            
            const Hls = window.Hls //refer: main.js : we got Hls from there
            let hls = new Hls()
            hls.loadSource(this.liveURL+'&local=true')
            //hls.loadSource('https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8') // Blender
            hls.attachMedia( this.$refs.videoPlayerLive )
            hls.on(Hls.Events.MANIFEST_PARSED, function() {
                console.log('MANIFEST_PARSED')
                this.$refs.videoPlayerLive.play()
            })
            /*
           let canPlayResponse = this.$refs.videoPlayerLive.canPlayType('video/m3u8')
           console.log('canPlayResponse=', canPlayResponse);
           */
        }

    }
}
</script>
<style scoped>
audio {
    width: 100%;
}
</style>
<template>
    <section class="section">
        <div>
        <!--
        <p>{{ invidiousUrl }}</p>
        <p>{{ nocookiesUrl }}</p>
        -->
        <!-- Player -->
        <!--
        <video id='player'>
            <source v-if='validDash' data-quality='Auto' type="application/dash+xml" :src="videoDash" />
            <source v-if='validLive' data-quality='Live' type="application/x-mpegURL" :src="videoLive" />
            <span v-html="subtitleHtml"></span>
            <track kind="metadata" srclang='' class="time-rail-thumbnails" 
                :src="'https://invidio.us/api/v1/storyboards/' + videoId + '?height=90'">
            </track>
        </video>
        -->

        <!-- Legacy player -->
        <!--
        <video id='legacyPlayer' class='videoPlayer' 
            :src='nocookiesUrl' 
            controls="controls">
        </video>
        -->

        <div style="padding:10px; width:580px; height:335px; background:#EEE;">
            <!--
            <h1 class="title">Video Player</h1>
            <h2 class="subtitle">The Youtube player {{getAppVersion}}</h2>
            -->
            <!-- EMBED -->
            <iframe width="560" height="315" title="Video" style="background:#000;" 
                :src="nocookiesUrl"
                frameborder="0" 
                allow='autoplay; encrypted-media' 
                allowfullscreen>
            </iframe>
        </div>

        <!--
        <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/owsfdh4gxyc" 
            frameborder="0" allowfullscreen>
            </iframe>
        -->

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
                <button class="button" v-on:click="onOpenInYoutubeClick">Open In Youtube</button>
            </div>
            
        </div>
        
    </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'PlayerComponent',
    computed: {
        ...mapGetters({
            version : 'messages/getAppVersion', 
            selectedVideo : 'messages/getSelectedVideo'
        }),
        nocookiesUrl: function(){
            //const url = ('https://www.youtube-nocookie.com/embed/'+this.getSelectedVideoId)
            const url = ('https://www.youtube-nocookie.com/embed/'+this.selectedVideo.videoId)
            return url
        },
        invidiousUrl: function(){ return ('https://invidio.us/watch?v='+this.selectedVideo.videoId) } 
    },
    methods: {
        onOpenInYoutubeClick: function(){
            const url = 'https://www.youtube.com/watch?v=' + this.selectedVideo.videoId
            //const newWindow = window.open(url)
            window.open(url)
        }
    }
}
</script>
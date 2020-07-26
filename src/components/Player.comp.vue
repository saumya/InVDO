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
            <div> {{getSelectedVideo.title}}</div>
            <div> By- {{getSelectedVideo.author}}</div>
            <div>
                <span>Views- <strong>{{getSelectedVideo.viewCount}}</strong> </span> |
                <span>Published- <strong>{{getSelectedVideo.publishedText}}</strong> </span> | 
                <span>Length- <strong>{{ Math.round(getSelectedVideo.lengthSeconds/60) }} secs</strong> </span>
            </div>
            <div>
                <span>Live- <strong>{{getSelectedVideo.liveNow?"Yes":"No"}}</strong> </span> |
                <span>Paid- <strong>{{getSelectedVideo.paid?"Yes":"No"}}</strong> </span> | 
                <span>Premium- <strong>{{getSelectedVideo.premium?"Yes":"No"}}</strong> </span> | 
                <span>Upcoming- <strong>{{getSelectedVideo.isUpcoming?"Yes":"No"}}</strong> </span>
            </div>
            
            <div style="padding:1em;">
                {{getSelectedVideo.description}}
            </div>
            
        </div>
        
    </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'PlayerComponent',
    computed: {
        ...mapGetters([
            'getAppVersion', 'getSelectedVideoId', 'getSelectedVideo'
        ]),
        nocookiesUrl: function(){
            //const url = ('https://www.youtube-nocookie.com/embed/'+this.getSelectedVideoId)
            const url = ('https://www.youtube-nocookie.com/embed/'+this.getSelectedVideo.videoId)
            return url
        },
        invidiousUrl: function(){ return ('https://invidio.us/watch?v='+this.getSelectedVideo.videoId) } 
    }
}
</script>
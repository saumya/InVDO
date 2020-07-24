<template>
    <div>
        
        <section class="section">
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

            <div class="section" style="height:500px; width:610px; background:#EEE;">
                <h1 class="title">Video Player</h1>
                <h2 class="subtitle">The Youtube player {{getAppVersion}}</h2>
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

        </section>

        <Nav1Comp />
        
        
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

import Nav1Comp from './Nav1.comp'

export default {
    name: 'Home_1_Component',
    components: { Nav1Comp },
    computed: {
        ...mapGetters([
            'getAppVersion', 'getSelectedVideoId'
        ]),
        nocookiesUrl: function(){
            const url = ('https://www.youtube-nocookie.com/embed/'+this.getSelectedVideoId)
            return url
        },
        invidiousUrl: function(){ return ('https://invidio.us/watch?v='+this.getSelectedVideoId) } 
    }
}
</script>
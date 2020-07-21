<template>
    <div>
        Home1.comp.vue
        <div>

            <p>{{ invidiousUrl }}</p>
            <p>{{ nocookiesUrl }}</p>

            <!--
            <video>
                <source :src="invidiousUrl" type="video/mp4" />
                <source :src="nocookiesUrl" type="video/mp4" />

                <source :src="invidiousUrl" type="video/webm" />
                <source :src="nocookiesUrl" type="video/webm" />
            </video>

            <video :src="invidiousUrl"></video>
            <video width="640" height="480" src="https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4" controls>
            Sorry, your browser doesn't support HTML5 <code>video</code>, but you can
            download this video from the <a href="https://archive.org/details/Popeye_forPresident" target="_blank">Internet Archive</a>.
            </video>
            -->

            <iframe width="560" height="315" title="Video" 
                :src="nocookiesUrl"
                frameborder="0" 
                allow='autoplay; encrypted-media' 
                allowfullscreen>
            </iframe>

            <!--
            <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/owsfdh4gxyc" 
                frameborder="0" allowfullscreen>
                </iframe>
            -->

        </div>

        <Nav1Comp />
        <PopularComp />
        <TrendingComp />
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

import Nav1Comp from './Nav1.comp'
import TrendingComp from './Trending.comp'
import PopularComp from './Popular.comp'

export default {
    name: 'Home_1_Component',
    components: { Nav1Comp, TrendingComp, PopularComp },
    computed: {
        ...mapGetters([
            'getSelectedVideoId'
        ]),
        nocookiesUrl: function(){
            const url = ('https://www.youtube-nocookie.com/embed/'+this.getSelectedVideoId)
            return url
        },
        invidiousUrl: function(){ return ('https://invidio.us/watch?v='+this.getSelectedVideoId) } 
    }
}
</script>
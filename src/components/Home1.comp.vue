<template>
    <div>
        Home1.comp.vue
        <div>

            <p>{{ invidiousUrl }}</p>
            <p>{{ nocookiesUrl }}</p>

            <video>
                <source :src="invidiousUrl" type="video/mp4" />
                <source :src="nocookiesUrl" type="video/mp4" />

                <source :src="invidiousUrl" type="video/webm" />
                <source :src="nocookiesUrl" type="video/webm" />
            </video>

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
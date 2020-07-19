<template>
    <div>
        Nav1.comp.vue
        <section>
            <div class="field has-addons">
                <p class="control"> <button class="button" v-on:click="onInfoClick">Info</button> </p>
                <p class="control"> <button class="button" v-on:click="onPopularClick">Popular</button> </p>
                <p class="control"> <button class="button" v-on:click="onTrendingClick">Trending</button> </p>
                <p class="control"> <button class="button" v-on:click="onTopClick">Top</button> </p>
            </div>
            <div class="field has-addons">
                <p class="control">
                    <input class="input" type="text" placeholder="Video" v-model="searchString" />
                </p>
                <p class="control"> <button class="button" v-on:click="onSearchClick">Search</button> </p>
            </div>
            {{ getInfoMessage }}
        </section>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Nav_1_Component',
    data: function(){
        return({
            searchString:'video'
        })
    },
    computed: {
        ...mapGetters([
            'getInfoMessage'
        ])
    },
    methods: {
        ...mapActions([ 'get_info_action', 'test_api_action' ]),
        onInfoClick(){
            console.log('info')
            this.$store.dispatch('get_info_action', this.searchString)
        },
        onPopularClick(){
            console.log('popular')
            this.$store.dispatch('get_popular_action', this.searchString)
        },
        onTrendingClick(){
            console.log('Trending')
            this.$store.dispatch('get_trending_action', this.searchString)
        },
        onTopClick(){
            console.log('onTopClick')
            this.$store.dispatch('get_top_action', this.searchString)
        },
        onSearchClick(){
            console.log('onSearchClick')
            console.log( this.searchString )
            
        }
    }
}
</script>
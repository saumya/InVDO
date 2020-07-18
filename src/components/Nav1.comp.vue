<template>
    <div>
        Nav1.comp.vue
        <section>
            <div class="field has-addons">
                <p class="control"> <button class="button" v-on:click="onInfoClick">Info</button> </p>
                <p class="control"> <button class="button" v-on:click="onPopularClick">Popular</button> </p>
                <p class="control"> <button class="button" v-on:click="onTrendingClick">Trending</button> </p>
            </div>
            <div class="field has-addons">
                <p class="control">
                    <input class="input" type="text" placeholder="Video" v-model="searchString" />
                </p>
                <p class="control"> <button class="button" v-on:click="onSearchClick">Search</button> </p>
            </div>
        </section>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    name: 'Nav_1_Component',
    data: function(){
        return({
            searchString:'video'
        })
    },
    methods: {
        ...mapActions([ 'test_api_action' ]),
        onInfoClick(){
            console.log('info')
        },
        onPopularClick(){
            console.log('popular')
        },
        onTrendingClick(){
            console.log('Trending')
        },
        onSearchClick(){
            console.log('onSearchClick')
            console.log( this.searchString )
            this.$store.dispatch('test_api_action', this.searchString)
        }
    }
}
</script>
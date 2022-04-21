<template>
    <div class="card-box">
        <div class="card-list">
            <CardItem v-for="(item, index) in list" :key="index" 
                :name="item.name"
                :image="item.image"
                :date="item.date"
                :description="item.description"
                :authorImage="item.author.image"
                :authorName="item.author.name"
                :authorPosition="item.author.position"
            />
        </div>
    </div>
</template>

<script>
import CardItem from "../components/CardItem/CardItem.vue";
import Data from "../data/post.json";
export default {
    components: {
        CardItem
    },
    data() {
        return {
            list: Data
        }
    }
}
</script>

<style scoped>
    .card-box {
        width: 800px;
        margin: auto;
    }
</style>
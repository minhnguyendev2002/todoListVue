<template>
    <div class="card-item d-flex p-3 mb-3">
        <div class="card-img"><img class="w-100 h-100" :src="image" alt="/" /></div>
        <div class="card-content px-3 position-relative">
            <h3 class="m-0">{{ name }}</h3>
            <span>Update {{ date }}</span>
            <p class="my-3">{{ description }}</p>
            <div class="author d-flex align-items-center">
                <img class="rounded-circle" :src="authorImage" alt="/" />
                <div class="ps-2">
                    <h4 class="m-0">{{ authorName }}</h4>
                    <span>{{ authorPosition }}</span>
                </div>
            </div>
            <button class="position-absolute"><i class="fa-solid fa-share"></i></button>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardItem",
    props:{
        name:String,
        image:String,
        date:String,
        description:String,
        authorImage:String,
        authorName:String,
        authorPosition:String,
    },
    setup(props) {
        console.log(typeof props.image);
    }
}
</script>

<style scoped>
    .card-item {
        background-color: #FFF;
        border-radius: 12px;
    }
    .card-item .card-content > h3 {
        cursor: pointer;
        transition: all 0.3s;
    }
    .card-item .card-content > h3:hover {
        color: #0093E9;
    }
    .card-item .card-img {
        width: 280px;
    }
    .card-item .card-img img {
        object-fit: cover;
        border-radius: 6px;
        height: 100%;
    }
    .card-item .card-content {
        flex:1;
    }
    .card-item .card-content > p {
        display:-webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;
    }
    .card-item .card-content .author img {
        width: 50px; height: 50px;
        object-fit: cover;
    }
    .card-item .card-content .author h4 {
        font-size: 18px;
        cursor: pointer;
        transition: all .3s ease;
    }
    .card-item .card-content .author h4:hover {
        color: #0093E9;
    }
    .card-item .card-content .author span {
        font-size: 14px;
    }
    .card-item .card-content button {
        right: 12px;
        bottom: 5px;
        font-size: 21px;
        border: none; outline: none;
        background-color: transparent;
        transition: all .3s ease;
    }
    .card-item .card-content button:hover {
        color: #0093E9;
    }
</style>
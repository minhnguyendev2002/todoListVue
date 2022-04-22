<template>
    <div class="vip-weather">
        <div class="search-city mb-3">
            <input type="text" placeholder="Search a city" 
                v-model="query"
                @keyup.enter="fetchWeather"
            />
            <button @click="fetchWeather"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div class="weather-box text-center" 
            :class="Math.round(this.weathers.main.temp - 273.15) < 18 ? 'cool' : Math.round(this.weathers.main.temp - 273.15) > 25 ? 'hot' : 'warm' " 
            v-if="(typeof this.weathers.main) != 'undefined'"
        >
            <div class="weather ">
                <h2 class="mb-0">{{this.weathers.name}}</h2>
                <p>{{ date }}</p>
                <div class="mx-auto">{{ Math.round(this.weathers.main.temp - 273.15) }}°C</div>
                <span>{{ this.weathers.weather[0].main }}</span>    
            </div>
        </div>
        <div class="error-mess" v-if="(typeof this.weathers.main) == 'undefined'">Không có dữ liệu về thành phố</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            api_key: 'bfdf5e85b5b82017063a3c6c4fbf4fb1',
            url_base: 'https://api.openweathermap.org/data/2.5/',
            query:'hanoi',
            weathers:{}
        }
    },
    created() {
        fetch(`${this.url_base}weather?q=${this.query}&appid=${this.api_key}`)
            .then(res => {
                return res.json()
            })
            .then(this.setResult)
    },
    methods: {
        fetchWeather() {
            fetch(`${this.url_base}weather?q=${this.query}&appid=${this.api_key}`)
            .then(res => {
                return res.json()
            })
            .then(this.setResult)
        },
        setResult(results) {
            this.weathers = results
        }
    },
    computed:{
        date: function() {
            const now = new Date();
            return now.toUTCString()
        }
    }
}
</script>

<style scoped>
    .vip-weather {
        width: 420px;
        margin: 120px;
        min-height: 70vh;
    }
    .search-city {
        background-color: #FFF;
        padding: 15px 15px;
        border-radius: 12px;
    }
    .search-city input {
        width: 90%;
        border: none;
        outline: none;
    }
    .search-city button {
        width: 10%;
        border: none;
        outline: none;
        background-color: #FFF;
        font-size: 18px;
    }
    .weather-box {
        width: 420px;
        background-color: #FFF;
        padding: 20px;
        border-radius: 16px;
        background-size: cover;
        background-position: center center;
    }
    .weather-box.hot {
        background-image: url("/images/background/hot.jpg")
    }
    .weather-box.cool {
        background-image: url("/images/background/cool.jpg")
    }
    .weather-box.warm {
        background-image: url("/images/background/warm.jpg")
    }
    .weather {
        padding: 15px;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 8px;
        color: #FFF;
    }
    .weather h2 {
        font-style: italic;
        font-weight: 300;
        font-size: 36px;
    }
    .weather p {
        font-weight: 400;
        font-style: italic;
    }
    .weather > div {
        background-color: rgba(255, 255, 255, 0.4);
        width: 150px;
        font-size: 50px;
        font-weight: 700;
        padding: 20px;
        border-radius: 16px;
        box-shadow: 3px 6px rgba(0, 0, 0, 0.3);
        text-shadow: 3px 6px rgba(0, 0, 0, 0.3);
    }
    .weather > span {
        font-size: 40px;
        font-weight: 600;
        font-style: italic;
    }
    .error-mess {
        color: #FFF;
        font-size: 18px;
        margin: 50px 0px;
        text-align: center;
    }
</style>
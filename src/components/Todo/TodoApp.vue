<template>
    <div class="todo-main container d-flex justify-content-center">
        <div class="box mt-5 p-3">
            <h1 class="pb-2 text-center">Todo App</h1>
            <div class="form mt-3">
                <input type="text" placeholder="Thêm công việc"
                    ref="input"
                    v-model="newTodo"
                    @keyup.enter="addTask"
                />
                <button @click="addTask()">Thêm</button>
            </div>
            <ul class="list mt-3">
                <li v-if="list.length <= 0" class="item text-center">Danh sách trống</li>
                <li v-for="(item, index) in list" v-bind:key="index" class="item d-flex align-items-center">
                    <p class="d-inline-block m-0" :class="{done:item.status}">{{item.elm}}</p>
                    <span @click="doneTask(index)" :class="{done:item.status}" class="d-inline-block text-center"><i class="fa-solid fa-check"></i></span>
                    <span @click="deleteTask(item.elm)" class="d-inline-block text-center"><i class="fa-solid fa-trash"></i></span>
                </li>
            </ul>
            <div>Tổng số công việc: {{this.list.length}}</div>
            <div>Số công việc hoàn thành: {{setCountDoneTask()}}</div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
    const newTodo = ref("")
    const list = ref(
        [
            { 
                elm: 'Nấu cơm',
                status:false
            }, 
            { 
                elm: 'Rửa bát',
                status:false
            },
            { 
                elm: 'Đi học',
                status:true
            },
            { 
                elm: 'Giặt đồ',
                status:false
            },
            { 
                elm: 'Rửa xe',
                status:false
            },
            { 
                elm: 'Tán gái',
                status:false
            },
        ]
    )
    const input = ref(null)

    function addTask() {
        this.newTodo === "" ? console.log("Đang bị trống") : 
        this.list.some(item => item.elm === this.newTodo) 
        ? (console.log("Có rồi nhé !"), this.list.filter(item => item.elm !== this.newTodo))
        : this.list.push({elm: this.newTodo})
        this.input.value = ""
    }
    function deleteTask(content) {
        const filterArr = this.list.filter(item => item.elm !== content)
        this.list = filterArr
        this.setCountDoneTask()
    }
    function setCountDoneTask() {
        return this.list.filter(item => item.status === true).length
    }
    function doneTask(item) {
        this.list[item].status = !this.list[item].status
        this.setCountDoneTask()
    }
</script>

<style scoped>
    .box {
        width: 600px; height: auto;
        background-color: #FFF;
        border-radius: 16px;
        border: 2px solid #0093E9;
    }
    .box h1 {
        font-size: 21px;
        border-bottom: 2px solid #0093E9;
        width: 120px;
    }
    .form input, .form button {
        padding: 5px 10px;
        outline: none;
        border: 2px solid #0093E9;
        border-radius: 8px;
        margin-right: 10px;
        background-color: #FFF;
    }
    .form button:hover {
        background-color: #0093E9;
        transition: .3s ease;
        color: #fff;    
    }
    .box .list {
        padding: 0;
        overflow-y: scroll;
        height: 380px;
    }
    .box .list::-webkit-scrollbar {
        display: none;
    }
    .box .list li {
        list-style: none;
        margin-bottom: 10px;
    }
    .box .list li:last-child {
        margin-bottom: 0px;
    }
    .box .list li p {
        width: calc(100% - 60px);
        transition: .3s ease;
        padding: 8px 15px;
        border-radius: 8px;
        background-color: #0093E9;
        color: #FFF;
        border: 2px solid #0093E9;
    }
    .box .list li p.done {
        text-decoration: line-through;
        color: #0093E9;
        background-color: #FFF;
    }
    span.done {
        color: #0093E9 !important;
        background-color: #FFF !important;
    }
    .box .list li p:hover {
        color: #0093E9;
        background-color: #FFF;
    }
    .box .list li span {
        width: 50px;
        margin-left: 10px;
        height: 45px;
        line-height: 45px;
        border-radius: 8px;
        background-color: #0093E9;
        color: #FFF;
        border: 2px solid #0093E9;
        cursor: pointer;
        transition: .3s ease;
    }
    .box .list li span:hover {
        background-color: #FFF;
        color: #0093E9;
        cursor: pointer;
    }
</style>
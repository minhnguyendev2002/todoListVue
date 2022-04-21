<template>
    <div id="contact">
        <h3 class="text-center mb-4">Đăng ký tài khoản</h3>
        <div class="position-relative">
            <input placeholder="Username*" type="text" v-model="this.username" />
            <span v-if="checkUsername" class="position-absolute">Vui lòng nhập lại (từ 3-16 ký tự, không có chữ hoa, ký tự)</span>
        </div>
        <div class="position-relative">
            <input placeholder="Password*" type="password" v-model="this.password" />
            <span v-if="checkPassword" class="position-absolute">Vui lòng nhập lại (> 8 ký tự, không có ký tự đặc biệt)</span>
        </div>
        <div class="position-relative">
            <input placeholder="Enter the password*" type="password" v-model="this.re_enter_password" />
            <span v-if="checkRe_enter_password" class="position-absolute">Vui lòng nhập lại (Hãy đúng với trường mật khẩu)</span>
        </div>
        <div class="position-relative">
            <input placeholder="Your email*" type="text" v-model="this.email" />
            <span v-if="checkEmail" class="position-absolute">Vui lòng nhập lại (Đúng định dạng Email)</span>
        </div>
        <div class="mt-4">
            <button @click="submit" name="submit" type="submit">Add User</button>
        </div>
        <div class="text-center">{{ this.arlet }}</div>
    </div>

</template>

<script>
export default {
    data() {
        return { 
            userNameRegex: /^[a-z0-9_-]{3,16}$/,
            passwordRegex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            emailRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,

            username:"",
            password:"",
            re_enter_password:"",
            email:"",

            checkUsername:false,
            checkPassword:false,
            checkRe_enter_password:false,
            checkEmail:false,

            arlet:""
        }
    },
    methods: {
        submit() {
            !this.userNameRegex.test(`${this.username}`) || 
            this.username === "" ? 
            this.checkUsername = true : this.checkUsername = false

            !this.passwordRegex.test(`${this.password}`) || 
            this.password === "" ? 
            this.checkPassword = true : this.checkPassword = false

            this.re_enter_password !== "" && this.re_enter_password === this.password ? 
            this.checkRe_enter_password = false : this.checkRe_enter_password = true

            !this.emailRegex.test(`${this.email}`) || 
            this.email === "" ?
            this.checkEmail = true : this.checkEmail = false

            if(!this.checkUsername && !this.checkPassword && !this.checkRe_enter_password && !this.checkEmail) {
                this.arlet = "Welcome to Flextech :v"
            }
        }
    }
}
</script>

<style scoped>
    #contact div span {
        position: absolute;
        width: 100%;
        left: 10px;
        font-size: 12px;
        bottom: -5px;
        color: red;
    }
    #contact input[type="text"],
    #contact input[type="email"],
    #contact input[type="password"],
    #contact input[type="url"],
    #contact textarea,
    #contact button[type="submit"] {
        font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
        margin-bottom: 15px !important;
    }

    #contact {
        background: #F9F9F9;
        padding: 25px;
        margin: 50px 0;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
        width: 400px;
        min-width: 400px;
        border-radius: 12px;
    }

    #contact h3 {
        display: block;
        font-size: 30px;
        font-weight: 300;
        margin-bottom: 10px;
    }

    #contact h4 {
        margin: 5px 0 15px;
        display: block;
        font-size: 13px;
        font-weight: 400;
    }

    div {
        border: medium none !important;
        margin: 0 0 10px;
        min-width: 100%;
        padding: 0;
        width: 100%;
    }

    #contact input[type="text"],
    #contact input[type="email"],
    #contact input[type="password"],
    #contact input[type="url"],
    #contact textarea {
        width: 100%;
        border: 1px solid #ccc;
        background: #FFF;
        margin: 0 0 5px;
        padding: 10px;
    }

    #contact input[type="text"]:hover,
    #contact input[type="email"]:hover,
    #contact input[type="password"]:hover,
    #contact input[type="url"]:hover,
    #contact textarea:hover {
        -webkit-transition: border-color 0.3s ease-in-out;
        -moz-transition: border-color 0.3s ease-in-out;
        transition: border-color 0.3s ease-in-out;
        border: 1px solid #aaa;
    }

    #contact textarea {
        height: 100px;
        max-width: 100%;
        resize: none;
    }

    #contact button[type="submit"] {
        cursor: pointer;
        width: 100%;
        border: none;
        background: #4CAF50;
        color: #FFF;
        margin: 0 0 5px;
        padding: 10px;
        font-size: 15px;
    }

    #contact button[type="submit"]:hover {
        background: #43A047;
        -webkit-transition: background 0.3s ease-in-out;
        -moz-transition: background 0.3s ease-in-out;
        transition: background-color 0.3s ease-in-out;
    }

    #contact button[type="submit"]:active {
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
    }

    .copyright {
        text-align: center;
    }

    #contact input:focus,
    #contact textarea:focus {
        outline: 0;
        border: 1px solid #aaa;
    }

    ::-webkit-input-placeholder {
        color: #888;
    }

    :-moz-placeholder {
        color: #888;
    }

    ::-moz-placeholder {
        color: #888;
    }

    :-ms-input-placeholder {
        color: #888;
    }
</style>
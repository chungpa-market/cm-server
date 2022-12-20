<template>
    <form v-on:submit.prevent="registrationForm">
        <div class="registration">
            <h1>
                <router-link href="" to="/">
                    <img src="../assets/res/로고3.jpg" width="90px" height="84.28px">청파마켓
                </router-link>
            </h1>
            <div class="registration-container">
                <div class="id">
                    <label for='id'>아이디</label>
                    <input id='id' type='text' v-model="id">
                </div>

                <div class="password">
                    <label for="password">비밀번호</label>
                    <input type="password" id="password" 
                    placeholder="   8~16글자 사이 입력" v-model="password">
                </div>

                <div class="check-password">
                    <label for="check-password">비밀번호 확인</label>
                    <input type="password" id="check-password" v-model="passwordCheck">
                </div>

                <div class="username">
                    <label for="username">이름</label>
                    <input type="text" id="username" v-model="username">
                </div>

                <div class="line" id="line1"></div>

                <div class="birth">
                    <label for="birth">생년월일</label>
                    <div class="radio">
                        <label for="solar">양력</label>
                        <input type="radio" name="gener" id="solar" v-model="solar" checked>
                        <label for="lunar">음력</label>
                        <input type="radio" name="gener" id="lunar" v-model="lunar">
                    </div>
                    <select name="year" id="year" v-model="year">
                        <option>년</option>
                        <option value="1960">1960</option>
                        <option value="1961">1961</option>
                        <option value="1962">1962</option>
                        <option value="1963">1963</option>
                        <option value="1964">1964</option>
                        <option value="1965">1965</option>
                        <option value="1966">1966</option>
                        <option value="1967">1967</option>
                        <option value="1968">1968</option>
                        <option value="1969">1969</option>
                        <option value="1970">1970</option>
                        <option value="1971">1971</option>
                        <option value="1972">1972</option>
                        <option value="1973">1973</option>
                        <option value="1974">1974</option>
                        <option value="1975">1975</option>
                        <option value="1976">1976</option>
                        <option value="1977">1977</option>
                        <option value="1978">1978</option>
                        <option value="1979">1979</option>
                        <option value="1980">1980</option>
                        <option value="1981">1981</option>
                        <option value="1982">1982</option>
                        <option value="1983">1983</option>
                        <option value="1984">1984</option>
                        <option value="1985">1985</option>
                        <option value="1986">1986</option>
                        <option value="1987">1987</option>
                        <option value="1988">1988</option>
                        <option value="1989">1989</option>
                        <option value="1990">1990</option>
                        <option value="1991">1991</option>
                        <option value="1992">1992</option>
                        <option value="1993">1993</option>
                        <option value="1994">1994</option>
                        <option value="1995">1995</option>
                        <option value="1996">1996</option>
                        <option value="1997">1997</option>
                        <option value="1998">1998</option>
                        <option value="1999">1999</option>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>
                        <option value="2005">2005</option>
                        <option value="2006">2006</option>
                        <option value="2007">2007</option>
                        <option value="2008">2008</option>
                        <option value="2009">2009</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>

                    <select name="month" id="month" v-model="month">
                        <option>월</option>
                        <option value="01">1</option>
                        <option value="02">2</option>
                        <option value="03">3</option>
                        <option value="04">4</option>
                        <option value="05">5</option>
                        <option value="06">6</option>
                        <option value="07">7</option>
                        <option value="08">8</option>
                        <option value="09">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>

                    <select name="day" id="day" v-model="day">
                        <option>일</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>
                </div>

                <div class="line" id="line2"></div>

                <div class="phone-number">
                    <label for="phone-number">휴대폰번호</label>
                    <input type="text" v-model="phoneNumber" id="phone-number">

                    <div class="checkbox">
                        <input type="checkbox" id="checkbox1" v-model="checkbox1">
                        <label for="checkbox1" style="padding-left: 30px; padding-top: 3px;">인증</label>
                    </div>
                </div>

                <div class="verification-code">
                    <label for="verification-code">인증번호</label>
                    <input type="text" name="verification-code" id="verification-code" v-model="verificationCode">

                    <div class="checkbox" style="left: 750px;">
                        <input type="checkbox" id="checkbox2" v-model="checkbox2">
                        <label for="checkbox2" style="padding-left: 30px; padding-top: 3px;">인증번호 확인</label>
                    </div>
                </div>

                <div class="line" id="line3"></div>

                <div class="email-address">
                    <label for="email">이메일</label>
                    <div class="email-input">
                        <input type="text" id="email-address" v-model="emailAddress">
                        <label for="@">@</label>
                        <select name="email" id="email" v-model="email">
                            <option value="">직접입력</option>
                            <option value="naver.com">naver.com</option>
                            <option value="daum.net">daum.net</option>
                            <option value="gmail.com">gmail.com</option>
                            <option value="sookmyung.ac.kr">sookmyung.ac.kr</option>
                            <option value="nate.com">nate.com</option>
                        </select>
                    </div>
                </div>

                <div class="btn-container">
                    <button v-on:click="registration" type="submit">회원가입</button>
                </div>
            </div>
        </div>
    </form>
</template>
<script>
import axios from 'axios';
export default {
    title: '회원가입',
    name: 'registrationForm',
    data() {
        return {
            id: '', password: '', passwordCheck: '',
            username: '', solar: '', lunar: '', year: '', month: '', day: '',
            phoneNumber: '', checkbox1: '', verificationCode: '', checkbox2: '',
            emailAddress: '', email: '',
        }
    },
    methods: {
        registrationForm: function () {
            const url = 'https://jsonplaceholder.typicode.com/users';
            const data = {
                id: this.id,
                password: this.password,
                passwordCheck: this.passwordCheck,
                username: this.username,
                solar: this.solar,
                lunar: this.lunar,
                year: this.year,
                month: this.month,
                day: this.day,
                phoneNumber: this.phoneNumber,
                checkbox1: this.checkbox1,
                verificationCode: this.verificationCode,
                checkbox2: this.checkbox2,
                emailAddress: this.emailAddress,
                email: this.email,
            }
            axios.post(url, data)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
};
</script>
<style>
.registration {
    width: 1050px;
    margin: 0 auto;
    font-family: 'Nanum Gothic', sans-serif;
}
.registration h1 a{
    display: flex;
    margin: 100px;
    justify-content: center;
    align-items: flex-end;
    font-family: 'PyeongChangPeace-Light';
    text-decoration-line: none;
    font-weight: 1000;
    font-size: 60px;
    color: #0035D3;
}

.registration .line {
    border-bottom: 0.5px solid;
    border-color: #c2c2c2;
}

.registration input {
    border: 0.5px solid #001F7B;
}

.registration select {
    filter: drop-shadow(-2px 4px 15px rgba(0, 7, 69, 0.15));
    height: 40px;
}

.registration-container div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 50px;
}

.registration-container input:not(.phone-number, .verification-code) {
    box-sizing: border-box;
    width: 800px;
    height: 44px;
    background: #FFFFFF;
}

.registration-container .birth .radio {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
}

.registration-container .birth .radio input {
    width: 23px;
    height: 23px;
}

.registration-container .birth select {
    width: 154px;
}

.registration-container .birth .radio .solar {
    margin: 0 0 4px 0;
}

.registration-container .birth .radio .lunar {
    margin: 0;
}

.registration button {
    display: block;
    align-items: center;
    box-sizing: border-box;
    width: 150px;
    height: 54px;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    background: #0035D3;
    border: 2px solid #0035D3;
    border-radius: 17px;
}

.registration button:hover {
    background-color: #001F7B;
}

.registration-container .email-input {
    width: 400px;
    margin: 0;
    padding-right: 400px;
    justify-content: flex-start;
}

.registration-container .email-input label {
    margin: 0 14px;
}

.registration .email-address input {
    width: 278px;
    height: 44;
}

.registration .email-address select {
    width: 230px;
}

.registration-container .btn-container {
    display: flex;
    justify-content: center;
    margin: 150px 0 90px 0;
}

.registration .phone-number input,
.registration .verification-code input {
    box-sizing: border-box;
    width: 800px;
    height: 44px;
    background: #FFFFFF;
}

.registration .phone-number,
.registration .verification-code {
    position: relative;
}

.registration .checkbox {
    position: absolute;
    width: 170px;
    height: 40px;
    left: 820px;
}

.registration input[type="checkbox"] {
    display: none;
    position: relative;
}

.registration input[type=checkbox]+label {
    cursor: pointer;
    padding-left: 23px;
    color: #B5B5B5;
    background-repeat: no-repeat;
    background-image: url('../assets/res/Check-off.png');
}

.registration input[type=checkbox]:checked+label {
    background-image: url('../assets/res/Check-on.png');
    color: #0035d3;
    font-weight: 400;
}

.registration input[type=checkbox]:disabled+label {
    background-image: url('../assets/res/Check-off.png');
    color: #B5B5B5;
    font-weight: 400;
}
</style>
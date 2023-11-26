<template>
    <div class="modal fade" id="otpModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">OTP authentication</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div id="showOTP">
                        <span>OTP 인증</span>
                        <br>
                        <h1 v-for="(digit, i) in $store.state.otp['otp']" :key="i">{{ digit }}</h1>
                        <div id="otpTime">
                            <div class="progress" role="progressbar">
                                <div class="progress-bar" :style="{ width: (timeLeft / 180 * 100) + '%' }"></div>
                            </div>
                            <span>남은시간 {{ parseInt(this.timeLeft) }}초</span>
                        </div>
                        <span>유효시간 내에 위의 OTP 인증번호를 입력하세요</span>

                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">close</button>
                    <input type="hidden" id="resultModalTrigger" data-bs-toggle="modal" data-bs-target="#resultModal" />
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
import axios from 'axios';

export default {
    name: 'OTPModal',
    data() {
        return {
            countDownInterval: {},
            timeLeft: 180,
        }
    },
    mounted() {
        const otpModal = document.querySelector('#otpModal')
        //모달창 보여질 때
        otpModal.addEventListener('show.bs.modal', () => {
            this.countDownInterval = setInterval(() => {
                this.timeLeft = this.$store.state.otp["expires"] - Date.now() / 1000
                if (this.timeLeft <= 0) {
                    clearInterval(this.countDownInterval)
                }
            }, 100);
            //otp execute
            axios.post(`${this.$store.state.apiURL}/auth/otp/execute`, { "otp": this.$store.state.otp["otp"] })
                .then((res) => {
                    clearInterval(this.countDownInterval)
                    this.$store.commit("setOTPResult",res.data)
                    if(this.$store.state.otp != {}){
                        document.querySelector("#resultModalTrigger").click()
                    }
                    
                })
                .catch(() => {
                    return false
                })
        })
        //모달창 닫힐 때
        otpModal.addEventListener('hiden.bs.modal', () => {
            this.$store.commit("setOTP", {})
            //otp expire
            clearInterval(this.countDownInterval)
            axios.post(`${this.$store.state.apiURL}/auth/otp/expire`, { "otp": this.$store.state.otp["otp"] })
                .then((res) => {
                    if (res.data.message == "Success") {
                        return true
                    } else {
                        return false

                    }
                })
                .catch(() => {
                    return false
                })
        })
    }
}
</script>
  
<style>
#otpModal #showOTP {
    text-align: center;
    padding: 0 15%;
}

#otpModal #showOTP>h1 {
    display: inline-block;
    margin: 20px 5px;
    padding: 5px;
    width: 50px;
    height: 60px;
    border: 1px #DCDCDC solid;
    border-radius: 5px;

}

#otpModal #showOTP>#otpTime {
    text-align: right;

}

#otpModal #showOTP .progress-bar {
    background-color: #822DE2;
}
</style>
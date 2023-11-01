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
                        <h1 v-for="(digit, i) in $store.state.OTP['otp']" :key="i">{{ digit }}</h1>
                        <div id="otpTime">
                            <div class="progress" role="progressbar">
                                <div class="progress-bar" style="width: 80%"></div>
                            </div>
                            <span>남은시간 180초</span>
                        </div>
                        <span>유효시간 내에 위의 OTP 인증번호를 입력하세요</span>

                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">close</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'OTPModal',
    mounted() {
        const otpModal = document.querySelector('#otpModal')
        otpModal.addEventListener('show.bs.modal', () => {
            //otp execute
            axios.post(`${this.$store.state.apiURL}/auth/otp/execute`, { "otp": this.$store.state.OTP["otp"] })
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
        otpModal.addEventListener('hide.bs.modal', () => {
            //otp expire
            axios.post(`${this.$store.state.apiURL}/auth/otp/expire`, { "otp": this.$store.state.OTP["otp"] })
                .then((res) => {
                    if (res.data.message == "Success") {
                        this.$store.commit("setOTP",{})
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
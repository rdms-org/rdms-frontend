<template>
    <div class="modal fade" id="resultModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Result</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <span v-if="this.$store.state.otpResult.message == 'Fail'">OTP인증에 실패하였습니다. 다시 시도해주세요</span>
                    <div v-if="this.$store.state.otpResult.message == 'Success'">
                        <div v-if="this.$store.state.otp.type == 'add'">
                            <h4>유저 등록을 완료하였습니다</h4>
                            <span>UUID: {{ this.$store.state.otpResult.data.uuid }}</span><br>
                            <span>기기명: {{ this.$store.state.otpResult.data.name }}</span><br>
                            <span>등록일자: {{ this.$store.state.otpResult.data.creation_time }}</span><br>
                        </div>
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
export default {
    name: 'UserResultModal'
}
</script>
  
<style></style>
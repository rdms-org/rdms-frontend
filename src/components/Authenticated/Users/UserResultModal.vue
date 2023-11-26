<template>
    <div class="modal fade" id="userResultModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Result</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <span v-if="this.$store.state.addUserResult.message == 'Fail'">유저 등록에 실패하였습니다. 다시 시도해주세요</span>
                    <div v-if="this.$store.state.addUserResult.message == 'Success'">
                        <div>
                            <h4>유저 등록을 완료하였습니다</h4>
                            <span>id: {{ this.$store.state.addUserResult.data.id }}</span><br>
                            <span>이름: {{ this.$store.state.addUserResult.data.name }}</span><br>
                            <span>학번: {{ this.$store.state.addUserResult.data.student_number }}</span><br>
                            <span>연락처: {{ this.$store.state.addUserResult.data.contacts }}</span><br>
                            <span>비고: {{ this.$store.state.addUserResult.data.note }}</span><br>
                        </div>
                    </div>



                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">close</button>
                </div>
            </div>
        </div>``
    </div>
</template>
  
<script>
export default {
    name: 'UserResultModal',
    mounted() {
        const userResultModal = document.querySelector('#userResultModal')
        userResultModal.addEventListener('show.bs.modal', () => {
            this.$store.dispatch("getUserData")
        })
    }
}
</script>
  
<style></style>
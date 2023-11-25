<template>
    <div ref="otpModal" class="modal fade" id="addUserModal" data-bs-backdrop="static" data-bs-keyboard="false"
        tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Add User</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit="addUser">
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">이름</label>
                            <input v-model="userName" type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">학번</label>
                            <input v-model="userStudentID" type="number" class="form-control">
                        </div>
                            <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">연락처</label>
                            <input v-model="userContacts" type="text" class="form-control">
                        </div>
                            <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">비고(선택사항)</label>
                            <input v-model="userNote" type="text" class="form-control">
                        </div>
                        </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="addUser"
                        :disabled="this.userName == '' || this.userStudentID == '' || this.userContacts == ''">Add User</button>
                    <input type="hidden" id="UserResultTrigger" data-bs-toggle="modal" data-bs-target="#userResultModal" />

                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'AddUserModal',
    data() {
        return {
            userName: "",
            userStudentID:"",
            userContacts:"",
            userNote:""     
        }
    },
    methods: {
        async addUser(evt) {
            evt.preventDefault();
            await this.$store.dispatch("addUser", { "name": this.userName, "student_number":this.userStudentID, "contacts":this.userContacts, "note":this.userNote })
            document.querySelector("#UserResultTrigger").click()
        }
    }
}
</script>
  
<style></style>
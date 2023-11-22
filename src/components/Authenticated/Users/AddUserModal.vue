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
                    <form @submit="genUserAddOTP">
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">User Name</label>
                            <input v-model="UserName" type="text" class="form-control">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="addUser"
                        :disabled="this.userName == ''">Next</button>
                    <input type="hidden" id="UserResultTrigger" data-bs-toggle="modal" data-bs-target="#otpModal" />

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
        }
    },
    methods: {
        async addUser(evt) {
            evt.preventDefault();
            document.querySelector("#UserResultTrigger").click()
        }
    }
}
</script>
  
<style></style>
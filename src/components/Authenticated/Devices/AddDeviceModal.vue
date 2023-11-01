<template>
    <div ref="otpModal" class="modal fade" id="addDeviceModal" data-bs-backdrop="static" data-bs-keyboard="false"
        tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Add Device</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Device Name</label>
                            <input v-model="deviceName" type="text" class="form-control">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="genDeviceAddOTP"
                        :disabled="this.deviceName == ''">Next</button>
                    <input type="hidden" id="otpModalTrigger" data-bs-toggle="modal" data-bs-target="#otpModal" />

                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'AddDeviceModal',
    data() {
        return {
            deviceName: "",
        }
    },
    methods: {
        async genDeviceAddOTP() {
            const result = await this.$store.dispatch("genOTP", { "type": "add", "data": { "name": this.deviceName, "admin": this.$store.state.userData.username } })
            if(result){
                document.querySelector("#otpModalTrigger").click()
            }
        }
    }
}
</script>
  
<style></style>
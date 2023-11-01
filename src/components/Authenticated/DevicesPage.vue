<template>
  <div id="devices" class="container-fluid">
    
    <span>Devices</span>
    <div class="menu">
      <button type="button" class="btn btn-violet" data-bs-toggle="modal" data-bs-target="#addDeviceModal">+ Add Device</button>
    </div>
    <div class="infoTable table-responsive small">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">기기명</th>
            <th scope="col">등록일</th>
            <th scope="col">기기상태</th>
            <th scope="col">대여시작일</th>
            <th scope="col">반납예정일</th>
            <th scope="col">대여자 정보</th>
            <th scope="col">UUID</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(device, i) in $store.state.deviceData" :key="i">
            <td>{{ device.name }}</td>
            <td>{{ getDateformat(device.creation_time) }}</td>
            <td>관리중</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>{{ device.uuid }}</td>

          </tr>

        </tbody>
      </table>
    </div>
    <add-device-modal/>
    <OTPModal/>
  </div>
</template>

<script>
  import AddDeviceModal from "./Devices/AddDeviceModal.vue";
  import OTPModal from "./Devices/OTPModal.vue";

export default {
  name: 'DevicesPage',
  components: {
    AddDeviceModal,
    OTPModal
  },
  mounted() {
    this.$store.commit("setDeviceData")
  },
  methods: {
    // 시간 변경
    getDateformat: function (rawDate) {
      const formattedDate = new Date(rawDate);
      const date = formattedDate.toISOString().split('T')[0]
      return date;
    }
  }
}
</script>

<style>
#devices {
  height: 100%;
}

#devices>span {
  display: block;
  font-size: 30px;
  height: auto;
}

#devices>.menu {
  margin-top: 12px;
}

#devices>.infoTable {
  margin: 20px 0;
}
</style>
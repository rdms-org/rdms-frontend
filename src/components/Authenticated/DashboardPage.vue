<template>
  <div id="dashboard" class="container-fluid d-flex flex-column">
    <span>Dashboard</span>

    <div class="slot_group row">
      <div class="col-lg-3 col-md-6 col-sm-12 slot">
        <div class="container_fluid">
          <p class="title">대여 현황</p>
          <p class="value">8/10</p>
          <div class="progress" role="progressbar">
            <div class="progress-bar" style="width: 80%"></div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 slot">
        <div class="container_fluid">
          <p class="title">경고 알림</p>
          <p class="value">2개</p>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 slot">
        <div class="container_fluid">
          <p class="title">반납 대기중</p>
          <p class="value">1개</p>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 slot">
        <div class="container_fluid">
          <p class="title">최근 작업</p>
          <p class="value">0개</p>
        </div>
      </div>
    </div>
    <div class="col-12 flex-grow-1 calendar_slot">
      <calendarBlock class="container_fluid">
      </calendarBlock>
    </div>
  </div>
</template>

<script>
import CalendarBlock from "./Dashboard/CalendarBlock.vue"
export default {
  name: 'DashboardPage',
  components: {
    CalendarBlock
  }
}
</script>

<style>
#dashboard {
  height: 100%;
}

#dashboard>span {
  font-size: 30px;
  height: auto;
}

#dashboard .slot{
  padding: 12px;
}

#dashboard .slot>div,
#dashboard .calendar_slot>div {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 3px 6px #00000010;
}

#dashboard .slot>div>.title {
  font-size: 13px;
  font-family: "NanumSquareRound";
  font-weight: bolder;
  margin-bottom: 0px;
}

#dashboard .slot>div>.value {
  font-size: 36px;
  font-family: "NanumSquareRound";
  font-weight: bolder;
  margin-bottom: 20px;
}

#dashboard .slot>div .progress {
  border: 1px solid black;
  border-radius: 8px;
  margin-top: -16px;
}

#dashboard .slot>div .progress-bar {
  background-color: #822DE2;
}
</style>
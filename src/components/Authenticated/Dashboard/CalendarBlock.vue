<template>
    <div class="calendar d-flex flex-column">
        <div class="row ui_group">
            <div class="btn-group col-md-2">
                <button type="button" class="btn btn-outline-violet" @click="addMonth(-1)">&lt;</button>
                <button type="button" class="btn btn-outline-violet" @click="setToday()">Today</button>
                <button type="button" class="btn btn-outline-violet" @click="addMonth(1)">&gt;</button>
            </div>
            <span class="col-md-8 month_text">{{ year }}년 {{ month }}월</span>
        </div>
        <div class="row">
            <div class="col day" v-for="j in ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']" :key="j">{{ j }}</div>
        </div>
        <div v-for="i in 6" :key="i" class="row flex-grow-1">
            <div class="col cell" v-for="j in 7" :key="j">
                <span :class="{ 'today': isToday((i - 1) * 7 + j) }">{{ getText((i - 1) * 7 + j) }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CalendarBlock',
    data() {
        return {
            year: 2023,
            month: 9,
        }
    },
    methods: {
        //해당하는 셀의 날짜 텍스트 반환
        getText(num) {
            // 이전 달의 마지막 날 요일 구하기
            const startDay = new Date(this.year, this.month - 1, 0);
            let prevDay = startDay.getDay();
            prevDay += 1
            prevDay %= 7

            // 이번 달의 마지막날 날짜 구하기
            const endDay = new Date(this.year, this.month, 0);
            const nextDate = endDay.getDate();
            const res = num - prevDay
            if (res >= 1 && res <= nextDate) {
                return res
            } else {
                return
            }

        },
        //월 바꾸기
        addMonth(num) {
            this.month += num
            if (this.month > 12) {
                this.year += Math.floor(this.month / 12)
                this.month %= 12
            } else if (this.month < 1) {
                this.year += Math.floor((this.month - 1) / 12)
                this.month %= 12
                this.month += 12
            }
        },
        //년도와 월을 오늘로 설정
        setToday() {
            const today = new Date();
            this.year = today.getFullYear()
            this.month = today.getMonth() + 1
        },
        //일을 입력받아서 오늘인지 확인
        isToday(date) {
            const today = new Date();
            if (this.year == today.getFullYear() && this.month == today.getMonth() + 1 && date == today.getDate()) {
                return true
            } else {
                return false
            }
        }
    },
    mounted(){
        this.setToday()
    }
}
</script>


<style>
.calendar {
    text-align: center;
    height: 100%;
}

.calendar .ui_group {
    margin-bottom: 20px;
}

.calendar .btn-group {
    padding: 8px;
}

.calendar .month_text {
    font-family: 'NanumSquareRound';
    font-weight: bold;
    font-size: 36px;
}

.calendar .day {
    border: 1px #D1D1D1 solid;
    margin: -0.5px;
}

.calendar .cell {
    border: 1px #D1D1D1 solid;
    margin: -0.5px;
}

.calendar .cell>span {
    font-size: 13px;
    color: #1D1D1D;
    padding: 3px 5px;
}

.calendar .today {
    background-color: #DCDCDC;
    border-radius: 50%;
}
</style>
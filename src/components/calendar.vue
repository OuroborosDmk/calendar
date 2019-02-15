<template>
    <div id="calendar">
        <div id="calendarbox">
            <div id="calendarboxHeader">
                <a href="#">&lt;</a>
                <p>2019年2月</p>
                <a href="#">&gt;</a>
            </div>
            <ul id="weekdayHeader">
                <li v-for="item in weekList" :key="item.value">{{item.title}}</li>
            </ul>
            <ul id="weekdayboard">
                <li v-for="item in firstWeek" :key="item.value">{{item.title}}</li>
                <li v-for="item in secondWeek" :key="item.value">{{item.title}}</li>
                <li v-for="item in thirdWeek" :key="item.value">{{item.title}}</li>
                <li v-for="item in forthWeek" :key="item.value">{{item.title}}</li>
                <li v-for="item in fifthWeek" :key="item.value">{{item.title}}</li>
            </ul>
        </div>
        <div id="blackboard">

        </div>
        <div class="clearfloat"></div>
    </div>
</template>
<style>
@import "../assets/css/component.css";
</style>
<script>
// import { showDate,prevDate,nextDate,subSpace,subDate } from '../js/component.js'
export default {
  name: 'calendar',
  data () {
    return {
      weekList: [
        { title: '日', value: 0 },
        { title: '一', value: 1 },
        { title: '二', value: 2 },
        { title: '三', value: 3 },
        { title: '四', value: 4 },
        { title: '五', value: 5 },
        { title: '六', value: 6 }
      ],
      firstWeek: [
        { title: ' ', value: 0 },
        { title: ' ', value: 1 },
        { title: ' ', value: 2 },
        { title: ' ', value: 3 },
        { title: ' ', value: 4 },
        { title: ' ', value: 5 },
        { title: ' ', value: 6 }
      ],
      secondWeek: [
        { title: ' ', value: 7 },
        { title: ' ', value: 8 },
        { title: ' ', value: 9 },
        { title: ' ', value: 10 },
        { title: ' ', value: 11 },
        { title: ' ', value: 12 },
        { title: ' ', value: 13 }
      ],
      thirdWeek: [
        { title: ' ', value: 14 },
        { title: ' ', value: 15 },
        { title: ' ', value: 16 },
        { title: ' ', value: 17 },
        { title: ' ', value: 18 },
        { title: ' ', value: 19 },
        { title: ' ', value: 20 }
      ],
      forthWeek: [
        { title: ' ', value: 21 },
        { title: ' ', value: 22 },
        { title: ' ', value: 23 },
        { title: ' ', value: 24 },
        { title: ' ', value: 25 },
        { title: ' ', value: 26 },
        { title: ' ', value: 27 }
      ],
      fifthWeek: [
        { title: ' ', value: 28 },
        { title: ' ', value: 29 },
        { title: ' ', value: 30 },
        { title: ' ', value: 31 },
        { title: ' ', value: 32 },
        { title: ' ', value: 33 },
        { title: ' ', value: 34 }
      ]
    }
  },
  mothods: {

  }
}
</script>

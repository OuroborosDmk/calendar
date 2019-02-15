<template>
    <div id="calendar">
        <div id="calendarbox">
            <div id="calendarboxHeader">
                <a href="#" @click="prevmonth">&lt;</a>
                <p>{{year}}年{{month}}月</p>
                <a href="#" @click="nextmonth">&gt;</a>
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
                <li v-for="item in sixthWeek" :key="item.value">{{item.title}}</li>
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
import { showDate, prevDate, nextDate } from '../assets/js/component.js';
export default {
  name: 'calendar',
  data () {
    return {
      trueyear: ' ',
      truemonth: ' ',
      trueday: ' ',
      year: ' ',
      month: ' ',
      day: ' ',
      nextclickSign: 0,
      prevclickSign: 0,
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
      ],
      sixthWeek: [
        { title: ' ', value: 35 },
        { title: ' ', value: 36 },
        { title: ' ', value: 37 },
        { title: ' ', value: 38 },
        { title: ' ', value: 39 },
        { title: ' ', value: 40 },
        { title: ' ', value: 41 }
      ]
    }
  },
  methods: {
    showCalendar:function(year,month){
      var spaceCount = showDate(year,month);
      this.year = spaceCount[2];
      this.month = spaceCount[3]+1;
      //console.log(spaceCount[0]);
      //console.log(spaceCount[1]);
      if(spaceCount[0]==0){
        for(var i=0;i<7;i++){
          this.firstWeek[i].title = i+1;
          this.secondWeek[i].title = i+8;
          this.thirdWeek[i].title = i+15;
          this.forthWeek[i].title = i+22;
          if(i+29<=spaceCount[1]){
            this.fifthWeek[i].title = i+29;
          }
        }
      }
      else if(spaceCount[0]>0){
        for(var i=0;i<7;i++){
          this.firstWeek[i].title = i-spaceCount[0]+1;
          if(this.firstWeek[i].title<=0){
            this.firstWeek[i].title = ' ';
          }
          this.secondWeek[i].title = i-spaceCount[0]+8;
          this.thirdWeek[i].title = i-spaceCount[0]+15;
          this.forthWeek[i].title = i-spaceCount[0]+22;
          if(spaceCount[1]+spaceCount[0]>35){
            this.fifthWeek[i].title = i-spaceCount[0]+29;
            if(i-spaceCount[0]+36<=spaceCount[1]){
              this.sixthWeek[i].title = i-spaceCount[0]+36;
            }
          }
          else{
            if(i-spaceCount[0]+29<=spaceCount[1]){
              this.fifthWeek[i].title = i-spaceCount[0]+29;
            }
          }
        }
      }
    },
    nextmonth:function(){
      this.nextclickSign+=1;
      this.month+=1;
      if(this.month>12){
        this.year+=1;
        this.month=this.month%12;
      }
      this.showCalendar(this.year,this.month); 
    },
    prevmonth:function(){
      this.prevclickSign+=1;
      this.month-=1;
      if(this.month==0){
        this.year-=1;
        this.month=this.month+12;
      }
      this.showCalendar(this.year,this.month);
    }
  },
  mounted: function(){
    this.showCalendar(0,0);
    this.trueyear = this.year;
    this.truemonth = this.month;
  }
}
</script>

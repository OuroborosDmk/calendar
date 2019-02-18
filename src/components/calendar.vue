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
                <li v-for="item in firstWeek" :key="item.value" @click="inquireItem(item.value,item.title)">{{item.title}}</li>
                <li v-for="item in secondWeek" :key="item.value" @click="inquireItem(item.value,item.title)">{{item.title}}</li>
                <li v-for="item in thirdWeek" :key="item.value" @click="inquireItem(item.value,item.title)">{{item.title}}</li>
                <li v-for="item in forthWeek" :key="item.value" @click="inquireItem(item.value,item.title)">{{item.title}}</li>
                <li v-for="item in fifthWeek" :key="item.value" @click="inquireItem(item.value,item.title)">{{item.title}}</li>
                <li v-for="item in sixthWeek" :key="item.value" @click="inquireItem(item.value,item.title)">{{item.title}}</li>
            </ul>
        </div>
        <div id="blackboard">
          <div id="needEdit" v-show="neededitSign">
            <input v-model="theTitle">
            <textarea id="editArea" v-model="message"></textarea>
            <button @click="saveEdit" id="savebutton"></button>
          </div>
          <div id="Edited" v-show="editedSign">
            <div><p>{{theTitle}}</p></div>
            <div><p>{{message}}</p></div>
            <button @click="edit" id="editbutton"></button>
            <button @click="deleteItem" id="deletebutton"></button>
          </div>
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
      trueyear: '',
      truemonth: '',
      trueday: '',
      year: '',
      month: '',
      day: '',
      nextclickSign: 0,
      prevclickSign: 0,
      editedSign: false,//true为已编辑，false为未编辑
      neededitSign: false,//true为未编辑，false为已编辑
      theTitle: '',
      message: '',
      editItem: {
        id: '',
        time: '',
        content: '',
        title: ''
      },
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
      ],

    }
  },
  methods: {
    showCalendar:function(year,month){
      for(var i=0;i<7;i++){
        this.firstWeek[i].title=' ';
        this.secondWeek[i].title=' ';
        this.thirdWeek[i].title=' ';
        this.forthWeek[i].title=' ';
        this.fifthWeek[i].title=' ';
        this.sixthWeek[i].title=' ';
      }
      var spaceCount = showDate(year,month);
      this.year = spaceCount[2];
      this.month = spaceCount[3];
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
    },
    createId:function(id){
      var idIndex;
      var monthIndex;
      var index;
      if(id<10){
        idIndex="0"+String(id);
      }
      else{
        idIndex=String(id);
      }
      if(this.month<10){
        monthIndex="0"+String(this.month);
      }
      else{
        monthIndex=String(this.month);
      }
      index=this.year+monthIndex+idIndex;

      return index;
    },
    inquireItem:function(id,title){
      if(title===' '){
        if(id<10){
          this.prevmonth();
        }
        else{
          this.nextmonth();
        }
      }
      else{
        var index=this.createId(id);
        //查询数据库
        console.log(index);
        var inquireSign=false;//如果数据存在，返回true；如果数据不存在，返回false；
        if(inquireSign==true){
          this.editedSign=true;
          this.neededitSign=false;
          this.theTitle=this.editItem.title;//应从数据库中读取数据
          this.message=this.editItem.content;//应从数据库中读取数据
        }
        else if(inquireSign==false){
          this.editedSign=false;
          this.neededitSign=true;
          this.theTitle='';
          this.message='';
          this.editItem.id=index;
        }
      }
    },
    addThing:function(){
      this.editItem.time=this.year+this.month;
      this.editItem.content=this.message;
      this.editItem.title=this.theTitle;
      //存入数据库
      console.log(this.editItem.id+" "+this.editItem.time+" "+this.editItem.title+" "+this.editItem.content);
    },
    saveEdit:function(){
      this.editedSign=true;
      this.neededitSign=false;
      this.addThing();
    },
    edit:function(){
      this.editedSign=false;
      this.neededitSign=true;
    },
    deleteItem:function(){
      //向数据库中传输id，在数据库中删除数据
      this.editedSign=false;
      this.neededitSign=false;
    }
  },
  mounted: function(){
    this.showCalendar(0,0);
    this.trueyear = this.year;
    this.truemonth = this.month;
  }
}
</script>

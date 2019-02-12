<template>
	<div>
		<div id="calendarbox">
			<div id="calendarboxHeader">
				<a>&lt;</a>
				<p>2019年2月</p>
				<a>&gt;</a>
			</div>
			<ul id="weekdayHeader">
				<li v-for="item in weekList" :key="item.value">{{item.title}}</li>
			</ul>
			<ul id="weekdayboard">
				<li></li>
			</ul>
		</div>
		<div id="blackboard">

		</div>
	</div>
</template>
<style src="../css/component.css"></style>
<script>
	import {showDate,prevDate,nextDate,subSpace,subDate} from '../js/component.js'
	export default {
		data() {
			return{
				weekList:[
					{title:'日',value:7},
					{title:'一',value:1},
					{title:'二',value:2},
					{title:'三',value:3},
					{title:'四',value:4},
					{title:'五',value:5},
					{title:'六',value:6},
				],
			}
		},
		mothods: {

		},
	}
</script>
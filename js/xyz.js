Vue.component("scene-bigmap", {//場景圖
        props:['data'],
		methods:{
			moveNextArea:function(e){
				var info  = e.target.getAttribute("dataInfo")
				var locationData  = xyzData.locationEvent[info];
				var taskNow = xyzData.taskNow;
				xyzData.nowScene = locationData.destination.scene;
				xyzData.sceneIndex = locationData.destination.index;
				
				
				var result = locationData.event.filter(function(x){
					return x.id == taskNow && x.count == 0;
				})
				
				if(result != 0){
					xyzData.talkvisible = true;
					locationData.event.count = 1;
				}
				// xyzData.locationEvent[info].id
			}
		},
		template:`
		<table class="table table-bordered">
			<thead>
			  AAAAAAAAA
			</thead>
			<tbody>
			<tr v-for="(v,k) in data" class="row" :style="{height:v.height}">
			   <td v-for="(v2,k2) in v.data" :class="v2.width" style="cursor:pointer" :dataInfo="v2.name" @click="moveNextArea">
				{{v2.name}}
			   </td>
			</tr>
			</tbody>
		</table>
		`
});



Vue.component("bread-shelf", {//麵包架
         props:['data'],
					  template: `<div class="row">
									<div  class="col-3" style="" v-for="(v,k) in data">
										<img :src="v.src" style="width:100%;">
										<div>
											<p>{{v.cost}}-{{v.name}}</p>
										</div>
									</div>
								</div>`
      });
	  
Vue.component("task", {//任務欄
         props:['data'],
					  template: `<div class="row">
									<h3>任務</h3>
									{{data[0].name}}(0/1)
								</div>`
      });	  
	  
	  
	  
Vue.component("talking-view", {
	
         props:['data','talkvisible'],
		 data: function () {
		  return {
			count: 0
		  }
		},
		 template: `<div class="row" style="position:absolute;z-index:1069;width:100%;height:100vh;" v-show="talkvisible" @click="nextTalkCount">
						<div class="row " style="width:100%;height:60vh;top:30%;position:relative;">
							<div class="col-2"></div>
							<div  class="col-3" style="">
								<img src="selfPhotoDefault.png" style="width:100%;"><img>
							</div>
							<div  class="col-5 bg-warning" style="">
								<p class="text-break">{{data[count] != undefined ? data[count].name : ""}}</p>
							</div>
							<div class="col-2"></div>
						</div>
					
					</div>`,
		methods:{
			nextTalkCount:function(){
				this.count ++;
				if(this.count == this.data.length){
					this.count = 0;
					xyzData.taskNow += 1;
					xyzData.talkvisible = false;
				}
			}
		},						
      }); 
	  
	  


var xyzData = new Vue({
            el: '#xyz',
            data: {
				taskOption:[
						{"id":1,"name":"四選一","point":1,"start":1,"begin":100},
						{"id":2,"name":"翻牌","point":1,"start":1,"begin":100},
						{"id":3,"name":"連連看","point":1,"start":1,"begin":100},
				],
				taskNow:1,
				taskList:[
					
						{id:1,section:1,name:"前往店裡面"},
						{id:2,section:1,name:"前往員工休息室打卡"},
						
						
				],
				talkingList:[
						{id:1,section:1,name:"我要去面試了",photo:"player",count:0},
						{id:1,section:2,name:"好緊張啊",photo:"player",count:0},
						{id:1,section:3,name:"店就在前面  直接進去就可以了。",photo:"player",count:0},
						{id:2,section:1,name:"你是今天報到的新人嗎?",photo:"fish",count:0},
						{id:2,section:2,name:"先去員工休息室吧!",photo:"fish",count:0},
						{id:2,section:3,name:"打完卡，出來找我",photo:"fish",count:0}
				],
				nowScene:'scene-bigmap',
				sceneIndex:"scene1",
				talkvisible:true,
				locationEvent:{
					"休憩區":{
						"destination":{scene:"scene-bigmap",index:"scene2"},
						"event":[
						{id:2,count:0}],
					},
					"1069度C":{
						"destination":{scene:"scene-bigmap",index:"scene2"},
						"event":[
						{id:2,count:0}],
					},
					"休憩區2":{
						"destination":{scene:"scene-bigmap",index:"scene2"},
						"event":[
						{id:2,count:0}],
					},
					"紅綠燈":{
						"destination":{scene:"scene-bigmap",index:"scene2"},
						"event":[
						{id:2,count:0}],
					},
					"三":{
						"destination":{scene:"scene-bigmap",index:"scene2"},
						"event":[
						{id:2,count:0}],
					},
					"眼鏡店":{
						"destination":{scene:"scene-bigmap",index:"scene2"},
						"event":[
						{id:2,count:0}],
					},
					"櫃台":{
						"destination":{scene:"scene-bigmap",index:"scene2"},
						"event":[
						{id:2,count:0}],
					},
					"門口":{
						"destination":{scene:"scene-bigmap",index:"scene2"},
						"event":[
						{id:2,count:0}],
					},
					"走道":{
						"destination":{scene:"scene-bigmap",index:"scene2"},
						"event":[
						{id:2,count:0}],
					},
					"休憩區3":{
						"destination":{scene:"scene-bigmap",index:"scene2"},
						"event":[
						{id:2,count:0}],
					},
					"往紅綠燈路口":{
						"destination":{scene:"scene-bigmap",index:"scene1"},
						"event":[
						{id:2,count:0}],
					},
					
					
				},
				location:{
						"scene1":[
							{
								"data":[
									{width:"col-4",name:"休憩區"},
									{width:"col-4",name:"1069度C"},
									{width:"col-4",name:"休憩區2"}
								],
								height:"20vh",
								background:"red"
							},
							{
								"data":[
									{width:"col-4",name:"紅綠燈"},
									{width:"col-4",name:"三"},
									{width:"col-4",name:"眼鏡店"}
								],
								height:"80vh",
								background:"blue"
								
							},
						],
						"scene2":[
							{
								"data":[
									{width:"col-8",name:"櫃台"},
									{width:"col-4",name:"門口"},
								],
								height:"30vh",
								background:"red"
							},
							{
								"data":[
									{width:"col-10",name:"走道"},
									{width:"col-2",name:"往紅綠燈路口"}
								],
								height:"30vh",
								background:"blue"
								
							},
							{
								"data":[
									{width:"col-12",name:"休憩區3"}
								],
								height:"40vh",
								background:"blue"
								
							}
						],
						"bread-shelf":[
							{name:'日式紅豆',cost:"$30",src:'img/jp/日-日式紅豆.jpg'},
							{name:'巴布羅',cost:"$30",src:'img/jp/日式-巴布羅.jpg'},
							{name:'特級牛奶',cost:"$30",src:'img/jp/日式-特級牛奶.jpg'},
							{name:'特級牛奶2',cost:"$30",src:'img/jp/日式-特級牛奶.jpg'},
							{name:'特級牛奶3',cost:"$30",src:'img/jp/日式-特級牛奶.jpg'},
							{name:'特級牛奶4',cost:"$30",src:'img/jp/日式-特級牛奶.jpg'},
							{name:'特級牛奶5',cost:"$30",src:'img/jp/日式-特級牛奶.jpg'},
							{name:'特級牛奶左香吉士包',cost:"$30",src:'img/jp/日式-特級牛奶.jpg'},
						],
						
					
				},
				location_temp:[],
				talkingList_temp:[
						{id:1,section:1,name:"我要去面試了",photo:"player"},
						{id:1,section:2,name:"好緊張啊",photo:"player"},
						{id:1,section:3,name:"店就在前面  直接進去就可以了。",photo:"player"},]
				
               },
			// components: myComponent,
			computed:{
				taskListFilter:function(){//找出當前進度的任務
					var taskNow = this.taskNow;
					return this.taskList.filter(function(x){
						return x.id == taskNow
					})
				},
				talkingListFilter:function(){//找出當前的對話
					var taskNow = this.taskNow;
					return this.talkingList.filter(function(x){
						return x.id == taskNow
					})
				},
			},   
            methods:{
				jumpMap:function(){
					this.nowScene = "bread-shelf";
					this.sceneIndex = "bread-shelf";
				},
				bb:function(){
					alert("!!!")
				}
            },
			watch:{
			},
            created() { 
			   this.location_temp = JSON.parse(JSON.stringify(this.location))
			   
            },
            mounted(){
            },
})
		   


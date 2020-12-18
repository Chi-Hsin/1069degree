
Vue.component("scene-bigmap", {
        props:['data'],
		template:`
		<table class="table table-bordered">
			<thead>
			  AAAAAAAAA
			</thead>
			<tbody>
			<tr v-for="(v,k) in data" class="row" :style="{height:v.height}">
			   <td v-for="(v2,k2) in v.data" :class="v2.width">
				{{v2.name}}
			   </td>
			</tr>
			</tbody>
		</table>
		`
      });
	  
	  
	  
	  
var  myComponent = {
	
	'bread-shelf':{
					  props:['data','data2'],
					  template: `<div  class="col-3" style="">
									<img :src="data.src" style="width:100%;">
									<div>
									<p>{{data.cost}}-{{data.name}}</p>
									</div>
									
								</div>`
				},
	'bread-shelf2':{
					  props:[],
					  template: `5555`
				},			
}


var xyzData = new Vue({
            el: '#xyz',
            data: {
				xxxx:6666666,
				breadList:[
						{name:'日式紅豆',cost:"$30",src:'img/jp/日-日式紅豆.jpg'},
						{name:'巴布羅',cost:"$30",src:'img/jp/日式-巴布羅.jpg'},
						{name:'特級牛奶',cost:"$30",src:'img/jp/日式-特級牛奶.jpg'},
						{name:'特級牛奶2',cost:"$30",src:'img/jp/日式-特級牛奶.jpg'},
						{name:'特級牛奶3',cost:"$30",src:'img/jp/日式-特級牛奶.jpg'},
						{name:'特級牛奶4',cost:"$30",src:'img/jp/日式-特級牛奶.jpg'},
						{name:'特級牛奶5',cost:"$30",src:'img/jp/日式-特級牛奶.jpg'},
						{name:'特級牛奶左香吉士包',cost:"$30",src:'img/jp/日式-特級牛奶.jpg'},
					],
				taskList:[
						{"id":1,"name":"四選一","point":1,"start":1,"begin":100},
						{"id":2,"name":"翻牌","point":1,"start":1,"begin":100},
						{"id":3,"name":"連連看","point":1,"start":1,"begin":100},
				],
				nowScene:'scene1',
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
									{width:"col-12",name:"走道"}
								],
								height:"30vh",
								background:"blue"
								
							},
							{
								"data":[
									{width:"col-12",name:"休憩區"}
								],
								height:"40vh",
								background:"blue"
								
							}
						]
						
				},
					
               },
			components: myComponent,
			computed:{
				
			},   
            methods:{
				test3:function(){
					alert("123123123132")
				},
            },
			watch:{
			},
            created() { 
            },
            mounted(){
				
            },
})
		   


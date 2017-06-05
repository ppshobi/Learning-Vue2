Vue.component('tabs', {

	 template:`
	 	<div>
		 	<div class="tabs">
	  			<ul>
	    			<li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
	    				<a :href="tab.href" @click="selectTab(tab)"> {{ tab.name }} </a>
	    			</li>
	  			</ul>
			</div>

			<div class="tab-details">
				<slot></slot>
			</div>
		</div>
	`,
	data(){
		return {
			tabs: []
		}
	},
	created(){
		this.tabs=this.$children;
	},
	methods:{
		selectTab(selectedTab){
			this.tabs.forEach(tab => {
				tab.isActive = (tab.name == selectedTab.name)
			})
		}
	}

})

Vue.component('tab', {

	template:`
	 	<div v-show="this.isActive"><slot></slot></div>
	`,
	props:{
		name:{ required: true },
		selected:{ default:false }
	},

	data(){
		return{
			isActive:false
		}
	},
	computed: {

		href(){
			 return "#"+this.name.toLowerCase().replace(/ /g,'-')
		}
	},
	mounted(){
		this.isActive = this.selected
	}

})


app = new Vue({
	el:'#root',
	data:{
		
	},
	methods:{
		
	}
})
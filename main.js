
Vue.component('task-list', {
	template: '<div><task v-for="task in tasks" v-text="task.description"></task></div>',

	data(){
		return {
			tasks:[
				{description:"Goto Store", completed:true},
				{description:"Get Food", completed:false},
				{description:"Clean Room", completed:false}
			]
		}
	}

});

Vue.component('task', {
	template: '<li><slot></slot></li>'
});

app = new Vue({
	el:'#root',

})
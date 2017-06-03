Vue.component('message', {
	props:['title', 'body'],
	data(){
		return {
			isVisible:true
		}
	},
	template:
	`	<article class="message" v-show="isVisible">
		  <div class="message-header">
		    <p>{{ title }}</p>
		    <button class="delete" @click="hideMessage"></button>
		  </div>
		  <div class="message-body">
		    {{ body }}
		  </div>
		</article>
	`,
	methods:{
		hideMessage(){
			this.isVisible=false
		}
	}
})

app = new Vue({
	el:'#root'
})
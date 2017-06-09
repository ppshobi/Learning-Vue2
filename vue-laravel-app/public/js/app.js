
const app = new Vue({
    el: '#root',
    data:{
    	name:'',
    	description:'',
    	errors:{}
    },
    methods:{
    	onSubmit(){
    		axios.post('/projects',this.$data)
    		.then(response => alert("Success"))
    		.catch(error => this.errors = error.response.data)
    	}
    }
});

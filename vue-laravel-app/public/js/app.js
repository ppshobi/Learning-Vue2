
class Error{

	constructor(){
		this.errors = {};
	}

	get(field){
		if (this.errors[field]) {
			return this.errors[field][0];
		}
	}

	record(errors){
		this.errors = errors;
	}
}

const app = new Vue({
    el: '#root',
    data:{
    	name:'',
    	description:'',
    	errors:new Error()
    },
    methods:{
    	onSubmit(){
    		axios.post('/projects',this.$data)
    		.then(response => alert("Success"))
    		.catch(error => this.errors.record(error.response.data))
    	}
    }
});

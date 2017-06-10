
class Error{

	constructor(){
		this.errors = {};
	}

	get(field){
		if (this.errors[field]) {
			return this.errors[field][0];
		}
	}

	has(field){
		return this.errors.hasOwnProperty(field)
	}

	errorPresent(){
		return Object.keys(this.errors).length > 0
	}

	record(errors){
		this.errors = errors;
	}

	clear(field){
		delete this.errors[field]
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

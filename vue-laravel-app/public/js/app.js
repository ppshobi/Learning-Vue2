class Form{
	constructor(data){
		this.data = data

		for(let field in data){
			this[field] = data[field]
		}

		this.errors = new Error()

	}



	reset(){

	}
}

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
    	form :new Form({
    			name:'',
    			description:''
    		})
    },
    methods:{
    	onSubmit(){
    		axios.post('/projects',this.$data)
    		.then(this.onSuccess)
    		.catch(error => this.form.errors.record(error.response.data))
    	},
    	onSuccess(response){
    		alert(response.data.message)
    		form.reset();
    	}
    }
});

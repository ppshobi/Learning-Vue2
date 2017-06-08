
const app = new Vue({
    el: '#root',
    data:{
    	name:'',
    	description:''
    },
    methods:{
    	onSubmit(){
    		axios.post('/projects',{name: this.name, description: this.description});
    	}
    }
});

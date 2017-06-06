window.Event= new Vue();

Vue.component('coupon',{

	template:`<input :code="" type = "text" placeholder = "Enter Coupon Code" @blur = "onCouponApplied">`,
	methods:{
		onCouponApplied(){
			console.log("Coupon Applied Event emited")
			Event.$emit('applied'); 
		}
	},

})


app = new Vue({
	el:'#root',
	methods:{

	},
	created(){
		Event.$on('applied',function(){
			alert("You Applied a Coupon")
			console.log("Handling the event")
		})
	}
})
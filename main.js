Vue.component('task', {
	template: '<li><slot></slot></li>'
});
Vue.component('task-title', {
	template: '<h3><slot></slot></h3>'
});


app = new Vue({
	el:'#root',

})
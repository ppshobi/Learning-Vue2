<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Create a New Project</title>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.2/css/bulma.css">

      
        <style>
        	body{
        		padding: 40px;
        	}
        </style>
    </head>
    <body>
        <div id="root" class="container">
           @include('projects.list')

           <form method="POST" action="/projects" @submit.prevent="onSubmit" @keyDown="form.errors.clear($event.target.name)">
           		<div class="control">
           			<label for="name" class="label"> Project Name</label>
           			<input type="text" name="name" id="name" class="input" v-model="form.name">
           			<span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
           		</div>
           		<div class="control">
           			<label for="description" class="label"> Project Description</label>
           			<input type="text" name="description" id="description" class="input" v-model="form.description">
           			<span class="help is-danger" v-if="form.errors.has('description')" v-text="form.errors.get('description')"></span>
           		</div>
           		<br/>
           		<div class="control">
           			<button class="is-primary button" :disabled="form.errors.errorPresent()">Create</button>
           		</div>
           </form>
        </div>
    </body>    
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="https://unpkg.com/vue"></script>
    <script src="/js/app.js"></script>
</html>
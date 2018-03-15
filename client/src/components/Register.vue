<template>
  <div class="hello">
    <h1>Register</h1>
    <input 
    type="email" 
    name="email"
    v-model="email"
    placeholder="email"/>
    <br/>
    <input 
    type="password" 
    name="password"
    v-model="password"
    placeholder="password"/>
    <br/>
    <button
    @click="register">Register</button>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'
export default {
  name: 'HelloWorld',
  data () {
    return {
      email:'',
      password:''
    }
  },
  watch:{
      email(value){
          console.log("email has changed")
      }
  },
  mounted(){
      setTimeout(()=>{
          //this.email='hello world'
      },2000)
  },
  methods:{
     async  register(){
     const response =   await   AuthService.register({
    email:this.email,
    password:this.password
     }) 
     console.log(response)
       }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

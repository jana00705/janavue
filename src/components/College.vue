<template>
  <div class="">
    <div class="College">
   <NavBar />
  </div>
<b-container class="bv-example-row mt-5">
  
  <b-row class="text-center">
    <h2 class="mt-4" >College Login</h2>
  </b-row>
  
  <b-row>
    <b-col>
  <div class="crd">
  <b-card bg-variant="dark" text-variant="white" title="Upload Articles">
  <b-card-text>
    With supporting text below as a natural lead-in to additional content.
  </b-card-text>
  <b-button href="#" variant="outline-warning"  pill>View This Page</b-button>
</b-card>
</div>
</b-col>
<b-col>
<div class="crd">
  <b-card bg-variant="dark" text-variant="white" title="Update Profile">
  <b-card-text>
    With supporting text below as a natural lead-in to additional content.
  </b-card-text>
  <b-button href="#" variant="outline-warning"  pill>View This Page</b-button>
</b-card>
</div>
</b-col>
</b-row>
 <b-row>
    <b-col>
  <div class="crd">
  <b-card bg-variant="dark" text-variant="white" title="Faculty Management">
  <b-card-text>
    With supporting text below as a natural lead-in to additional content.
  </b-card-text>
  <b-button href="#" variant="outline-warning"  pill>View This Page</b-button>
</b-card>
</div>
</b-col>
<b-col>
<div class="crd">
  <b-card bg-variant="dark" text-variant="white" title="View Student Request" >
  <b-card-text>
    With supporting text below as a natural lead-in to additional content.
  </b-card-text>
  <b-button href="#" variant="outline-warning" pill>View This Page</b-button>
</b-card>
</div>
</b-col>
</b-row>
<b-row>
    <b-col>
  <div class="crd">
  <b-card bg-variant="dark" text-variant="white" title="View Response">
  <b-card-text>
    With supporting text below as a natural lead-in to additional content.
  </b-card-text>
  <b-button href="#" variant="outline-warning"  pill>View This Page</b-button>
</b-card>
</div>
</b-col>
<b-col>
<div class="crd">
  <b-card bg-variant="dark" text-variant="white" title="Send Feedback" >
  <b-card-text>
    With supporting text below as a natural lead-in to additional content.
  </b-card-text>
  <b-button href="#" variant="outline-warning" pill>View This Page</b-button>
</b-card>
</div>
</b-col>
</b-row>
<div class="text-center mt-5 ">
           <b-button href="/" variant="outline-success">LOGOUT</b-button>      
</div>
</b-container>
 <div class="footer">
   <FooTer />
  </div>
  </div>
</template>

<script>
import NavBar from './Navbar'
import FooTer from './Footer'
export default {
  name: 'College',
 
  components:{
        
        NavBar,FooTer
  },
  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#card1{
  padding-left: 20%;
   padding-right: 20%;
}
.crd{
  margin-top: 5%;
  padding: 5% 1% 5% 1%;
}
h2{
  font-weight:bold;

}
</style>
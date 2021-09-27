<template>
<div>
  <div>
      <NavBar />
  </div>
     <div class="mt-5 mb-5"><h1>View Student</h1></div>
        
        <b-container>
         <b-table-simple class="table table-striped table-bordered" responsive>
            <b-thead>
                <b-tr>
                    <b-th>Student ID</b-th>
                    <b-th>Student Name</b-th>
                    <b-th>College</b-th>
                </b-tr>
            </b-thead>
            <b-tbody>
                <b-tr v-for="user in users" :key="user.id">
                    <b-td>{{user.stuid}} </b-td>
                    <b-td>{{user.name}}</b-td>
                    <b-td>{{user.college}}</b-td>
                </b-tr>
            </b-tbody>
        </b-table-simple>
     </b-container>
     <div>
         <Footer />
     </div>
  </div>       
</template>
<script>
import NavBar from "./Navbar";
import Footer from "./Footer";
  export default {
       name: "Viewstudent",
  components: {
    NavBar,Footer
  },
    data() {
      return {
        users: [
                { stuid: 'stu1', name: 'janarthanan', college: 'AAA' },
                { stuid: 'stu2',  name: 'imran', college: 'VHNSN' },
                { stuid: 'stu3',  name: 'raj kumar', college: 'ANJAC' },
                { stuid: 'stu4',  name: 'naveen', college: 'MEPCO' },
                { stuid: 'stu5',  name: 'vasu', college: 'AMERICAN' }
            ]
      }
    }
  }
</script>
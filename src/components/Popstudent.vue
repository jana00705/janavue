<template>
    <div>
        <b-modal id="modal-2" scrollable title="STUDENT REGISTRATION" ref="modal" hide-footer>
        <b-form ref="form" @submit.stop.prevent="onSubmit">
          <b-form-group id="stu-grp-1" label="First Name" label-for="sfn">
          <b-form-input id="sfn"
          name="sfn"
          v-model="$v.form.sfname.$model"
          :state="validateState('sfname')"
          aria-describedby="sfnameerr"> </b-form-input>
          <b-form-invalid-feedback
          id="sfnameerr"
        >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>

            </b-form-group>

           <b-form-group id="stu-grp-2" label="Last Name" label-for="sln">
          <b-form-input id="sln"
          name="sln"
          v-model="$v.form.slname.$model"
          :state="validateState('slname')"
          aria-describedby="sl nameerr"> </b-form-input>
          <b-form-invalid-feedback
          id="slnam eerr"
        >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>

            </b-form-group>

          <b-form-group id="stu-grp-3" label="User Name" label-for="sun">
          <b-form-input id="sun"
          name="sun"
          v-model="$v.form.suser.$model"
          :state="validateState('suser')"
          aria-describedby="sunameerr"> </b-form-input>
          <b-form-invalid-feedback
          id="sunameerr"
        >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
 </b-form-group>

            <b-form-group id="stu-grp-4" label="Password" label-for="spw">
          <b-form-input id="spw"
          name="spw"
          type="password"
          v-model="$v.form.stupw.$model"
          :state="validateState('stupw')"
          aria-describedby="stupwerr"> </b-form-input>
          <b-form-invalid-feedback
          id="stupwerr"
        >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>

            </b-form-group>

          <b-form-group id="stu-grp-5" label="Mobile Number" label-for="sph">
          <b-form-input id="sph"
          type="number"
          name="sph"
          v-model="$v.form.sphone.$model"
          :state="validateState('sphone')"
          aria-describedby="spherr"> </b-form-input>
          <b-form-invalid-feedback
          id="spherr"
          
        >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
          </b-form-group>

         <b-form-group id="stu-grp-6" label="Email ID" label-for="sem">
          <b-form-input id="sem"
          type="email"
          name="sem"
          v-model="$v.form.smail.$model"
          :state="validateState('smail')"
          aria-describedby="smailerr"> </b-form-input>
          <b-form-invalid-feedback
          id="smailerr"
          
        >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
          </b-form-group>


           <b-form-group  id="stu-grp-7" label="Address" label-for="sadd">
          <b-form-textarea id="sadd"
          name="sadd"
          v-model="$v.form.saddress.$model"
          :state="validateState('saddress')"
          aria-describedby="saddresserr" cols="35" rows="2"> </b-form-textarea>
          <b-form-invalid-feedback
          id="saddresserr"
        >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
          </b-form-group>

<b-form-group id="example-input-group-2" label="College" label-for="collegedd">
        <b-form-select
        class="form-control"
          id="collegedd"
          name="collegedd"
          v-model="$v.form.college.$model"
          :options="colleges"
          :state="validateState('college')"
          aria-describedby="collegedderr"
        ></b-form-select>

        <b-form-invalid-feedback id="collegedderr">This is a required field.</b-form-invalid-feedback>
      </b-form-group>
          

<!-- <b-form-group label="College :" >
<b-form-select class="form-control">
      <b-form-select-option value="1">ANJAC</b-form-select-option>
      <b-form-select-option value="2">VHNSN</b-form-select-option>
   <b-form-select-option value="3">FATIMA</b-form-select-option>
        <b-form-select-option value="4">AAA</b-form-select-option>
        <b-form-select-option value="5">MEPCO</b-form-select-option>
    </b-form-select>
</b-form-group> -->

          <div class="text-center mt-5 ">
           <b-button  size="sm" id="submit" type="submit" variant="outline-success">Submit</b-button>
           <b-button class="mx-3" size="sm" id="cancel" @click="resetForm()"  variant="outline-danger">Reset</b-button>
          </div>
      </b-form>
      </b-modal>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength,minLength,email} from 'vuelidate/lib/validators'

// const issPhone = (value) => /^1(3|4|5|7|8)\d{9}$/.test(value);  //sphone valid
export default {
  mixins: [validationMixin],
  data() {
    return {

      colleges: [
        { value: null, text: "Choose..." , disabled: true},
        { value: "1", text: "ANJAC" },
        { value: "2", text: "MEPCO" },
        { value: "3", text: "AAA" },
        { value: "4", text: "FATIMA" },
      ],
      form: {
        sfname: null,
        slname:null,
        suser:null,
        stupw:null,
        saddress:null,
          sphone:null,
          smail:null,
          college:null,

      }
    };
  },
  validations: {
   
    form: {
      college: {
        required
      },
      sfname: {
        required,
        minLength: minLength(3)
      },
      slname: {
        required,
        minLength: minLength(3)
      },
      suser: {
        required,
        minLength: minLength(3)
      },
      stupw: {
        required,
        minLength: minLength(3)
      },
      saddress: {
        required,
        minLength: minLength(8)
      },
       sphone: {
      required,
    //  sphoneValid: issPhone,
    // numeric,
     maxLength: maxLength(10),
     minLength:minLength(10)
     
    
    },
    smail: {
      required,
        email,
      },

    }
  },
  methods: {
    validateState(sfname) {
      const { $dirty, $error } = this.$v.form[sfname];
      
      return $dirty ? !$error : null;
    },
    
    resetForm() {
      this.form = {
        sfname: null,
        slname:null,
        suser:null,
        stupw:null,
        saddress:null,
        sphone:null,
        smail:null,
        college:null
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onSubmit() {
      this.$v.form.$touch();
      
      if (this.$v.form.$anyError) {
        return;
      }
        alert("Form submitted!");
       location.reload();
     
    }
  }
};
</script>
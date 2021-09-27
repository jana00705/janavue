<template>
    <div>
        <b-modal id="modal-3" scrollable title="COLLEGE REGISTRATION" ref="modal" hide-footer>
   <b-form ref="form" @submit.stop.prevent="onSubmit">
          <b-form-group id="clg-grp-1" label="College Name" label-for="cn">
          <b-form-input id="cn"
          name="cn"
          v-model="$v.form.cname.$model"
          :state="validateState('cname')"
          aria-describedby="cnameerr"> </b-form-input>
          <b-form-invalid-feedback
          id="cnameerr"
        >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>

            </b-form-group>

          <b-form-group id="clg-grp-2" label="User Name" label-for="cun">
          <b-form-input id="cun"
          name="cun"
          v-model="$v.form.cuser.$model"
          :state="validateState('cuser')"
          aria-describedby="cusererr"> </b-form-input>
          <b-form-invalid-feedback
          id="cusererr"
        >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
 </b-form-group>

         <b-form-group id="clg-grp-3" label="Password" label-for="cpw">
          <b-form-input id="cpw"
          name="cpw"
          type="password"
          v-model="$v.form.clgpw.$model"
          :state="validateState('clgpw')"
          aria-describedby="clgpwerr"> </b-form-input>
          <b-form-invalid-feedback
          id="clgpwerr"
        >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
          </b-form-group>

         <b-form-group  id="clg-grp-4" label="Address" label-for="cadd">
          <b-form-textarea id="cadd"
          name="cadd"
          v-model="$v.form.caddress.$model"
          :state="validateState('caddress')"
          aria-describedby="caddresserr" cols="35" rows="2"> </b-form-textarea>
          <b-form-invalid-feedback
          id="caddresserr"
        >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
          </b-form-group>

           <b-form-group id="clg-grp-5" label="Contact Number" label-for="cph">
          <b-form-input id="cph"
          type="number"
          name="cph"
          v-model="$v.form.cphone.$model"
          :state="validateState('cphone')"
          aria-describedby="cpherr"> </b-form-input>
          <b-form-invalid-feedback
          id="cpherr"
          
        >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
          </b-form-group>

          <div class="text-center mt-5 ">
           <b-button  size="sm" id="submit" type="submit" variant="outline-success">Submit</b-button>
           <b-button class="mx-3" size="sm" id="cancel" @click="resetForm()"  variant="outline-danger">Reset</b-button>  
          </div>
      </b-form>
  </b-modal>
    </div>
</template>

<style scoped>

</style>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength,minLength} from 'vuelidate/lib/validators'

// const issPhone = (value) => /^1(3|4|5|7|8)\d{9}$/.test(value);  //sphone valid
export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        cname: null,
        cuser:null,
        clgpw:null,
        caddress:null,
        cphone:null,
      }
    };
  },
  validations: {
   
    form: {
      cname: {
        required,
        minLength: minLength(3)
      },
      cuser: {
        required,
        minLength: minLength(3)
      },
      clgpw: {
        required,
        minLength: minLength(3)
      },
      caddress: {
        required,
        minLength: minLength(8)
      },
       cphone: {
      required,
    //  sphoneValid: issPhone,
    // numeric,
     maxLength: maxLength(10),
     minLength:minLength(10)
     
    
    },
    }
  },
  methods: {
    validateState(cname) {
      const { $dirty, $error } = this.$v.form[cname];
      
      return $dirty ? !$error : null;
    },
    
    resetForm() {
      
      this.form = {
       cname: null,
        cuser:null,
        clgpw:null,
        caddress:null,
        cphone:null,
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
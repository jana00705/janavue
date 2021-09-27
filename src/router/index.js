import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'
import Admin from '../components/Admin'
import Student from '../components/Student'
import Contact from '../components/Contact'
import College from '../components/College'
import Viewstudent from '../components/Viewstudent'
Vue.use(VueRouter)

const routes = [
        {
                path: '/',
                name: 'Home',
                component: Home
        },
        {
                path: '/Admin',
                name: 'Admin',
                component: Admin
        },  
        {
                path: '/Contact',
                name: 'Contact',
                component: Contact
        }, 
        {
                path: '/Student',
                name: 'Student',
                component: Student
        },  
        {
                path: '/College',
                name: 'College',
                component: College
        },    
        {
                path: '/Admin/Viewstudent',
                name: 'Viewstudent',
                component: Viewstudent
        },

];

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;
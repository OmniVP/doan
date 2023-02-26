import home from '../pages/client/home/index.vue'
import Login from '../pages/client/login/index.vue'
import Register from '../pages/client/register/index.vue'

const client =
[{
    path:'/',
    name: "client",
    component:()=>import('../views/client.vue'),
    children :[
       {
        path: 'home',
        name: 'homepage',
        component: home
       },
       {
        path: 'Login',
        name: 'Loginpage',
        component: Login
       },
       {
        path: 'Register',
        name: 'Registerpage',
        component: Register
       },
        
    ]
}]
export default client;
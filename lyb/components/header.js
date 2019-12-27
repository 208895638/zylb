var str = `
<div class="tops">
        <div class="l">
            <a href="./index.html">vue项目练习</a>
        </div>
        <a v-if="!isShow" href="./login.html" > 
            暂未登陆
            
        </a>
        <a  href="javascript:;" @click="logout" class="logout" v-if="isLogoutShow">
            退出登陆
        </a>
        <a href="javascript:;" v-if="isShow" class="r" :class="{on:isLogoutShow}" @blur="hideLogout" @click="isLogoutShow = true">
            用户登陆账户: {{ isShow }}
        </a>
    </div>
`
Vue.component("headers",{
    template:str,
    data () {
        return {
         isLogoutShow:false,
         isShow:localStorage.getItem("token") ? localStorage.getItem("token") : ""
        }
    },
    methods: {
     hideLogout(){
         setTimeout(()=>{
             this.isLogoutShow = false
         },200)
     },
     logout(){
         localStorage.removeItem("token");
         location.href = "./login.html"
     }
    },
    created () {
        if(localStorage.getItem("token")){

        }else{
            if(window.location.pathname == "/login.html"){

            }else{
                alert("暂未登陆,请登陆后重试!");
            setTimeout(()=>{
                window.location.href = "./login.html";
            })
            }
            
            
        }
    }
})
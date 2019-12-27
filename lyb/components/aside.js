var str = `
<div class="asides">
<div @click="isShow = !isShow">
    留言板
</div>
<ul class="aside" v-if="isShow">
  <li :class="{on:current == 'list'}">
    <a  href="./index.html">列表</a>
  </li>
  <li :class="{on:current == 'adds'}">
    <a href="./add.html">新增</a>
  </li>
  <li :class="{on:current == 'info'}">
    <a href="javascript:;">详情</a>
  </li>
</ul>
</div>
`
Vue.component("asides",{
    template:str,
    props:["current"],
    data () {
        return {
            isShow:true
        }
    }
})
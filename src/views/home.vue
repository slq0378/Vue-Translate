<template>
  <section class="hz-container">
    <div style="height:46px">
      <div class="hz-fixed-header">
        <x-header>  {{$t('message.title')}}
        </x-header>
      </div>
    </div>
    <el-button type="primary" @click="changeType(0)">点我切换繁体</el-button>
    <el-button type="primary" @click="changeType(1)">点我切换简体</el-button>
    <h1>插值访问</h1>
    <div>{{$t('message.address')}}</div>
    <div>{{$t('message.text',{msg:'哈哈哈，'})}}</div>
    <div>{{$t('message.name',{'0':'替换替换：'})}}</div>
    <div>{{$t('message.name',['替换第一个元素：',',替换第二个元素，','替换第三个元素。'])}}</div>
    <h1>插入html语句</h1>
    <div v-html="$t('message.product')"></div>
    <h1>复数访问</h1>
    <div>{{$tc('message.car',1)}}</div>
    <div>{{$tc('message.car',2)}}</div>

    <div>{{$tc('message.apple',0)}}</div>
    <div>{{$tc('message.apple',1)}}</div>
    <div>{{$tc('message.apple',2,{count:1222})}}</div>
    <h1>组件</h1>
    <Com1> </Com1>
  </section>
</template>
<script>
import { XHeader } from "vux";
import Com1 from "@/components/com1/com1.vue";
import {Button} from 'element-ui'

export default {
  components: {
    XHeader,
    Com1
  },
  data() {
    return {
      title: Config.title,
      holderMessage: ''
    };
  },
  mounted() {
    
  },
  methods: {
    changeType(index){
      if(index == 0){
        localStorage.setItem('lang','zh-Hant');
        this.$i18n.locale = 'zh-Hant';
      }else{
        localStorage.setItem('lang','zh-Hans');
        this.$i18n.locale = 'zh-Hans';
      }
    }
  },
};
</script>
<style scoped>
.hz-container {
  display: block;
  padding: 0;
  margin: 0;
}

.hz-background {
  background-color: #efefef;
}

.hz-fixed-header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  height: 46px;
}
.button_style{
  /* background:  red; */
  color: black;
  padding: 20px;
  
}
.report-content {
  margin-top: 50px;
  text-align: center;
  color: #9c9c9c;
  font-size: 20px;
}
</style>

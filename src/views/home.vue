<template>
  <section class="hz-container">
    <div style="height:46px">
      <div class="hz-fixed-header">
        <x-header
          style="background-color:#fafafa;"
          :left-options="{preventGoBack: true,backText:''}"
          @on-click-back="$closeWindow"
        >
          <img slot="overwrite-left" src="@/assets/back_black.png" width="20px" @click="$closeWindow">
          <label style="color:black;">{{title}}</label>
        </x-header>
      </div>
    </div>
    <div>在打包时把本地的文字转换成繁体，动态加载的文字不会转换。也就是说接口返回的文字不会自动转换。</div>
    <div class="report-content">简体中文</div>
    <div>余承东将现在的世界称为“万物互联”的世界，无论是在家中还是在办公，都需要大量的IOT设备。那么在这种场景下，什么样的OS才能满足需求？未来万物互联智能，不可能为所有硬件开发OS，而安卓/Linux代码冗长，难以保持流畅度。
华为表示，鸿蒙OS的架构最底层是内核层，上面是基础服务层、程序框架。通过这些设置，可以支撑各种不同的设备，包括智慧大屏、穿戴、车机、音箱，甚至手表穿戴、手机等等。通过一套系统，一个IOS实现模块化的结构，对应不同的设备可以弹性部署。不管硬件能力强的，还是硬件能力弱的，都可以使用一套操作系统，可以统一在不同的硬件平台上进行加载和部署。
</div>
  </section>
</template>
<script>
import { XHeader } from "vux";

export default {
  components: {
    XHeader
  },
  data() {
    return {
      title: Config.title,
      holderMessage: Config.holderMessage
    };
  }
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

.report-content {
  margin-top: 50px;
  text-align: center;
  color: #9c9c9c;
  font-size: 20px;
}
</style>

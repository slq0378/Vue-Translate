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
    <div class="report-content">{{holderMessage}}</div>
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

<template>
  <section class="hz-container">
    <div style="height:46px">
      <div class="hz-fixed-header">
        <x-header>简繁体转换测试</x-header>
      </div>
    </div>
    <div class="report-content">
     {{message}}
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
      holderMessage: Config.holderMessage,
      message:` 分布式软总线的技术带来的是极简的协议，图中是传统的七层的网络通信标准模型，从物理层、数据链路层、网络层到传输层、会话层、表示层、应用层。而鸿蒙OS这种分布式操作系统对中间的四层通信协议进行了简化。
      因此，鸿蒙OS可以让传输更加高效、更加简洁、更加快捷，实现了极简的协议。这种分布式软总线还能实现低时延，吞吐率达到1.2G每秒，以及高可靠性，甚至在丢包达到25%的时候，仍然能保证用户体验。这也就是鸿蒙OS要给大家带来天生流畅的性能。
      确定时延引擎，带来流畅稳定的用户体验`
    };
  },
  mounted() {
    console.log("detail mounted");
    this.$translatePage();

    setTimeout(() => {
      this.message = `为什么采用微内核？就是因为内核级的安全。从计算机被发明以来，一直以来都是采用宏内核，无论使用什么样的模拟攻击，都无法实现完全覆盖以保证绝对安全。今天要进入微内核时代，而华为的微内核——鸿蒙微内核在安卓手机平板等设备上已经投入商用了，包括从mate20之后的很多华为智能终端都已经用了鸿蒙的微内核，带来了前所未有的安全。`;
    }, 3000);
    setTimeout(() => {
      this.message = "结束了";
    }, 6000);
  },
  updated() {
    console.log("detail updated");
    this.$translatePage();
  },
  methods: {
    nextPage() {}
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

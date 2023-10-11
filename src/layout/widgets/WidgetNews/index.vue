<template>
  <div class="widget-news">
    <ul class="news-header">
      <li :class="{ active: type === 'baidu' }" @click="type = 'baidu'">百度</li>
      <li :class="{ active: type === 'weibo' }" @click="type = 'weibo'">微博</li>
      <li :class="{ active: type === 'zhihu' }" @click="type = 'zhihu'">知乎</li>
    </ul>
    <ul class="news-body">
      <li class="news-item" v-for="(item, index) in source">
        <span>{{ index + 1 }}</span>
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'

const type = ref<'baidu' | 'weibo' | 'zhihu'>('baidu')
const newList = {
  baidu: [
    {
      title:
        '房价直降 5000 元/平引老业主不满，武汉某新盘开发商封盘致歉「将进行退款处理」，哪些信息值得关注？',
      url: 'https://api.zhihu.com/questions/625538253',
    },
    {
      title:
        '美国务卿布林肯将访问以色列，美航母已抵达地中海东部，会对巴以局势带来哪些影响？有哪些信息值得关注？',
      url: 'https://api.zhihu.com/questions/625575622',
    },
    {
      title: '太湖究竟是不是陨石坑？',
      url: 'https://api.zhihu.com/questions/380666293',
    },
    {
      title: '如何看待近期中美经济增长超预期大反差？',
      url: 'https://api.zhihu.com/questions/625490744',
    },
    {
      title: '石油真的是远古动物尸体来的吗？',
      url: 'https://api.zhihu.com/questions/620169590',
    },
    {
      title: '如何评价曹丰泽演讲稿《去非洲：中国青年工程师的“发展主义”选择》？',
      url: 'https://api.zhihu.com/questions/625136315',
    },
    {
      title: '如何评价《海贼王》漫画1095话情报？',
      url: 'https://api.zhihu.com/questions/625575192',
    },
    {
      title: '国企回应被举报向私人账户转账近 6 亿，称组建工作组详细核查，哪些信息值得关注？',
      url: 'https://api.zhihu.com/questions/625580769',
    },
    {
      title:
        '张艺谋获东京电影节终身成就奖，「表彰他非凡的职业生涯与对电影行业长期贡献」，你最喜欢他的哪些经典影片？',
      url: 'https://api.zhihu.com/questions/625467902',
    },
    {
      title: '为什么领导交代的工作最好不要提早干完？',
      url: 'https://api.zhihu.com/questions/625032448',
    },
  ],
  weibo: [
    {
      title: '2024年年轻人还有必要去上海吗？',
      url: 'https://api.zhihu.com/questions/624100413',
    },
    {
      title: '恋爱里，有哪些令你血压飙升的雷点？如何判断两个人合不合适？',
      url: 'https://api.zhihu.com/questions/623133385',
    },
    {
      title: '蒙古国为什么不把首都迁到比较温暖的南方?',
      url: 'https://api.zhihu.com/questions/625208179',
    },
    {
      title: '如果能投放一份重量为一斤及以下的食物给某历史人物，你会选择谁？你又会选择哪种食物？',
      url: 'https://api.zhihu.com/questions/624703829',
    },
    {
      title: '你曾有过哪些运动给予的力量，让平凡的人生开始闪亮？',
      url: 'https://api.zhihu.com/questions/620919275',
    },
    {
      title: '脱毛膏对一个爱美的女生「隐性伤害」大吗？',
      url: 'https://api.zhihu.com/questions/625587898',
    },
    {
      title: '如何面对压力，是否是行业佼佼者所必备的技能？',
      url: 'https://api.zhihu.com/questions/625590646',
    },
    {
      title: '各位见过哪些令人难忘的墓志铭？',
      url: 'https://api.zhihu.com/questions/329213271',
    },
    {
      title: '有哪些让你感动的瞬间?',
      url: 'https://api.zhihu.com/questions/56528502',
    },
    {
      title: '能不能分享一下，独自一人时都做些什么？',
      url: 'https://api.zhihu.com/questions/624135389',
    },
  ],
  zhihu: [
    {
      title:
        '食堂被曝吃出鼠头，华北理工大学通报「解除一中标餐饮公司合同，依法依规追究相关责任」，哪些信息值得关注？',
      url: 'https://api.zhihu.com/questions/625538137',
    },
    {
      title: '语文老师的水平差距到底能有多大？',
      url: 'https://api.zhihu.com/questions/273698310',
    },
    {
      title: '你觉得哪些品牌的彩妆/护肤产品可以称为真正的「国货之光」？',
      url: 'https://api.zhihu.com/questions/621653314',
    },
    {
      title: '拿到 offer 入职时，为什么要提供上家公司的薪资流水？',
      url: 'https://api.zhihu.com/questions/622558977',
    },
    {
      title: '有线键盘鼠标与无线键盘鼠标用起来有什么差别？为什么有线键盘鼠标还有很多人在用？',
      url: 'https://api.zhihu.com/questions/619448176',
    },
    {
      title: '新家装修，选中央空调还是挂机？',
      url: 'https://api.zhihu.com/questions/551579481',
    },
    {
      title: '《王者荣耀》纯新手请教买什么英雄？',
      url: 'https://api.zhihu.com/questions/619776546',
    },
    {
      title: '你认为哪一款香水的气味能够代表秋天？',
      url: 'https://api.zhihu.com/questions/620752296',
    },
    {
      title: '身为老师/家长，你有哪些和小学生相处的高血压瞬间？是如何应对的？',
      url: 'https://api.zhihu.com/questions/623106159',
    },
    {
      title: '可以分享一下你最近手机相册里的绝美天空吗?',
      url: 'https://api.zhihu.com/questions/621393240',
    },
  ],
}
const source = computed(() => {
  return newList[type.value]
})
</script>
<style lang="scss" scoped>
.widget-news {
  box-sizing: border-box;
  grid-row: span 1;
  grid-column: span 1;
  grid-gap: 6px;
  padding: 10px;
  color: #fff;
  background-image: linear-gradient(135deg, #252934, #494f5b);
  border-radius: 6px;
  box-shadow: 0 0 5px rgb(0 0 0 / 35%);

  .news-header {
    display: flex;
    grid-gap: 4px;
    padding-bottom: 4px;
    font-size: 13px;

    li {
      padding: 4px;
      cursor: pointer;
      border-radius: 4px;

      &:hover {
        background-color: #fff3;
      }

      &.active {
        background-color: #fff3;
      }
    }
  }

  .news-body {
    height: calc(100% - 30px);
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    .news-item {
      display: flex;
      grid-gap: 6px;
      overflow: hidden;
      font-size: 12px;
      line-height: 24px;
      text-overflow: clip;
      white-space: nowrap;
      cursor: pointer;

      &:hover {
        opacity: 0.5;
      }
    }
  }
}
</style>

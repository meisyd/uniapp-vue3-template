# uniapp-vue3-template

基于 Uniapp@3 + Vue3 + Vite5 + @lx/ui + UnoCss 的跨端快速启动模板.

```bash
# 全局安装 @vue/cli 和 @vue/cli-init
npm install -g @vue/cli @vue/cli-init

# 初始化项目
vue init -c git@codeup.aliyun.com:656d6f743e469c2f3534a9ac/team3/mobile-fontend/app-template-Vue.git my-uni-app

# 从Github初始化
vue init meisyd/uniapp-vue3-template my-uni-app
```

## UI库
以下为 [easycom](https://uniapp.dcloud.net.cn/collocation/pages.html#easycom) 自动注册组件，可直接使用。
- lx-ui/components
-  @/components/uni-xxx/index.vue
-  @/components/xxx/xxx.vue

## 请求封装
lx-ui/lib/request

## 样式
lx-ui/lib/css

## 环境变量 - src/env

- .env.dev 开发环境
- .env.test 测试环境
- .env.ut 预发环境
- .env.prod 生产环境

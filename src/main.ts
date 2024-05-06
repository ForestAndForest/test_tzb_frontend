import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import router from "./router";

createApp(App).use(router).mount("#app");



// tailwind css 确实是个好东西，但是我仍然建议了解一下Ant Design, Elements Plus,TDesign 等UI框架
// 目前来看并没有做到数据与代码分离，请合理构建页面数据，便于后期后端API的构建和数据库的设计
// 前端设计理念应该是 数据驱动页面，这在VUE中是及其容易实现的，请合理使用ref()函数
// 另外，vue的三大核心是 路由、组件和状态管理（如果没有记错的话）,在项目中使用VUEX或者Pinia也许是不错的选择，
// 还有，建议对 components 文件夹进行合理的分类（通过子文件夹），对于组件，希望采纳Vue推荐的命名规范，本项目中
// 部分组件的命名可能导致兼容性问题
/**
 * RCA (Register components automatically 自动注册组件)
 * @param {Vue.component} component  
 * @param {function} defineAsyncComponent
 */
export default function ({ component }, defineAsyncComponent) {
  const requireComponent = require.context(
    // 其组件目录的相对路径
    "@/components",
    // 是否查询其子目录
    true,
    // 匹配基础组件文件名的正则
    // 我们只对以 index.vue 和 index.js 结束的文件自动注册
    /index\.(vue|js)$/,
    "lazy"
  );

  const requireModule = require.context(
    // 其组件目录的相对路径
    "@/modules",
    // 是否查询其子目录
    true,
    // 匹配基础组件文件名的正则
    // 我们只对以 index.vue 和 index.js 结束的文件自动注册
    /index\.(vue|js)$/,
    "lazy"
  );

  requireComponent.keys().forEach(name => {
    registered(name, requireComponent);
  });
  requireModule.keys().forEach(name => {
    registered(name, requireModule);
  });

  async function registered(fileName, requireCtx) {
    // 获取组件的配置
    const componentConfig = await requireCtx(fileName);
    
    // 获取组件名称
    let componentName = fileName.slice(2, -10);
    let { __file } = componentConfig.default
    
    // 全局注册异步组件
    // https://github.com/vuejs/rfcs/blob/async-component/active-rfcs/0026-async-component-api.md
    component(componentName, defineAsyncComponent({
      loader: () => import(`../../${__file.slice(4)}`),
    }))
  }
}

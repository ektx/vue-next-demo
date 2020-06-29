/**
 * RCA (Register components automatically 自动注册组件)
 * @param {Vue.component} component  
 * @param {function} defineAsyncComponent
 */
export default function ({ component }, defineAsyncComponent) {
  const requireComponent = require.context(
    // 其组件目录的相对路径
    '@/components',
    // 是否查询其子目录
    true,
    // 匹配基础组件文件名的正则
    // 我们只对以 index.vue 和 index.js 结束的文件自动注册
    /index\.(vue|js)$/,
    'lazy'
  );

  const requireModule = require.context(
    // 其组件目录的相对路径
    '@/modules',
    // 是否查询其子目录
    true,
    // 匹配基础组件文件名的正则
    // 我们只对以 index.vue 和 index.js 结束的文件自动注册
    /index\.(vue|js)$/,
    'lazy'
  );

  requireComponent.keys().forEach(path => {
    registered(path, 'components');
  });
  requireModule.keys().forEach(path => {
    registered(path, 'modules');
  });

  /**
   * 注册组件
   * @param {string} file 文件相对地址
   * @param {string} directory 查寻目录
   */
  function registered(file, directory) {
    // 获取组件名称
    let componentName = file.slice(2, -10);
    let filePath = directory + file.slice(1)
    
    // 全局注册异步组件
    // https://github.com/vuejs/rfcs/blob/async-component/active-rfcs/0026-async-component-api.md
    component(componentName, defineAsyncComponent({
      // https://webpack.docschina.org/api/module-methods/#import
      loader: () => import(/* webpackChunkName: "[request]" */ `../../${filePath}`),
    }))
  }
}

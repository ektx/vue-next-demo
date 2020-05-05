# vue-next-demo

基于 Vue 3.x 的项目框架。

## 功能

- 自动注册路由
- 自动注册组件

## 目录结构说明

```
vue-next-demo
  ├─── public             静态文件目录
  ├─── src                项目开发文件
  │  ├─── assets          项目开发静态文件
  │  ├─── components      项目内组件目录
  │  ├─── mixins          mixins 文件存放目录
  │  ├─── modules         项目内业务共用组件目录
  │  ├─── router          路由目录
  │  ├─── store           store 目录
  │  ├─── views           业务页面目录
  │     ├─── home         主页目录
  │     │  ├─── index.vue 主内容页面
  │     ├─── pageA        业务A目录
  │        ├─── index.vue 业务A内容页面
  │  ├─── App.vue        
  │  ├─── main.js
```

### 自动注册

#### 添加组件
在component目录中添加**组件文件夹**，系统自动注册组件，在页面中可只接调用。

#### 添加页面
在 views 中添加业务**页面文件夹**，系统自动生成路由页面，无需用户配制。


## 项目配制
```
yarn install
```

### 开发模式
```
yarn serve
```

### 打包生成
```
yarn build
```

### 自定义配制
[Configuration Reference](https://cli.vuejs.org/config/)  

## 参考
[Vue Composition API](https://composition-api.vuejs.org/)   
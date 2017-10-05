# ES6 介绍和将 ES6转化ES5的环境设置(Babel + Webpack)
![](http://upload-images.jianshu.io/upload_images/7219342-1ffc07a9fdaf7c56.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 介绍
ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在2015年6月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。

## ES6 转化 ES5 的环境设置
这里介绍，用 Babel 配合 Webpack，将 ES6 转化为 ES5 代码。当然，也可以只用 Babel 或配合其他工具，详情见[这里](http://babeljs.io/docs/setup#installation)。

下面是详细的配置步骤：  

**第一步 安装 Node.js**
点[这里](https://nodejs.org/en/download/) 下载安装。

**第二步 创建Demo文件夹**
文件夹命名为 `webpack-babel-demo`。

**第三步 命令行中到Demo文件夹的位置**
打开命令行窗口。 `cd` 到 `webpack-babel-demo` 下。

**第四步 初始化项目**  
在命令行输入： `npm init` 。按提示输入项目的信息。完成后会生成文件： `package.json` 。

**第五步 安装依赖**  
在命令行中输入下面的内容：
```
npm install --save-dev babel-loader babel-preset-env webpack babel-core 
```

安装成功后，`package.json` 后新增如下的内容：
```
"devDependencies": {
  "babel-core": "^6.26.0",
  "babel-loader": "^7.1.2",
  "babel-preset-env": "^1.6.0",
  "webpack": "^3.6.0"
}
```

**第六步 设置Babel**  
在 Demo文件夹下创建文件 `.babelrc` 。文件中输入以下内容：
```
{
  "presets": ["env"]
}
```

**第七步 配置Webpack**  
在 Demo文件夹下创建文件 `webpack.config.js` 。文件中输入以下内容：
```
const path = require('path');

module.exports = {
  entry: './index.js', 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}
```

其中，`entry` 的值为源码的路径，`output.path` 为生成的代码的路径。


**第八步 添加启动项目的命令**
在 `package.json` 的 `scripts` 属性下添加如下内容：
```
"start": "webpack --config webpack.config.js"

```

**第九步 测试**
在 Demo文件夹下创建文件 `index.js`。在 `index.js` 随便输入些 ES6 代码。如
```
var a = [1, 2, 3]
var b = [2, 3]
var res = [...a, ...b]
```

在命令行中输入 `npm start`。运行结束后，在 Demo 文件夹的 `dist` 目录下会找到文件 `bundle.js`。该文件内容为转化为 ES5 的代码。 






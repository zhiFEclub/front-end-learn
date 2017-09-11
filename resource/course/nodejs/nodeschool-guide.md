# 以实践的方式学 Node.js： NodeSchool 使用指南
![](http://upload-images.jianshu.io/upload_images/7219342-44c7c3c80612fea9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 介绍
[NodeSchool](https://nodeschool.io/zh-cn/) 是一个针对初学者，教授 Web 开发技能的免费开源教程（NodeSchool 包含一堆教程，不仅仅是 Node.js 的）。 

NodeSchool 的教程由一系列任务构成，每个任务除了常规的描述，还有详细的提示。如下图所示：

![](http://upload-images.jianshu.io/upload_images/7219342-dd6d62614f777bc3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## Node.js 教程的安装
第 1 步 安装： [Node.js](http://nodejs.org/)  
Windows 有 .exe 的安装包，Mac 用 Homebrew 安装。在命令行中执行 `node -v`， 显示 `Node.js` 的版本号表示安装成功。

第 2 步： 安装 NodeSchool  
在命令中执行如下命令：
```
npm install -g learnyounode
```

在命令行中执行 `learnyounode`, 若出现如下图所示的学习目录，则表示安装成功。

![](http://upload-images.jianshu.io/upload_images/7219342-3550debbccea94da.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

看到都是英文？别怕，可以将语言切换成中文。方法：执行`learnyounode`，按键盘上的下移键，将光标移动到`CHOOSE LANGUAGE` 按回车，选择`简体中文` 按回车即可。切换后如下图所示：

![](http://upload-images.jianshu.io/upload_images/7219342-69cf404012c80cf9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 开始学习
在命令行中执行 `learnyounode` 。选择想学的课程，按回车键，开始学习。

如果读了任务的描述和提示，你还是不知道无从下手，可以到讨论区[提问](https://github.com/workshopper/learnyounode/issues/new)。

## 运行代码
完成任务后，可以用如下两种方式运行代码：  
方式1:
```
node 程序文件.js
```

方式2:

```
learnyounode run 程序文件.js
```

## 验证代码
在确定任务完成后，用如下命令验证你的程序与任务的要求是否一致：
```
learnyounode verify 程序文件.js
```

上面命令运行完成后，会生成测试报告。如果验证成功，该课程会被标记为`完成`。如果失败，可以在测试报告中观察程序的预期值和实际的值的差异，修改代码后，执行 `learnyounode run 程序文件.js` 再进行验证。

输入 `learnyounode` 进入下一个课程的学习。

## 更多课程
上文提到是 NodeSchool 中 Node.js 相关的教程，除此之外，NodeSchool 还包含： `JavaScript`，`WebGL`，`函数式编程`，`Git`， `npm` 等一堆课程。这些课程可以在[官网](https://nodeschool.io/zh-cn/)的首页中找到。

大家会用学会 NodeSchool 了吗~ 点击[这里](http://www.jianshu.com/p/522129601ee5) 报名，一起学起来吧！
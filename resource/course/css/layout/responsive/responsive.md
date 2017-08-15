# 响应式布局介绍
建议学习时长： 30分钟  
学习方式：了解  

## 学习目标
* 了解什么是响应式样
* 知道页面的 viewport 该怎么设置
* 了解 CSS像素和设备像素的区别

## 详细介绍
响应式布局是当今流行的一个设计理念，随着移动互联网的盛行，为解决各式各样的浏览器分辨率以及不同移动设备的显示效果。简单来说，让同一个页面在不同大小的设备上看着都ok。

### 基础概念
### viewport
移动设备上的 viewport 就是设备的屏幕上能用来显示我们的网页的那一块区域，再具体一点，就是浏览器上用来显示网页的那部分区域。viewport 是可以设置的。一般这么设置，让viewport的宽度等于设备的宽度：
```
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
```

想了解更多，可以阅读下面的两篇文章：
* [两个viewport的故事（第一部分）](http://weizhifeng.net/viewports.html)
* [两个viewport的故事（第二部分）](http://weizhifeng.net/viewports2.html)

### 设备像素比率（Device Pixel Ratio，DPR）
> CSS 中的1px并不等于设备的1px！

设备像素即屏幕设置的分辨率。设置的分辨率不一定等于显示器的物理分辨率，大多数情况下，我们设置的分辨率与物理分辨率一致，显示效果才最佳。    
CSS像素指在CSS中的单位PX。
* 在缩放级别为100%时，设备像素比率为1的设备上，1个CSS像素等于1个设备像素。
* 在缩放级别为100%时，retina设备上，1个CSS像素等于4个设备像素。
* 在缩放级别为100%时，设备像素比率为1.5的设备上，1个CSS像素等于1.5个设备像素。
* 在缩放级别为200%时，设备像素比率为1的设备上，1个CSS像素等于4个设备像素。

## 推荐阅读
* [响应式网页设计的9项基本原则](http://www.shejidaren.com/principles-of-responsive-web-design.html)


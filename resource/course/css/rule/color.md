# CSS之颜色
建议学习时长： 10分钟  
学习方式：了解  

## 学习目标
* 了解的CSS颜色的写法。

## 详细介绍
字体颜色，背景色，边框颜色等地方会用到颜色。颜色的可选值如下：
* 颜色名称，如: red,green,blue等，更多见[这里](http://www.w3school.com.cn/cssref/css_colornames.asp)
* 十六进制，如: #ff0000，#ff6600等。其中前两位代表红，中间两位表示绿，最后两位表示蓝
* rgb，如rgb(255,0,0)。第1,2,3个参数分别表示红，绿，蓝。参数取值范围是0~255
* 还可以是 `currentColor`。 表示是当前计算出的字的颜色。

写法示例：
```
.red{color: #ff0000;}
.bg-red{background: red;}
.bule-border{border: 1px solid rgb(0, 0, 255);}

div {
  color: red;
  border: 5px solid currentColor;
  box-shadow: 0 0 5px solid currentColor;
}
```

推荐使用十六进制。
# 如何命名
建议学习时长： 30分钟  
学习方式：了解  

## 学习目标
* 不起特别差的名字

## 详细介绍
> There are only two hard things in Computer Science: cache invalidation and naming things.-- Phil Karlton

### 命名的原则
1 使用名副其实（Intention-Revealing）的名字  
* 不要定义无意义的名字
* 不要使用magic numbers

2 避免传达错误的意思
* 避免使用有歧义的名字，比如与其他已存的命名系统相同或相似的名字（比如hp, aix, sco）
* 避免使用与语言特性相关的词，比如，accountList, 如果它真的是一个某些语言中的List结构还好，如果不是，最好使用bunchOfAccounts或者直接accounts更好。
* 避免在不同的地方使用只有微妙区别的命名。

3 在命名和命名之间使用有意义的区别

4 使用语音可读的命名

5 使用容易搜索的命名

6 避免发明新的编码方式来命名

7 避免脑补

8 不要使用可爱的命名

9 同一个概念使用同一个单词

10 避免使用双关语

11 使用程序员熟悉的专有名词

12 使用描述问题的命名

13 添加有意义的上下文

14 不要添加无意义的上下文

详细见[命名的艺术（clean code阅读笔记之一）](http://www.kknotes.com/blog/%E5%91%BD%E5%90%8D%E7%9A%84%E8%89%BA%E6%9C%AF%EF%BC%88clean-code%E9%98%85%E8%AF%BB%E7%AC%94%E8%AE%B0%E4%B8%80%EF%BC%89/)。

## CSS 的常用命名
### 状态
* collapsed 收拢的
* expanded 展开的
* current 当前
* selected 选中的
* active 活跃的
* enabled 可用
* disabled 不可用

## 布局
* 头部 header
* 尾部 footer
* 主栏 main
* 侧栏 side
* 盒容器 wrap
* 条目 item。一般和模块名一起用，如 `list-item`， `news-item`。

## 模块
* 导航 nav
* 子导航 subnav
* 面包屑 crumb
* 菜单 menu
* 选项卡 tab
* 标题 head/title
* 列表 list
* 内容 content
* 表格 table
* 表单 form
* 热点 hot
* 排行 top
* 登录 login
* 标志 log
* 搜索 search
* 幻灯 slide
* 提示 tip
* 帮助 help
* 新闻 news
* 下载 download
* 注册 regist
* 投票 vote
* 版权 copyright
* 结果 result
* 按钮 button
* 输入 input
* 个人中心
  * 用户状态（关注数，喜欢数） user-status
  * 用户头像 avatar
  * 徽章 badge

### 推荐阅读
* [什么鬼，又不知道怎么命名class了](https://mp.weixin.qq.com/s?__biz=MzI3MDE0MzAzMw==&mid=2652201884&idx=1&sn=15193ebd41d34cb093afdad3a85526e8&scene=0#wechat_redirect)
* [Codelf(变量命名神器)](https://github.com/unbug/codelf)
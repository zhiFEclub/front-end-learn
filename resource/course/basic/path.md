# 图片标签中的图片地址
路径分两种

第一种：网上的绝对路径。  
绝对路径如：`http://upload.jianshu.io/users/upload_avatars/7219342/faf260f1-d86b-49cf-8fa0-d4ba650198f2.png?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240`


第二种： 本地的相对路径。  
* 如果图片和 HTML 同一个文件目录下，图片地址为： `图片名.图片扩展名`。如`a.jpg`。
* 如果图片在 HTML 所在文件目录的下一级文件中。图片地址为： `下级文件夹名/图片名.图片扩展名`。如果是下多级文件夹中，则为 `文件夹名/文件夹名/文件夹名..../图片名.图片拓展名`。
* 如果图片在 HTML 所在文件目录的上一级文件中。图片地址为： `../图片名.图片扩展名`。
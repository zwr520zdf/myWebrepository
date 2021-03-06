# 第一章：HTML

- 概念：HTML是一种描述网页的标记语言。

  - HTML是一种超文本标记语言「Hyper Text Markup Language」；
  - HTML不是一种编程语言，只是一种标记语言；
  - 所谓「标记语言」：本质是一套标记标签；
  - HTML使用标记标签描述网页；
  - HTML的标记标签简称HTML标签；
  - HTML是一种解释型语言，由浏览器解释执行。

- HTML文档的基本结构：
  - html：根标签；主要包含2大部分：
    - head：定义文档的头部；包含：meta | title | link | style | script；
    - body：定义文档的主体；其内容会被浏览器显示。

***

## 基本标签

### 基本标签1·hx标题标签：

- 注意：h1～h6重要性逐渐减小「字体逐渐减小」
- 可选属性：align="left | center | right"

### 基本标签2·font文本修饰标签：

- 可选属性：color | size | face
- 补充文本标签：

``` font属性
<b>加粗</b> | <i>倾斜</i> | <u>下划线</u> |
<tt>等宽文字</tt> | <cite>引用文本</cite> |
<em>普通强调</em> | <strong>特别强调</strong> |
<sup>上标</sup> | <sub>下标</sub>
```

### 基本标签3·p段落标签：

- 注意：每个段落自动换一行
- 可选属性：align="left | center | right"

### 基本标签4·p段落标签：

- 注意：每个段落自动换一行
- 可选属性：align="left | center | right"

### 基本标签4·blockquote段前缩进标签：

### 基本标签5·br换行标签：

- 注意：单标签！

### 基本标签6·nobr不换行标签：

- 注意：当文本内容过长时，将自动换行，nobr单行显示

### 基本标签7·center居中布局标签：

### 基本标签8·hr水平线标签：

- 注意：单标签！
- 可选属性：color | align | size线的高度 | width线的宽度

### 基本标签9·img图片标签：

- 注意：单标签！
- 必须属性：src | alt
- 可选属性：align* | border | width | height | title

### 基本标签10·dl...dt...dd普通描述列表：

```格式：
<dl>
 <dt>描述标题1</dt>
 <dd>描述内容1</dd>
 ...
</dl>
```

- 注意：描述内容在描述标题后自动缩进

### 基本标签11·ol...li有序列表：

```格式:
<ol>
 <li>列表项1</li>
 <li>列表项2</li>
 ...
</ol>
```

- 可选属性：reversed | start | type「支持：1/A/a/I/i」

### 基本标签12·ul...li无序列表：

``` 格式：
<ul>
 <li>列表项1</li>
 <li>列表项2</li>
 ...
</ul>
```

- 可选属性：type

### 基本标签13·a超链接标签：

- 格式：

```格式
<a href="绝对/相对地址">超链接内容</a>
```

- 超链接的文字样式：默认的 | 被单击的 | 已访问的
- 跳转情形1·跳转到普通URL并返回：
- 跳转情形2·跳转到Email地址：
- 跳转情形3·跳转到指定网页的指定位置：
  - Ⅰ.跳转到当前网页的开头：
  - Ⅱ.跳转到当前网页的指定位置：
  - Ⅲ.跳转到指定网页的指定位置：
  - 总结：
- 第一步·做记号：

```记号
<a name="自定义标记">内容</a>
```

- 第二步·指定跳转：

```指定跳转
<a href="URL#自定义标记">超链接</a>
```

***

## 表格

- HTML的表格通常有2种类型的单元格：

  - 表头单元格：包含表头信息，由th创建
  - 标准单元格：包含单元格信息，由td创建

- 注意：有几个td就有几个th。

- table标签的可选属性：
  - background="URL"：背景图片
  - bgcolor="颜色值"：背景颜色
  - width="px"：宽
  - height="px"：长

  - border="px"：边框
  - bordercolor="颜色值"：边框颜色
  - align="left | center | right"：
  - cellspacing="px"：边框与边框之间的间隙大小
  - cellpadding="px"：边框与其内容的间隙大小

- 表格的格式

```表格
 <table border="1">
    <tr>  <!--第一行-->
      <th>第1列</th> <!--表头信息-->
      <th>第2列</th>
      <th>第3列</th>
      <th>第4列</th>
    </tr>
    <tr> <!--第二行-->
      <td align="center">1</td>
      <td align="center">2</td>
      <td align="center">3</td>
      <td align="center">4</td>
    </tr>
  </table>
```

![表格实现图](https://i.loli.net/2018/05/18/5afe7885d49bf.png)

***

## 表单

- 表单的定义格式：
  - form 属性列表
  - input 属性列表/---- 定义普通表单元素
  - select 属性列表/---- 定义可选列表元素
  - textarea文本/textarea---- 定义多行文本区元素

- 表单的作用：HTML表单用于接收不同类型的用户输入，用户提交数据给服务器时需要通过表单完成，即：表单用于实现用户与Web服务器的交互。

- form标签的可选属性：
  - name="参数名"：定义表单的参数名

  - action="URL"：定义表单数据将要提交给服务器的哪个文件
    - 注：一般是.jsp/.asp

  - title="提示"：定义表单悬停提示

  - method="get | post"：定义浏览器采用哪种http协议的请求提交表单

- ※重点·GET和POST请求的区别：

- 1）数据提交方式的区别：
  - GET请求：将数据拼接在URL地址结尾，以?分隔、以&组合
    - 补充：
    - 如果表单数据值是英文字母/数字，原样拼接；
    - 如果表单数据值是中文，使用BASE64加密得出%XX「字节」；
    - 如果表单数据值含空格，转换成+号。

  - POST请求：不会将数据拼接在URL地址结尾，而是放在了HTTP数据包中。

- 2）数据大小的区别：

  - GET请求：一般最多1024个字节；
  - POST请求：理论上没有限制，IIS4中最大80KB，IIS5中最100KB。

- 3）安全性的区别：POST请求相对GET请求更加安全。

- 总结：
  - GET一般作为一种从服务器获取数据的请求；
  - POST一般作为一种项服务器提交数据的请求；
  - 二者只是发送机制的不同，并不是一个"取"一个"发"。

- input标签的可选属性：input要用size改变
  - name="参数名"：没有name无法上传拼接数据

  - type="type"：定义表单元素的类型

  - 关于表单元素的类型「5类10种」：

    - 输入型元素「2种」：text | password（不会被显示出来）大小改变用size

    - 按钮型元素「5种」：radio（单选按钮不可单击去勾选） | checkbox（复选框可以取消） | button （普通需要加文字） | submit | reset

  - 图片型元素「1种」：image input tpye="imge" src="..." 单击图片可以提交数据,还可以显示单击点的x/y坐标

  - 文件型元素「1种」：file  input type="file"单击后显示文件名字

  - 隐藏型元素「1种」：hidden「只是隐藏，数据仍然提交」

  - width="px"： 只针对图片或者按钮元素
  - height="px"：

  - disabled="disabled"：设置表单元素是否被禁用「显示但不能编辑以及不能提交」

  - value="value"：定义表单元素的初始值（对输入框是初始值，对按钮是文字，所有value值被提交给服务器，不是为了显示而是为了提交，前提是定义了name）

  - size="number"：设置输入元素的宽度
  - maxlength="number"：设置输入元素允许输入的字符个数

  - autofoucs="autofoucs"： 设置默认选中的哪个输入框

  - max="number | date"：设置输入元素的最大值（可以是整数也可以是时间）
  - min="number | date"：设置输入元素的最小值

  - readonly="readonly"：设置输入元素只读（不能编辑但可以提交)

  - pattern="正则表达式"：

  - checked="checked"：设置按钮元素是否被选中（输入了则一开始就被选中）

  - src="URL"：设置图片元素的URL地址

  - align="left | right | top | middle | bottom"：

  - alt="text"：设置图片元素不能正常显示时的文字提示

```表单
<form>
      <input type="text" name="iname" />
      <input type="text" name="ipwd" />
      <input type="submit" />
      <input type="button" />
</form>
```

- 标签lable标签 可以点击附近图片选中选择框 首先要在前面的input加一个id=""在lable里面同样设置相同for="id"

- 下拉列表 select

```下拉表
<select>
  <option>数字</option>
  <option>1</option>
  <option>2</option>
  <option>3</option>
</select>
```

- frameset和body不能一起使用
- frameset标签的可选属性：
  - colse="像素值 |%|*" 设置框架集中的列的数目和尺寸
   注:用于将文档进行左右切割
  - rows="像素值 |%|*"设置框架集中的行的数目和尺寸
   注:用于将文档进行上下切割

- 框架frame

  - name:定义框架名字

  - src=URL 定义框架页面中的HTML文档的地址
  - frameborder=0/1 设置是否显示框架边框；0不显示/1显示
  - border
  - bordercolor
  - marginwidth  设置框架距离左右边界的间距
  - marginheigth 设置框架距离上下边界的间距
  - scrolling=yes/no/auto  设置框架是否显示滚动条
  - noresize="noresize"设置是否允许拖动改变大小

```框架
<frameset cols="30%,90%">
  <!--左边/导航窗口[不变]-->
  <frame src="menu.html" noresize="noresize"/>
  <!--右边/内容窗口[跳转]-->
  <!--第一步:为内容窗口起个名字-->
  <frame src="http://www.baidu.com" name="content" />
  </frameset>
```

![表单实现](https://i.loli.net/2018/05/18/5afe8f3e89a14.png)

- 框架窗口之间的超链接:
- 实现方法：
  - 第一步：frame src="URL" name="窗口名"/
  - 第二步: a href="URL" target="窗口名"/

## HTML总结：

- 掌握HTML的基本结构创建网页
- 学会使用基本标签与属性
- 了解表格基本的结构
- 使用表格相关标签实现跨行、跨列
- 对表格相关设置进行美化修饰
- 学会使用表单元素
- 使用框架窗口配合超链接实现跳转

***

## 第二章：CSS

- head头元素6种：
  - <title\></title\>标签对：定义HTML文档的标题
  - <meta/\> 标签：定义HTML文档的元信息

  - <base/\> 标签：定义HTML文档中所有超链接的基准地址「即:为所有相对地址的URL设定一个基准地址」

  - <style\></style\>标签对：定义HTML文档的CSS样式

  - <script\></script>标签对:定义HTML文档的JS特效

  - <link/\>标签

- <link/\>标签：

  1. 作用：用于定义当前HTML文档和另一个文档或资源之间的关系「即：引入外部资源、CSS样式或JS文件」；

  2. 属性：
  - href="URL":设置外部资源或文件的URL地址「必要属性」

  - type="MIME"：设置外部资源或文件的MIME类型「CSS：text/css  |  JS：text/javascript」

- DIV

  1. DIV是HTML的层，定义：<div\></div>；

  2. DIV是一个容器，可以容纳各种HTML子元素；

  3. 过去的DIV主要用于绝对定位网页的内容或显示动画flash；

  4. 随着CSS的强大，使用DIV分层+使用CSS控制样式已经成为了网页制作的主流方式。

  5. 注意：HTML里div如果不加控制的话是独占一行的。

- CSS

  1. 名称：全称“级联样式表/层叠样式表”；Cascading Style Sheets；

  2. 作用：主要用于定义HTML内容在浏览器中的的显示样式；

  3.优势：使用CSS最大的优势在于：通过CSS定义某个样式，可以让不同网页位置的内容有着统一的样式「可复用性」。

- CSS的代码语法：

  1. CSS = 选择符 + 声明；

  2. 声明 = 属性 + 值；

  3. 选择符：又称选择器，用于指明网页中需要应用CSS样式的元素是谁，没有指明的元素不回受到影响。

  4. 声明：{}中的就是声明，属性和值之间以英文:分隔；当存在多条声明语句时，以英文;分隔。
  - 注意：
    - {}中的最后一条声明语句允许没有分号，但是为了以后修改方便，一般也加上分号；
    - 为了使CSS样式更加容易阅读，建议将每条声明语句单独写在一行中。

- CSS代码引入：3种方式

  1.内联式：一种把CSS代码直接写进现有HTML标签中作为属性出现的方法。

  2.嵌入式：一种把CSS代码写进head标签以独立样式出现的方法。

```格式：
  <style type="text/css">
    选择器 {
        属性1: 值1;
        属性2: 值2;
        ...
        }
    </style>
```

3.外部式：也称外联式；一种把CSS代码写进一个独立的外部文件中的方法，其中：该外部文件以.css作为后缀，并在head标签中使用link标签引用。

```link引用的格式：
  <link href="*.css" rel="stylesheet" type="text/css"/>
  或使用CSS的import指令导入：
  <style type="text/css">
    @import url("*.css");
  </style>
```

- 注意：rel="stylesheet" type="text/css"是固定写法，不可修改。

- 3种方式的优先级：

  - 内联式  >  嵌入式  >  外部式

- 什么叫选择器
  - 概念：每一条CSS样式由部分构成。

  - 作用："选择器"指明了{}中的"样式"能够作用的对象，也就是"样式"作用于HTML中的哪些元素。

  - 分类：9种选择器：

    - 第1种·标签选择器：最基本的选择器；一种直接使用HTML的各种标签作为选择器的方式；也称元素选择器或类别选择器；

    - 第2种·类选择器：最常用的选择器；一种先定义class属性后指定选择器样式的方式；

```类选择器
<style type="text/css">
    .name {
          color: green;
          font-size: xx-large;
          font-weight: bold;
            /*方正姚体*/
          font-family: FZyaoti;
        }
  </style>
</head>
  <body>
    <div>
      <img src="img/xdd.jpg" align="center" />
    </div>

    <h1 class="name">习近平</h1>
    <h2 class="name">目前所任职务一览：</h2>
```

- 格式：.类选择器名称 {CSS样式代码;}「其中：类选择器名称  =  class属性值」
  - 注意：以.开头，且选择器名称可以自定义，但不要起中文

- 第3种·id选择器：一种先定义id属性后指定选择器样式的方式；

- class和id选择器不同点：
  - 语法的区别：
    - id选择器使用"#"定义样式；
    - 类选择器使用"."定义样式

  - 使用规定的区别：
    - id选择器只能被一个元素调用「即：以"#"命名的样式一个HTML文档/页面中只能被调用1次」
    - 类选择器可以被多个元素调用「即：以"."命名的样式一个HTML文档/页面中可以使用多次」
    - 如：

```写法
正确的写法：
         <p class="para">生命不息</p>
          <p class="para">奋斗不止</p>

错误的写法：
        <p id="para">生命不息</p>
          <p id="para">奋斗不止</p>
```

- 是否支持词列表的区别：可以使用类选择器词列表为一个元素同时设置多个样式，即：类选择器支持词列表；id选择器不支持词列表。

- 总结：
  - id相当于人的身份证，一般用与识别div；
  - class相当于人身上穿的衣服，一般用于定义这个div的样式；
  - 一般一个网页不会设置2个或2个以上的相同id的div，但多个div可以使用同一个class。

- 第4种·子选择器：一种使用>号在父元素后指定父元素的第一代子元素的选择器方式；

- 第5种·包含/后代选择器：一种使用空格在父元素后指定父元素的后代元素的选择器方式；

- 第6种·通用选择器：最强大的选择器；一种使用*号匹配所有HTML文档中的标签元素的选择器方式；

- 第7种·伪类选择器：一种允许给HTML中不存在的标签「一般是标签的某种状态」设置样式的选择器方式；

- 第8种·分组选择器：一种可以为HTML中多个标签同时设置一个样式的选择器方式，使用分组选择符,隔开；

```分组选择器
a,
li {
      color: goldenrod;
    }
```

- 第9种·属性选择器：一种可以为HTML中的元素的属性设置选择器的方式。

```属性选择器
input[type="text"] {
        width: 150px;
        margin-left: 50px;
        margin-bottom: 10px;
        background-color: yellow;
        font-family: verdana, arial;
        display: block;
      }
....
<input type="text" name="name" value="姓名" size="20" />
```

- CSS的格式化排版：

  - 文字排版·字体：font-family: "STxinwei"

  - 文字排版·字号、颜色：font-size: 20px;
  - 文字排版·粗体、斜体：font-weight: bold; 粗体; font-style: italic; 斜体
  - 文字排版·粗体、斜体：font-weight: bold; 粗体
  - 文字排版·下划线、删除线：text-decoration: underline;下划线；text-decoration: line-through;删除线
  - 段落排版·行间距「行高」：line-height: 1.5em;
  - 段落排版·中文汉字或英文字母间距间距、单词间距：letter-spacing: 50px; 文字或英文间距
  - 段落排版·对齐：text-align: center：设置块状元素中的内容的对齐方式;支持:left | center | right

- CSS盒模型

- 标签元素分为3种不同的类型：块状元素  |  内联元素/行内元素  |  内联块状元素

- 元素分类·块状元素：
  - 特点：
    - 每个块状元素都从新的一行开始，并且其后的元素也另起一行「即：一个块状元素独占一行」；
    - 块状元素的高度、宽度、行高以及顶部和底部的间距都可以设置；
    - 块状元素在不设置宽度和高度的时候，默认填充父容器「即：占满100%」。

  - 典型的块状元素：div  |  p  |  hx  |  form  |  ul  |  ol...

  - 设置非块状元素为块状元素：display:block（不设置宽高，宽度依旧会占满整个父容器）

```块状元素
  div {
        background-color: pink;
      }

      a {
        border: 2px solid green;
        /*设置非块状元素为块状元素*/
        display: block;
      }
```

- 元素分类·内联/行内元素：
  - 特点：
    - 默认和其他元素在同一行中；
    - 元素的宽度、高度以及顶部和底部的间距都不可以设置；
    - 元素的宽度默认是它包含的文字或图片的宽度，不可改变。

  - 典型的内联元素：a  |  span  |  lable  |  strong  |  em...

  - 设置非内联元素为内联元素：display:inline

```内联元素
    a,
      span,
      strong,
      em {
        background: goldenrod;
        /*存在如下隐藏属性:*/
        /*display: inline*/
        /*display: block;*/
      }
      div {
        background: red;
        /*设置非内联元素为内联元素:*/
        display: inline;
      }
```

- 元素分类·内联块状元素：
  - 特点：
    - 默认和其他元素在同一行中；
    - 元素的宽度、高度以及顶部和底部的间距都可以设置；
    - 同时具备内联元素、块状元素的特点。

  - 典型的内联块状元素：img  |  input...

  - 设置其他元素为内联块状元素display:inline-block

```内联块状元素
  a {
        /*设置背景颜色*/
        background: greenyellow;
        /*设置文字水平居中*/
        text-align: center;
        /*设置文字垂直居中*/
        line-height: 50px;
        /*注意:这里默认设置宽度/高度无效「内联元素不可设置」*/
        width: 50px;
        height: 50px;
        /*设置内联元素a为内联块状元素*/
        display: inline-block;
      }
```

## CSS总结：

- 掌握head头元素

- 学会内联式、嵌入式、外部式的CSS代码引入
- 掌握基本的9种选择器
- 掌握一些CSS的常规格式化排版
- 了解标签分为元素分为：块状元素|内联元素|内联块状元素
- 了解CSS的盒模型和3种布局模型
- 掌握行内元素的水平居中设置以及定宽块状元素的水平居中设置

***

## bootstrap

- 概念：Bootstrap 是一个用于快速开发 Web 应用程序和网站的前端框架。Bootstrap 是基于 HTML、CSS、JAVASCRIPT 的。

- 框架样式的引入

``` 引入
<link rel="stylesheet" href="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="http://cdn.static.runoob.com/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/js/bootstrap.min.js"></script>
```

- 表格

![表格](https://i.loli.net/2018/05/22/5b03cb78db414.png)

```表格
<table class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Firstname</th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <td>1</td>
      <td>Anna</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Debbie</td>
       </tr>
      <tr>
        <td>3</td>
        <td>John</td>
      </tr>
    </tbody>
```

- Bootstrap 提供了下列类型的表单布局：
  - 垂直表单（默认）：
    - 向父 <form\> 元素添加 role="form"。
    - 把标签和控件放在一个带有 class .form-group 的 <div\> 中。这是获取最佳间距所必需的。
    - 向所有的文本元素 添加 class ="form-control" 。
  - 内联表单
    - 如果需要创建一个表单，它的所有元素是内联的，向左对齐的，标签是并排的，请向 <form\> 标签添加 class .form-inline。
  - 水平表单
    - 向父 <form\> 元素添加 class .form-horizontal。
    - 把标签和控件放在一个带有 class .form-group 的 <div\> 中。
    - 向标签添加 class .control-label。

- Bootstrap 按钮:任何带有 class .btn 的元素都会继承圆角灰色按钮的默认外观。但是 Bootstrap 提供了一些选项来定义按钮的样式，具体如下表所示：

![按钮](https://i.loli.net/2018/05/22/5b03d00470987.png)

- 输入框组:输入框组扩展自 表单控件。使用输入框组，您可以很容易地向基于文本的输入框添加作为前缀和后缀的文本或按钮。

- 向 .form-control 添加前缀或后缀元素的步骤如下：
  - 把前缀或后缀元素放在一个带有 class .input-group 的 <div\> 中。
  - 接着，在相同的 <div\> 内，在 class 为 .input-group-addon 的 <span\> 内放置额外的内容。
  - 把该 <span\> 放置在 <input\> 元素的前面或者后面。

- 输入框组的大小:通过向 .input-group 添加相对表单大小的 class（比如 .input-group-lg、input-group-sm）来改变输入框组的大小。输入框中的内容会自动调整大小。

- 创建一个基本的进度条的步骤如下：
  - 添加一个带有 class .progress 的 <div\>。
  - 接着，在上面的 <div\> 内，添加一个带有 class .progress-bar 的空的 <div\>。
  - 添加一个带有百分比表示的宽度的 style 属性，例如 style="width: 60%"; 表示进度条在 60% 的位置。

## 总结：

- 掌握基本的bootstrap框架及样式引入
- 学习bootstrap CSS样式
  - 表格
  - 表单
  - 按钮
- 学习常见的布局组件
  - 下拉菜单
  - 按钮组件
- 学习bootstrap里面的输入框组:进度条的使用

***

## JS

- 概念：JavaScript「JS」是一种高级的、动态的、弱类型的、解释型的计算机编程脚本语言。

- JS的引入：
  - 内联式
  - 外部式

- JavaScript-认识注释符：
  - 单行注释：
  // 注释文字

  - 多行注释：

```多行注释
  /*
  * 注释文字
  */
```

- 基本数据类型：
  - 数值型number
  - 字符串型string
  - 布尔型boolean
  - 空类型null
  - 不明确型undefined：
  - 不明确型数值在输出数值或返回类型时都返回undefined

- 运算符：
  - 算术运算符
    - +：正号(后面接一个数)
    - -：负号
    - +：加号(接两个数)
    - -：减号
    - *：乘号
    - /：除号(真实的除法是多少显示多少) 小数后面的为精度 JS里面精度最大17位
    - %：取余/求模
    - ++：自增
    - --：自减
  - 赋值运算符
  - 关系运算符
  - 逻辑运算符
  - 位逻辑运算符
  - 位移运算符
    - <<：左移，高位溢出 -> 舍去;低位空出 -> 直接补0;
    - [>>]：带符号右移：低位溢出 -> 舍去;高位空出 -> 补上符号位; 符号位是1补1 是0补0
    - [>>>]:无符号右移：低位溢出 -> 舍去;高位空出 -> 直接补0。
  - 三目运算符

- onclick事件：

- 注意事项：
  - JS不同于其他编程语言,不需要指定函数的返回值类型;

  - JS不需要指定参数的类型[JS不会检测传递给形参的实参值类型]

  - 小括号()中定义的变量称作形式参数,多个形成形参表,逗号隔开;

  - 如果函数需要返回值,使用return语句；

  - 如果函数不需要返回值,则无需使用return语句;
  - 当然也可以在函数结尾使用return语句,但不返回实际值;

  - 调用函数时,无论函数是否含参,()都不能少;

## js总结：

- 了解js概念和基本的特性
- 学会两种不同的引入js的方式
- 掌握js语言里面基本数据结构和循环控制
- 通过练习学会几种常见的js时间
- 掌握js里面一些基本的数学函数
- 学会js一些日期构建的方法
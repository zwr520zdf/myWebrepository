# HTML

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
  - rows="像素值 |%|*"	设置框架集中的行的数目和尺寸
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
# Markdown 教程与 Hugo 中的简单应用


<!--more-->

## 1. 标题

多级标题使用 *# 号* 来定义，一个 # 号表示一级标题，两个 # 号表示二级标题， 依次类推，最多支持六级标题。

下面是一些例子：

```
# Level 1

## Level 2

### Level 3

#### Level 4

##### Level 5

###### Level 6
```

## 2. 字体及段落

### 2.1 斜体

在需要使用 *斜体* 部分的前后使用一个 * 号或者下划线 _ 标记，可以使字体表现为 *斜体* 。

{{% admonition note "注意" %}} 
需要注意的是，在使用中文字体时，* 号或者下划线 _ 和正常字体中间需要一个空格，否则最后会表现为_斜体_。
{{% /admonition %}}

### 2.2 加粗

在需要使用 **加粗** 部分的前后使用两个 * 号标记，可以使字体表现为 **加粗** 。

### 2.3 删除线

在需要使用 ~~删除线~~ 部分的前后使用两个~号标记，可以使字体表现为 ~~删除线~~ 。

### 2.4 高亮

在需要使用 ==高亮== 部分的前后使用两个 = 号标记，可以使字体表现为  ==高亮== 。

{{% admonition warning "警告⚠️ " %}}
这个高亮语法是 Typora 里面才有的，不在 Markdown 官方语法中。
{{% /admonition %}}


{{% admonition tip "提示" %}}
上面提到的4种标记方式可以一起使用，比如使用三个 * 号标记，可以使字体表现为 ***粗斜体***。
{{% /admonition %}}

### 2.5 下划线

<ins>下划线部分</ins>，其语法为
```html
<ins>下划线部分</ins>
```

### 2.6 上标

上标<sup>内容</sup>，其语法为
```html
<sup>上标的内容</sup>
```

### 2.7 下标

下标<sub>内容</sub>，其语法为
```html
<sub>下标的内容</sub>
```

### 2.8 按键

 <kbd>按键</kbd>，其语法为
```html
 <kbd>按键</kbd>
```

### 2.9 链接

插入链接 [百度](www.baidu.com)，其语法为 [文字] (链接)

{{% admonition warning "注意" %}}
] 和 ( 之间没有空格，这里是为了方便说明语法，避免渲染
{{% /admonition %}}

使用尖括号 < > 可以很方便地把 URL 或者 Email 地址变成可点击的链接。

```
<https://baidu.cn>
<xxx@example.com>
```

### 2.10 Admonition

`admonition` 是 Hugo 的特殊 `Markdown shortcut`，其语法为

```html
{{ < admonition type=tip title="This is a tip" open=false >}}
content
{{ < /admonition >}}
```

`admonition` shortcode 有以下命名参数：

- **type** *[必需]*（**第一个**位置参数）

  `admonition` 横幅的类型，默认值是 `note`。

  可以用以下的 `tpye`

  ```
  tip：提示
  
  note：笔记
  
  abstract：摘要
  
  info：信息
  
  success：成功
  
  failure：失败
  
  question：问题
  
  warning：警告
  
  danger：危险
  
  bug：bug
  
  example：示例
  
  quote： 引用
  ```

- **title** *[可选]*（**第二个**位置参数）

  `admonition` 横幅的标题，默认值是 **type** 参数的值。（支持 markdown）

- **open** *[可选]*（**第三个**位置参数）

  横幅内容是否默认展开，默认值是 `true`
  

## 3. 列表

### 3.1  无序列表

- level 1.1
    - level 2.1
        - level 3.1

无序列表支持多级显示，可以使用 * 或者 - 来实现，其语法为

```
# 可以使用 - 或者 * ，- 或者 * 也可以混用
- level 1.1
    - level 2.1
        - level 3.1

* level 1.1
    * level 2.1
        * level 3.1
```

### 3.2 有序列表

1. level 1.1
    1. level 2.1
        1. level 3.1

有序列表支持多级显示，使用 数字 + . 来实现，其语法为

```
1. level 1.1
    1. level 2.1
        1. level 3.1
```

### 3.3 任务列表

- [ ] aaa
    - [ ] bbb
    - [x] ccc

任务列表也支持多级显示，使用 - [ ] 或者 - [x] 来实现，其语法为

```
- [ ] aaa
    - [ ] bbb
    - [x] ccc
```

## 4. 引用块

> 1

>> 2

>>> 3

引用可以支持多级引用，使用 > 来实现，其语法为

```
# 每级引用需要有空行
> 1

>> 2

>>> 3
```

## 5. 代码块

```c
#include <stdio.h>
int main(void){
	printf("Hello World!\n);
	return 0;
}
```

对于代码块，需要在代码块前后使用三个 ` 来将代码块围起来，并且可以在开始的 ``` 后指定语言，例如 C、Python、Java 等。


## 6. 图片

Markdown 的图片的格式为

```
![ ]( )
```

{{% admonition tip "提示" %}}
Markdown 支持 HTML 语法，可以对多种对象操作，下面是一个图片居中的例子
{{% /admonition %}}

```html
<div align=center>
    ![ ](image.png)
</div>
```

{{% admonition tip "提示" %}}
Hugo 也有特殊的语法，可以对多种对象操作，下面是一个用 Hugo 插入图片的例子
{{% /admonition %}}

```html
# 可以添加图片名称
{{ % figure class="center" src="images.png" alt="图1" title="图1" %}}
```

## 7. 表格

Markdown 中表格使用 | 来分隔不同的单元格，使用 - 来分隔表头和其他行，通过 : 号和 - 的相对位置可以来设置表格的对齐方式。

  - :- 左对齐

  - -: 右对齐

  - :-: 居中

下面是一个表格的例子

| 左对齐 | 右对齐 | 居中 |
|:------ |:------:| ----:|
| 1      | 1      | 1    |
| 2      | 2      | 2    |

源码如下

```
| 左对齐 | 右对齐 | 居中 |
|:------ |:------:| ----:|
| 1      | 1      | 1    |
| 2      | 2      | 2    |
```

## 8. 公式

### 8.1 行内公式

行内公式的语法为

```
$\partial_{x}=\left(x_{i+1}-x_{i-1}\right) / 2 d x$
```

### 8.2 行间公式

$$ \partial_t v - \frac{1}{\rho}\partial_x \tau = 0 $$

行间公式的语法为

```
$$ \partial_t v - \frac{1}{\rho}\partial_x \tau = 0 $$
```

### 8.3 矩阵

#### a. 普通矩阵

$$
\begin{matrix}
0 & 1 \\\\ 1 & 0
\end{matrix}
$$

源码如下

```
$$
\begin{matrix}
0 & 1 \\\\ 1 & 0
\end{matrix}
$$
```

#### b. 圆括号矩阵

$$
\begin{pmatrix}
0 & 1 \\\\ 1 & 0
\end{pmatrix}
$$

源码如下

```
$$
\begin{pmatrix}
0 & 1 \\\\ 1 & 0
\end{pmatrix}
$$
```

#### c. 方括号矩阵

$$
\begin{bmatrix}
0 & 1 \\\\ 1 & 0
\end{bmatrix}
$$

源码如下

```
$$
\begin{bmatrix}
0 & 1 \\\\ 1 & 0
\end{bmatrix}
$$
```

#### c. 大括号矩阵

$$
\begin{Bmatrix}
0 & 1 \\\\ 1 & 0
\end{Bmatrix}
$$

源码如下

```
$$
\begin{Bmatrix}
0 & 1 \\\\ 1 & 0
\end{Bmatrix}
$$
```

{{% admonition warning "注意" %}}
LaTeX 的换行符为 \\，但是这里使用的是 \\\\，主要是因为 Markdown中 的 \\ 才表示一个 \，因此在换行是需要使用4个 \。
{{% /admonition %}}

## 9. 分割线

通过使用三个 - 来表示分割线

---

## 10. 目录

使用 [toc] 即可生成全文的目录。


## 总结

> `Markdown` 是一种**轻量级标记语言**，相较于 LaTeX，排版语法简洁，可广泛用于笔记、文档、博客。
>
> 本文涵盖了大部分的 Markdown 语法，其中部分语法为 `Hugo` 的扩展语法，相信这些简单的标记符号可以帮助你更好地编写文档，**简洁而不失优雅，高效而不失规范**。
>
> 如果你是第一次了解 Markdown，可以通过这个 [在线编辑器](https://markdown.com.cn/editor/) 体验一下！
>
> 觉得本文不错记得在评论区留下你的评论哦！😝



1. jQuery 插件编写
2. 跟踪鼠标位置的子菜单
3. css3的transition轮播插件(兼容低版本)
4. css3字体图标
5. 面向对象
6. 模块化管理
7. MVC
8. 延迟加载
  ①将公共部分的结构提取,创建模板引擎
  ②每个元素都有一个loaded属性,初始值为false;
  ③鼠标进入,判断loaded是否为false,是false时发送ajax
  ④ajax返回数据,渲染模板引擎,插入到元素中.元素的loaded属性变为true
  ⑤鼠标再次进入,loaded属性已经是true,直接return
  难点: 和之前的选项卡一样的假数据,通过ajax发送.数据会很多很长.需要耐心
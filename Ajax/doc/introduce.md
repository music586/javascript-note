#### 关于ajax的一个介绍，及技术发展的演进路线

##### 原生的XHR对象
+ 实现接口请求
+ 实现，GET、POST、DELET、UPDATE等异步方法
+ 实现cors跨域，或jsop跨域

##### 进度条，监控请求的进度


##### promise对象
+ promise+ <https://github.com/then/promise>


##### fetch请求封装

##### 主流异步请求分析
###### [异步主流框架]<https://github.com/search?o=desc&q=promise&s=stars&type=Repositories&utf8=%E2%9C%93>
+ [axios](https://github.com/mzabriskie/axios)
+ [bluebird](https://github.com/petkaantonov/bluebird)
+ [fetch](https://github.com/github/fetch)


##### axios
+ 拦截器的实现：
    - 创建一个默认执行的回调数组，通过unshift添加request拦截，shift添加response拦截
+ 数据转换
    - 自动将传入的data对象序列化为json字符串，将响应数据中的JSON字符串转换为javascript对象




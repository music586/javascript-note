##### 一些开放式的想法与总结



###### 总结
 * 设置头部信息，一定是在open方法的后面，在send方法的前面 *
 + 进度事件
    - loadstart: 在接收到响应数据的第一个字节时触发
    - progress: 在接收响应期间持续不断的触发
    - error: 在请求发生错误时触发
    - abort: 在因为调用abort()方法而终止连接时触发
    - load: 在接收到完整的数据时触发
    - loadend: 在通信完成或者触发erro,abort或load事件后触发
    每个请求从触发loadstart事件开始，接下来是一或多个progress事件，然后触发error、abort 、或load事件中一个，最后以触发loaded事件结束
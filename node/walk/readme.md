readdir 
  读目录里的内容  IO操作异步
  readdirSync   Async -> 异步   sync -> 同步

  js是单线程的，用回调或Promise，释放主线程的控制权，主要因为js在早期是前端DOM的编程，用交互比较多，等到执行完后在通过event-loop机制，拿回控制权(callback resolve\)
  来到了node，js获取了服务器端的能力，
  readdirSync()
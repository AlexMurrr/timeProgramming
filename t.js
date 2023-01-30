
let promise = new Promise(function(resolve, reject) {
    // эта функция выполнится автоматически, при вызове new Promise
  
    // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
    setTimeout(() => resolve(console.log("done")), 3000);
  });
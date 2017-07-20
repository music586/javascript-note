(function(win, doc){
  "use strict"

  win.fetch = function (option) {
    return new Promise(function(resolve, reject){
        let xhr = win.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject();

        xhr.onload = function(res){
          if(xhr.status == '200'){
            debugger;
            let response = xhr.response;
            if ("string" == typeof xhr.response){
              response = JSON.parse(response)
            }
            resolve(response);
          } else {
            reject();
          }
        }

      xhr.open(option.type, option.url, true);
      xhr.timeout = option.timeout;
      xhr.ontimeout = function(res){
        reject('serive is timeout!');
      }
      xhr.send();
      })
  }

})(window, document)
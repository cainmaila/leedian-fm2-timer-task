# 註冊時間間距執行Task

### 安裝
```
npm install leedian-fm2-timer-task
```

### 註冊一個Task
```javascript
var time_task = require('leedian-fm2-timer-task');
//註冊一個Task，必須為 function
var task = time_task.init(function () {
    console.log("run Task !!");
});
```

### 開始Task
```javascript
//設定一個時間區間，必須大於0的整數
task.start(1000);   //每1000ms執行一次
```

### 停止這個Task
```javascript
task.stop();
```

### Demo 輸出倒數三秒
```javascript
var time_task = require('leedian-fm2-timer-task');
var num = 3;
var task = time_task.init(function () {
    console.log(num);
    num--;
    if (num==0) {
        task.stop();
    }
}).start(1000);;
```

var time_task = require('leedian-fm2-timer-task');
var num = 3;
var task = time_task.init(function () {
    console.log(num);
    num--;
    if (num==0) {
        task.stop();
    }
}).start(1000);

module.exports = {
    timer_id: -1,
    task_time: 0,
    task_fun: function() {
        console.log("timer task!! please init timer task!!");
    },
    init: function(_task_fun) {
        if (typeof _task_fun != 'function') {
            throw new Error("task is not Function!");
        }
        this.task_fun = _task_fun;
        return this;
    },
    start: function(_time) {
        _time = parseInt(_time);
        if (isNaN(_time) || _time <= 0) {
            throw new Error("time is not Int or time !> 0");
        }
        this.task_time = _time;
        this.timer_id = setInterval(this.task_fun, this.task_time);
        return this;
    },
    stop:function () {
        clearInterval(this.timer_id);
    }
};

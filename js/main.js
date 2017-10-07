

new Vue({
  el: "#todo",
  data: {
    count: 0,
    newTask: [],
    taskList: []
  },
  methods: {
    addTask: function () {
      this.count++
        let taskTitle = this.newTaskTitle.trim();
      let taskContent = this.newTaskContent.trim();
      if (taskTitle) {
        this.taskList.push({
          title: taskTitle,
          text: taskContent,
          status: 'new',
          id: this.count,
          checked: false
        });
        this.newTaskTitle = "";
        this.newTaskContent = "";
      }
    },
    clearList: function () {
      alert('you go to remove all task')
      this.taskList = [];
    },
    open: function (index) {
      $('#' + index).toggleClass('hidden')
    },

    deleteTask: function (task, index) {
      let conf = confirm('you go to delete this task continue ?')
      if (conf) {
        var index = this.taskList.indexOf(task);
        this.taskList.splice(index, 1);
        $('#' + index).toggleClass('hidden')
      }else{
        $('#' + index).toggleClass('hidden')
        return false
      }
    },

    changeStatusToProgress: function (task) {
      let card = document.getElementsByClassName('.card-top')
    },

    changeStatusToDone: function (task) {
      task.toggleClass('new')
      task.toggleClass('progress')
    }
  }
});
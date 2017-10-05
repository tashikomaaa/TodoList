// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    count: 0,
    newTask: [],
    taskList: []
  },
  methods: {
    addTask: function () {
      this.count++
      let taskTitle = this.newTaskTitle.trim()
      let taskContent = this.newTaskContent.trim()
      if (taskTitle) {
        this.taskList.push({
          title: taskTitle,
          text: taskContent,
          status: 'new',
          id: this.count,
          checked: false
        })
        this.newTaskTitle = ''
        this.newTaskContent = ''
      }
    },
    clearList: function () {
      alert('you go to remove all task')
      this.taskList = []
    },
    open: function (index) {
      document.getElementById('#' + index).toggleClass('hidden')
    },

    deleteTask: function (task, index) {
      let conf = confirm('you go to delete this task continue ?')
      if (conf) {
        index = this.taskList.indexOf(task)
        this.taskList.splice(index, 1)
        document.getElementById('#' + index).toggleClass('hidden')
      } else {
        document.getElementById('#' + index).toggleClass('hidden')
        return false
      }
    },

    changeStatusToDone: function (task) {
      task.toggleClass('new')
      task.toggleClass('progress')
    }
  },
  router,
  template: '<App/>',
  components: {
    App
  }
})

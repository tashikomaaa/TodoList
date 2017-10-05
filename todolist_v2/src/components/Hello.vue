<template>
  <section id="screen1">
    <div class="card-container">
      <h2>TODO</h2>
      <div class="calendar-card card-1" style="color: black!important;">
        <div class="container" id="todo">
          <!-- Panel for holding our input -->
          <section class="panel">
            <form v-on:submit.prevent="addTask">
              <input type="text" placeholder="Task title" class="text-input" v-model="newTaskTitle">
              <input type="text" placeholder="What do you need to do?" class="text-input" v-model="newTaskContent">
              <button type="submit">Create</button>
            </form>
            <button v-on:click="clearList">Clear List</button>
          </section>
          <div class="card-container ">
            <div class="card card-1" v-for=" (task, index) in taskList ">
              <div class="card-topnew">
                {{ task.title }}
              </div>
              {{ task.text }}
              <hr>
              <button class="btn btn-border color-1 material-design" data-color="#2f5398" v-on:click="open(index)">option</button>
              <div class="selectStatus hidden" :id="index">
                <button class="btn btn-border color-2 material-design" data-color="#d2181c" onclick="done(this)">done</button>
                <hr>
                <button class="btn btn-border color-1 material-design" data-color="#d2181c" onclick="progress(this)">progress</button>
                <hr>
                <button class="btn btn-border color-4 material-design" data-color="#d2181c" v-on:click="deleteTask(task, index)">delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'hello'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

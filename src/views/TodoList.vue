<template>
  <div id="app">
    <h1 class="mt-3">Todo List</h1>
    <div class="main">
      <div class="row justify-content-center mt-4">
        <input id="add-todo" v-model="inputField" @keyup.enter="addTodo" placeholder="Todo Item"/>
        <sui-button @click="addTodo">Add Todo</sui-button>
      </div>

      <div id="todo-list" class="ui container">
        <div class="ui divided list relaxed">
          <div id="todo-item" v-for="(todo, index) in todoList" :key="index" class="item">
              <h5>{{ todo.name }}</h5>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  import { randomOfTwo, sleep } from '../components/utils'

  export default {
    methods: {
      async addTodo(todo) {
        todo = this.inputField;
        await sleep(randomOfTwo(0, 500))
        this.todoList.push({name: todo, complete: false});
        this.inputField = '';
      }
    },
    data() {
      return {
        inputField: '',
        todoList: []
      }
    }
  }
</script>

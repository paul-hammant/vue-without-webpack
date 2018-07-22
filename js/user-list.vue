<template>
  <div class="userList" style="border: 5px solid green;">
    <div class="left">
      <h2>User List</h2>
      <ul>
        <li class="userLink" @click="selectUser(123)">User 123</li>
        <li class="userLink" @click="selectUser(456)">User 456</li>
      </ul>
    </div>
    <div class="right" v-if="selectedUser">
      <p>Buraya Tıkla: {{selectedUser.userId}} </p>
      <user :user-id="selectedUser.userId"></user>
    </div>
  </div>
</template>

<script>
  const User = httpVueLoader('./user.vue');
  module.exports = {
    components: {
      user: User
    },
    computed: {
      selectedUser () {
        return this.$store.getters.selectedUser
      }
    },
    methods: {
      selectUser(userId) {
        this.$store.commit('selectUser', userId)
      }
    }
  }
</script>

<style>
  .hello {
    background-color: #ffe;
  }
</style>


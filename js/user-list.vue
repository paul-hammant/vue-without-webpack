<template>
  <div class="userList" style="border: 5px solid green;">
    <div class="left">
      <h2>User List</h2>
      <ul>
        <li class="userLink" @click="loadUserData(123)">User 123</li>
        <li class="userLink" @click="loadUserData(456)">User 456</li>
      </ul>
    </div>
    <div class="right" v-if="selectedUser">
      <p>Buraya Tıkla: {{selectedUser}} </p>
      <user :user-id="selectedUser.userId" :user-data="selectedUser.userData"></user>
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
        return this.$store.state.selectedUser
      }
    },
    methods: {
      loadUserData(userId) {
        this.$store.commit('loadUserData', userId)
      }
    }
  }
</script>

<style>
  .hello {
    background-color: #ffe;
  }
</style>


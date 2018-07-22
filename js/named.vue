<template>
  <div style="border: 5px solid purple;">
    <h2>Users loaded into named views:</h2>
    <ul>
      <li v-for="user in userList">
        <router-link :to="{name: 'named_id', params: user}">User {{user.userId}}</router-link>
      </li>
    </ul>
    <div class="userList">
      <router-view class="left" name="user_details"></router-view>
      <router-view class="right" name="sidebar"></router-view>
    </div>
  </div>
</template>

<script>
  module.exports = {
    name: 'named',
    computed: {
      userList() {
        return this.$store.state.userList;
      }
    }
  }
</script>

<style>
  .hello {
    background-color: #ffe;
  }
</style>


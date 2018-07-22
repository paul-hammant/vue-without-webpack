<template>
  <div style="border: 5px solid red;">
    <h3>User klasör user.vue ({{userId}})</h3>
    <div v-if="userData">
      <p>This route makes use of some option data that was passed in:</p>
      <span>Name: <input v-model="userData.name" name="name" placeholder="name"></span> <br>
      <span>Age: <input v-model="userData.age" name="age" placeholder="age in years"></span>
      <p>{{userData.name}}({{userData.age}} yrs old)</p>
    </div>
  </div>
</template>

<script>
  module.exports = {
    name: 'user',
    props: ['userId'],
    computed: {
      userData() {
        const user = this.$store.getters.getUser(this.userId);
        if (user && 'userData' in user) return user.userData;
        return null;
      },
    }
  }
</script>

<style>
  .hello {
    background-color: #ffe;
  }
</style>


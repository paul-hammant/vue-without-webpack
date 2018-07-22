'use strict';
var User = httpVueLoader('./js/user.vue');
var Sidebar = httpVueLoader('./js/sidebar.vue');
var UserList = httpVueLoader('./js/user-list.vue');
var NamedWrapper = httpVueLoader('./js/named.vue');


Vue.use(Vuex);

var store = new Vuex.Store({
  state: {
    selectedUser: null,
    userList: [
      { userId: 123 },
      { userId: 456, userData: { age: 39, name: 'Patrick O\'Dacre' } }
    ]
  },
  mutations: {
    loadUserData(state, userId) {
      var matchedUsers = state.userList.filter(user => user.userId === userId);
      if (matchedUsers.length) {
        state.selectedUser = matchedUsers[0];
      }
    },
  }
});

/* Router and App setup: */
var routes = [{
  path: '/users',
  name: 'userList',
  component: UserList
},
  {
    path: '/named',
    name: 'named',
    component: NamedWrapper,
    children: [{
      path: 'user/:userId',
      name: 'named_id',
      components: { user_details: User, sidebar: Sidebar },
      props: { user_details: true, sidebar: false }
    }]
  },
  {
    path: '/user/:userId',
    name: 'user',
    component: User,
    props: true
  }];

var router = new VueRouter({
  routes: routes
});


var app = new Vue({
  store: store,
  router: router,
  data: {
    selectedUser: null,
    userList: [
      { userId: 123 },
      { userId: 456, userData: { age: 39, name: 'Patrick O\'Dacre' } }
    ]
  }
}).$mount('#app');

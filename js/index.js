'use strict';
const User = httpVueLoader('./js/user.vue');
const Sidebar = httpVueLoader('./js/sidebar.vue');
const UserList = httpVueLoader('./js/user-list.vue');
const NamedWrapper = httpVueLoader('./js/named.vue');


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    selectedUserId: null,
    userList: [
      { userId: 123 },
      { userId: 456, userData: { age: 39, name: 'Patrick O\'Dacre' } }
    ]
  },
  getters: {
    selectedUser(state) {
      return state.userList.find(user => user.userId === state.selectedUserId);
    },
    getUser: state => userId => {
      return state.userList.find(user => user.userId === userId);
    }
  },
  mutations: {
    selectUser(state, userId) {
      state.selectedUserId = userId;
    },
  }
});

/* Router and App setup: */
const routes = [{
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

const router = new VueRouter({
  routes: routes
});


const app = new Vue({
  store: store,
  router: router,
  computed: {
    userList() {
      return this.$store.state.userList;
    }
  }
}).$mount('#app');

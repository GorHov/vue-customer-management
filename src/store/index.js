import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    customers: [],
  },
  mutations: {
    SET_CUSTOMERS(state, customers) {
      state.customers = customers;
    }
  },
  actions: {
    fetchCustomers({ commit }) {
      const mockApiData = [
        { id: 1, name: 'John Doe', balance: 1000, tags: ['tag1', 'tag2'], createdAt: '2023-04-01' },
        { id: 2, name: 'Jane Smith', balance: 2000, tags: ['tag3', 'tag4'], createdAt: '2023-04-02' },
        { id: 3, name: 'Alice Johnson', balance: 1500, tags: ['tag5', 'tag6'], createdAt: '2023-04-03' },
        { id: 4, name: 'Bob Williams', balance: 3000, tags: ['tag7', 'tag8'], createdAt: '2023-04-04' },
        { id: 5, name: 'Emily Davis', balance: 2500, tags: ['tag9', 'tag10'], createdAt: '2023-04-05' },
        { id: 6, name: 'Michael Wilson', balance: 1800, tags: ['tag11', 'tag12'], createdAt: '2023-04-06' },
        { id: 7, name: 'Sophia Taylor', balance: 3500, tags: ['tag13', 'tag14'], createdAt: '2023-04-07' },
        { id: 8, name: 'Jacob Anderson', balance: 1200, tags: ['tag15', 'tag16'], createdAt: '2023-04-08' },
        { id: 9, name: 'Olivia Martinez', balance: 2800, tags: ['tag17', 'tag18'], createdAt: '2023-04-09' },
        { id: 10, name: 'William Clark', balance: 2200, tags: ['tag19', 'tag20'], createdAt: '2023-04-10' },
        { id: 11, name: 'Ava Rodriguez', balance: 1900, tags: ['tag21', 'tag22'], createdAt: '2023-04-11' },
        { id: 12, name: 'James Lee', balance: 4000, tags: ['tag23', 'tag24'], createdAt: '2023-04-12' },
        { id: 13, name: 'Mia Walker', balance: 1400, tags: ['tag25', 'tag26'], createdAt: '2023-04-13' },
        { id: 14, name: 'Benjamin Hall', balance: 3200, tags: ['tag27', 'tag28'], createdAt: '2023-04-14' },
        { id: 15, name: 'Charlotte Young', balance: 2700, tags: ['tag29', 'tag30'], createdAt: '2023-04-15' },
        { id: 16, name: 'Daniel King', balance: 2300, tags: ['tag31', 'tag32'], createdAt: '2023-04-16' },
        { id: 17, name: 'Harper Scott', balance: 1600, tags: ['tag33', 'tag34'], createdAt: '2023-04-17' },
        { id: 18, name: 'Alexander Green', balance: 3800, tags: ['tag35', 'tag36'], createdAt: '2023-04-18' },      
      ];

      setTimeout(() => {
        commit('SET_CUSTOMERS', mockApiData);
      }, 1000);
    },
  }
});

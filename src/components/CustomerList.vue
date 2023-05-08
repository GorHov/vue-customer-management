<template>
  <div class="container">
    <b-table 
      :data="paginatedCustomers"
      @sort="onSort"
      @click="showCustomerDetails"
      :loading="isLoading || customers.length === 0">
      <b-table-column label="ID" field="id" width="50" numeric>
        <template v-slot:header="{ column }">
            {{ column.label }}
        </template>
        <template v-slot="props">
          {{ props.row.id }}
        </template>
      </b-table-column>

      <b-table-column label="Name" field="name" centered sortable>
        <template v-slot:header="{ column }">
            {{ column.label }}
        </template>
        <template v-slot="props">
          {{ props.row.name }}
        </template>
      </b-table-column>

      <b-table-column label="Balance" field="balance" centered sortable>
        <template v-slot:header="{ column }">
            {{ column.label }}
        </template>
        <template v-slot="props">
          <BalanceView :balance="props.row.balance" />
        </template>
      </b-table-column>

      <b-table-column label="Tags" field="tags" centered>
        <template v-slot:header="{ column }">
          {{ column.label }}
        </template>
        <template v-slot="props">
          <ArraySortView v-model="props.row.tags" />
        </template>
      </b-table-column>

      <b-table-column label="Date" field="createdAt" centered sortable>
        <template v-slot:header="{ column }">
            {{ column.label }}
        </template>
        <template v-slot="props">
          {{ props.row.createdAt }}
        </template>
      </b-table-column>
    </b-table>

    <b-modal v-model="showDetailsModal" has-modal-card>
      <template v-if="selectedCustomer">
        <customer-details :customer="selectedCustomer" />
      </template>
    </b-modal>

    <nav class="pagination is-centered" role="navigation" aria-label="pagination">
      <ul class="pagination-list">
        <li v-for="page in totalPages" :key="page">
          <a
            class="pagination-link"
            :class="{ 'is-current': currentPage === page }"
            @click="changePage(page)"
          >
            {{ page }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CustomerDetails from './CustomerDetails.vue';
import BalanceView from './BalanceView.vue';
import ArraySortView from './ArraySortView.vue';

export default {
  name: 'CustomerList',
  components: {
    CustomerDetails,
    BalanceView,
    ArraySortView,
  },
  data() {
    return {
      currentPage: 1,
      perPage: 9,
      showDetailsModal: false,
      selectedCustomer: null,
      isLoading: false,
    };
  },
  computed: {
    ...mapState(['customers']),
    paginatedCustomers() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.customers.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.customers.length / this.perPage);
    },
  },
  methods: {
    ...mapActions(['fetchCustomers']),
    changePage(page) {
      this.currentPage = page;
    },
    showCustomerDetails(customer) {
      this.selectedCustomer = customer;
      this.showDetailsModal = true;
    },
    onSort(column) {
      if (column.field !== 'tags') {
        if (this.sortIcon === 'is-ascending') {
          this.sortIcon = 'is-descending';
          this.sortDesc = true;
        } else {
          this.sortIcon = 'is-ascending';
          this.sortDesc = false;
        }
      }
    },
  },
   created() {
    this.fetchCustomers();
  },
};
</script>
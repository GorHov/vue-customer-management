<template>
  <div class="modal-card">
    <section class="modal-card-body">
      <div class="content">
        <h4>Details</h4>
        <p><strong>ID:</strong> {{ customer.id }}</p>
        <p><strong>Name:</strong> {{ customer.name }}</p>
        <p><strong>Balance:</strong> <BalanceView :balance="customer.balance" /></p>
        <p><strong>Tags:</strong></p>
        <ArraySortView :value="customer.tags"/>
        <p><strong>Date:</strong> {{ customer.createdAt }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import BalanceView from './BalanceView.vue';
import ArraySortView from './ArraySortView.vue';

export default {
  name: 'CustomerDetails',
  components: {
    BalanceView,
    ArraySortView
  },
  props: {
    customer: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

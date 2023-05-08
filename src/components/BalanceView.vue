<template>
  <div>
    {{ formattedBalance }}
  </div>
</template>

<script>
import numeral from 'numeral';

export default {
  name: 'BalanceView',
  props: {
    balance: {
      type: Number,
      required: true,
    },
  },
  computed: {
    formattedBalance() {
      return numeral(this.balance).format('$0,0.00');
    },
  },
};
</script>

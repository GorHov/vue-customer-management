<template>
  <div>
    <draggable :list="value" :options="dragOptions" @end="updateValue">
      <div v-for="(tag, index) in value" :key="index">
        <b-tag type="is-info">
          {{ tag }}
        </b-tag>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  name: 'ArraySortView',
  components: {
    draggable,
  },
  props: {
    value: {
      type: Array,
      default: () => [],
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 150,
      };
    },
  },
};
</script>

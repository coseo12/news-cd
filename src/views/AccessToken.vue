<template>
  <div>
      account 정보 : {{ $store.state.tmp.account }}
  </div>
</template>

<script>
import ListMixin from '../mixins/ListMixin.js';

export default {
	mixins: [ListMixin],
};
</script>

<style>
</style>
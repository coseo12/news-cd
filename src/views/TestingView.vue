<template>
	<div>
		<div id="pagination" v-if="pagination">
			<pagination-example></pagination-example>
		</div>
		<div id="veeValidate" v-if="veeValidate">
			<vee-validate></vee-validate>
		</div>
	</div>
</template>

<script>
import PaginationExample from '../components/PaginationExample';
import VeeValidate from '../components/VeeValidate';

export default {
	components: {
		PaginationExample,
		VeeValidate,
	},
	data() {
		return {
			pagination: false,
			veeValidate: true,
		};
	},
};
</script>



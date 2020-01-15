<template>
	<div>
		<div id="pagination" v-if="pagination">
			<pagination-example></pagination-example>
		</div>
	</div>
</template>

<script>
import PaginationExample from '../components/PaginationExample';
export default {
	components: {
		PaginationExample,
	},
	data() {
		return {
			pagination: false,
		};
	},
};
</script>



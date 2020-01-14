<template>
	<div>
		<div id="pagination" v-if="pagination">
			<pagination-example></pagination-example>
		</div>
		<div id="googleMap" v-if="googleMap">
			<google-map></google-map>
		</div>
		<div id="kakaoMap" v-if="kakaoMap">
			<kakao-map></kakao-map>
		</div>
	</div>
</template>

<script>
import PaginationExample from '../components/PaginationExample';
import GoogleMap from '../components/GoogleMap';
import KakaoMap from '../components/KakaoMap';

export default {
	components: {
		PaginationExample,
		GoogleMap,
		KakaoMap,
	},
	data() {
		return {
			pagination: false,
			googleMap: false,
			kakaoMap: true,
		};
	},
};
</script>



<template>
	<div>
		<div class="lo">
			{{$t('message.hello')}}
			{{$t('message.jobs')}}
			{{$t('message.chart')}}
			{{$t('message.board')}}
		</div>
		<span class="btnContainer" @click="changeLocales">   
			<font-awesome-icon icon="exchange-alt" class="chgLo" /> LocaleChange
		</span>
	</div>
</template>

<script>
export default {
	methods: {
		changeLocales() {
			if (this.$i18n.locale === 'en') this.$i18n.locale = 'ko';
			else this.$i18n.locale = 'en';
		},
	},
};
</script>

<style scoped>
.lo {
	padding: 0.5rem;
	margin: 0.5rem;
}
.btnContainer {
	float: left;
	background: linear-gradient(to right, #42b983, #42b983);
	display: block;
	width: auto;
	margin: 0.5rem;
	padding: 0.5rem;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	cursor: pointer;
}
</style>
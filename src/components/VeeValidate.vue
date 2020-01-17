<template>
<div>
    <validation-provider name="even" rules="even" v-slot="{ errors }">
        <input v-model="value" type="number" placeholder="type something">
        <span>{{ errors[0] }}</span>
    </validation-provider>
    <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
        <input v-model="email" type="text">
        <span>{{ errors[0] }}</span>
    </ValidationProvider>
</div>
</template>

<script>
import Vue from 'vue';
import { ValidationProvider, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);

extend('even', {
	validate(value) {
		return value % 2 === 0;
	},
	message: 'The {_field_} field must have at least characters at most',
});

// No message specified.
extend('email', email);

// Override the default message.
extend('required', {
	...required,
	message: 'This field is required',
});

export default {
	data: () => ({
		value: '',
	}),
};
</script>
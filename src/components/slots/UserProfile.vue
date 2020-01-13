<template>
    <div>
        <section>
            <div class="user-container">
                <div>
                    <font-awesome-icon icon="user" class="userIcon" />
                </div>
                <div class="user-description">
                    <slot name="userName"></slot>
                    <div class="time-ago">
                        <slot name="time"></slot>
                        <slot name="karma"></slot>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.user-container {
	display: flex;
	align-items: center;
	padding: 0.5rem;
}
.userIcon {
	font-size: 2.5rem;
}
.user-description {
	padding: 8px;
}
.time-ago {
	font-size: 0.7rem;
}
.title,
.content {
	padding: 0.5rem;
}
</style>
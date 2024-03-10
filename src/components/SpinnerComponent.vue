<script>
export default {
    props: {
        type: {
            type: String,
            default: "def",
        },
        count: {
            type: Number,
            default: 1,
        },
    },
};
</script>
<template>
    <template v-if="type == 'def'">
        <div class="text-center">
            <div class="spinner-border text-dynamic" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </template>
</template>

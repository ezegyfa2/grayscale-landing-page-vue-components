<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            icon_type_class: {
                type: String
            },
            contact_type_name: {
                type: String
            },
            contact: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>

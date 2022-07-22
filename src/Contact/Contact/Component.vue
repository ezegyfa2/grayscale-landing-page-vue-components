<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            address_section: {
                type: Object
            },
            email_section: {
                type: Object
            },
            phone_section: {
                type: Object
            },
            icon_links_section: {
                type: Object
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>

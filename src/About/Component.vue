<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            image_url: {
                type: String
            },
            image_alt: {
                type: String,
                default() {
                    return '...'
                }
            },
            text_section: {
                type: Object
            }
        },
        watch: {
            text_section: {
                immediate: true,
                handler(newTextSection) {
                    newTextSection.data.color = 'white'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>

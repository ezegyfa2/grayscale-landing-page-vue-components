<script>
    import MediumWhite50TextContent from '../../../text-contents-vue-components/src/ColoredTextContents/MediumWhite50TextContent.vue'

    export default {
        mixins: [
            MediumWhite50TextContent
        ],
        props: {
            added_classes: {
                type: Object,
                default () {
                    return {
                        '.title': 'mb-4'
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
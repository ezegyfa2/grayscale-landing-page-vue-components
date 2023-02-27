<script>
    import LargeWhite50TextContent from '../../../text-contents-vue-components/src/ColoredTextContents/LargeWhite50TextContent.vue'

    export default {
        mixins: [
            LargeWhite50TextContent
        ],
        props: {
            added_classes: {
                type: Object,
                default () {
                    return{
                        '.title': 'text-uppercase'
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
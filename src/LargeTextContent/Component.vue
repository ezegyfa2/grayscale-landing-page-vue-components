<script>
    import LargeWhite50TextContent from '../../../text-contents-vue-components/src/ColoredTextContents/LargeWhite50TextContent.vue'

    export default {
        mixins: [
            LargeWhite50TextContent
        ],
        data() {
            return {
                addedClasses: {
                    '.title': 'text-uppercase'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
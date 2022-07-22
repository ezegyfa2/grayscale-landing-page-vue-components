<script>
    import MediumWhite50TextContent from '../../../text-contents-vue-components/src/ColoredTextContents/MediumWhite50TextContent.vue'

    export default {
        mixins: [
            MediumWhite50TextContent
        ],
        data() {
            return {
                addedClasses: {
                    '.title': 'mb-4'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
<script>
    import NavigationBar from '../../../../helper-vue-components/src/NavigationBar/CollapsableNavigationBar/Component.vue'

    export default {
        mixins: [
            NavigationBar
        ],
        props: {
            added_classes: {
                type: Object,
                default () {
                    return{
                        'root': 'navbar-light',
                        'container': [
                            'px-4',
                            'px-lg-5',
                        ],
                        'button.navbar-toggler': 'navbar-toggler-right'
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>

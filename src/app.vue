<template>
    <!-- App -->
    <div id="app">

        <!-- Statusbar -->
        <f7-statusbar></f7-statusbar>

        <!-- Main Views -->
        <f7-views tabs　navbar-through toolbar-through>

            <f7-view id="timeline" main tab active>
                <!-- Navbar -->
                <f7-navbar>
                    <f7-nav-left>
                        <f7-link icon="iconfont icon-xiangji1"></f7-link>
                    </f7-nav-left>
                    <f7-nav-center>{{title}}</f7-nav-center>
                    <f7-nav-right>
                        <f7-link icon="iconfont icon-pan" @click="newRecord"></f7-link>
                    </f7-nav-right>
                </f7-navbar>
                <!-- Pages -->
                <f7-pages>
                    <f7-page name="timeline">
                        <f7-timeline sides>
                            <f7-timeline-item day="21" month="DEC" inner content="Some text goes here"></f7-timeline-item>
                            <f7-timeline-item day="22" month="DEC" inner content="Another text goes here"></f7-timeline-item>
                            <f7-timeline-item day="22" month="DEC" inner content="Another text goes here"></f7-timeline-item>
                            <f7-timeline-item day="22" month="DEC" inner content="Another text goes here"></f7-timeline-item>
                            <f7-timeline-item day="22" month="DEC" inner content="Another text goes here"></f7-timeline-item>
                        </f7-timeline>

                        <!--<f7-fab color="pink" @click="doSomething">
                            <f7-icon icon="icon-plus"></f7-icon>
                        </f7-fab>-->

                        <f7-fab-speed-dial>
                            <!-- Actions -->
                            <f7-fab-actions>
                                <f7-fab-action color="pink" @click="onActionClick">A</f7-fab-action>
                                <f7-fab-action color="orange" @click="onActionClick">B</f7-fab-action>
                                <f7-fab-action color="green" @click="onActionClick">C</f7-fab-action>
                            </f7-fab-actions>
                            <!-- FAB -->
                            <f7-fab>
                                <!-- First icon to open Actions -->
                                <f7-icon icon="icon-plus"></f7-icon>
                                <!-- Second icon to close Actions -->
                                <f7-icon icon="icon-close"></f7-icon>
                            </f7-fab>
                        </f7-fab-speed-dial>
                    </f7-page>
                </f7-pages>
            </f7-view>
            <f7-view id="calendar" tab>
                <f7-navbar>
                    <f7-nav-left>
                        <f7-link icon="iconfont icon-xiangji1"></f7-link>
                    </f7-nav-left>
                    <f7-nav-center>日历</f7-nav-center>
                    <f7-nav-right>
                        <f7-link icon="iconfont icon-pan" @click="newRecord"></f7-link>
                    </f7-nav-right>
                </f7-navbar>
            </f7-view>
            <f7-view id="chat" tab>
                <f7-navbar>
                    <f7-nav-left>
                        <f7-link icon="iconfont icon-xiangji1"></f7-link>
                    </f7-nav-left>
                    <f7-nav-center>悄悄话</f7-nav-center>
                    <f7-nav-right>
                        <f7-link icon="iconfont icon-pan" @click="newRecord"></f7-link>
                    </f7-nav-right>
                </f7-navbar>

                <f7-timeline horizontal col="33" tablet-col="15">
                    <!-- Year -->
                    <f7-timeline-year title="2016">
                        <!-- Month -->
                        <f7-timeline-month title="November">
                            <f7-timeline-item date="1">...</f7-timeline-item>
                            <f7-timeline-item date="30">...</f7-timeline-item>
                        </f7-timeline-month>
                        <!-- Another Month -->
                        <f7-timeline-month title="December">
                            <f7-timeline-item date="1">...</f7-timeline-item>
                            <f7-timeline-item date="31">...</f7-timeline-item>
                        </f7-timeline-month>
                    </f7-timeline-year>

                    <!-- Another Year -->
                    <f7-timeline-year title="2017">
                        <f7-timeline-month title="January">
                            <f7-timeline-item date="1">...</f7-timeline-item>
                            <f7-timeline-item date="30">...</f7-timeline-item>
                        </f7-timeline-month>
                    </f7-timeline-year>
                </f7-timeline>
            </f7-view>
            <f7-view id="setting" tab>
                <f7-navbar>
                    <f7-nav-left>
                        <f7-link icon="iconfont icon-xiangji1"></f7-link>
                    </f7-nav-left>
                    <f7-nav-center>设置</f7-nav-center>
                    <f7-nav-right>
                        <f7-link icon="iconfont icon-pan" @click="newRecord"></f7-link>
                    </f7-nav-right>
                </f7-navbar>

                <f7-page>
                    <f7-block-title>Welcome to my App</f7-block-title>
                    <f7-block inner>
                        <p>Duis sed erat ac eros ultrices pharetra id ut tellus. Praesent rhoncus enim ornare ipsum aliquet ultricies. Pellentesque sodales erat quis elementum sagittis.</p>
                    </f7-block>
                    <f7-block-title>Navigation</f7-block-title>
                    <f7-list>
                        <f7-list-item link="/about/" title="About"></f7-list-item>
                        <f7-list-item link="/form/" title="Form"></f7-list-item>
                        <f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="Dynamic Route"></f7-list-item>
                        <f7-list-item link="/data-binding/" title="data-binding"></f7-list-item>
                        <f7-list-item link="/data-binding-edit/" title="data-binding-edit"></f7-list-item>
                        <f7-list-item link="/lists/users" title="users"></f7-list-item>
                        <f7-list-item link="/lists/goods" title="goods"></f7-list-item>
                        <f7-list-item link="/lists/cats" title="cats"></f7-list-item>
                        <f7-list-item link="/lists/dicts" title="dicts"></f7-list-item>
                    </f7-list>
                    <f7-block-title>Side Panels</f7-block-title>
                    <f7-block>
                        <f7-grid>
                            <f7-col width="50">
                                <f7-button open-panel="left">Left Panel</f7-button>
                            </f7-col>
                            <f7-col width="50">
                                <f7-button open-panel="right">Right Panel</f7-button>
                            </f7-col>
                        </f7-grid>
                    </f7-block>
                    <f7-block-title>Modals</f7-block-title>
                    <f7-block>
                        <f7-grid>
                            <f7-col width="50">
                                <f7-button open-popup="#popup">Popup</f7-button>
                            </f7-col>
                            <f7-col width="50">
                                <f7-button open-login-screen="#login-screen">Login Screen</f7-button>
                            </f7-col>
                        </f7-grid>
                    </f7-block>
                </f7-page>
            </f7-view>
            <f7-toolbar tabbar labels bottom>
                <f7-link icon="iconfont icon-timeline1" tab-link="#timeline" active></f7-link>
                <f7-link icon="iconfont icon-rili" tab-link="#calendar"></f7-link>
                <f7-link icon="iconfont icon-icon15" tab-link="#chat"></f7-link>
                <f7-link icon="iconfont icon-shezhi" tab-link="#setting"></f7-link>
            </f7-toolbar>
        </f7-views>

        <!-- Popup -->
        <f7-popup id="popup">
            <f7-view navbar-fixed>
                <f7-pages>
                    <f7-page>
                        <f7-navbar title="Popup">
                            <f7-nav-right>
                                <f7-link close-popup>Close</f7-link>
                            </f7-nav-right>
                        </f7-navbar>
                        <f7-block>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto.
                            Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque
                            ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.
                        </f7-block>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-popup>

        <!-- <f7-swiper pagination next-button prev-button scrollbar>
             <f7-swiper-slide>Slide 111</f7-swiper-slide>
             <f7-swiper-slide>Slide 2222</f7-swiper-slide>
             <f7-swiper-slide>Slide 3333</f7-swiper-slide>
         </f7-swiper>-->

        <!-- Login Screen -->
        <f7-login-screen id="login-screen">
            <f7-view>
                <f7-pages>
                    <f7-page login-screen>
                        <f7-login-screen-title>Login</f7-login-screen-title>
                        <f7-list form>
                            <f7-list-item>
                                <f7-label>Username</f7-label>
                                <f7-input name="username" placeholder="Username" type="text"></f7-input>
                            </f7-list-item>
                            <f7-list-item>
                                <f7-label>Password</f7-label>
                                <f7-input name="password" type="password" placeholder="Password"></f7-input>
                            </f7-list-item>
                        </f7-list>
                        <f7-list>
                            <f7-list-button title="Sign In" close-login-screen></f7-list-button>
                            <f7-list-label>
                                <p>Click Sign In to close Login Screen</p>
                            </f7-list-label>
                        </f7-list>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-login-screen>

    </div>
</template>
<style scoped>
    .navbar-inner a {
        color: #929292
    }

    .navbar-inner .center {
        color: #007aff
    }
</style>
<script type="text/babel">
    export default {
        data: function () {
            return {
                //title: this.$store.state.title
            };
        },
        methods: {
            newRecord(){
                this.$store.dispatch('setTitle', "哈俣");
                console.log("Hello");
            },
            doSomething(){
                console.log("OK");
            }
    },
    computed: {
        title()
        {
            return this.$store.state.title
        }
    },
    created:function () {

        /* window.f7.swiper('#swiper', {
         pagination: '.swiper-pagination',
         });*/
    }
    }
</script>

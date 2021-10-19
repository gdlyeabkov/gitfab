<template>
    <div>
        <Header />
        <div>
            <div>
                <div class="repoHeader">
                    <div class="repoHeaderItem aboutRepo">
                        <span class="material-icons">
                            markunread_mailbox
                        </span>
                        <span class="repoAuthor">
                            glebDyakov
                        </span>
                        <span class="repoName">
                            / mynewrepository
                        </span>
                        <span class="repoAccess">
                            Public
                        </span>
                    </div>
                    <div class="repoHeaderItem">
                        <button class="repoBtn btn btn-light">
                            <span class="material-icons-outlined">
                                visibility
                            </span>
                            <span>
                                unwatch
                            </span>
                            <span class="material-icons">
                                arrow_drop_down
                            </span>
                            <span>
                                1
                            </span>
                        </button>
                        <button class="repoBtn btn btn-light">
                            <span class="material-icons-outlined">
                                star_outline
                            </span>
                            <span>
                                star
                            </span>
                            <span>
                                1
                            </span>
                        </button>
                        <button class="repoBtn btn btn-light">
                            <span class="material-icons">
                                device_hub
                            </span>
                            <span>
                                fork
                            </span>
                            <span>
                                0
                            </span>
                        </button>
                    </div>
                </div>
                <div class="repoActions">
                    <div class="repoActionsItem">
                        <span class="material-icons-outlined">
                            code
                        </span>
                        <span>
                            Code
                        </span>
                    </div>
                    <div class="repoActionsItem">
                        <span class="material-icons-outlined">
                            adjust
                        </span>
                        <span>
                            Issues
                        </span>
                    </div>
                    <div class="repoActionsItem">
                        <span class="material-icons">
                            device_hub
                        </span>
                        <span>
                            Pull requests
                        </span>
                    </div>
                    <div class="repoActionsItem">
                        <span class="material-icons">
                            play_circle_outline
                        </span>
                        <span>
                            Actions
                        </span>
                    </div>
                    <div class="repoActionsItem">
                        <span class="material-icons-outlined">
                            insert_chart_outlined
                        </span>
                        <span>
                            Projects
                        </span>
                    </div>
                    <div class="repoActionsItem">
                        <span class="material-icons-outlined">
                            menu_book
                        </span>
                        <span>
                            Wiki
                        </span>
                    </div>
                    <div class="repoActionsItem">
                        <span class="material-icons">
                            warning_amber
                        </span>
                        <span>
                            Security
                        </span>
                    </div>
                    <div class="repoActionsItem">
                        <span class="material-icons">
                            stacked_line_chart
                        </span>
                        <span>
                            Insights
                        </span>
                    </div>
                    <div class="repoActionsItem">
                        <span class="material-icons-outlined">
                            settings
                        </span>
                        <span>
                            Settings
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <div class="repoMetaInfo">
                            <button class="btn btn-light repoBtn">
                                <span class="material-icons">
                                    device_hub
                                </span>
                                <span>
                                    master
                                </span>
                                <span class="material-icons">
                                    arrow_drop_down
                                </span>
                            </button>
                            <button class="btn btn-light repoBtn">
                                <span class="material-icons">
                                    device_hub
                                </span>
                                <span>
                                    1
                                </span>
                                <span>
                                    branch
                                </span>
                            </button>
                            <button class="btn btn-light repoBtn">
                                <span class="material-icons">
                                    lock_open
                                </span>
                                <span>
                                    0
                                </span>
                                <span>
                                     tags
                                </span>
                            </button>
                        </div>
                        <div class="repoMetaInfo">
                            <button class="btn btn-light repoBtn">
                                <span>
                                    Go to file
                                </span>
                            </button>
                            <button class="btn btn-light repoBtn">
                                <span>
                                    Add file
                                </span>
                                <span class="material-icons">
                                    arrow_drop_down
                                </span>
                            </button>
                            <button class="btn btn-success repoBtn">
                                <span>
                                    Code
                                </span>
                                <span class="material-icons">
                                    arrow_drop_down
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div>
                <div>
                    <span>
                        about
                    </span>
                    <span>
                        Настройки
                    </span>
                </div>
                <span>
                    vuejs
                </span>
                <hr />
                <span>
                    Releases
                </span>
                <span>
                    No releases published
                </span>
                <span>
                    Create a new release
                </span>
                <hr />
                <span>
                    Packages
                </span>
                <span>
                    No packages published
                </span>
                <span>
                    Publish your first package
                </span>
                <hr />
                <span>
                    Languages
                </span>
                <hr />
                <div>
                    <div class="language">
                        <div class="marker">
                        </div>
                        <span>
                            Html
                        </span>
                        <span>
                            73.7%
                        </span>
                    </div>
                    <div class="language">
                        <div class="marker">
                        </div>
                        <span>
                            Vue.js
                        </span>
                        <span>
                            26.3%
                        </span>
                    </div>
                </div>

            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
    name: "Repo",
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
    
    .repoAuthor {
        color: rgb(0, 0, 255);
    }

    .repoName {
        color: rgb(0, 0, 255);
        font-weight: bolder;
    }

    .repoAccess {
        border-radius: 35px;
        border: 1px solid rgb(200, 200, 200);
        padding: 2px 10px;
        font-size: 10px;
    }

    .repoHeaderItem {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .repoBtn {
        margin: 15px;
        height: 35px;
        width: 200px;
        border: 1px solid rgb(150, 150, 150);
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .repoHeader {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .repoActions {
        display: flex;
        justify-content: space-around;
        width: 75%;
        margin: auto;
    }
    
    .repoActionsItem {
        display: flex;
        justify-content: space-around;
    }

    .repoActionsItem > span {
        margin: 0px 2px;
    }

    .aboutRepo {
        width: 25%;
    }

    .repoMetaInfo {
        display: flex;
    }

</style>
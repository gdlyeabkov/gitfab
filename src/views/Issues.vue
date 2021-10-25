<template>
<div>
    <Header />
    <div>
        <div class="pullRequestsBlock">
            <div class="pullRequestsFilters">
                <input placeholder="Filters" type="text" class="form-control w-50" />
                <button class="btn btn-light">
                    <span>
                        Labels
                    </span>
                    <span>
                        9
                    </span>
                    <span>
                        Milestones
                    </span>
                    <span>
                        0
                    </span>
                </button>
                <button class="btn btn-success">
                    New issue
                </button>
            </div>
            <div class="pullRequestData">
                <span class="material-icons-outlined">
                    device_hub
                </span>
                <span class="pullRequestDataHeader">
                    Welcome to issues!
                </span>
                <span class="pullRequestDataContent">
                    Issues are used to track todos, bugs, feature requests, and more. As issues are created, they’ll appear here in a searchable and filterable list. To get started, you should 
                    <span class="createBtn">
                        create an issue.
                    </span>
                </span>
            </div>
            <p class="proTipRow">
                <span class="material-icons-outlined">
                    tungsten
                </span>
                <span class="proTip">
                    ProTip!
                </span>
                    What’s not been updated in a month: 
                <span class="pullRequestsUpdated">
                    updated: 2021-09-21.
                </span>
            </p>    
        </div>
    </div>
    <Footer />
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Issues',
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
    
    .pullRequestsBlock {
        margin-top: 50px;
    }

    .pullRequestsFilters {
        display: flex;
        justify-content: space-around;
    }

    .pullRequestData {
        box-sizing: border-box;
        padding: 25px;
        margin: 35px auto;
        height: 350px;
        width: 75%;
        border: 1px solid rgb(215, 215, 215);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .pullRequestDataHeader {
        font-weight: bolder;
    }

</style>
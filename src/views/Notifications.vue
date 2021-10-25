<template>
<div>
    <Header />
    <div>
        <div class="total">
            <div class="aside">
                <span>
                    Inbox
                </span>
                <span>
                    Saved
                </span>
                <span>
                    Done
                </span>
                <hr />
                <span>
                    Filters
                </span>
                <span>
                    🎯 Assigned
                </span>
                <span>
                    💬 Participating
                </span>
                <span>
                    ✋ Mentioned
                </span>
                <span>
                    🙌 Team mentioned
                </span>
                <span>
                    👀 Review requested
                </span>
                <hr />
                <span>
                    Manage notifications
                </span>
            </div>
            <div class="main">
                <div class="mainHeader">
                    <button class="btn btn-light">
                        All
                    </button>
                    <button class="btn btn-light">
                        Unread
                    </button>
                    <input type="text" placeholder="Filter notifications" class="form-control w-50">
                    <button class="btn btn-light">
                        Group by Date
                    </button>
                </div>
                <div class="clutter">
                    <span class="material-icons">
                        dashboard
                    </span>
                    <div>
                        <span>
                            Clear out the clutter
                        </span>
                        <span>
                            Get the most out of your new inbox by quickly and easily marking all of your previously read notifications as done.
                        </span>
                    </div>
                    <button class="btn btn-light">
                        Dismiss
                    </button>
                    <button class="btn btn-success">
                        Get stared
                    </button>
                </div>
                <div class="notificationsPicture">
                    <h4>
                        All caught up!
                    </h4>
                    <span>
                        Take a break, write some code, do what you do best.
                    </span>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Notifications',
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
    
    .total {
        display: flex;
    }

    .aside {
        display: flex;
        flex-direction: column;
        width: 25%;
    }

    .main {
        display: flex;
        flex-direction: column;
        width: 65%;
    }

    .mainHeader {
        display: flex;
    }

    .clutter > * {
        margin: 5px;
    }
    
    .clutter {
        border: 1px solid rgb(175, 175, 175);
        border-radius: 8px;
        width: 85%;
        height: 175px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 25px;
    }

    .notificationsPicture {
        background-image: url('https://github.githubassets.com/images/modules/notifications/inbox-zero.svg');
        background-size: 100% 100%;
        height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    }

</style>
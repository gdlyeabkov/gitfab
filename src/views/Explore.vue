<template>
<div>
    <Header />
    <div class="total">
        <div class="aside">
            <div class="asideBox">
                <div class="asideColumn">
                    <div class="logo">
                        Г
                    </div>
                    <span>
                        gdlyeabkov
                    </span>
                </div>
                <hr />
                <div class="asideRow">
                    <span>
                        0 starred topics
                    </span>
                </div>
                <hr />
                <div class="asideRow">
                    <span>
                        0 started repositories
                    </span>
                </div>
            </div>   
        </div>
        <div class="main">
            <div class="tabs">
                <span @click="activeTab = 'explore'" :class="{ activeTab: activeTab.includes('explore') }">
                    Explore
                </span>
                <span @click="activeTab = 'topics'" :class="{ activeTab: activeTab.includes('topics') }">
                    Topics
                </span>
                <span @click="activeTab = 'trending'" :class="{ activeTab: activeTab.includes('trending') }">
                    Trending
                </span>
                <span @click="activeTab = 'collections'" :class="{ activeTab: activeTab.includes('collections') }">
                    Collections
                </span>
                <span @click="activeTab = 'events'" :class="{ activeTab: activeTab.includes('events') }">
                    Events
                </span>
                <span @click="activeTab = 'gitfab sponsors'" :class="{ activeTab: activeTab.includes('gitfab sponsors') }">
                    GitFab Sponsors
                </span>
            </div>
        </div>
        <div class="article">
            <button class="btn btn-light">
                Get email updates
            </button>
        </div>
    </div>
    <Footer />
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Explore',
    data(){
        return {
            activeTab: 'explore'
        }
    },
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
    
    .aside {
        width: 20%;
        margin: 15px;
        display: flex;
        flex-direction: column;
    }

    .main {
        margin: 15px;
        width: 40%;
    }

    .article {
        width: 20%;
        margin: 15px;
    }

    .total {
        display: flex;
        justify-content: space-between;
    }

    .asideBox {
        box-sizing: border-box;
        padding: 25px;
        width: 275px;
        height: 275px;
        border: 1px solid rgb(200, 200, 200);
        border-radius: 8px;
    }

    .asideRow {
        display: flex;
    }

    .asideRow > span {
        font-weight: bolder;
        color: rgb(0, 0, 215);
    }

    .asideColumn {
        display: flex;
        flex-direction: column;
    }

    .asideColumn > span {
        font-size: 24px;
        color: rgb(75, 75, 75);
    }

    .logo {
        font-size: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        width: 75px;
        height: 75px;
        background-color: rgb(0, 155, 0);
        color: rgb(255, 255, 255);    
    }

    .tabs > span {
        color: rgb(75, 75, 75);
        margin: 10px;
        cursor: pointer;
    }

    .activeTab {
        font-weight: bolder;
        color: rgb(0, 0, 0) !important;
        text-decoration: underline;
        text-underline-offset: 20px;
        text-decoration-color: rgb(0, 0, 255);
    }

</style>
<template>
<div>
    <Header />
    <div class="main">
        <div class="avatarRow">
            <div class="avatarBlock">
                <div class="avatar">
                    Г
                </div>
                <div class="avatarInfo">
                    <span class="gitfaber">
                        gdlyeabkov
                    </span>
                    <span>
                        Your personal account
                    </span>
                </div>
            </div>    
            <button class="goToYourPersonalProfile btn btn-light">
                Go to your personal profile
            </button>
        </div>
        <div class="totalContainer">
            <div class="asideMenu">
                <div class="asideMenuItem">
                    Account settings
                </div>
                <div class="asideMenuItem">
                    Profile
                </div>
                <div class="asideMenuItem">
                    Account
                </div>
                <div class="asideMenuItem">
                    Appearance
                </div>
                <div class="asideMenuItem">
                    Account security
                </div>
                <div class="asideMenuItem">
                    Billing & plans
                </div>
                <div class="asideMenuItem">
                    Security log
                </div>
                <div class="asideMenuItem">
                    Security & analysis
                </div>
                <div class="asideMenuItem">
                    Sponsorship log
                </div>
                <div class="asideMenuItem">
                    Emails
                </div>
                <div class="asideMenuItem">
                    Notifications
                </div>
                <div @click="activeTab = 'scheduled reminders'" :class="{ asideMenuItem: true, asideMenuActiveItem: activeTab.includes('repositories') }">
                    Scheduled reminders
                </div>
                <div class="asideMenuItem">
                    SSH and GPG keys
                </div>
                <div @click="activeTab = 'repositories'" :class="{ asideMenuItem: true, asideMenuActiveItem: activeTab.includes('repositories') }">
                    Repositories
                </div>
                <div @click="activeTab = 'packages'" :class="{ asideMenuItem: true, asideMenuActiveItem: activeTab.includes('packages') }">
                    Packages
                </div>
                <div @click="activeTab = 'organizations'" :class="{ asideMenuItem: true, asideMenuActiveItem: activeTab.includes('organizations') }">
                    Organizations
                </div>
                <div class="asideMenuItem">
                    Saved replies
                </div>
                <div class="asideMenuItem">
                    Applications
                </div>
            </div>
            <div v-if="activeTab.includes('scheduled reminders')" class="article">
                <h4>
                    Scheduled reminders
                </h4>
                <hr />
                <hr />
            </div>
            <div v-else-if="activeTab.includes('repositories')" class="article">
                <h4>
                    Repository default branch
                </h4>
                <hr />
                <span>
                    Choose the default branch for your new personal repositories. You might want to change the default name due to different workflows, or because your integrations still require “master” as the default branch name. You can always change the default branch name on individual repositories. Learn more about default branches.
                </span>
                <div class="reposRow">
                    <input type="text" class="form-control w-50" />
                    <button class="btn btn-light turnBtn">
                        Update
                    </button>
                </div>
                <h4>
                    Repositories
                </h4>
                <hr />
                <div class="reposTable">
                    <div class="reposTableHeader">
                        <div>
                            <span class="material-icons">
                                delete
                            </span>
                            <span>
                                Repositories
                            </span>
                        </div>
                        <div>
                            <span class="material-icons">
                                delete
                            </span>
                            <span>
                                Deleted repositories
                            </span>
                        </div>
                    </div>        
                    <div class="reposTableHeader">
                        <div class="reposTableAuthor">
                            <span>
                                gdlyeabkov
                            </span>
                        </div>
                    </div>
                    <div v-for="repo in repos" :key="repo.name">
                        <hr />
                        <div class="currentRepo">
                            <span class="material-icons-outlined">
                                lock
                            </span>
                            <span class="linkable">
                                {{ gitfaber.email }}/{{ repo.name }}
                            </span>
                            <span>
                                1.82 MB
                            </span>
                            <div class="collaboratorsBlock">
                                <span class="material-icons-outlined">
                                    group
                                </span>
                                <span class="linkable">
                                    0 collaborators
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="activeTab.includes('packages')" class="article">
                <h4>
                    Deleted Packages
                </h4>
                <span>
                    These are packages that have been previously deleted belonging to you. You can restore a package deleted within the last 30 days.
                </span>
                <input type="text" placeholder="Search deleted packages" class="form-control w-75">
                <div class="packages">
                    No recoverable packages were found for {{ gitfaber.email }}.
                </div>
            </div>
            <div v-else-if="activeTab.includes('organizations')" class="article">
                <h4>
                    Organizations
                </h4>
                <h6 class="transformAccount">
                    You are not a member of any organizations.
                </h6>
                <h4>
                    Transform account
                </h4>
                <hr />
                <button class="turnBtn btn btn-light w-50">
                    Turn glebDyakov into an organization
                </button>
            </div>
        </div>     
    </div>
    <Footer />
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import * as jwt from 'jsonwebtoken'

export default {
    name: 'Settings',
    data(){
        return {
            activeTab: 'profile',
            gitfaber: {},
            repos: [],
            token: window.localStorage.getItem("gitfabtoken")
        }
    },
    mounted(){
        jwt.verify(this.token, 'gitfabsecret', (err, decoded) => {
            if(err) {
                this.$router.push({ name: 'StartPage' })
            } else {
                fetch(`http://localhost:4000/api/gitfabers/get/?gitfaberemail=${decoded.gitfaberemail}`, {
                    mode: 'cors',
                    method: 'GET'
                }).then(response => response.body).then(rb  => {
                    const reader = rb.getReader()
                    return new ReadableStream({
                    start(controller) {
                        function push() {
                        reader.read().then( ({done, value}) => {
                            if (done) {
                            console.log('done', done);
                            controller.close();
                            return;
                            }
                            controller.enqueue(value);
                            console.log(done, value);
                            push();
                        })
                        }
                        push();
                    }
                    });
                }).then(stream => {
                    return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
                })
                .then(result => {
                    console.log(`JSON.parse(result): ${JSON.parse(result)}`)
                    if(JSON.parse(result).status.includes('OK')){
                        this.gitfaber = JSON.parse(result).gitfaber
                        this.repos = JSON.parse(result).repos
                    }
                })
            }
        })
    },
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
    
    .main {
        margin: auto;
        width: 85%;
        display: flex;
        flex-direction: column;
    }

    .goToYourPersonalProfile {
        border: 1px solid rgb(200, 200, 200);
        height: 35px;
        align-self: center;
        font-size: 10px;
    }

    .avatarRow {
        display: flex;
        justify-content: space-between;
    }

    .gitfaber {
        font-weight: bolder;
    }

    .avatarInfo {
        display: flex;
        flex-direction: column;
    }

    .avatar {
        color: rgb(255, 255, 255);
        background-color: rgb(0, 150, 0);
        border-radius: 100%;
        width: 45px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bolder;
    }

    .avatarBlock {
        display: flex;
    }
    
    .avatarBlock > * {
        margin: 10px;
    }

    .asideMenu {
        display: flex;
        flex-direction: column;
        border: 1px solid rgb(150, 150, 150);
        width: 25%;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 15px;
    }

    .asideMenuItem {
        border-bottom: 1px solid rgb(150, 150, 150);
        margin: 5px 0px;
        cursor: pointer;
    }

    .totalContainer {
        display: flex;
    }

    .article {
        width: 70%;
        margin-left: 50px;
    }

    .transformAccount {
        text-align: center;
        width: 100%;
    }

    .turnBtn {
        border: 1px solid rgb(200, 200, 200);
        align-self: center;
        font-weight: bolder;
    }

    .asideMenuActiveItem {
        font-weight: bolder;
    }

    .reposRow {
        display: flex;
    }

    .reposRow > * {
        margin: 5px;
    }

    .reposTable {
        border: 1px solid rgb(200, 200, 200);
        border-radius: 8px;
        background-color: rgb(255, 255, 255);
        display: flex;
        flex-direction: column;
    }

    .reposTableHeader {
        box-sizing: border-box;
        padding: 10px;
        display: flex;
        border-bottom: 1px solid rgb(200, 200, 200);
        background-color: rgb(235, 235, 235);
    }

    .reposTableHeader > * {
        display: flex;
        align-items: center;
        margin: 10px;
    }

    .reposTableHeader > * > * {
        margin: 5px;
    }

    .currentRepo { 
        display: flex;
        height: 50px;
        box-sizing: border-box;
        padding: 10px;
    }

    .currentRepo > * {
        margin: 5px;
    } 

    .linkable {
        color: rgb(0, 0, 255);
        cursor: pointer;
    }

    .collaboratorsBlock {
        display: flex;
        align-items: center;
    }

    .packages {
        box-sizing: border-box;
        padding: 15px;
        width: 75%;
        height: 125px;
        border-radius: 8px;
        background-color: rgb(255, 255, 255);
        border: 1px solid rgb(200, 200, 200);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 15px 0px;
    }

</style>
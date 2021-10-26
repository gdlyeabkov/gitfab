<template>
    <div class ="header">
        <div class="headerItem headerLeftItem">
            <img @click="$router.push({ name: 'Main' })" class="logo" width="100px" src="https://repository-images.githubusercontent.com/124369770/d12e6800-b47a-11e9-85a3-5fe53e198d49" alt="">
            <input @blur="searchKeywords = ''" v-model="searchKeywords" type="text" placeholder="Search or jump to..." class="searcher form-control">
            <span  @click="$router.push({ name: 'PullRequests' })">
                Pull requests
            </span>
            <span @click="$router.push({ name: 'Issues' })">
                Issues
            </span>
            <span @click="$router.push({ name: 'Marketplace' })">
                Marketplace
            </span>
            <span @click="$router.push({ name: 'Explore' })">
                Explore
            </span>
        </div>
        <div class="headerItem">
            <span @click="$router.push({ name: 'Notifications' })" @mouseenter="togglerNotificationContextMenu = true" @mouseleave="togglerNotificationContextMenu = false" id="notificationContextMenu" class="toggler material-icons">
                notifications
            </span>
            <span @click="togglerAddContextMenu = true" id="addContextMenu" class="toggler material-icons">
                add
            </span>
            <span @click="togglerAddContextMenu = true" id="addContextMenu" class="logo material-icons">
                arrow_drop_down
            </span>
            <div @click="togglerContextMenu = true" id="mainContextMenu" class="avatar">
                Г
            </div>
            <span @click="togglerContextMenu = true" id="mainContextMenu" class="logo material-icons">
                arrow_drop_down
            </span>
        </div>
        <div v-if="togglerContextMenu" class="contextMenu">
            <span>
                Signed in as
            </span>
            <span class="gitfaber">
                {{ gitfaber.email }}
            </span>
            <hr />
            <span @click="$router.push({ name: 'Status' })">
                Set status
            </span>
            <hr />
            <span @click="$router.push({ name: 'Home' })">
                Your profile
            </span>
            <span @click="gotoRepositories()">
                Your repositories
            </span>
            <span @click="$router.push({ name: 'CodeSpaces' })">
                Your codespaces
            </span>
            <span @click="$router.push({ name: 'Projects' })">
                Your projects
            </span>
            <span @click="$router.push({ name: 'Stars' })">
                Your stars
            </span>
            <span @click="$router.push({ name: 'Gists' })">
                Your gists
            </span>
            <hr />
            <span @click="$router.push({ name: 'Upgrade' })">
                Upgrade
            </span>
            <span @click="togglerFeaturePreview = true">
                Feature preview
            </span>
            <span @click="$router.push({ name: 'Help' })">
                Help
            </span>
            <span @click="$router.push({ name: 'Settings' })">
                Settings
            </span>
            <hr />
            <span @click="signOut()">
                Sign out
            </span>
        </div>
        <div v-if="togglerAddContextMenu" class="addContextMenu">
            <span @click="$router.push({ name: 'RepoRegister' })">
                New repository
            </span>
            <span @click="$router.push({ name: 'RepoImporter' })">
                Import repository
            </span>
            <span @click="$router.push({ name: 'GistRegister' })">
                New gist
            </span>
            <span @click="$router.push({ name: 'OrganiczationPlans' })">
                New organization
            </span>
            <span @click="$router.push({ name: 'ProjectRegister' })">
                New project
            </span>
        </div>
        <div v-if="togglerNotificationContextMenu" class="notificationsContextMenu">
            <span @click="$router.push({ name: 'Gists' })">
                Your have no unread notifications
            </span>
        </div>
        <div v-if="searchKeywords.length >= 1" class="searchAutoComplete">
            <div v-for="repo in repos.filter((repo) => {
                return repo.name.toLowerCase().includes(searchKeywords.toLowerCase()) 
            })" :key="repo.name" @click="$router.push({ name: 'Repo', query: { repoid: repo._id } })" class="autocompleteRow">
                <span >
                
                    {{ repo.name }}
                </span>
                <hr />
            </div>
        </div>
        <div v-if="togglerFeaturePreview" class="featurePreviewAlertBackdrop">
            <div class="featurePreviewAlert">
                <div class="featurePreviewAlertHeader">
                    <span class="featurePreviewAlertHeaderItem">
                        Feature preview
                    </span>
                    <span @click="togglerFeaturePreview = false" class="material-icons-outlined featurePreviewAlertHeaderCloser">
                        close
                    </span>
                </div>
                <div class="featurePreviewAlertBody">
                    <div class="featurePreviewAlertBodyAside">
                        <div class="featurePreviewAlertBodyAsideRow">
                            <span class="material-icons-outlined">
                                visibility_off
                            </span>
                            <span>
                                Colorbind themes
                            </span>
                        </div>
                    </div>
                    <div class="featurePreviewAlertBodyArticle">
                        <div class="featurePreviewAlertBodyArticleHeader">
                            <h6>
                                Colorblind Themes
                            </h6>
                            <button class="enableBtn btn btn-light">
                                Enable
                            </button>
                        </div>
                        <img class="featurePreviewAlertBodyArticleImg" width="100%" src="https://user-images.githubusercontent.com/54012/135328369-4dda43b2-977d-4071-9837-100c8a029010.png" alt="">
                        <span>
                            Color blindness affects up to 8% of people in the world, with a majority impacted by the red/green color spectrum. This new theme swaps colors like red and green across github.com for orange and blue to make GitHub more inclusive for colorblind users.
                        </span>
                        <span class="feedback">
                            Give feedback
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as jwt from 'jsonwebtoken'

export default {
    name: 'Header',
    data(){
        return {
            gitfaber: {},
            repos: [],
            searchKeywords: '',
            togglerContextMenu: false,
            togglerAddContextMenu: false,
            togglerNotificationContextMenu: false,
            togglerFeaturePreview: false,
            token: window.localStorage.getItem("gitfabtoken")
        }
    },
    emits: [
        "gotoRepositories"
    ],
    mounted(){
        jwt.verify(this.token, 'gitfabsecret', (err, decoded) => {
            if(err) {
                this.$router.push({ name: 'StartPage' })
            } else {
                // fetch(`https://gitfabric.herokuapp.com/api/gitfabers/get/?gitfaberemail=${decoded.gitfaberemail}`, {
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
                        console.log(`repos: ${this.repos.length}`)
                        
                        document.body.addEventListener("click", (event) => {                        
                            if(!event.target.id.includes('mainContextMenu'))
                                this.togglerContextMenu = false
                            if(!event.target.id.includes('addContextMenu'))
                                this.togglerAddContextMenu = false
                            if(!event.target.id.includes('notificationContextMenu'))
                                this.togglerNotificationContextMenu = false
                            
                        })
                    }
                })
            }
        })
    },
    methods: {
        gotoRepositories(){
            this.$emit('gotoRepositories')
        },
        signOut(){
            jwt.sign({
                gitfaberemail: "this.email"
                }, 'gitfabsecret', { expiresIn: '5m' })
                localStorage.removeItem('gitfabtoken')            
            this.$router.push({ name: "StartPage" })
        }
    }
}
</script>

<style scoped>
    
    .header {
        color: rgb(255, 255, 255);
        background-color: rgb(0, 0, 0);
        height: 50px;
        display: flex;
        justify-content: space-around;
    }
    
    .avatar {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        width: 25px;
        height: 25px;
        background-color: rgb(0, 155, 0);
    }

    .headerItem {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .headerLeftItem {
        width: 50%;
    }

    .headerLeftItem > span {
        font-weight: bolder;
        font-size: 12px;
        cursor: pointer;
    }

    .searcher {
        background-color: rgb(0, 0, 0);
        height: 30px;
        border: 1px solid rgb(125, 125, 125);
        width: 225px;
    }

    .searcher:focus {
        background-color: rgb(255, 255, 255);
    }

    .contextMenu {
        color: rgb(0, 0, 0);
        box-shadow: 0 0 10px rgb(150, 150, 150);
        border-radius: 10px;
        box-sizing: border-box;
        padding: 15px;
        width: 250px;
        height: 500px;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        top: 45px;
        left: 975px;
        background-color: rgb(255, 255, 255);
        z-index: 5;
    }

    .addContextMenu {
        color: rgb(0, 0, 0);
        box-shadow: 0 0 10px rgb(150, 150, 150);
        border-radius: 10px;
        box-sizing: border-box;
        padding: 15px;
        width: 200px;
        height: 200px;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        top: 45px;
        left: 975px;
        background-color: rgb(255, 255, 255);
        z-index: 5;
    }

    .notificationsContextMenu {
        color: rgb(255, 255, 255);
        box-shadow: 0 0 10px rgb(150, 150, 150);
        border-radius: 10px;
        box-sizing: border-box;
        padding: 15px;
        width: 350px;
        height: 25px;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        top: 45px;
        left: 765px;
        background-color: rgb(0, 0, 0);
        z-index: 5;
    }

    .gitfaber {
        font-weight: bolder;
        font-size: 12px;
    }

    .contextMenu > span, .addContextMenu > span, .notificationsContextMenu > span {
        cursor: pointer;
    }

    .toggler {
        cursor: pointer;
    }

    .searchAutoComplete {
        position: absolute;
        top: 38px;
        left: 265px;
        border: 1px solid rgb(235, 235, 235);
        box-shadow: 0 0 10px rgb(175, 175, 175);
        background-color: rgb(255, 255, 255);
        width: 225px;
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
        min-height: 25px;
        color : rgb(0, 0, 0);
        display: flex;
        flex-direction: column;
        z-index: 5;
    }

    .autocompleteRow {
        box-sizing: border-box;
        padding: 15px;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        width: 100%;
        
    }

    .autocompleteRow:hover {
        background-color: rgb(0, 0, 255);
        color: rgb(255, 255, 255);
    }

    .autocompleteRow:last-child {
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
    }

    .logo {
        cursor: pointer;
    }

    .featurePreviewAlertBackdrop {
        color: rgb(0, 0, 0);
        position: fixed;
        /* top: calc(50% - 25%);
        left: calc(50% - 25%); */
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.7);
    }
    
    .featurePreviewAlert {
        overflow: hidden;
        background-color: rgb(250, 250, 250);
        border-radius: 8px;
        border: 1px solid rgb(200, 200, 200);
        width: 75%;
        height: 350px;
    }

    .featurePreviewAlertHeader {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 15px;
        height: 50px;
        border-bottom: 1px solid rgb(150, 150, 150);
    }

    .featurePreviewAlertBody {
        display: flex;
        width: 100%;
        height: calc(100% - 50px);
    }

    .featurePreviewAlertBodyAside {
        display: flex;
        flex-direction: column;
        width: 35%;
        border-right: 1px solid rgb(200, 200, 200);
    }

    .featurePreviewAlertBodyAsideRow {
        color: rgb(255, 255, 255);
        display: flex;
        align-items: center;
        height: 75px;
        background-color: rgb(0, 100, 255);
    }

    .featurePreviewAlertBodyAsideRow > * {
        margin: 5px;
        align-self: center;
    }

    .featurePreviewAlertBodyArticle {
        width: 65%;
        overflow-y: scroll;
        box-sizing: border-box;
        padding: 15px;
    }
    
    .featurePreviewAlertBodyArticleHeader {
        display: flex;
        justify-content: space-between;
    }

    .featurePreviewAlertBodyArticleImg {
        margin: 25px 0px;
    }

    .featurePreviewAlertHeaderCloser {
        font-size: 18px;
        cursor: pointer;
    }

    .featurePreviewAlertHeaderCloser:hover {
        color: rgb(0, 100, 255);
    }

    .feedback {
        cursor: pointer;
        color: rgb(0, 100, 255);
        font-weight: bolder;
    }

    .enableBtn {
        font-weight: bolder;
        border: 1px solid rgb(150, 150, 150);
    }

    .featurePreviewAlertHeaderItem {
        font-weight: bolder;    
    }

</style>
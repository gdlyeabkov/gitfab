<template>
    <div class ="header">
        <div class="headerItem headerLeftItem">
            <img class="logo" width="100px" src="https://repository-images.githubusercontent.com/124369770/d12e6800-b47a-11e9-85a3-5fe53e198d49" alt="">
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
            <span @click="togglerNotificationContextMenu = true" id="notificationContextMenu" class="toggler material-icons">
                notifications
            </span>
            <span @click="togglerAddContextMenu = true" id="addContextMenu" class="toggler material-icons">
                add
            </span>
            <span class="material-icons">
                arrow_drop_down
            </span>
            <div @click="togglerContextMenu = true" id="mainContextMenu" class="avatar">
                Г
            </div>
            <span class="material-icons">
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
            <span @click="$router.push({ name: 'Profile' })">
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
            <span @click="$router.push({ name: 'FeaturePreview' })">
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
            <span @click="$router.push({ name: 'Status' })">
                Import repository
            </span>
            <span @click="$router.push({ name: 'Profile' })">
                New gist
            </span>
            <span @click="$router.push({ name: 'Repos' })">
                New organization
            </span>
            <span @click="$router.push({ name: 'CodeSpaces' })">
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

</style>
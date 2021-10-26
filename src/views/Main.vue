<template>
    <div>
        <Header />
        <div class="main">
            <div class="aside">
                <div class="reposRow">
                    <span>
                        Repositories
                    </span>
                    <button @click="$router.push({ name: 'RepoRegister' })" class="btn btn-success w-25">
                        <span class="newRepoIcon material-icons">
                            import_contacts
                        </span>
                        New
                    </button>
                </div>
                <input placeholder="Find a repository..." type="text" class="repoSearch form-control w-75">
                <!-- <div class="repoRow">
                    <div class="logo">
                        Г
                    </div>
                    <span>
                        gdlyeabkov / reponame
                    </span>
                </div>
                <div class="repoRow">
                    <div class="logo">
                        Г
                    </div>
                    <span>
                        gdlyeabkov / reponame
                    </span>
                </div>
                <div class="repoRow">
                    <div class="logo">
                        Г
                    </div>
                    <span>
                        gdlyeabkov / reponame
                    </span>
                </div>
                <div class="repoRow">
                    <div class="logo">
                        Г
                    </div>
                    <span>
                        gdlyeabkov / reponame
                    </span>
                </div>
                <div class="repoRow">
                    <div class="logo">
                        Г
                    </div>
                    <span>
                        gdlyeabkov / reponame
                    </span>
                </div>
                <div class="repoRow">
                    <div class="logo">
                        Г
                    </div>
                    <span>
                        gdlyeabkov / reponame
                    </span>
                </div>
                <div class="repoRow">
                    <div class="logo">
                        Г
                    </div>
                    <span>
                        gdlyeabkov / reponame
                    </span>
                </div> -->
                <div v-for="repo in repos.filter((repo, repoIdx) => {
                    return repoIdx <= countOfShowedRepos
                })" :key="repo.name" class="repoRow">
                    <div class="logo">
                        Г
                    </div>
                    <span @click="$router.push({ name: 'Repo', query: { repoid: repo._id } })" class="repoLink">
                        {{ repo.gitfaber }} / {{ repo.name }}
                    </span>
                </div>
                <span v-if="repos.length > countOfShowedRepos" @click="countOfShowedRepos += 7" class="showMoreRepos recentActivityDesc">
                    Show more
                </span>
                <hr />
                <span class="recentActivity">
                    Recent activity
                </span>
                <span class="recentActivityDesc">
                    When you take actions across GitFab, we’ll provide links to that activity here.
                </span>
            </div>
            <div class="article">
                <div class="articleBlocks">
                    <div class="learnGit">
                        <span class="learnGitHeader">
                            Learn Git and GitHub without any code!
                        </span>
                        <span>
                            Using the Hello World guide, you’ll create a repository, start a branch, write comments, and open a pull request.
                        </span>
                        <div class="btns">
                            <button class="btn btn-success w-50">
                                Read the guide
                            </button>
                            <button @click="$router.push({ name: 'RepoRegister' })" class="btn btn-light w-25">
                                Start a project
                            </button>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
            <div class="articleRightBlocks">
                    <div class="articleRightBlock">
                        <div class="articleRightBlockHeader">
                            <span class="material-icons">
                                campaign
                            </span>
                            <span>
                                Universe schedule is now live
                            </span>
                            <span class="material-icons">
                                close
                            </span>
                        </div>
                        <span class="articleRightBlockContent">
                            Join us virtually on Oct. 27 and 28 (PDT). Check out sessions across Security, DevOps, Developer Productivity, and Communities. Register to start building your customized Universe schedule.
                        </span>
                        <button class="btn btn-light">
                            Save your seat for free
                        </button>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'

import * as jwt from 'jsonwebtoken'

export default {
    name: 'Main',
    data(){
        return {
            gitfaber: {
                repos: []
            },
            repos: [],
            countOfShowedRepos: 6,
            token: window.localStorage.getItem("gitfabtoken")
        }
    },
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
                    console.log(`JSON.parse(result): ${JSON.parse(result).gitfaber}`)
                    if(JSON.parse(result).status.includes('OK')){
                        this.gitfaber = JSON.parse(result).gitfaber
                        this.repos = JSON.parse(result).repos
                    }
                })
            }
        })
    },
    components: {
        Header
    }
}
</script>

<style scoped>
    .main {
        display: flex;
        
    }

    .article {
        width: 45%;
        box-sizing: border-box;
        padding: 25px;
    }
    
    .aside {
        width: 30%;
        border-right: 1px solid rgb(215, 215, 215);
        box-sizing: border-box;
        padding: 15px;
    }

    .reposRow {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
    }

    .reposRow > span {
        font-weight: bolder;
        margin: 15px;
    }
    
    .reposRow > button {
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .repoSearch {
        margin: auto;
        background-color: rgb(235, 235, 235);
    }

    .repoRow {
        display: flex;

    }

    .repoRow > * {
        margin: 10px;
    }

    .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        width: 25px;
        height: 25px;
        background-color: rgb(0, 155, 0);
        color: rgb(255, 255, 255);
    }

    .learnGit {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 25px;
        border: 1px solid rgb(225, 225, 225);
        border-radius: 8px;
        background-color: rgb(200, 255, 200);
        height: 250px;
        width: 100%;
    }

    .articleBlocks {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .btns > button {
        margin: 15px;
    }

    .learnGitHeader {
        font-weight: bolder;
    }

    .articleRightBlock {
        box-sizing: border-box;
        padding: 25px;
        border: 1px solid rgb(200, 200, 200);
        border-radius: 8px;
        margin: 15px;
    }

    .articleRightBlocks {
        width: 25%;
    }

    .articleRightBlockHeader {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .articleRightBlockContent {
        font-size: 10px;
    }

    .recentActivity {
        font-weight: bolder;
        display: block;
    }

    .recentActivityDesc {
        color: rgb(100, 100, 100);
        font-size: 12px;
    }

    .newRepoIcon {
        margin: 0px 5px;
    }

    .repoLink {
        cursor: pointer;
    }

    .repoLink:hover {
        text-decoration: underline;
    }

    .showMoreRepos {
        cursor: pointer;
    }

</style>
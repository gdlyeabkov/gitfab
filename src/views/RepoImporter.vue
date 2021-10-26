<template>
    <div :style="`background-color: ${this.gitfaber.appearance.includes('light default') ? 'rgb(255, 255, 255)' : this.gitfaber.appearance.includes('dark default') ? 'rgb(0, 0, 0)' : this.gitfaber.appearance.includes('dark dimmed') ? 'rgb(100, 100, 100)' : this.gitfaber.appearance.includes('dark high contrast') ? 'rgb(175, 175, 175)' : this.gitfaber.appearance.includes('dark colorblind') ? 'rgb(200, 200, 200)' : this.gitfaber.appearance.includes('light colorblind') ? 'rgb(235, 235, 235)' : 'rgb(255, 255, 255)'}; color: ${this.gitfaber.appearance.includes('light default') ? 'rgb(0, 0, 0)' : this.gitfaber.appearance.includes('dark default') ? 'rgb(255, 255, 255)' : this.gitfaber.appearance.includes('dark dimmed') ? 'rgb(215, 215, 215)' : this.gitfaber.appearance.includes('dark high contrast') ? 'rgb(125, 125, 125)' : this.gitfaber.appearance.includes('dark colorblind') ? 'rgb(75, 75, 75)' : this.gitfaber.appearance.includes('light colorblind') ? 'rgb(150, 150, 150)' : 'rgb(0, 0, 0)'};`">
        <Header />
        <div class="createRepoForm">
            <h4>
                Import your project to GitFab
            </h4>
            <span>
                Import all the files, including the revision history, from another version control system.
            </span>
            <hr />
            <h4>
                Your old repository’s clone URL
            </h4>
            <input v-model="oldRepoLink" placeholder="https://svn.example.org/code/svn" type="text" class="form-control w-75">
            <span>
                Learn more about the types of 
                <span class="importRepo">
                    supported VCS
                </span>
                <h4>
                    Your new repository details
                </h4>
            </span>
            <div class="repoLabels">
                <span class="repoLabel">
                    Owner *
                </span>
                <span class="repoLabel">
                    Repository name *
                </span>
            </div>
            <div class="repoLabels">
                <input v-model="gitfaber.email" :disabled="true" type="text" class="form-control w-25">
                <span class="separator">
                    /
                </span>
                <input v-model="name" type="text" class="form-control w-25">
            </div>
            <div class="accessRow">
                <input v-model="access" :value="'Public'" name="access" type="radio" >
                <span class="material-icons">
                    note
                </span>
                <div class="accessColumn">
                    <span class="repoAccess">
                        Public
                    </span>
                    <span>
                        Anyone on the internet can see this repository. You choose who can commit.
                    </span>
                </div>
            </div>
            <div class="accessRow">
                <input name="access" v-model="access" :value="'Private'" type="radio" >
                <span class="material-icons">
                    lock_open
                </span>
                <div class="accessColumn">
                    <span class="repoAccess">
                        Private
                    </span>
                    <span>
                        You choose who can see and commit to this repository.
                    </span>
                </div>
            </div>
            <div class="accessRow">
                <span class="importRepo">
                    Cancel
                </span>
                <button :disabled="name.length <= 0" @click="createRepo()" class="btn btn-success">
                    Begin import
                </button>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import * as jwt from 'jsonwebtoken'
const ip = require("ip")

export default {
    name: 'RepoRegister',
    data(){
        return {
            gitfaber: {
                email: ''
            },
            name: '',
            oldRepoLink: '',
            access: 'Public',
            addReadme: false,
            addGitIngore: false,
            chooseALicense: false,
            errors: '',
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
                    }
                })
            }
        })
    },
    methods: {
        createRepo(){
            // fetch(`https://gitfabric.herokuapp.com/api/repos/create/?gitfaberemail=${this.gitfaber.email}&reponame=${this.name}&repodescription=${this.description}&repoaccess=${this.access}&addreadme=${this.addReadme}&addgitignore=${this.addGitIngore}&choosealicense=${this.chooseALicense}`, {
            fetch(`http://localhost:4000/api/repos/create/?gitfaberemail=${this.gitfaber.email}&reponame=${this.name}&repodescription=${this.description}&repoaccess=${this.access}&addreadme=${this.addReadme}&addgitignore=${this.addGitIngore}&choosealicense=${this.chooseALicense}&ip=${ip.address()}`, {
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
                    this.$router.push({ name: 'Home' })
                } else if(JSON.parse(result).status.includes('Error')){
                    this.errors = 'Такого гитфабера нет'
                }
            })
        }
    },
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
    
    .createRepoForm {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 60%;
        margin: auto;
    }

    .importRepo {
        cursor: pointer;
        color: rgb(0, 0, 255);
    }

    .repoLabels {
        margin: 5px 0px;
        display: flex;
        width: 100%;
    }

    .repoLabel {
        margin: 0px 75px;
        font-weight: bolder;
    }

    .repoLabels > input {
        margin: 0px 25px;
    }

    .separator {
        font-weight: bolder;
        font-size: 24px;
    }

    .repoAccess {
        font-weight: bolder;
    }

    .accessColumn {
        display: flex;
        flex-direction: column;
    }

    .accessRow {
        display: flex;
        align-items: center;
    }

    .accessRow > * {
        margin: 5px 15px;
    }

</style>
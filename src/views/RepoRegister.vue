<template>
    <div>
        <Header />
        <div class="createRepoForm">
            <h4>
                Create a new repository
            </h4>
            <span>
                A repository contains all project files, including the revision history. Already have a project repository elsewhere? 
                <span class="importRepo">
                    Import a repository.
                </span>
            </span>
            <hr />
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
            <span>
                Great repository names are short and memorable. Need inspiration? How about curly-waddle?
            </span>
            <span>
                Description (optional)
            </span>
            <input v-model="description" type="text" class="form-control w-75">
            <hr />
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
            <hr />
                <h6>
                    Initialize this repository with:
                </h6>
                <p>
                    Skip this step if you’re importing an existing repository.
                </p>
            <hr />
            <div class="accessRow">
                <input v-model="addReadme" type="checkbox" >
                <div class="accessColumn">
                    <span class="repoAccess">
                        Add a README file
                    </span>
                    <span>
                        This is where you can write a long description for your project. Learn more.
                    </span>
                </div>
            </div>
            <div class="accessRow">
                <input v-model="addGitIngore" type="checkbox" >
                <div class="accessColumn">
                    <span class="repoAccess">
                        Add .gitignore
                    </span>
                    <span>
                        Choose which files not to track from a list of templates. Learn more.
                    </span>
                </div>
            </div>
            <div class="accessRow">
                <input v-model="chooseALicense" type="checkbox" >
                <div class="accessColumn">
                    <span class="repoAccess">
                        Choose a license
                    </span>
                    <span>
                        A license tells others what they can and can't do with your code. Learn more.
                    </span>
                </div>
            </div>
            <hr />
            <button :disabled="name.length <= 1" @click="createRepo()" class="btn btn-success">
                Create repository
            </button>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import * as jwt from 'jsonwebtoken'

export default {
    name: 'RepoRegister',
    data(){
        return {
            gitfaber: {
                email: ''
            },
            name: '',
            description: '',
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
            fetch(`https://gitfabric.herokuapp.com/api/gitfabers/get/?gitfaberemail=${decoded.gitfaberemail}`, {
            // fetch(`http://localhost:4000/api/gitfabers/get/?gitfaberemail=${decoded.gitfaberemail}`, {
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
        })
    },
    methods: {
        createRepo(){
            fetch(`https://gitfabric.herokuapp.com/api/repos/create/?gitfaberemail=${this.gitfaber.email}&reponame=${this.name}&repodescription=${this.description}&repoaccess=${this.access}&addreadme=${this.addReadme}&addgitignore=${this.addGitIngore}&choosealicense=${this.chooseALicense}`, {
            // fetch(`http://localhost:4000/api/repos/create/?gitfaberemail=${this.gitfaber.email}&reponame=${this.name}&repodescription=${this.description}&repoaccess=${this.access}&addreadme=${this.addReadme}&addgitignore=${this.addGitIngore}&choosealicense=${this.chooseALicense}`, {
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
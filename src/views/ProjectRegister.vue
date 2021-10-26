<template>
    <div :style="`background-color: ${this.gitfaber.appearance.includes('light default') ? 'rgb(255, 255, 255)' : this.gitfaber.appearance.includes('dark default') ? 'rgb(0, 0, 0)' : this.gitfaber.appearance.includes('dark dimmed') ? 'rgb(100, 100, 100)' : this.gitfaber.appearance.includes('dark high contrast') ? 'rgb(175, 175, 175)' : this.gitfaber.appearance.includes('dark colorblind') ? 'rgb(200, 200, 200)' : this.gitfaber.appearance.includes('light colorblind') ? 'rgb(235, 235, 235)' : 'rgb(255, 255, 255)'}; color: ${this.gitfaber.appearance.includes('light default') ? 'rgb(0, 0, 0)' : this.gitfaber.appearance.includes('dark default') ? 'rgb(255, 255, 255)' : this.gitfaber.appearance.includes('dark dimmed') ? 'rgb(215, 215, 215)' : this.gitfaber.appearance.includes('dark high contrast') ? 'rgb(125, 125, 125)' : this.gitfaber.appearance.includes('dark colorblind') ? 'rgb(75, 75, 75)' : this.gitfaber.appearance.includes('light colorblind') ? 'rgb(150, 150, 150)' : 'rgb(0, 0, 0)'};`">
        <Header />
        <div class="createRepoForm">
            <h4>
                Create a new project
            </h4>
            <span>
                Coordinate, track, and update your work in one place, so projects stay transparent and on schedule.
            </span>
            <hr />
            <h6>
                Project board name
            </h6>
            <input v-model="name" placeholder="Project board name" type="text" class="form-control w-75">
            <h6>
                Description
                <span>
                    (optional)
                </span>
            </h6>
            <textarea v-model="description" class="projectDesc form-control w-75">

            </textarea>
            <h6>
                Project template
            </h6>
            <span>
                Save yourself time with a pre-configured project board template.
            </span>
            <button class="btn btn-light">
                Template: None
            </button>
            <h6>
                Visibility
            </h6>
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
            <h6>
                Linked repositories
            </h6>
            <span>
                Search {{ gitfaber.email }} to link repositories to this project for more accurate suggestions and better search results.
            </span>
            <input placeholder="Search by repository name" type="text" class="form-control w-5">
            <span>
                Linked repositories: None yet!
            </span>
            <hr/>
            <div class="accessRow">
                <button :disabled="name.length <= 0" @click="createProject()" class="btn btn-success">
                    Create project
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
            description: '',
            template: 'None',
            access: 'Public',
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
        createProject(){
            // fetch(`https://gitfabric.herokuapp.com/api/repos/create/?gitfaberemail=${this.gitfaber.email}&reponame=${this.name}&repodescription=${this.description}&repoaccess=${this.access}&addreadme=${this.addReadme}&addgitignore=${this.addGitIngore}&choosealicense=${this.chooseALicense}`, {
            fetch(`http://localhost:4000/api/projects/create/?gitfaberemail=${this.gitfaber.email}&projectname=${this.name}&projectdescription=${this.description}&projecttemplate=${this.template}&projectaccess=${this.access}&ip=${ip.address()}`, {
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

    .projectDesc {
        height: 200px;
    }

</style>
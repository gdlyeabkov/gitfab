<template>
    <div :style="`background-color: ${this.gitfaber.appearance.includes('light default') ? 'rgb(255, 255, 255)' : this.gitfaber.appearance.includes('dark default') ? 'rgb(0, 0, 0)' : this.gitfaber.appearance.includes('dark dimmed') ? 'rgb(100, 100, 100)' : this.gitfaber.appearance.includes('dark high contrast') ? 'rgb(175, 175, 175)' : this.gitfaber.appearance.includes('dark colorblind') ? 'rgb(200, 200, 200)' : this.gitfaber.appearance.includes('light colorblind') ? 'rgb(235, 235, 235)' : 'rgb(255, 255, 255)'}; color: ${this.gitfaber.appearance.includes('light default') ? 'rgb(0, 0, 0)' : this.gitfaber.appearance.includes('dark default') ? 'rgb(255, 255, 255)' : this.gitfaber.appearance.includes('dark dimmed') ? 'rgb(215, 215, 215)' : this.gitfaber.appearance.includes('dark high contrast') ? 'rgb(125, 125, 125)' : this.gitfaber.appearance.includes('dark colorblind') ? 'rgb(75, 75, 75)' : this.gitfaber.appearance.includes('light colorblind') ? 'rgb(150, 150, 150)' : 'rgb(0, 0, 0)'};`">
        <Header />
        <div class="createRepoForm">
            <h4>
                Instantly share code, notes, and snippets.
            </h4>
            <hr />
            <input v-model="description" placeholder="Gist description" type="text" class="form-control w-75">
            <div v-for="file in files" :key="file.id" class="gistFile">
                <div class="gistFileHeader">
                    <input v-model="file.name" placeholder="Filename including extension" type="text" class="form-control w-50">
                    <span @click="files = files.filter((currentFile, currentFileIdx) => {
                        return file.id !== currentFile.id
                    })" class="gistFileDelete material-icons">
                        delete
                    </span>
                    <button class="gistSelector btn bnt-light">
                        Spaces
                    </button>
                    <button class="gistSelector btn bnt-light">
                        2
                    </button>
                    <button class="gistSelector btn bnt-light">
                        Nowrap
                    </button>
                </div>
                <textarea v-model="file.content" class="form-control gistFileCcntent">

                </textarea>
            </div>
            <div class="accessRow">
                <button @click="files.push({
                    id: files.length + 1,
                    name: '',
                    content: '',
                    indentMode: 'spaces',
                    indentSize: 2,
                    lineWrapMode: 'No wrap',
                })" class="gistSelector btn btn-light">
                    Add file
                </button>
                <button @click="createSecretGist()" class="btn btn-success">
                    Create secret gist
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
    name: 'GistRegister',
    data(){
        return {
            gitfaber: {
                email: ''
            },
            description: '',
            files: [
                {
                    id: 1,
                    name: '',
                    content: '',
                    indentMode: 'spaces',
                    indentSize: 2,
                    lineWrapMode: 'No wrap',
                }
            ],
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
        createSecretGist(){
            // fetch(`https://gitfabric.herokuapp.com/api/repos/create/?gitfaberemail=${this.gitfaber.email}&reponame=${this.name}&repodescription=${this.description}&repoaccess=${this.access}&addreadme=${this.addReadme}&addgitignore=${this.addGitIngore}&choosealicense=${this.chooseALicense}`, {
            fetch(`http://localhost:4000/api/gists/create/?gitfaberemail=${this.gitfaber.email}&gistdescription=${this.description}&gistfilesnames=${this.files.flatMap((file) => file.name).join(',')}&gistfilescontents=${this.files.flatMap((file) => file.content).join(',')}&ip=${ip.address()}`, {
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

    .gistFile {
        margin: 25px 0px;
        width: 100%;
        border-radius: 8px;
    }
    
    .gistFileHeader {
        align-items: center;
        box-sizing: border-box;
        padding: 15px;
        border-radius: 8px 8px 0px 0px;
        background-color: rgb(245, 245, 245);
        border: 1px solid rgb(225, 225, 225);
        width: 100%;
        display: flex;
        justify-content: space-between
    }

    .gistSelector {
        border: 1px solid rgb(170, 170, 170);
    }
    
    .gistFileCcntent {
        border-radius: 0px 0px 8px 8px;
        height: 250px;
    }

    .gistFileDelete {
        cursor: pointer;
    }

</style>
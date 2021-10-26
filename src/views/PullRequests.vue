<template>
<div>
    <Header />
    <div>
        <div class="pullRequestsBlock">
            <div class="pullRequestsFilters">
                <div class="btns">
                    <button class="btn btn-primary">
                        Created
                    </button>
                    <button class="btn btn-light">
                        Assigned
                    </button>
                    <button class="btn btn-light">
                        Mentioned
                    </button>
                    <button class="btn btn-light">
                        Review requests
                    </button>
                </div>
                <input :placeholder="`is:open is:issue author:${gitfaber.email} or archived:false`" type="text" class="form-control w-50" />
            </div>
            <div class="pullRequestData">
                <div class="pullRequestDataBlockHeader">
                    <div>
                        <span class="material-icons">
                            adjust
                        </span>
                        <span>
                            0 Open
                        </span>
                        <span class="material-icons">
                            done
                        </span>
                        <span>
                            0 Closed
                        </span>
                    </div>
                    <div>
                        <span>
                            Visibility
                        </span>
                        <span>
                            Organization
                        </span>
                        <span>
                            Sort
                        </span>
                    </div>
                </div>
                <span class="material-icons">
                    adjust
                </span>
                <span class="pullRequestDataHeader">
                    No results matched your search.
                </span>
                <span class="pullRequestDataContent">
                    You could search 
                    <span class="linkable">
                        all of GitHub
                    </span>
                     or try an 
                    <span class="linkable">
                        advanced search
                    </span>
                    .
                </span>
            </div>
            <p class="proTipRow">
                <span class="material-icons-outlined">
                    tungsten
                </span>
                <span class="proTip">
                    ProTip!
                </span>
                    Exclude your own issues with 
                <span class="pullRequestsUpdated">
                    -author:{{ gitfaber.email }}.
                </span>
            </p>    
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
    name: 'Issues',
    data(){
        return {
            gitfaber: {

            },
            repos: [
                
            ],
            token: window.localStorage.getItem("gitfabtoken")
        }
    },
    mounted(){
        jwt.verify(this.token, 'gitfabsecret', (err, decoded) => {
            if(err) {
            this.$router.push({ name: 'StartPage' })
            } else {
            // fetch(`https://gitfabric.herokuapp.com/api/repos/get/?repoid=${this.$route.query.repoid}`, {
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
                        this.repos = JSON.parse(result).repos
                        this.gitfaber = JSON.parse(result).gitfaber
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
    
    .pullRequestsBlock {
        margin-top: 50px;
    }

    .pullRequestsFilters {
        display: flex;
        justify-content: space-around;
    }

    .pullRequestData > * {
        box-sizing: border-box;
        padding: 25px;
        display: flex;
        /* flex-direction: column; */
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .pullRequestData {
        margin: 35px auto;
        height: 350px;
        width: 75%;
        border: 1px solid rgb(215, 215, 215);
        border-radius: 8px;
    }

    .pullRequestDataHeader {
        font-weight: bolder;
    }

    .linkable {
        cursor: pointer;
        color: rgb(0, 0, 255);
    }

    .proTipRow {
        text-align: center;
    }

    .pullRequestsUpdated {
        color: rgb(0, 0, 255);
    }

    .btns > button {
        margin: 0px 5px;
        border: 1px solid rgb(200, 200, 200);
        font-weight: bolder;
    }

    .pullRequestDataBlockHeader {
        background-color: rgb(230, 230, 230);
        border-radius: 8px 8px 0px 0px;
        height: 50px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

</style>
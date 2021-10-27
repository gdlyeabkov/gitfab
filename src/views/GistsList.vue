<template>
  <div :style="`background-color: ${this.gitfaber.appearance.includes('light default') ? 'rgb(255, 255, 255)' : this.gitfaber.appearance.includes('dark default') ? 'rgb(0, 0, 0)' : this.gitfaber.appearance.includes('dark dimmed') ? 'rgb(100, 100, 100)' : this.gitfaber.appearance.includes('dark high contrast') ? 'rgb(175, 175, 175)' : this.gitfaber.appearance.includes('dark colorblind') ? 'rgb(200, 200, 200)' : this.gitfaber.appearance.includes('light colorblind') ? 'rgb(235, 235, 235)' : 'rgb(255, 255, 255)'}; color: ${this.gitfaber.appearance.includes('light default') ? 'rgb(0, 0, 0)' : this.gitfaber.appearance.includes('dark default') ? 'rgb(255, 255, 255)' : this.gitfaber.appearance.includes('dark dimmed') ? 'rgb(215, 215, 215)' : this.gitfaber.appearance.includes('dark high contrast') ? 'rgb(125, 125, 125)' : this.gitfaber.appearance.includes('dark colorblind') ? 'rgb(75, 75, 75)' : this.gitfaber.appearance.includes('light colorblind') ? 'rgb(150, 150, 150)' : 'rgb(0, 0, 0)'};`">
    <Header @gotoRepositories="gotoRepositoriesHandler" />
    <div style="display: flex;">
      <div style="width: 350px; margin: 0px 75px;">

      </div>
      <div style="width: calc(100% - 340px); display: flex; justify-content: space-between;">
        <div @click="activeTab = 'all gists'" class="tabItem">
          <span class="material-icons">
            code
          </span>
          <span class="tab" :style="`${ activeTab.includes('all gists') ? 'text-decoration: underline; text-decoration-color: rgb(255, 150, 0); text-decoration-thickness: 3px; text-underline-offset: 20px; font-weight: bolder;' : '' }`" >
            All gists 0
          </span>
        </div>
      </div>
    </div>
    <hr />
    <div style="display: flex;">
      <div class="avatarAside">
        <div @click="$router.push({ name: 'Settings' })" style="cursor: pointer; color: rgb(255, 255, 255);  font-size: 128px; display: flex; align-items: center; justify-content: center; border-radius: 100%; background-color: rgb(0, 150, 0); width: 300px; height: 300px; margin: 0px 75px;">
          Г
        </div>
        <span>
          {{ gitfaber.email }}
        </span>
        <button class="btn btn-light w-75">
          Edit profile
        </button>
      </div>
      <div v-if="activeTab.includes('all gists')" style="width: calc(100% - 175px);" class="gistsContainer">
        <div v-if="gists.length >= 1">
          <div v-for="gist in gists" :key="gist">
            <div class="gist">
              <span class="gistDescription">
                {{ gist.description }}
              </span>
              <div v-if="gists.length >= 1">
                <div v-for="gistFile in gist.files" :key="gistFile" class="gistFile">
                  <span class="gistFileName">
                    {{ gistFile.name }}
                  </span>
                  <span class="gistFileContent">
                    {{ gistFile.content }}
                  </span>
                </div>
              </div>
              <div v-else>
                <span>
                  Current gist haven't attached files
                </span>
              </div>  
            </div>
            <hr />
          </div>
        </div>
        <div v-else>
          <h4>
            You don’t have any gists yet.
          </h4>
          <p>
            Your public gists will show up here on your profile. Create a gist to get started.
          </p>
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
  name: 'Home',
  data(){
    return {
      activeTab: 'all gists',
      gitfaber: {
        repos: []
      },
      repos: [],
      gists: [],
      needRepos: '',
      token: window.localStorage.getItem("gitfabtoken")
    }
  },
  mounted(){
    jwt.verify(this.token, 'gitfabsecret', (err, decoded) => {
      if(err) {
        this.$router.push({ name: 'StartPage' })
      } else {
        if(this.$route.query.activetab !== null && this.$route.query.activetab !== undefined) {
          this.activeTab = this.$route.query.activetab
        }
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
            this.gists = JSON.parse(result).gists
          }
        })
      }
    })
  },
  methods: {
    gotoRepositoriesHandler(){
      this.activeTab = 'repositories'
    },
    addStar(repoId){
      // fetch(`https://gitfabric.herokuapp.com/api/stars/add/?repoid=${repoId}`, {
      fetch(`http://localhost:4000/api/stars/add/?repoid=${repoId}`, {
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
  
  .tabItem {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .tab {
    margin: 0px 15px;
  }

  .packagesContainer {
    text-align: center;
  }
  
  .packages {
    display: flex;
    justify-content: space-around;
    margin: 15px;
  }

  .package {
    width: 30%;
    height: 225px;
    border: 1px solid rgb(200, 200, 200);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 25px;
  }

  .packageHeader {
    font-size: 24px;
  }

  .packageBtn {
    border: 1px solid rgb(175, 175, 175);
    display: flex;
    align-items: center;
  }

  .packagesList {
    display: flex;
    flex-direction: column;
  }

  .projectSearchOrCreate {
    box-sizing: border-box;
    padding: 35px;
    display:flex;
    justify-content: space-around;
  }

  .projectDialog {
    width: 75%;
    margin: auto;
    border-radius: 10px;
    height: 350px;
    border: 1px solid rgb(200, 200, 200);
    overflow: hidden;
  }

  .projectDialogHeader {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(225, 225, 225);
    box-sizing: border-box;
    padding: 15px;
  }

  .projectDialogHeader > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .projectDialogHeader > div > * {
    margin: 0px 5px;
  }

  .projectDialogSorter {

  }

  .projectDialogBody {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .projectDialogBody > * {
    margin: 15px 0px;
  }

  .link {
    color: rgb(0, 0, 255);
    cursor: pointer;
    
  }

  .btns {
    display: flex;
    justify-content: space-around;
    width: 40%;
  }

  .btns > button {
    width: 30%;
    display: flex;
    justify-content: space-around;
  }

  .repos {

  }

  .repo {
    margin: 15px 0px;
  }

  .repoAuthorLogo {
    background-color: rgb(0, 150, 0);
    border-radius: 100%;
    width: 15px;
    height: 15px;
  }

  .repoName {
    color: rgb(0, 0, 255);
    font-weight: bolder;
    cursor: pointer;
  }

  .repoName:hover {
    text-decoration: underline;
  }

  .repoAccess {
    border-radius: 35px;
    border: 1px solid rgb(200, 200, 200);
    padding: 2px 10px;
    font-size: 10px;
  }

  .repoHeader {
    display: flex;
    justify-content: space-between;
  }

  .repoContent {
    display: flex;
    justify-content: space-between
  }

  .repoContent > div {
    display: flex;
    justify-content: space-between
  }

  .repoShortcutNameRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .repoShortcutLanguageRow {
    display: flex;
    align-items: center;
  }

  .marker {
    border-radius: 100%;
    width: 10px;
    height: 10px;
    background-color: rgb(0, 150, 0);
    margin-right: 15px;
  }

  .reposNotFound {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .clearFilterBLock {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .clearFilter {
    cursor: pointer;
    align-self: center;
  }

  .clearFilter:hover {
    color: rgb(0, 0, 255);
  }

  .notHaveRepos {
    font-weight: bolder;
    text-align: center;
  }

  .avatarAside {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .avatarAside > button {
    font-weight: bolder;
    border: 1px solid rgb(200, 200, 200);
  }

  .avatarAside > * {
    margin: 10px;
  }

  .gistsContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .gist {
    display: flex;
    flex-direction: column;
    width: 750px;
  }

  .gistFile {
    display: flex;
    flex-direction: column;
    margin: 30px 0px;
  }

  .gistFileName {
    font-weight: bolder;
  }

  .gistFileContent {
    margin-left: 25px;
  }

  .gistDescription {
    font-size: 24px;
  }

</style>
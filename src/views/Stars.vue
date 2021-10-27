<template>
  <div :style="`background-color: ${this.gitfaber.appearance.includes('light default') ? 'rgb(255, 255, 255)' : this.gitfaber.appearance.includes('dark default') ? 'rgb(0, 0, 0)' : this.gitfaber.appearance.includes('dark dimmed') ? 'rgb(100, 100, 100)' : this.gitfaber.appearance.includes('dark high contrast') ? 'rgb(175, 175, 175)' : this.gitfaber.appearance.includes('dark colorblind') ? 'rgb(200, 200, 200)' : this.gitfaber.appearance.includes('light colorblind') ? 'rgb(235, 235, 235)' : 'rgb(255, 255, 255)'}; color: ${this.gitfaber.appearance.includes('light default') ? 'rgb(0, 0, 0)' : this.gitfaber.appearance.includes('dark default') ? 'rgb(255, 255, 255)' : this.gitfaber.appearance.includes('dark dimmed') ? 'rgb(215, 215, 215)' : this.gitfaber.appearance.includes('dark high contrast') ? 'rgb(125, 125, 125)' : this.gitfaber.appearance.includes('dark colorblind') ? 'rgb(75, 75, 75)' : this.gitfaber.appearance.includes('light colorblind') ? 'rgb(150, 150, 150)' : 'rgb(0, 0, 0)'};`">
    <Header @gotoRepositories="gotoRepositoriesHandler" />
    <div style="display: flex;">
      <div style="width: 350px; margin: 0px 75px;">

      </div>
      <div style="width: calc(100% - 340px); display: flex; justify-content: space-between;">
        <div @click="$router.push({ name: 'Home', query: { activetab: 'overview' } })" class="tabItem">
          <span class="material-icons">
            menu_book
          </span>
          <span class="tab" :style="`${ activeTab.includes('overview') ? 'text-decoration: underline; text-decoration-color: rgb(255, 150, 0); text-decoration-thickness: 3px; text-underline-offset: 20px; font-weight: bolder;' : '' }`">
            Overview
          </span>
        </div>
        <div @click="$router.push({ name: 'Home', query: { activetab: 'repositories' } })" class="tabItem" style="justify-content: space-between; display: flex; width: 50px;">
          <span class="material-icons">
            markunread_mailbox
          </span>
          <span class="tab" :style="`${ activeTab.includes('repositories') ? 'text-decoration: underline; text-decoration-color: rgb(255, 150, 0); text-decoration-thickness: 3px; text-underline-offset: 20px; font-weight: bolder;' : '' }`">Repositories</span>
          <span>{{ gitfaber.repos.length }}</span>
        </div>
        <div @click="$router.push({ name: 'Home', query: { activetab: 'projects' } })" class="tabItem">
          <span class="material-icons">
            insert_chart_outlined
          </span>
          <span class="tab" :style="`${ activeTab.includes('projects') ? 'text-decoration: underline; text-decoration-color: rgb(255, 150, 0); text-decoration-thickness: 3px; text-underline-offset: 20px; font-weight: bolder;' : '' }`">Projects</span>
        </div>
        <div @click="$router.push({ name: 'Home', query: { activetab: 'packages' } })" class="tabItem">
          <span class="material-icons">
            view_in_ar
          </span>
          <span class="tab" :style="`${ activeTab.includes('packages') ? 'text-decoration: underline; text-decoration-color: rgb(255, 150, 0); text-decoration-thickness: 3px; text-underline-offset: 20px; font-weight: bolder;' : '' }`">Packages</span>
        </div>
      </div>
    </div>
    <hr />
    <div style="display: flex;">
      <div class="avatarAside">
        <div @click="$router.push({ name: 'Settings' })" style="cursor: pointer; color: rgb(255, 255, 255);  font-size: 128px; display: flex; align-items: center; justify-content: center; border-radius: 100%; background-color: rgb(0, 150, 0); width: 350px; height: 300px; margin: 0px 75px;">
          Г
        </div>
        <span>
          {{ gitfaber.email }}
        </span>
        <button class="btn btn-light w-75">
          Edit profile
        </button>
      </div>
      <div v-if="activeTab.includes('stars')" style="width: calc(100% - 175px);">
        <div class="starsHeader">
          <span>
            Repositories
          </span>
          <div>
            <span>
              Filters
            </span>
            <span class="material-icons-outlined">
              expand_more
            </span>
          </div>
        </div>
        <hr />
        <div v-if="repos.filter(repo => repo.stars >= 1).length >= 1" class="gistsContainer">
          <div v-for="repo in repos.filter(repo => repo.stars >= 1)" :key="repo.name" class="starsItem">
            <span>
              {{ repo.name }}
            </span>
            <div>
              <span>
                {{ repo.stars }}
              </span>
              <span class="stared material-icons-outlined">
                star
              </span>
            </div>
          </div>
        </div>
        <div v-else class="gistsContainer">
          <span class="material-icons-outlined">
            star_outline
          </span>
          <h5>
            You don’t have any starred repositories yet.
          </h5>
          <p>
            As you explore GitHub, star repositories to save them for later and they’ll show up here.
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
      activeTab: 'stars',
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

  .starsHeader {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 10px 25px;
  }

  .starsHeader > div {
    display: flex;
    align-items: center;
  }

  .starsItem {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    height: 50px;
  }

  .starsItem > div {
    display: flex;
    align-items: center;
  }

  .starsItem > div > * {
    margin: 0px 15px;
  }

  .stared {
    color: rgb(175, 200, 0);
  }

  .staredSeparator {
    background-color: rgb(200, 200, 200);
  }

</style>
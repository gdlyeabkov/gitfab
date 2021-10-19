<template>
  <div>
    <Header />
    <div style="display: flex;">
      <div style="width: 350px; margin: 0px 75px;">

      </div>
      <div style="width: calc(100% - 340px); display: flex; justify-content: space-between;">
        <div class="tabItem">
          <span class="material-icons">
            menu_book
          </span>
          <span @click="activeTab = 'overview'" class="tab" :style="`${ activeTab.includes('overview') ? 'text-decoration: underline; text-decoration-color: rgb(255, 150, 0); font-weight: bolder;' : '' }`">
            Overview
          </span>
        </div>
        <div class="tabItem" style="justify-content: space-between; display: flex; width: 250px;">
          <span class="material-icons">
            markunread_mailbox
          </span>
          <span @click="activeTab = 'repositories'" class="tab" :style="`${ activeTab.includes('repositories') ? 'text-decoration: underline; text-decoration-color: rgb(255, 150, 0); font-weight: bolder;' : '' }`">Repositories</span>
          <span>149</span>
        </div>
        <div class="tabItem">
          <span class="material-icons">
            insert_chart_outlined
          </span>
          <span @click="activeTab = 'projects'" class="tab" :style="`${ activeTab.includes('projects') ? 'text-decoration: underline; text-decoration-color: rgb(255, 150, 0); font-weight: bolder;' : '' }`">Projects</span>
        </div>
        <div class="tabItem">
          <span class="material-icons">
            view_in_ar
          </span>
          <span @click="activeTab = 'packages'" class="tab" :style="`${ activeTab.includes('packages') ? 'text-decoration: underline; text-decoration-color: rgb(255, 150, 0); font-weight: bolder;' : '' }`">Packages</span>
        </div>
      </div>
    </div>
    <hr />
    <div style="display: flex;">
      <div style="border-radius: 100%; background-color: rgb(0, 255, 0); width: 350px; height: 300px; margin: 0px 75px;">
        
      </div>
      <div v-if="activeTab.includes('overview')" style="width: calc(100% - 175px);">
        <p>Popular repositories</p>
        <div style="display: flex; width: 100%;">
          
          <div style="width: 50%;">
            <dir style="width: 85%; height: 150px; border: 1px solid rgb(175, 175, 175);">

            </dir>
            <dir style="width: 85%; height: 150px; border: 1px solid rgb(175, 175, 175);">
              
            </dir>
            <dir style="width: 85%; height: 150px; border: 1px solid rgb(175, 175, 175);">
              
            </dir>
          </div>
          
          <div style="width: 50%;">
            <dir style="width: 85%; height: 150px; border: 1px solid rgb(175, 175, 175);">

            </dir>
            <dir style="width: 85%; height: 150px; border: 1px solid rgb(175, 175, 175);">
              
            </dir>
            <dir style="width: 85%; height: 150px; border: 1px solid rgb(175, 175, 175);">
              
            </dir>
          </div>

        </div>
        <p>398 contributions in the last year</p>
        
        <div style="border: 1px solid rgb(175, 175, 175); border-radius: 5px; height: 175px; width: 90%;">

        </div>
      
        <div style="display: flex; justify-content: space-between; width: 90%;">
          <p>
            Contribution activity
          </p>
          <button class="btn btn-primary">
            2021
          </button>
        </div>
        <button class="btn btn-light" style="">Show more activity</button>
        <p>
          Seeing something unexpected? Take a look at the GitHub profile guide.
        </p>

      </div>
      <div v-else-if="activeTab.includes('repositories')" style="width: calc(100% - 175px);">
        <div class="projectSearchOrCreate">
          <input placeholder="Find a repository" type="text" class="form-control w-50">
          <div class="btns">
            <button class="btn btn-light packageBtn">
              Type
              <span class="material-icons">
                arrow_drop_down
              </span>
            </button>
            <button class="btn btn-light packageBtn">
              Language
              <span class="material-icons">
                arrow_drop_down
              </span>
            </button>
            <button class="btn btn-light packageBtn">
              Sort
              <span class="material-icons">
                arrow_drop_down
              </span>
            </button>
          </div>
          <button class="btn btn-success">
            New
          </button>
        </div>
        <div class="repos">
          <div class="repo">
            <div class="repoHeader">
              <div>
                <span class="repoName">
                  owd
                </span>
                <span class="repoAccess">
                  Public
                </span>
              </div>
              <button class="btn-light packageBtn">
                <span class="material-icons">
                  star_rate
                </span>
                <span>
                  Star
                </span>
              </button>
            </div>
            <div class="repoContent">
              <div>
                <div class="repoAuthorLogo">

                </div>
                <span>
                  C#
                </span>
                <span>
                  Updated 17 hours ago
                </span>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="activeTab.includes('projects')" style="width: calc(100% - 175px);">
        <div class="projectSearchOrCreate">
          <input placeholder="Search all projects" type="text" class="form-control w-75">
          <button class="btn btn-success">
            New project
          </button>
        </div>
        <div class="projectDialog">
          <div class="projectDialogHeader">
            <div>
              <span class="material-icons">
                insert_chart_outlined
              </span>
              <span>
                0
              </span>
              <span>
                Open
              </span>
              <span class="material-icons">
                insert_chart_outlined
              </span>
              <span>
                0
              </span>
              <span>
                Closed
              </span>
            </div>
            <div class="projectDialogSorter">
              <span>
                Sort
              </span>
              <span class="material-icons">
                arrow_drop_down
              </span>
            </div>
          </div>
          <div class="projectDialogBody">
            <h4>
              You don't have any projects yet.
            </h4>
            <button class="btn btn-success">
              New project
            </button>
            <span class="link">
              Learn More
            </span>
          </div>
        </div>
      </div>
      <div v-else-if="activeTab.includes('packages')" style="width: calc(100% - 175px);">
        <div class="packagesContainer">
          <h5>
            Get started with GitHub Packages
          </h5>
          <span>
            Safely publish packages, store your packages alongside your code, and share your packages privately with your team.
          </span>
          <h6>
            Choose a registry
          </h6>
        </div>
        <div class="packagesList">
          <div class="packages">
            <div class="package">
              <div>
                <img width="25px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9n2vajroEvh0krdJjx7ONzl9_oYSSsDcC5iG6j0hyMtlVFuVMW3W9GfHakwZymEuZ_Fc&usqp=CAU" alt="">
                <span class="packageHeader">
                  Docker
                </span>
              </div>
              <span>
                A software platform used for building applications based on containers — small and lightweight execution environments.
              </span>
              <button class="w-50 btn btn-light packageBtn">
                Learn more
              </button>
            </div>
            <div class="package">
              <div>
                <img width="25px" src="https://media.trustradius.com/product-logos/HK/19/A1STBOL3HJCR-180x180.JPEG" alt="">
                <span class="packageHeader">
                  Apache Maven
                </span>
              </div>
              <span>
                A default package manager used for the Java programming language and the Java runtime environment.
              </span>
              <button class="w-50 btn btn-light packageBtn">
                Learn more
              </button>
            </div>
            <div class="package">
              <div>
                <img width="25px" src="data:image/png;base64,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" alt="">
                <span class="packageHeader">
                  NuGet
                </span>
              </div>
              <span>
                A free and open source package manager used for the Microsoft development platforms including .NET.
              </span>
              <button class="w-50 btn btn-light packageBtn">
                Learn more
              </button>
            </div>
          </div>
          <div class="packages">
            <div class="package">
              <div>
                <img width="25px" src="data:image/png;base64,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" alt="">
                <span class="packageHeader">
                  RubyGems
                </span>
              </div>
              <span>
                A standard format for distributing Ruby programs and libraries used for the Ruby programming language.
              </span>
              <button class="w-50 btn btn-light packageBtn">
                Learn more
              </button>
            </div>
            <div class="package">
              <div>
                <img width="25px" src="https://static.npmjs.com/338e4905a2684ca96e08c7780fc68412.png" alt="">
                <span class="packageHeader">
                  Npm
                </span>
              </div>
              <span>
                A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code.
              </span>
              <button class="w-50 btn btn-light packageBtn">
                Learn more
              </button>
            </div>
            <div class="package">
              <div>
                <img width="25px" src="https://i.pinimg.com/originals/b3/31/ac/b331ac5af0c747944d8e17c6db925d1b.png" alt="">
                <span class="packageHeader">
                  Containers
                </span>
              </div>
              <span>
                A single place for your team to manage Docker images and decide who can see and access your images.
              </span>
              <button class="w-50 btn btn-light packageBtn">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  data(){
    return {
      activeTab: 'overview'
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
  }

  .tab {
    cursor: pointer;
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

</style>
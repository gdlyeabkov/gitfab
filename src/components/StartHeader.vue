<template>
    <div class="header">
        <div class="leftSideHeader">
            <img @click="$router.push({ name: 'StartPage' })" class="logo" width="100px" src="https://repository-images.githubusercontent.com/124369770/d12e6800-b47a-11e9-85a3-5fe53e198d49" alt="">
            <span @mouseenter="togglerWhyGitFabContextMenu = true">
                Why Gitfab?
            </span>
            <span @click="$router.push({ name: 'Team' })">
                Team
            </span>
            <span @click="$router.push({ name: 'Enterprise' })">
                Enterprise
            </span>
            <span @mouseenter="togglerExploreGitFabContextMenu = true">
                Explore
            </span>
            <span @click="$router.push({ name: 'Marketplace' })">
                Marketplace
            </span>
            <span @mouseenter="togglerPricingContextMenu = true">
                Pricing
            </span>
        </div>
        <div class="rightSideHeader">
            <input placeholder="Search Gitfab" type="text" class="form-control w-50">
            <span @click="$router.push({ name: 'SignUp' })">
                Sign in
            </span>
            <span @click="$router.push({ name: 'SignIn' })">
                Sign up
            </span>
        </div>
        <div v-if="togglerWhyGitFabContextMenu" @mouseleave="togglerWhyGitFabContextMenu = false" class="whyGitFabContextMenu">
            <span class="contextMenuHeader">
                Features
            </span>
            <span>
                Mobile
            </span>
            <span>
                Actions
            </span>
            <span>
                Codespaces
            </span>
            <span>
                Packages
            </span>
            <span>
                Security
            </span>
            <span>
                Code review
            </span>
            <span>
                Issues
            </span>
            <span>
                Integrations
            </span>
            <hr />
            <span class="contextMenuHeader">
                Gitfab sponsors
            </span>
            <span class="contextMenuHeader">
                Customes stories
            </span>
        </div>
        <div v-if="togglerExploreGitFabContextMenu" @mouseleave="togglerExploreGitFabContextMenu = false" class="exploreGitFabContextMenu">
            <span class="contextMenuHeader">
                Explore Gitfab
            </span>
            <span>
                Learn and contribute
            </span>
            <span>
                Topics
            </span>
            <span>
                Collections
            </span>
            <span>
                Trending
            </span>
            <span>
                Learning Lab
            </span>
            <span>
                Open source guides
            </span>
            <hr />
            <span>
                Connect with others
            </span>
            <span>
                The ReadME project
            </span>
            <span>
                Events
            </span>
            <span>
                Community forum
            </span>
            <span>
                Gitfab education
            </span>
            <span>
                Gitfab stars program
            </span>
        </div>
        <div v-if="togglerPricingContextMenu" @mouseleave="togglerPricingContextMenu = false" class="pricingContextMenu">
            <span class="contextMenuHeader">
                Pricing
            </span>
            <span>
                Compare plans
            </span>
            <span>
                Contact sales
            </span>
            <hr />
            <span class="contextMenuHeader">
                Education
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            togglerWhyGitFabContextMenu: false,
            togglerExploreGitFabContextMenu: false,
            togglerPricingContextMenu: false,
        }
    }
}
</script>

<style scoped>
    
    .header {
        background-color: rgb(0, 0, 0);
        display: flex;
        justify-content: space-between;
    }

    .leftSideHeader {
        box-sizing: border-box;
        padding: 0px 35px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: rgb(255, 255, 255);
    }

    .rightSideHeader {
        box-sizing: border-box;
        padding: 0px 35px;
        width: 85%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .rightSideHeader > *, .leftSideHeader > * {
        margin: 0px 5px;
        color: rgb(255, 255, 255);
    }
    
    .leftSideHeader > span, .rightSideHeader > span {
        cursor: pointer;
    }

    .leftSideHeader > span:hover, .rightSideHeader > span:hover {
        color: rgb(100, 100, 100);
    }

    .logo {
        cursor: pointer;
    }

    .contextMenuHeader {
        font-weight: bolder;
    }

    .whyGitFabContextMenu {
        display: flex;
        box-sizing: border-box;
        padding: 25px;
        height: 400px;
        width: 225px;
        background-color: rgb(255, 255, 255);
        border: 1px solid rgb(150, 150, 150);
        border-radius: 8px;
        flex-direction: column;
        top: 65px;
        left: 135px;
        position: absolute;
    }

    .exploreGitFabContextMenu {
        display: flex;
        box-sizing: border-box;
        padding: 25px;
        height: 400px;
        width: 225px;
        background-color: rgb(255, 255, 255);
        border: 1px solid rgb(150, 150, 150);
        border-radius: 8px;
        flex-direction: column;
        top: 65px;
        left: 350px;
        position: absolute;
    }

    .pricingContextMenu {
        display: flex;
        box-sizing: border-box;
        padding: 25px;
        height: 200px;
        width: 375px;
        background-color: rgb(255, 255, 255);
        border: 1px solid rgb(150, 150, 150);
        border-radius: 8px;
        flex-direction: column;
        top: 65px;
        left: 500px;
        position: absolute;
    }

    

</style>
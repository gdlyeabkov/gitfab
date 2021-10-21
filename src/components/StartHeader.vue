<template>
    <div class="header">
        <div class="leftSideHeader">
            <img class="logo" width="100px" src="https://repository-images.githubusercontent.com/124369770/d12e6800-b47a-11e9-85a3-5fe53e198d49" alt="">
            <span>
                Why Gitfab?
            </span>
            <span>
                Team
            </span>
            <span>
                Enterprise
            </span>
            <span>
                Explore
            </span>
            <span>
                Marketplace
            </span>
            <span>
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
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    
    .header {
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
    }
    
    .leftSideHeader > span, .rightSideHeader > span {
        cursor: pointer;
    }

</style>
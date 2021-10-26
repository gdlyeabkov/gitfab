<template>
<div>
    <StartHeader />
    <div class="enterpriseBlock">
        <div class="enterpriseBlockAside">
            <span class="forEnterprise">
                GitFab for enterprises
            </span>
            <span class="enterpriseHeader">
                Build like the best
            </span>
            <span class="enterpriseContent">
                Increase developer velocity.
            </span>
            <span class="enterpriseContent">
                Secure every step.
            </span>
            <span class="enterpriseContent">
                Automate entire workflows.
            </span>
            <span class="enterpriseContent">
                Redefine collaboration.
            </span>
            <span class="enterpriseContent">
                Trusted by 
                <span class="enterpriseLink">
                    over 65 million developers.
                </span>
            </span>
            <div class="bnts">
                <button class="btn btn-light">
                    Contact Sales
                </button>
                <button class="btn btn-dark">
                    Start a free trial
                </button>
            </div>
        </div>
        <img width="250px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXo4vAI7eKIAasVpLXOy8ayJBAt5mbwGkt1w&usqp=CAU" alt="">
    </div>
    <StartFooter />
</div>
</template>

<script>
import StartHeader from '@/components/StartHeader.vue'
import StartFooter from '@/components/StartFooter.vue'

export default {
    name: 'About',
    components: {
        StartHeader,
        StartFooter
    }
}
</script>

<style scoped>

    .enterpriseBlock {
        display: flex;
        background-color: rgb(0, 0, 0);
        box-sizing: border-box;
        padding: 25px;
    }

    .enterpriseBlockAside {
        display: flex;
        flex-direction: column;
        width: 65%;
    }

    .forEnterprise {
        font-size: 20px;
        font-weight: bolder;
        color: rgb(175, 175, 175);
    }

    .enterpriseHeader {
        font-size: 72px;
        font-weight: bolder;
        color: rgb(255, 255, 255);
    }

    .enterpriseContent {
        color: rgb(255, 255, 255);
        font-size: 20px;
    }

    .enterpriseContent {
        color: rgb(255, 255, 255);
        font-size: 20px;
    }

    .enterpriseLink {
        color: rgb(175, 175, 175);
        font-size: 20px;
    }

    .bnts > button {
        margin: 10px;
    }

</style>
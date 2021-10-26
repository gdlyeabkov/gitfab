<template>
<div>
    <StartHeader />
    <div class="teamBlock">
        <span>
            GITFAB FOR TEAMS
        </span>
        <span class="teamBlockHeader">
            Build like the best teams on the planet
        </span>
        <span class="teamBlockContent">
            With CI/CD, Dependabot, and the world’s largest developer community, GitHub gives your team everything they need to ship better software faster.
        </span>
        <button class="signUp btn btn-dark">
            Sign up for free
        </button>
    </div>
    <StartFooter />
</div>
</template>

<script>
import StartHeader from '@/components/StartHeader.vue'
import StartFooter from '@/components/StartFooter.vue'

export default {
    name: 'Services',
    components: {
        StartHeader,
        StartFooter
    }
}
</script>

<style scoped>

    .teamBlock {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 500px;
        flex-direction: column;
    }

    .teamBlockHeader {
        width: 1000px;
        font-size: 84px;
        text-align: center;
        line-height: 80px;
        font-weight: bolder;
    }

    .teamBlockContent {
        margin-top: 15px;
        text-align: center;
        width: 600px;
        color: rgb(75, 75, 75);
        font-size: 20px;
    }

    .signUp {
        margin: 15px;
        padding: 15px 25px;
        font-weight: bolder;
    }

</style>
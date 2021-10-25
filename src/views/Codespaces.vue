<template>
<div>
    <Header />
    <div>
        <div v-if="adsShow" class="adsBlock">
            <span>
                Codespaces access is currently limited to paid teams and organizations.
            </span>
            <span @click="adsShow = false" class="adsBlockCloser material-icons">
                close
            </span>
        </div>
        <div class="main">
            <span>
                Blazing fast cloud
                developer environments
            </span>
            <h6>
                Visual Studio Code backed by high performance VMs that start in seconds.
            </h6>
            <button class="btn btn-light">
                Get started >
            </button>
        </div>
    </div>
    <Footer />
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Codespaces',
    data(){
        return {
            adsShow: true
        }
    },
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
    
    .adsBlock {
        height: 75px;
        align-items: center;
        display: flex;
        justify-content: space-between;
        background-color: rgb(200, 230, 250);
    }

    .adsBlock > * {
        margin: 30px;
    }

    .adsBlockCloser {
        color: rgb(0, 0, 200);
        font-size: 16px;
        font-weight: bolder;
        cursor: pointer;
    }

    .main {
        background-color: rgb(50, 0, 50);
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgb(240, 240, 240);
        flex-direction: column;
    }

    .main > span {
        width: 850px;
        font-size: 72px;
        font-weight: bolder;
        align-self: center;
        text-align: center;
    }

</style>
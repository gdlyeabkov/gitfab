<template>
<div>
    <StartHeader />
    <div class="main">
        <span class="mainHeader">
            Where the world builds software
        </span>
        <span class="mainParagraph">
            Millions of developers and companies build, ship, and maintain their software on GitFab—the largest and most advanced development platform in the world.
        </span>
        <div class="signUp">
            <input placeholder="Email address" type="text" class="form-control w-25">
            <button class="btn btn-success">
                Sign up for GitFab
            </button>
        </div>
    </div>
    <StartFooter />
</div>
</template>

<script>
import StartHeader from '@/components/StartHeader.vue'
import StartFooter from '@/components/StartFooter.vue'

export default {
    name: 'Issues',
    components: {
        StartHeader,
        StartFooter
    }
}
</script>

<style scoped>
    
    .main {
        background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT80vhcO7clZZSs_4z5cZdqQIaGgZ56Hr5E0Q&usqp=CAU');
        width: 100%;
        height: 500px;
        background-size: cover;
        display: flex;
        flex-direction: column;
        color: rgb(255, 255, 255);
    }

    .signUp {
        display: flex;
    }

    .signUp > * {
        margin: 5px;
    }

    .mainHeader {
        width: 50%;
        font-size: 72px;
        font-weight: bolder;
    }

    .mainParagraph {
        width: 50%;
        font-size: 24px;
    }

</style>
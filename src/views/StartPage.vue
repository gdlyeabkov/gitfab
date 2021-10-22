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
            <input v-model="email" placeholder="Email address" type="text" class="form-control w-25">
            <button @click="signUp()" class="btn btn-success">
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
    data(){
        return {
            email: ''
        }
    },
    methods: {
        signUp(){
            fetch(`https://gitfab.herokuapp.com/api/gitfabers/create/?gitfaberemail=${this.email}`, {
            // fetch(`http://localhost:4000/api/gitfabers/create/?gitfaberemail=${this.email}`, {
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
                if(JSON.parse(result).status.includes('OK')){
                    alert(`Ваш пароль: ${JSON.parse(result).newpassword}`)
                    this.$router.push({ name: 'StartPage' })
                } else if(JSON.parse(result).status.includes('Error')){
                    alert('Уже зарегестрирован')
                }
            })
        }
    },
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
        padding-left: 75px;
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
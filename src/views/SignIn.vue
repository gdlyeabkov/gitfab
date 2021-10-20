<template>
    <div>
        <div class="main">
            <div class="inputBox">
                <span>
                    Welcome to GitFab!
                </span>
                <span>
                    Let’s begin the adventure
                </span>
                <span class="enterYourEmail">
                    Enter your email
                </span>
                <div class="emailInputBlock">
                    <div class="emailInput">
                        <span class="emailInputHere material-icons">
                            east
                        </span>
                        <input ref="emailRef" v-model="email" type="text" class="transparentInput form-control w-75">
                    </div>
                    <button @click="createGitfaber()" class="btn btn-info">
                        Continue
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignIn',
    data(){
        return {
            email: ''
        }
    },
    mounted(){
        this.$refs.emailRef.focus()
    },
    methods: {
        createGitfaber(){
            fetch(`http://localhost:4000/api/gitfabers/create/?gitfaberemail=${this.email}`, {
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
    }
}
</script>

<style scoped>
    
    .main {
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url('https://www.slashgear.com/wp-content/uploads/2021/03/space_stars_nasa_main-1280x720.jpg');
    }

    .transparentInput {
        background-color: transparent;
        border: none;
        color: rgb(255, 255, 255);
        height: 25px;
    }

    .inputBox {
        margin: 250px;
        display: flex;
        flex-direction: column;
        color: rgb(0, 100, 250);
        border: 1px solid rgb(0, 100, 250);
        box-sizing: border-box;
        padding: 25px;
        border-radius: 7px;
        width: 40%;
        height: 250px;
        background-color: rgb(0, 0, 100);
    }

    .enterYourEmail {
        color: rgb(100, 150, 255);
        font-weight: bolder;
        margin-top: 25px;
    }

    .emailInputHere {
        color: rgb(255, 50, 150);
    }

    .emailInput {
        margin-top: 10px;
        display: flex;
        align-items: center;
    }

    .emailInputBlock {
        height: 50px;
        display: flex;
        align-items: center;
    }

</style>
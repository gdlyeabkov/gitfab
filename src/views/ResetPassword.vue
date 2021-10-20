<template>
    <div class="signUp">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="">
        <span>
             Reset your password
        </span>
        <div class="form">
            <div>
                <span class="warning">
                    Enter your user account's verified email address and we will send you a password reset link.
                </span>
                <input placeholder="Enter your email address" type="text" class="form-control w-100">
            </div>
            <div class="warning">
                <div class="passwordBlock">
                    <span>
                        Verify your account
                    </span>
                </div>
                <input type="text" class="form-control w-100">
                <button :disabled="true" class="resetPasswordBtn btn btn-success w-75">
                    Send password reset email
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignUp'
}
</script>

<style scoped>
    
    .signUp {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .form {
        border-radius: 7px;
        border: 1px solid rgb(200, 200, 200);
        width: 40%;
        height: 325px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgb(245, 245, 245);
    }

    .form > div > * {
        margin: 5px 0px;
    }

    .form > div {
        margin: 2px 0px;
        width: 450px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .newGitfaber {
        border-radius: 7px;
        border: 1px solid rgb(200, 200, 200);
        box-sizing: border-box;
        padding: 15px 35px;
    }

    .createAnAccount {
        cursor: pointer;
        color: rgb(0, 0, 255);
    }

    .signUp > img {
        width: 50px;
    }

    .signUp > * {
        margin: 5px;
    }

    .passwordBlock {
        display: flex;
        justify-content: space-between;
        width: 75%;
    }

    .warning {
        font-weight: bolder;
        font-size: 14px;
    }

    .resetPasswordBtn:disabled {
        background-color: rgb(100, 185, 100);
    }

</style>
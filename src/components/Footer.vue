<template>
    <div>
        <hr />
        <div class="footer">
            <span>
                © 2021 GitFab, Inc.
            </span>
            <span class="footerLink">
                Terms
            </span>
            <span class="footerLink">
                Privacy
            </span>
            <span class="footerLink">
                Security
            </span>
            <span class="footerLink">
                Status
            </span>
            <span class="footerLink">
                Docs
            </span>
            <img class="logo" width="35px" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="">
            <span class="footerLink">
                Contact GitHub
            </span>
            <span class="footerLink">
                Pricing
            </span>
            <span class="footerLink">
                API
            </span>
            <span class="footerLink">
                Training
            </span>
            <span class="footerLink">
                Blog
            </span>
            <span class="footerLink">
                About
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
    .footer {
        display: flex;
        justify-content: space-around;
        height: 125px;
        align-items: center;
    }

    .footerLink {
        cursor: pointer;
        color: rgb(0, 0, 255);
        font-size: 12px;
    }

    .logo {
        cursor: pointer;
    }

</style>
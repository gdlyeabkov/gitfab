<template>
    <div>
        <hr />
        <div class="footer">
            <span class="logo" @click="$router.push({ name: 'Home' })">
                © 2021 GitFab, Inc.
            </span>
            <span @click="$router.push({ name: 'Docs' })" class="footerLink">
                Terms
            </span>
            <span @click="$router.push({ name: 'Docs' })" class="footerLink">
                Privacy
            </span>
            <span @click="$router.push({ name: 'Security' })" class="footerLink">
                Security
            </span>
            <span @click="$router.push({ name: 'Status' })" class="footerLink">
                Status
            </span>
            <span @click="$router.push({ name: 'Docs' })" class="footerLink">
                Docs
            </span>
            <img @click="$router.push({ name: 'Home' })" class="logo" width="35px" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="">
            <span @click="$router.push({ name: 'Support' })" class="footerLink">
                Contact GitHub
            </span>
            <span @click="$router.push({ name: 'Pricing' })" class="footerLink">
                Pricing
            </span>
            <span @click="$router.push({ name: 'Services' })" class="footerLink">
                API
            </span>
            <span @click="$router.push({ name: 'Docs' })" class="footerLink">
                Training
            </span>
            <span @click="$router.push({ name: 'Blog' })" class="footerLink">
                Blog
            </span>
            <span @click="$router.push({ name: 'About' })" class="footerLink">
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
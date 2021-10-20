<template>
    <div class="footer">
        <div>
            <img src="https://github.githubassets.com/images/modules/site/icons/footer/github-logo.svg" alt="">
        </div>
        <div class="footerColumns">
            <div class="footerColumn">
                <span class="footerLink">
                    Product
                </span>
                <span class="footerLink">
                    Features
                </span>
                <span class="footerLink">
                    Security
                </span>
                <span class="footerLink">
                    Team
                </span>
                <span class="footerLink">
                    Enterprise
                </span>
                <span class="footerLink">
                    Customer stories
                </span>
                <span class="footerLink">
                    The ReadME Project
                </span>
                <span class="footerLink">
                    Pricing
                </span>
                <span class="footerLink">
                    Resources
                </span>
                <span class="footerLink">
                    Roadmap
                </span>
            </div>
            <div class="footerColumn">
                <span class="footerLink">
                    Platform
                </span>
                <span class="footerLink">
                    Developer API
                </span>
                <span class="footerLink">
                    Partners
                </span>
                <span class="footerLink">
                    Atom
                </span>
                <span class="footerLink">
                    Electron
                </span>
                <span class="footerLink">
                    GitHub Desktop
                </span>
            </div>
            <div class="footerColumn">
                <span class="footerLink">
                    Support
                </span>
                <span class="footerLink">
                    Docs
                </span>
                <span class="footerLink">
                    Community Forum
                </span>
                <span class="footerLink">
                    Professional Services
                </span>
                <span class="footerLink">
                    Learning Lab
                </span>
                <span class="footerLink">
                    Status
                </span>
                <span class="footerLink">
                    Contact GitHub
                </span>
            </div>
            <div class="footerColumn">
                <span class="footerLink">
                    Company
                </span>
                <span class="footerLink">
                    About
                </span>
                <span class="footerLink">
                    Blog
                </span>
                <span class="footerLink">
                    Careers
                </span>
                <span class="footerLink">
                    Press
                </span>
                <span class="footerLink">
                    Inclusion
                </span>
                <span class="footerLink">
                    Social Impact
                </span>
                <span class="footerLink">
                    Shop
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StartFooter'
}
</script>

<style scoped>
    .footer {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 50px;
    }

    .footerColumns {
        display: flex;
        justify-content: space-between;
        width: 65%;
        height: 350px;
    }

    .footerColumn {
        display: flex;
        flex-direction: column;
    }

    .footerLink {
        cursor: pointer;
        margin: 5px 0px;
    }

    .footerLink:hover {
        color: rgb(0, 0, 255);
    }

</style>
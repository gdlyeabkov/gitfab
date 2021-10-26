<template>
<div>
    <Header />
    <div class="plans">
        <span>
            Choose a plan
        </span>
        <span class="plansHeader">
            Pick a plan for your organization
        </span>
        <span class="plansSubheader">
            How often do you want to pay?
        </span>
        <div>
            <button class="btn btn-light">
                Monthly
            </button>
            <span>
                Yearly
            </span>
        </div>
        <div class="plansList">
            <div class="plan">
                <h4>
                    Free
                </h4>
                <span>
                    The basics for individuals and organizations
                </span>
                <div>
                    <span class="material-icons">
                        help_outline
                    </span>
                    <span>
                        InfoUnlimited public/private repositories
                    </span>
                </div>
                <div>
                    <span class="material-icons">
                        help_outline
                    </span>
                    <span>
                        2,000 automation minutes/month
                       Free for public repositories
                    </span>
                </div>
                <div>
                    <span class="material-icons">
                        help_outline
                    </span>
                    <span>
                        500MB of Packages storage
                        Free for public repositories
                    </span>
                </div>
                <div>
                    <span class="material-icons">
                        help_outline
                    </span>
                    <span>
                        New Issues & Projects (beta)
                    </span>
                </div>
                <div>
                    <span class="material-icons">
                        help_outline
                    </span>
                    <span>
                        Community support
                    </span>
                </div>
                <div>
                    $ 
                    <span class="planCost">
                        0
                    </span>
                    per user/month
                </div>
                <button class="btn btn-dark">
                    Create a free organization
                </button>
            </div>
            <div class="plan middlePlan">
                <h4>
                    MOST POPULAR
                </h4>
                <h4>
                    Team
                </h4>
                <span>
                    Advanced collaboration for individuals and organizations
                </span>
                <div>
                    <span class="material-icons">
                        help_outline
                    </span>
                    <span>
                        Everything included in Free, plus...
                    </span>
                </div>
                <div>
                    <span class="material-icons">
                        help_outline
                    </span>
                    <span>
                        Protected branches
                    </span>
                </div>
                <div>
                    <span class="material-icons">
                        help_outline
                    </span>
                    <span>
                        Multiple reviewers in pull requests
                    </span>
                </div>
                <div>
                    <span class="material-icons">
                        help_outline
                    </span>
                    <span>
                        Draft pull requests
                    </span>
                </div>
                <div>
                    <span class="material-icons">
                        help_outline
                    </span>
                    <span>
                        Code owners
                    </span>
                </div>
                <div>
                    <span class="material-icons">
                        help_outline
                    </span>
                    <span>
                        Required reviewers
                    </span>
                </div>
                <div>
                    <span class="material-icons">
                        help_outline
                    </span>
                    <span>
                        Pages and Wikis
                    </span>
                </div>
                <div>
                    <span class="material-icons">
                        help_outline
                    </span>
                    <span>
                        3,000 automation minutes/month
                        Free for public repositories
                    </span>
                </div>
                <div>
                    <span class="material-icons">
                        help_outline
                    </span>
                    <span>
                        2GB of Packages storage
                        Free for public repositories
                    </span>
                </div>
                <div>
                    <span class="material-icons">
                        help_outline
                    </span>
                    <span>
                        Web-based support
                    </span>
                </div>
                <div>
                    $ 
                    <span class="planCost">
                        4
                    </span>
                    per user/month
                </div>
                <button class="btn btn-dark">
                    Create a free organization
                </button>
            </div>
            <div class="plan">
                <h4>
                    Enterprise
                </h4>
                <span>
                    Security, compliance, and flexible deployment for enterprises
                </span>
                <div>
                    <span class="material-icons">
                        help_outline
                    </span>
                    <span>
                        Everything included in Team, plus...
                    </span>
                </div>
                <div>
                    <span class="material-icons">
                        help_outline
                    </span>
                    <span>
                        Automatic security and version updates
                    </span>
                </div>
                <div>
                    <span class="material-icons">
                        help_outline
                    </span>
                    <span>
                        SAML single sign-on
                    </span>
                </div>
                <div>
                    <span class="material-icons">
                        help_outline
                    </span>
                    <span>
                        Advanced auditing
                    </span>
                </div>
                <div>
                    <span class="material-icons">
                        help_outline
                    </span>
                    <span>
                        GitHub Connect
                    </span>
                </div>
                <div>
                    <span class="material-icons">
                        help_outline
                    </span>
                    <span>
                        50,000 automation minutes/month
                        Free for public repositories
                    </span>
                </div>
                <div>
                    <span class="material-icons">
                        help_outline
                    </span>
                    <span>
                        50GB of Packages storage
                        Free for public repositories
                    </span>
                </div>
                <div>
                    <span class="material-icons">
                        help_outline
                    </span>
                    <span>
                        EXCLUSIVE ADD-ONS
                    </span>
                </div>
                <div>
                    <span class="material-icons">
                        help_outline
                    </span>
                    <span>
                        Token, secret, and code scanning
                    </span>
                </div>
                <div>
                    <span class="material-icons">
                        help_outline
                    </span>
                    <span>
                        Premium support
                    </span>
                </div>
                <div>
                    $ 
                    <span class="planCost">
                        21
                    </span>
                    per user/month
                </div>
                <button class="btn btn-dark">
                    Create a free organization
                </button>
            </div>
        </div>
        <span class="plansHeader">
            Compare features
        </span>
    </div>
    <Footer />
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'OrganizationsPlan',
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
    
    .plans {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        
    }

    .plansHeader {
        font-weight: bolder;
        font-size: 28px;
    }

    .plansSubheader {
        font-weight: bolder;
        font-size: 20px;
    }

    .plan {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0px 0px 10px rgb(150, 150, 150);
        width: 350px;
        margin: 15px;
        height: 575px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        border-radius: 8px;
    }

    .middlePlan {
        border: 8px solid rgb(0, 100, 255);
        width: 375px;
        margin-top: -50px;
        height: 625px;
    }

    .plansList {
        margin: 50px auto;
        display: flex;
    }

    .planCost {
        font-size: 36px;
    }

</style>
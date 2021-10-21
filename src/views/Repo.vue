<template>
    <div>
        <Header />
        <div>
            <div>
                <div class="repoHeader">
                    <div class="repoHeaderItem aboutRepo">
                        <span class="material-icons">
                            markunread_mailbox
                        </span>
                        <span class="repoAuthor">
                            {{ repo.gitfaber }}
                        </span>
                        <span class="repoName">
                            / mynewrepository
                        </span>
                        <span class="repoAccess">
                            Public
                        </span>
                    </div>
                    <div class="repoHeaderItem">
                        <button class="repoBtn btn btn-light">
                            <span class="material-icons-outlined">
                                visibility
                            </span>
                            <span>
                                unwatch
                            </span>
                            <span class="material-icons">
                                arrow_drop_down
                            </span>
                            <span>
                                1
                            </span>
                        </button>
                        <button class="repoBtn btn btn-light">
                            <span class="material-icons-outlined">
                                star_outline
                            </span>
                            <span>
                                star
                            </span>
                            <span>
                                1
                            </span>
                        </button>
                        <button class="repoBtn btn btn-light">
                            <span class="material-icons">
                                device_hub
                            </span>
                            <span>
                                fork
                            </span>
                            <span>
                                0
                            </span>
                        </button>
                    </div>
                </div>
                <div class="repoActions">
                    <div class="repoActionsItem">
                        <span class="material-icons-outlined">
                            code
                        </span>
                        <span class="tab" @click="activeTab = 'code'">
                            Code
                        </span>
                    </div>
                    <div class="repoActionsItem">
                        <span class="material-icons-outlined">
                            adjust
                        </span>
                        <span class="tab" @click="activeTab = 'issues'">
                            Issues
                        </span>
                    </div>
                    <div class="repoActionsItem">
                        <span class="material-icons">
                            device_hub
                        </span>
                        <span class="tab" @click="activeTab = 'pull requests'">
                            Pull requests
                        </span>
                    </div>
                    <div class="repoActionsItem">
                        <span class="material-icons">
                            play_circle_outline
                        </span>
                        <span class="tab" @click="activeTab = 'actions'">
                            Actions
                        </span>
                    </div>
                    <div class="repoActionsItem">
                        <span class="material-icons-outlined">
                            insert_chart_outlined
                        </span>
                        <span class="tab" @click="activeTab = 'projects'">
                            Projects
                        </span>
                    </div>
                    <div class="repoActionsItem">
                        <span class="material-icons-outlined">
                            menu_book
                        </span>
                        <span class="tab" @click="activeTab = 'wiki'">
                            Wiki
                        </span>
                    </div>
                    <div class="repoActionsItem">
                        <span class="material-icons">
                            warning_amber
                        </span>
                        <span class="tab" @click="activeTab = 'security'">
                            Security
                        </span>
                    </div>
                    <div class="repoActionsItem">
                        <span class="material-icons">
                            stacked_line_chart
                        </span>
                        <span class="tab" @click="activeTab = 'insights'">
                            Insights
                        </span>
                    </div>
                    <div class="repoActionsItem">
                        <span class="material-icons-outlined">
                            settings
                        </span>
                        <span class="tab" @click="activeTab = 'settings'">
                            Settings
                        </span>
                    </div>
                </div>
            </div>
            <div class="repoBody" v-if="activeTab.includes('code')">
                <div>
                    <div class="repoMetaInfos">
                        <div class="repoMetaInfo">
                            <button class="btn btn-light repoBtn">
                                <span class="material-icons">
                                    device_hub
                                </span>
                                <span>
                                    master
                                </span>
                                <span class="material-icons">
                                    arrow_drop_down
                                </span>
                            </button>
                            <button class="btn btn-light repoBtn">
                                <span class="material-icons">
                                    device_hub
                                </span>
                                <span>
                                    1
                                </span>
                                <span>
                                    branch
                                </span>
                            </button>
                            <button class="btn btn-light repoBtn">
                                <span class="material-icons">
                                    lock_open
                                </span>
                                <span>
                                    0
                                </span>
                                <span>
                                     tags
                                </span>
                            </button>
                        </div>
                        <div class="repoMetaInfo">
                            <button class="btn btn-light repoBtn">
                                <span>
                                    Go to file
                                </span>
                            </button>
                            <button class="btn btn-light repoBtn">
                                <span>
                                    Add file
                                </span>
                                <span class="material-icons">
                                    arrow_drop_down
                                </span>
                            </button>
                            <button class="btn btn-success repoBtn">
                                <span>
                                    Code
                                </span>
                                <span class="material-icons">
                                    arrow_drop_down
                                </span>
                            </button>
                        </div>
                    </div>
                    <div class="repoContent">
                        <div class="repoContentHeader">
                            <div>
                                <div class="avatar">
                                    Г
                                </div>
                                <span class="gitfaber">
                                    {{ repo.gitfaber }}
                                </span>
                                <span>
                                    add statistics
                                </span>
                            </div>
                            <div>
                                <span>
                                    aad86bc
                                </span>
                                <span>
                                    18 hours ago
                                </span>
                                <div>
                                    <span class="material-icons">
                                        restore
                                    </span>
                                    <span>
                                        14 commits
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="repoFiles">
                            <div class="repoFile">
                                <div class="repoFilePreview">
                                    <span class="material-icons">
                                        folder
                                    </span>
                                    <span>
                                        Dialogs
                                    </span>
                                </div>
                                <div class="repoFileCommitName">
                                    <span>
                                        add statistics
                                    </span>
                                </div>
                                <div class="repoFileCommitDate">
                                    <span>
                                        18 hours ago
                                    </span>
                                </div>
                            </div>
                            <div class="repoFile">
                                <div class="repoFilePreview">
                                    <span class="material-icons">
                                        folder
                                    </span>
                                    <span>
                                        Dialogs
                                    </span>
                                </div>
                                <div class="repoFileCommitName">
                                    <span>
                                        add statistics
                                    </span>
                                </div>
                                <div class="repoFileCommitDate">
                                    <span>
                                        18 hours ago
                                    </span>
                                </div>
                            </div>
                            <div class="repoFile">
                                <div class="repoFilePreview">
                                    <span class="material-icons">
                                        folder
                                    </span>
                                    <span>
                                        Dialogs
                                    </span>
                                </div>
                                <div class="repoFileCommitName">
                                    <span>
                                        add statistics
                                    </span>
                                </div>
                                <div class="repoFileCommitDate">
                                    <span>
                                        18 hours ago
                                    </span>
                                </div>
                            </div>
                            <div class="repoFile">
                                <div class="repoFilePreview">
                                    <span class="material-icons">
                                        folder
                                    </span>
                                    <span>
                                        Dialogs
                                    </span>
                                </div>
                                <div class="repoFileCommitName">
                                    <span>
                                        add statistics
                                    </span>
                                </div>
                                <div class="repoFileCommitDate">
                                    <span>
                                        18 hours ago
                                    </span>
                                </div>
                            </div>
                            <div class="repoFile">
                                <div class="repoFilePreview">
                                    <span class="material-icons">
                                        folder
                                    </span>
                                    <span>
                                        Dialogs
                                    </span>
                                </div>
                                <div class="repoFileCommitName">
                                    <span>
                                        add statistics
                                    </span>
                                </div>
                                <div class="repoFileCommitDate">
                                    <span>
                                        18 hours ago
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="help">
                        <span>
                            Help people interested in this repository understand your project by adding a README.
                        </span>
                        <button class="btn btn-success">
                            Add a README
                        </button>
                    </div>
                </div>
                <div>
                    <div class="asideRepoAboutRow">
                        <span class="asideRepoAboutRowHeader">
                            About
                        </span>
                        <span class="material-icons-outlined">
                            settings
                        </span>
                    </div>
                    <span>
                        No description, website, or topics provided.
                    </span>
                    <hr />
                    <div class="asideRepoAboutRow">
                        <span class="asideRepoAboutRowHeader">
                            Releases
                        </span>
                    </div>
                    <span>
                        No releases published
                    </span>
                    <div class="asideRepoAboutRow">
                        <span class="asideRepoAction">
                            Create a new release
                        </span>
                    </div>
                    <hr />
                    <div class="asideRepoAboutRow">
                        <span class="asideRepoAboutRowHeader">
                            Packages
                        </span>
                    </div>
                    <span>
                        No packages published
                    </span>
                    <div class="asideRepoAboutRow">
                        <span class="asideRepoAction">
                            Publish your first package
                        </span>
                    </div>
                    <hr />
                    <div class="asideRepoAboutRow">
                        <span class="asideRepoAboutRowHeader">
                            Languages
                        </span>
                    </div>
                    <div class="scaleOfLanguages">

                    </div>
                    <div>
                        <div class="language">
                            <div class="marker">
                            </div>
                            <span>
                                Html
                            </span>
                            <span>
                                73.7%
                            </span>
                        </div>
                        <div class="language">
                            <div class="marker">
                            </div>
                            <span>
                                Vue.js
                            </span>
                            <span>
                                26.3%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="repoBody" v-else-if="activeTab.includes('issues')">
                
            </div>
            <div class="repoBody" v-else-if="activeTab.includes('pull requests')">
                
            </div>
            <div class="repoBody" v-else-if="activeTab.includes('actions')">
                
            </div>
            <div class="repoBody" v-else-if="activeTab.includes('projects')">
                
            </div>
            <div class="repoBody" v-else-if="activeTab.includes('wiki')">
                
            </div>
            <div class="securityBody" v-else-if="activeTab.includes('security')">
                <div class="securityBody">
                    <div class="securityAside">
                        <span :class="{ securityAsideItemActive: securityTab.includes('overview') }" @click="securityTab = 'overview'">
                            <div v-if="securityTab.includes('overview')" class="securityAsideLineItem">

                            </div>
                            Overview
                        </span>
                        <span :class="{ securityAsideItemActive: securityTab.includes('security policy') }" @click="securityTab = 'security policy'">
                            <div v-if="securityTab.includes('security policy')" class="securityAsideLineItem">

                            </div>
                            Security policy
                        </span>
                        <span :class="{ securityAsideItemActive: securityTab.includes('security advisories') }" @click="securityTab = 'security advisories'">
                            <div v-if="securityTab.includes('security advisories')" class="securityAsideLineItem">

                            </div>
                            Security advisories
                        </span>
                        <span :class="{ securityAsideItemActive: securityTab.includes('dependabot alerts') }" @click="securityTab = 'dependabot alerts'">
                            <div v-if="securityTab.includes('dependabot alerts')" class="securityAsideLineItem">

                            </div>
                            Dependabot alerts
                        </span>
                        <span :class="{ securityAsideItemActive: securityTab.includes('code scanning alerts') }" @click="securityTab = 'code scanning alerts'">
                            <div v-if="securityTab.includes('code scanning alerts')" class="securityAsideLineItem">

                            </div>
                            Code scanning alerts
                        </span>
                    </div>
                    <div v-if="securityTab.includes('overview')" class="securityMain">
                        <h4>
                            Security overview
                        </h4>
                        <div class="securityOverviewBlock">
                            <div class="securityOverviewBlockColumn">
                                <div class="securityOverviewBlockRow">
                                    <div class="marker">

                                    </div>
                                    <span>
                                        Security policy
                                    </span>
                                </div>
                                <span>
                                    Define how users should report security vulnerabilities for this repository
                                </span>
                            </div>
                            <button class="btn btn-light">
                                Set up a security policy
                            </button>
                        </div>
                        <div class="securityOverviewBlock">
                            <div class="securityOverviewBlockColumn">
                                <div class="securityOverviewBlockRow">
                                    <div class="marker">

                                    </div>
                                    <span>
                                        Security advisories
                                    </span>
                                </div>
                                <span>
                                    View or disclose security advisories for this repository
                                </span>
                            </div>
                            <button class="btn btn-light">
                                View security advisories
                            </button>
                        </div>
                        <div class="securityOverviewBlock">
                            <div class="securityOverviewBlockColumn">
                                <div class="securityOverviewBlockRow">
                                    <div class="marker">

                                    </div>
                                    <span>
                                        Dependabot alerts
                                    </span>
                                </div>
                                <span>
                                    Get notified when one of your dependencies has a vulnerability
                                </span>
                            </div>
                            <button class="btn btn-light">
                                Enable dependabot alerts
                            </button>
                        </div>
                        <div class="securityOverviewBlock">
                            <div class="securityOverviewBlockColumn">
                                <div class="securityOverviewBlockRow">
                                    <div class="marker">

                                    </div>
                                    <span>
                                        Code scanning alerts
                                    </span>
                                </div>
                                <span>
                                    Automatically detect common vulnerability and coding errors
                                </span>
                            </div>
                            <button class="btn btn-light">
                                Set up a code scanning
                            </button>
                        </div>
                        
                    </div>
                    <div v-else-if="securityTab.includes('security policy')" class="securityMain">
                        <div class="securityPolicyBlock">
                            <span class="material-icons">
                                vpn_key
                            </span>
                            <h4>
                                Set up a security policy
                            </h4>
                            <span>
                                Help your community understand how to securely report security vulnerabilities for your project.
                            </span>
                            <button class="btn btn-success">
                                Start setup
                            </button>
                        </div>
                    </div>
                    <div v-else-if="securityTab.includes('security advisories')" class="securityMain">
                        <div class="securityAdvisoriesHeader">
                            <h4>
                                Security Advisories
                            </h4>
                            <button class="btn btn-success">
                                New draft security advisory
                            </button>
                        </div>
                        <p>
                            Privately discuss, fix, and publish information about security vulnerabilities in your repository's code.
                        </p>
                        <div class="securityPolicyBlock">
                            <span class="material-icons-outlined">
                                gpp_maybe
                            </span>
                            <h4>
                                There aren’t any draft security advisories
                            </h4>
                        </div>
                    </div>
                    <div v-else-if="securityTab.includes('dependabot alerts')" class="securityMain">
                        <h4>
                            Dependabot alerts
                        </h4>
                        <div class="dependabotAlertsBlock">
                            <span class="material-icons">
                                warning_amber
                            </span>
                            <h4>
                                Dependabot alerts are disabled.
                            </h4>
                            <span>
                                To receive Dependabot alerts, you must first enable Dependabot alerts in this repository’s settings.
                            </span>
                        </div>
                        <span>
                            Dependabot alerts surface known security vulnerabilities in some dependency manifest files. Dependabot security updates automatically keep your application up-to-date by updating dependencies in response to these alerts. Dependabot version updates can also help keep dependencies updated.
                        </span>
                    </div>
                    <div v-else-if="securityTab.includes('code scanning alerts')" class="securityMain">
                        <h4>
                            Security overview
                        </h4>
                        <div class="securityOverviewBlock">
                            <div class="securityOverviewBlockColumn">
                                <div class="securityOverviewBlockRow">
                                    <div class="marker">

                                    </div>
                                    <span>
                                        Security policy
                                    </span>
                                </div>
                                <span>
                                    Define how users should report security vulnerabilities for this repository
                                </span>
                            </div>
                            <button class="btn btn-light">
                                Set up a security policy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="repoBody" v-else-if="activeTab.includes('insights')">
                <div class="securityBody">
                    <div class="securityAside">
                        <span :class="{ securityAsideItemActive: securityTab.includes('overview') }" @click="securityTab = 'overview'">
                            <div v-if="ingsightsTab.includes('pulse')" class="securityAsideLineItem">

                            </div>
                            Pulse
                        </span>
                        <span :class="{ securityAsideItemActive: securityTab.includes('security policy') }" @click="securityTab = 'security policy'">
                            <div v-if="securityTab.includes('contributors')" class="securityAsideLineItem">

                            </div>
                            Contributors
                        </span>
                        <span :class="{ securityAsideItemActive: securityTab.includes('security advisories') }" @click="securityTab = 'security advisories'">
                            <div v-if="securityTab.includes('community')" class="securityAsideLineItem">

                            </div>
                            Community
                        </span>
                        <span :class="{ securityAsideItemActive: securityTab.includes('dependabot alerts') }" @click="securityTab = 'dependabot alerts'">
                            <div v-if="securityTab.includes('traffic')" class="securityAsideLineItem">

                            </div>
                            Traffic
                        </span>
                        <span :class="{ securityAsideItemActive: securityTab.includes('code scanning alerts') }" @click="securityTab = 'code scanning alerts'">
                            <div v-if="securityTab.includes('commits')" class="securityAsideLineItem">

                            </div>
                            Commits
                        </span>
                        <span :class="{ securityAsideItemActive: securityTab.includes('code scanning alerts') }" @click="securityTab = 'code scanning alerts'">
                            <div v-if="securityTab.includes('code frequency')" class="securityAsideLineItem">

                            </div>
                            Code frequency
                        </span>
                        <span :class="{ securityAsideItemActive: securityTab.includes('code scanning alerts') }" @click="securityTab = 'code scanning alerts'">
                            <div v-if="securityTab.includes('dependency graph')" class="securityAsideLineItem">

                            </div>
                            Dependency graph
                        </span>
                        <span :class="{ securityAsideItemActive: securityTab.includes('code scanning alerts') }" @click="ingsightsTab = 'network'">
                            <div v-if="securityTab.includes('network')" class="securityAsideLineItem">

                            </div>
                            Network
                        </span>
                        <span :class="{ securityAsideItemActive: securityTab.includes('code scanning alerts') }" @click="ingsightsTab = 'forks'">
                            <div v-if="securityTab.includes('forks')" class="securityAsideLineItem">

                            </div>
                            Forks
                        </span>
                    </div>
                    <div v-if="insightTab.includes('pulse')" class="securityMain">
                        <h4>
                            october 14, 2021 – october 21, 2021
                        </h4>
                        <div class="securityOverviewBlock">
                            <div class="securityOverviewBlockColumn">
                                <div class="securityOverviewBlockRow">
                                    <div class="marker">

                                    </div>
                                    <span>
                                        Security policy
                                    </span>
                                </div>
                                <span>
                                    Define how users should report security vulnerabilities for this repository
                                </span>
                            </div>
                            <button class="btn btn-light">
                                Set up a security policy
                            </button>
                        </div>
                        <div class="securityOverviewBlock">
                            <div class="securityOverviewBlockColumn">
                                <div class="securityOverviewBlockRow">
                                    <div class="marker">

                                    </div>
                                    <span>
                                        Security advisories
                                    </span>
                                </div>
                                <span>
                                    View or disclose security advisories for this repository
                                </span>
                            </div>
                            <button class="btn btn-light">
                                View security advisories
                            </button>
                        </div>
                        <div class="securityOverviewBlock">
                            <div class="securityOverviewBlockColumn">
                                <div class="securityOverviewBlockRow">
                                    <div class="marker">

                                    </div>
                                    <span>
                                        Dependabot alerts
                                    </span>
                                </div>
                                <span>
                                    Get notified when one of your dependencies has a vulnerability
                                </span>
                            </div>
                            <button class="btn btn-light">
                                Enable dependabot alerts
                            </button>
                        </div>
                        <div class="securityOverviewBlock">
                            <div class="securityOverviewBlockColumn">
                                <div class="securityOverviewBlockRow">
                                    <div class="marker">

                                    </div>
                                    <span>
                                        Code scanning alerts
                                    </span>
                                </div>
                                <span>
                                    Automatically detect common vulnerability and coding errors
                                </span>
                            </div>
                            <button class="btn btn-light">
                                Set up a code scanning
                            </button>
                        </div>
                        
                    </div>
                    <div v-else-if="insightsTab.includes('contributors')" class="securityMain">
                        <div class="securityPolicyBlock">
                            <span class="material-icons">
                                vpn_key
                            </span>
                            <h4>
                                Set up a security policy
                            </h4>
                            <span>
                                Help your community understand how to securely report security vulnerabilities for your project.
                            </span>
                            <button class="btn btn-success">
                                Start setup
                            </button>
                        </div>
                    </div>
                    <div v-else-if="insightsTab.includes('community')" class="securityMain">
                        <div class="securityAdvisoriesHeader">
                            <h4>
                                Community profile
                            </h4>
                            <button class="btn btn-success">
                                New draft security advisory
                            </button>
                        </div>
                        <p>
                            Privately discuss, fix, and publish information about security vulnerabilities in your repository's code.
                        </p>
                        <div class="securityPolicyBlock">
                            <span class="material-icons-outlined">
                                gpp_maybe
                            </span>
                            <h4>
                                There aren’t any draft security advisories
                            </h4>
                        </div>
                    </div>
                    <div v-else-if="insightsTab.includes('traffic')" class="securityMain">
                        <h4>
                            Network graph
                        </h4>
                        <div class="dependabotAlertsBlock">
                            <span class="material-icons">
                                warning_amber
                            </span>
                            <h4>
                                Dependabot alerts are disabled.
                            </h4>
                            <span>
                                To receive Dependabot alerts, you must first enable Dependabot alerts in this repository’s settings.
                            </span>
                        </div>
                        <span>
                            Dependabot alerts surface known security vulnerabilities in some dependency manifest files. Dependabot security updates automatically keep your application up-to-date by updating dependencies in response to these alerts. Dependabot version updates can also help keep dependencies updated.
                        </span>
                    </div>
                    <div v-else-if="insightsTab.includes('commits')" class="securityMain">
                        <h4>
                            Network graph
                        </h4>
                        <div class="dependabotAlertsBlock">
                            <span class="material-icons">
                                warning_amber
                            </span>
                            <h4>
                                Dependabot alerts are disabled.
                            </h4>
                            <span>
                                To receive Dependabot alerts, you must first enable Dependabot alerts in this repository’s settings.
                            </span>
                        </div>
                        <span>
                            Dependabot alerts surface known security vulnerabilities in some dependency manifest files. Dependabot security updates automatically keep your application up-to-date by updating dependencies in response to these alerts. Dependabot version updates can also help keep dependencies updated.
                        </span>
                    </div>
                    <div v-else-if="insightsTab.includes('code frequency')" class="securityMain">
                        <h4>
                            Network graph
                        </h4>
                        <div class="dependabotAlertsBlock">
                            <span class="material-icons">
                                warning_amber
                            </span>
                            <h4>
                                Dependabot alerts are disabled.
                            </h4>
                            <span>
                                To receive Dependabot alerts, you must first enable Dependabot alerts in this repository’s settings.
                            </span>
                        </div>
                        <span>
                            Dependabot alerts surface known security vulnerabilities in some dependency manifest files. Dependabot security updates automatically keep your application up-to-date by updating dependencies in response to these alerts. Dependabot version updates can also help keep dependencies updated.
                        </span>
                    </div>
                    <div v-else-if="insightsTab.includes('dependency graph')" class="securityMain">
                        <h4>
                            Network graph
                        </h4>
                        <div class="dependabotAlertsBlock">
                            <span class="material-icons">
                                warning_amber
                            </span>
                            <h4>
                                Dependabot alerts are disabled.
                            </h4>
                            <span>
                                To receive Dependabot alerts, you must first enable Dependabot alerts in this repository’s settings.
                            </span>
                        </div>
                        <span>
                            Dependabot alerts surface known security vulnerabilities in some dependency manifest files. Dependabot security updates automatically keep your application up-to-date by updating dependencies in response to these alerts. Dependabot version updates can also help keep dependencies updated.
                        </span>
                    </div>
                    <div v-else-if="insightsTab.includes('network')" class="securityMain">
                        <h4>
                            Network graph
                        </h4>
                        <div class="dependabotAlertsBlock">
                            <span class="material-icons">
                                warning_amber
                            </span>
                            <h4>
                                Dependabot alerts are disabled.
                            </h4>
                            <span>
                                To receive Dependabot alerts, you must first enable Dependabot alerts in this repository’s settings.
                            </span>
                        </div>
                        <span>
                            Dependabot alerts surface known security vulnerabilities in some dependency manifest files. Dependabot security updates automatically keep your application up-to-date by updating dependencies in response to these alerts. Dependabot version updates can also help keep dependencies updated.
                        </span>
                    </div>
                    <div v-else-if="ingsightsTab.includes('forks')" class="securityMain">
                        <h4>
                            Security overview
                        </h4>
                        <div class="securityOverviewBlock">
                            <div class="securityOverviewBlockColumn">
                                <div class="securityOverviewBlockRow">
                                    <div class="marker">

                                    </div>
                                    <span>
                                        Security policy
                                    </span>
                                </div>
                                <span>
                                    Define how users should report security vulnerabilities for this repository
                                </span>
                            </div>
                            <button class="btn btn-light">
                                Set up a security policy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="repoBody" v-else-if="activeTab.includes('settings')">
                <div class="securityBody">
                    <div class="securityAside">
                        <span :class="{ securityAsideItemActive: securityTab.includes('overview') }" @click="securityTab = 'overview'">
                            <div v-if="settingsTab.includes('options')" class="securityAsideLineItem">

                            </div>
                            Options
                        </span>
                        <span :class="{ securityAsideItemActive: securityTab.includes('security policy') }" @click="securityTab = 'security policy'">
                            <div v-if="settingsTab.includes('manage access')" class="securityAsideLineItem">

                            </div>
                            Manage access
                        </span>
                        <span :class="{ securityAsideItemActive: securityTab.includes('security advisories') }" @click="securityTab = 'security advisories'">
                            <div v-if="settingsTab.includes('security and analysis')" class="securityAsideLineItem">

                            </div>
                            Security and analysis
                        </span>
                        <span :class="{ securityAsideItemActive: securityTab.includes('dependabot alerts') }" @click="securityTab = 'dependabot alerts'">
                            <div v-if="settingsTab.includes('branches')" class="securityAsideLineItem">

                            </div>
                            Branches
                        </span>
                        <span :class="{ securityAsideItemActive: securityTab.includes('code scanning alerts') }" @click="securityTab = 'code scanning alerts'">
                            <div v-if="settingsTab.includes('webhooks')" class="securityAsideLineItem">

                            </div>
                            Webhooks
                        </span>
                        <span :class="{ securityAsideItemActive: securityTab.includes('code scanning alerts') }" @click="securityTab = 'code scanning alerts'">
                            <div v-if="settingsTab.includes('notifications')" class="securityAsideLineItem">

                            </div>
                            Notifications
                        </span>
                        <span :class="{ securityAsideItemActive: securityTab.includes('code scanning alerts') }" @click="securityTab = 'code scanning alerts'">
                            <div v-if="settingsTab.includes('integrations')" class="securityAsideLineItem">

                            </div>
                            Integrations
                        </span>
                        <span :class="{ securityAsideItemActive: securityTab.includes('code scanning alerts') }" @click="securityTab = 'code scanning alerts'">
                            <div v-if="settingsTab.includes('deploy keys')" class="securityAsideLineItem">

                            </div>
                            Deploy keys
                        </span>
                        <span :class="{ securityAsideItemActive: securityTab.includes('code scanning alerts') }" @click="securityTab = 'code scanning alerts'">
                            <div v-if="settingsTab.includes('actions')" class="securityAsideLineItem">

                            </div>
                            Actions
                        </span>
                        <span :class="{ securityAsideItemActive: securityTab.includes('code scanning alerts') }" @click="securityTab = 'code scanning alerts'">
                            <div v-if="settingsTab.includes('environments')" class="securityAsideLineItem">

                            </div>
                            Environments
                        </span>
                        <span :class="{ securityAsideItemActive: securityTab.includes('code scanning alerts') }" @click="securityTab = 'code scanning alerts'">
                            <div v-if="settingsTab.includes('secrets')" class="securityAsideLineItem">

                            </div>
                            Secrets
                        </span>
                        <span :class="{ securityAsideItemActive: securityTab.includes('code scanning alerts') }" @click="securityTab = 'code scanning alerts'">
                            <div v-if="settingsTab.includes('pages')" class="securityAsideLineItem">

                            </div>
                            Pages
                        </span>
                        <span :class="{ securityAsideItemActive: securityTab.includes('code scanning alerts') }" @click="securityTab = 'code scanning alerts'">
                            <div v-if="settingsTab.includes('moderation settings alerts')" class="securityAsideLineItem">

                            </div>
                            Moderation settings
                        </span>
                    </div>
                    <div v-if="securityTab.includes('overview')" class="securityMain">
                        <h4>
                            Security overview
                        </h4>
                        <div class="securityOverviewBlock">
                            <div class="securityOverviewBlockColumn">
                                <div class="securityOverviewBlockRow">
                                    <div class="marker">

                                    </div>
                                    <span>
                                        Security policy
                                    </span>
                                </div>
                                <span>
                                    Define how users should report security vulnerabilities for this repository
                                </span>
                            </div>
                            <button class="btn btn-light">
                                Set up a security policy
                            </button>
                        </div>
                        <div class="securityOverviewBlock">
                            <div class="securityOverviewBlockColumn">
                                <div class="securityOverviewBlockRow">
                                    <div class="marker">

                                    </div>
                                    <span>
                                        Security advisories
                                    </span>
                                </div>
                                <span>
                                    View or disclose security advisories for this repository
                                </span>
                            </div>
                            <button class="btn btn-light">
                                View security advisories
                            </button>
                        </div>
                        <div class="securityOverviewBlock">
                            <div class="securityOverviewBlockColumn">
                                <div class="securityOverviewBlockRow">
                                    <div class="marker">

                                    </div>
                                    <span>
                                        Dependabot alerts
                                    </span>
                                </div>
                                <span>
                                    Get notified when one of your dependencies has a vulnerability
                                </span>
                            </div>
                            <button class="btn btn-light">
                                Enable dependabot alerts
                            </button>
                        </div>
                        <div class="securityOverviewBlock">
                            <div class="securityOverviewBlockColumn">
                                <div class="securityOverviewBlockRow">
                                    <div class="marker">

                                    </div>
                                    <span>
                                        Code scanning alerts
                                    </span>
                                </div>
                                <span>
                                    Automatically detect common vulnerability and coding errors
                                </span>
                            </div>
                            <button class="btn btn-light">
                                Set up a code scanning
                            </button>
                        </div>
                        
                    </div>
                    <div v-else-if="securityTab.includes('security policy')" class="securityMain">
                        <div class="securityPolicyBlock">
                            <span class="material-icons">
                                vpn_key
                            </span>
                            <h4>
                                Set up a security policy
                            </h4>
                            <span>
                                Help your community understand how to securely report security vulnerabilities for your project.
                            </span>
                            <button class="btn btn-success">
                                Start setup
                            </button>
                        </div>
                    </div>
                    <div v-else-if="securityTab.includes('security advisories')" class="securityMain">
                        <div class="securityAdvisoriesHeader">
                            <h4>
                                Security Advisories
                            </h4>
                            <button class="btn btn-success">
                                New draft security advisory
                            </button>
                        </div>
                        <p>
                            Privately discuss, fix, and publish information about security vulnerabilities in your repository's code.
                        </p>
                        <div class="securityPolicyBlock">
                            <span class="material-icons-outlined">
                                gpp_maybe
                            </span>
                            <h4>
                                There aren’t any draft security advisories
                            </h4>
                        </div>
                    </div>
                    <div v-else-if="securityTab.includes('dependabot alerts')" class="securityMain">
                        <h4>
                            Dependabot alerts
                        </h4>
                        <div class="dependabotAlertsBlock">
                            <span class="material-icons">
                                warning_amber
                            </span>
                            <h4>
                                Dependabot alerts are disabled.
                            </h4>
                            <span>
                                To receive Dependabot alerts, you must first enable Dependabot alerts in this repository’s settings.
                            </span>
                        </div>
                        <span>
                            Dependabot alerts surface known security vulnerabilities in some dependency manifest files. Dependabot security updates automatically keep your application up-to-date by updating dependencies in response to these alerts. Dependabot version updates can also help keep dependencies updated.
                        </span>
                    </div>
                    <div v-else-if="securityTab.includes('code scanning alerts')" class="securityMain">
                        <h4>
                            Security overview
                        </h4>
                        <div class="securityOverviewBlock">
                            <div class="securityOverviewBlockColumn">
                                <div class="securityOverviewBlockRow">
                                    <div class="marker">

                                    </div>
                                    <span>
                                        Security policy
                                    </span>
                                </div>
                                <span>
                                    Define how users should report security vulnerabilities for this repository
                                </span>
                            </div>
                            <button class="btn btn-light">
                                Set up a security policy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

import * as jwt from 'jsonwebtoken'

export default {
    name: "Repo",
    data(){
        return {
            activeTab: 'code',
            securityTab: 'overview',
            ingsightsTab: 'pulse',
            settingsTab: 'options',
            repo: {},
            token: window.localStorage.getItem("gitfabtoken")
        }
    },
    mounted(){
    jwt.verify(this.token, 'gitfabsecret', (err, decoded) => {
      if(err) {
        this.$router.push({ name: 'StartPage' })
      } else {
        fetch(`http://localhost:4000/api/repos/get/?repoid=${this.$route.query.repoid}`, {
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
                    console.log(`JSON.parse(result): ${JSON.parse(result).repo.gitfaber}`)
                    if(JSON.parse(result).status.includes('OK')){
                        this.repo = JSON.parse(result).repo
                    }
                })
            }
        })
    },
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
    
    .repoAuthor {
        color: rgb(0, 0, 255);
    }

    .repoName {
        color: rgb(0, 0, 255);
        font-weight: bolder;
    }

    .repoAccess {
        border-radius: 35px;
        border: 1px solid rgb(200, 200, 200);
        padding: 2px 10px;
        font-size: 10px;
    }

    .repoHeaderItem {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .repoBtn {
        margin: 15px;
        height: 35px;
        width: 125px;
        border: 1px solid rgb(150, 150, 150);
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .repoHeader {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .repoActions {
        display: flex;
        justify-content: space-around;
        width: 75%;
        margin: auto;
    }
    
    .repoActionsItem {
        display: flex;
        justify-content: space-around;
    }

    .repoActionsItem > span {
        margin: 0px 2px;
    }

    .aboutRepo {
        width: 25%;
    }

    .repoMetaInfos {
        box-sizing: border-box;
        padding: 25px;
        width: 65%;
        display: flex;
        justify-content: space-between;
    }

    .repoMetaInfo {
        display: flex;
        justify-content: center;
    }

    .repoBody {
        margin-top: 35px;
        display: flex;
        justify-content: center;
    }

    .repoContent {
        border: 1px solid rgb(200, 200, 200);
        border-radius: 8px;
        width: 95%;
        margin: 0px 15px;
    }

    .repoContentHeader {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 25px;
        background-color: rgb(230, 230, 230);
    }

    .repoFiles {
        display: flex;
        flex-direction: column;
    }

    .repoFile {
        display: flex;
        justify-content: space-between;
        height: 50px;
        border-top: 1px solid rgb(200, 200, 200);
    }

    .repoFilePreview, .repoFileCommitName, .repoFileCommitDate {
        display: flex;
        align-items: center;
    }

    .repoFilePreview > *, .repoFileCommitName > *, .repoFileCommitDate > * {
        margin: 5px;
    }

    .repoFileCommitName {
        
    }

    .repoFileCommitDate {
        
    }

    .avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        width: 25px;
        height: 25px;
        background-color: rgb(0, 155, 0);
        color: rgb(255, 255, 255);
    }

    .repoContentHeader > * {
        display: flex;
        justify-content: space-around;
        width: 35%;
        align-items: center;
    }
    .repoContentHeader > * > * {
        margin: 0px 5px;
    }

    .help {
        border: 1px solid rgb(0, 150, 255);
        background-color:rgb(200, 220, 255);
        border-radius: 7px;
        width: 900px;
        margin: 15px auto;
        height: 75px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .asideRepoAboutRow {
        display: flex;
        justify-content: space-around;
    }

    .asideRepoAboutRowHeader {
        font-weight: bolder;
    }

    .asideRepoAction {
        cursor: pointer;
        color: rgb(0, 0, 255);
    }

    .scaleOfLanguages {
        border-radius: 10px;
        background-color: rgb(0, 150, 0);
        height: 10px;
        width: 100%;
    }

    .marker {
        border-radius: 100%;
        width: 10px;
        height: 10px;
        background-color: rgb(0, 150, 0);
        margin-right: 15px;
    }
    
    .language {
        display: flex;
        align-items: center;
    }

    .tab {
        cursor: pointer;
    }

    .securityAside {
        width: 50%;    
        display: flex;
        flex-direction: column;
        border: 1px solid rgb(200, 200, 200);
        background-color: rgb(245, 245, 245);
        border-radius: 7px;
        margin: 35px;
    }

    .securityAside > * {
        border-top: 1px solid rgb(200, 200, 200);
        height: 50px;
        display: flex;
        box-sizing: border-box;
        padding: 15px;
        align-items: center;
    }

    .securityAside > *.securityAsideItemActive {
        background-color: rgb(255, 255, 255);
        border-radius: 7px;
    }

    .securityAsideLineItem {
        border-left: 2px solid rgb(150, 50, 0);
        height: 50px;
        width: 5px;
    }

    .securityMain {
        width: 100%;
    }

    .securityOverviewBlock {
        border: 1px solid rgb(200, 200, 200);
        width: 150%;
        box-sizing: border-box;
        padding: 15px;
        border-radius: 7px;
        display: flex;
        justify-content: space-between;

    }

    .securityOverviewBlockRow {
        display: flex;
        align-items: center;
    }

    .securityOverviewBlockColumn {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .securityBody {
        display: flex;
    }

    .securityPolicyBlock {
        border: 1px solid rgb(200, 200, 200);
        width: 150%;
        height: 250px;
        box-sizing: border-box;
        padding: 15px;
        border-radius: 7px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .dependabotAlertsBlock {
        border: 1px solid rgb(200, 200, 200);
        width: 95%;
        height: 250px;
        box-sizing: border-box;
        padding: 15px;
        border-radius: 7px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .securityAdvisoriesHeader {
        display: flex;
        justify-content: space-between;
        width: 150%;
    }

    .gitfaber {
        width: 150px;
        height: 100%;
        word-break: break-word;
    }

</style>
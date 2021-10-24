<template>
    <div :style="`background-color: ${this.gitfaber.appearance.includes('light default') ? 'rgb(255, 255, 255)' : this.gitfaber.appearance.includes('dark default') ? 'rgb(0, 0, 0)' : this.gitfaber.appearance.includes('dark dimmed') ? 'rgb(100, 100, 100)' : this.gitfaber.appearance.includes('dark high contrast') ? 'rgb(175, 175, 175)' : this.gitfaber.appearance.includes('dark colorblind') ? 'rgb(200, 200, 200)' : this.gitfaber.appearance.includes('light colorblind') ? 'rgb(235, 235, 235)' : 'rgb(255, 255, 255)'}; color: ${this.gitfaber.appearance.includes('light default') ? 'rgb(0, 0, 0)' : this.gitfaber.appearance.includes('dark default') ? 'rgb(255, 255, 255)' : this.gitfaber.appearance.includes('dark dimmed') ? 'rgb(215, 215, 215)' : this.gitfaber.appearance.includes('dark high contrast') ? 'rgb(125, 125, 125)' : this.gitfaber.appearance.includes('dark colorblind') ? 'rgb(75, 75, 75)' : this.gitfaber.appearance.includes('light colorblind') ? 'rgb(150, 150, 150)' : 'rgb(0, 0, 0)'};`">
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
                            / {{ repo.name }}
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
            <div class="" v-else-if="activeTab.includes('issues')">
                <div class="pullRequestsFilters">
                    <input placeholder="Filters" type="text" class="form-control w-50" />
                    <button class="btn btn-light">
                        <span>
                            Labels
                        </span>
                        <span>
                            9
                        </span>
                        <span>
                            Milestones
                        </span>
                        <span>
                            0
                        </span>
                    </button>
                    <button class="btn btn-success">
                        New pull request
                    </button>
                </div>
                <div class="pullRequestData">
                    <span class="material-icons-outlined">
                        device_hub
                    </span>
                    <span class="pullRequestDataHeader">
                        Welcome to issues!
                    </span>
                    <span class="pullRequestDataContent">
                        Issues are used to track todos, bugs, feature requests, and more. As issues are created, they’ll appear here in a searchable and filterable list. To get started, you should 
                        <span class="createBtn">
                            create an issue.
                        </span>
                    </span>
                </div>
                <p class="proTipRow">
                    <span class="material-icons-outlined">
                        tungsten
                    </span>
                    <span class="proTip">
                        ProTip!
                    </span>
                     What’s not been updated in a month: 
                    <span class="pullRequestsUpdated">
                        updated: 2021-09-21.
                    </span>
                </p>    
            </div>
            <div class="" v-else-if="activeTab.includes('pull requests')">
                <div class="pullRequestsFilters">
                    <input placeholder="Filters" type="text" class="form-control w-50" />
                    <button class="btn btn-light">
                        <span>
                            Labels
                        </span>
                        <span>
                            9
                        </span>
                        <span>
                            Milestones
                        </span>
                        <span>
                            0
                        </span>
                    </button>
                    <button class="btn btn-success">
                        New pull request
                    </button>
                </div>
                <div class="pullRequestData">
                    <span class="material-icons-outlined">
                        device_hub
                    </span>
                    <span class="pullRequestDataHeader">
                        Welcome to pull requests!
                    </span>
                    <span class="pullRequestDataContent">
                        Pull requests help you collaborate on code with other people. As pull requests are created, they’ll appear here in a searchable and filterable list. To get started, you should 
                        <span class="createBtn">
                            create a pull request.
                        </span>
                    </span>
                </div>
                <p class="proTipRow">
                    <span class="material-icons-outlined">
                        tungsten
                    </span>
                    <span class="proTip">
                        ProTip!
                    </span>
                     What’s not been updated in a month: 
                    <span class="pullRequestsUpdated">
                        updated: 2021-09-21.
                    </span>
                </p>    
            </div>
            <div class="" v-else-if="activeTab.includes('actions')">
                <h4>
                    Get started with GitHub Actions
                </h4>
                <p>
                    Build, test, and deploy your code. Make code reviews, branch management, and issue triaging work the way you want. Select a workflow template to get started.
                </p>
                <p>
                    Skip this and set up a workflow yourself 
                </p>
                <hr />
                <h5>
                    Workflows made for your repository
                </h5>
                <button class="btn btn-light w-25">
                    Suggested
                </button>
                <div class="automateEveryStepInYourProcessBlockParent">
                    <div class="automateEveryStepInYourProcessBlock">

                    </div>
                    <div class="automateEveryStepInYourProcessBlock">

                    </div>
                </div>
                <div class="automateEveryStepInYourProcessBlockParent">
                    <div class="automateEveryStepInYourProcessBlock">

                    </div>
                    <div class="automateEveryStepInYourProcessBlock">

                    </div>
                </div>
                <hr />
                <h4>
                    Deploy your code with these popular services
                </h4>
                <br class="clearer" />
                <div class="automateEveryStepInYourProcessBlockParent">
                    <div class="automateEveryStepInYourProcessBlock">

                    </div>
                    <div class="automateEveryStepInYourProcessBlock">

                    </div>
                    <div class="automateEveryStepInYourProcessBlock">

                    </div>
                </div>
                <div class="automateEveryStepInYourProcessBlockParent">
                    <div class="automateEveryStepInYourProcessBlock">

                    </div>
                    <div class="automateEveryStepInYourProcessBlock">

                    </div>
                    <div class="automateEveryStepInYourProcessBlock">

                    </div>
                </div>
                <div class="automateEveryStepInYourProcessBlockParentMultiple">
                    <div class="automateEveryStepInYourProcessBlock">

                    </div>
                    <div class="automateEveryStepInYourProcessBlock">

                    </div>
                </div>
                <hr />
                <h4>
                    Continuous integration workflows
                </h4>
                <br class="clearer" />
                <div class="automateEveryStepInYourProcessBlockParent">
                    <div class="automateEveryStepInYourProcessBlock">

                    </div>
                    <div class="automateEveryStepInYourProcessBlock">

                    </div>
                    <div class="automateEveryStepInYourProcessBlock">

                    </div>
                </div>
                <div class="automateEveryStepInYourProcessBlockParent">
                    <div class="automateEveryStepInYourProcessBlock">

                    </div>
                    <div class="automateEveryStepInYourProcessBlock">

                    </div>
                    <div class="automateEveryStepInYourProcessBlock">

                    </div>
                </div>
                <hr />
                <h4>
                    Automate every step in your process
                </h4>
                <br class="clearer" />
                <div class="automateEveryStepInYourProcessBlockParent">
                    <div class="automateEveryStepInYourProcessBlock">

                    </div>
                    <div class="automateEveryStepInYourProcessBlock">

                    </div>
                    <div class="automateEveryStepInYourProcessBlock">

                    </div>
                </div>
                <div class="automateEveryStepInYourProcessBlockParentLeft">
                    <div class="automateEveryStepInYourProcessBlock">

                    </div>
                </div>
                <hr />
                <h4 class="learnMoreAboutGitHubActionsTitle">
                    Learn more about GitHub Actions
                </h4>
                <div class="learnMoreAboutGitFabActions">
                    <div class="learnMoreAboutGitFabAction">
                        <div class="learnMoreAboutGitFabActionHeader">
                            <span class="learnMoreAboutGitFabActionHeaderTitle">
                                Getting started and core concepts
                            </span>
                            <span class="material-icons">
                                view_agenda
                            </span>
                        </div>
                        <span>
                            New to Actions? Start here. Learn the core concepts and how to get started.
                        </span>
                    </div>
                    <div class="learnMoreAboutGitFabAction">
                        <div class="learnMoreAboutGitFabActionHeader">
                            <span class="learnMoreAboutGitFabActionHeaderTitle">
                                Configuring and managing workflows
                            </span>
                            <span class="material-icons">
                                view_agenda
                            </span>
                        </div>
                        <span>
                            Create custom workflows to control your project's life cycle processes.
                        </span>
                    </div>
                    <div class="learnMoreAboutGitFabAction">
                        <div class="learnMoreAboutGitFabActionHeader">
                            <span class="learnMoreAboutGitFabActionHeaderTitle">
                                Language and framework guides
                            </span>
                            <span class="material-icons">
                                view_agenda
                            </span>
                        </div>
                        <span>
                            Guides for projects written in many programming languages.
                        </span>
                    </div>
                </div>
            </div>
            <div class="" v-else-if="activeTab.includes('projects')">
                <div class="projectsHeader">
                    <div class="projectsHeaderTitle">
                        <h3>
                            Organize your issues with project boards
                        </h3>
                        <span>
                            Did you know you can manage projects in the same place you keep your code? Set up a project board on GitHub to streamline and automate your workflow.
                        </span>
                    </div>
                    <div class="btns">
                        <button class="btn btn-light">
                            Learn more
                        </button>
                        <button class="btn btn-success">
                            Create project
                        </button>
                    </div>
                </div>
                <hr />
                <div class="projectsBody">
                    <div class="projectsRow">
                        <div class="project">
                            <span class="material-icons">
                                view_agenda
                            </span>
                            <span class="projectHeader">
                                Sort tasks
                            </span>
                            <span>
                                Add issues and pull requests to your board and prioritize them alongside note cards containing ideas or task lists.
                            </span>
                        </div>
                        <div class="project">
                            <span class="material-icons">
                                view_agenda
                            </span>
                            <span class="projectHeader">
                                Plan your project
                            </span>
                            <span>
                                Sort tasks into columns by status. You can label columns with status indicators like "To Do", "In Progress", and "Done".
                            </span>
                        </div>
                        <div class="project">
                            <span class="material-icons">
                                view_agenda
                            </span>
                            <span class="projectHeader">
                                Automate your workflow
                            </span>
                            <span>
                                Set up triggering events to save time on project management—we’ll move tasks into the right columns for you.
                            </span>
                        </div>
                    </div>
                    <div class="projectsRow">
                        <div class="project">
                            <span class="material-icons">
                                view_agenda
                            </span>
                            <span class="projectHeader">
                                Track progress
                            </span>
                            <span>
                                Keep track of everything happening in your project and see exactly what’s changed since the last time you looked.
                            </span>
                        </div>
                        <div class="project">
                            <span class="material-icons">
                                view_agenda
                            </span>
                            <span class="projectHeader">
                                Share status
                            </span>
                            <span>
                                Each card has a unique URL, making it easy to share and discuss individual tasks with your team.
                            </span>
                        </div>
                        <div class="project">
                            <span class="material-icons">
                                view_agenda
                            </span>
                            <span class="projectHeader">
                                Wrap up
                            </span>
                            <span>
                                After you wrap up your work, close your project board to remove it from your active projects list. On to the next project!
                            </span>
                        </div>
                    </div>
                </div>
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
                        <span :class="{ securityAsideItemActive: insightsTab.includes('pulse') }" @click="insightsTab = 'pulse'">
                            <div v-if="insightsTab.includes('pulse')" class="securityAsideLineItem">

                            </div>
                            Pulse
                        </span>
                        <span :class="{ securityAsideItemActive: insightsTab.includes('contributors') }" @click="insightsTab = 'contributors'">
                            <div v-if="insightsTab.includes('contributors')" class="securityAsideLineItem">

                            </div>
                            Contributors
                        </span>
                        <span :class="{ securityAsideItemActive: insightsTab.includes('community') }" @click="insightsTab = 'community'">
                            <div v-if="insightsTab.includes('community')" class="securityAsideLineItem">

                            </div>
                            Community
                        </span>
                        <span :class="{ securityAsideItemActive: insightsTab.includes('traffic') }" @click="insightsTab = 'traffic'">
                            <div v-if="insightsTab.includes('traffic')" class="securityAsideLineItem">

                            </div>
                            Traffic
                        </span>
                        <span :class="{ securityAsideItemActive: insightsTab.includes('commits') }" @click="insightsTab = 'commits'">
                            <div v-if="insightsTab.includes('commits')" class="securityAsideLineItem">

                            </div>
                            Commits
                        </span>
                        <span :class="{ securityAsideItemActive: insightsTab.includes('code frequency') }" @click="insightsTab = 'code frequency'">
                            <div v-if="insightsTab.includes('code frequency')" class="securityAsideLineItem">

                            </div>
                            Code frequency
                        </span>
                        <span :class="{ securityAsideItemActive: insightsTab.includes('dependency graph') }" @click="insightsTab = 'dependency graph'">
                            <div v-if="insightsTab.includes('dependency graph')" class="securityAsideLineItem">

                            </div>
                            Dependency graph
                        </span>
                        <span :class="{ securityAsideItemActive: insightsTab.includes('network') }" @click="insightsTab = 'network'">
                            <div v-if="insightsTab.includes('network')" class="securityAsideLineItem">

                            </div>
                            Network
                        </span>
                        <span :class="{ securityAsideItemActive: insightsTab.includes('forks') }" @click="insightsTab = 'forks'">
                            <div v-if="insightsTab.includes('forks')" class="securityAsideLineItem">

                            </div>
                            Forks
                        </span>
                    </div>
                    <div v-if="insightsTab.includes('pulse')" class="securityMain">
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
                            Dependency graph
                        </h4>
                        <div class="dependencyGraphTabs">
                            <span @click="dependencyGraphTab = 'dependencies'" :class="{ dependencyGraphActiveTab: dependencyGraphTab.includes('dependencies') }">
                                Dependencies
                            </span>
                            <span @click="dependencyGraphTab = 'dependents'" :class="{ dependencyGraphActiveTab: dependencyGraphTab.includes('dependents') }">
                                Dependents
                            </span>
                            <span @click="dependencyGraphTab = 'dependabot'" :class="{ dependencyGraphActiveTab: dependencyGraphTab.includes('dependabot') }">
                                Dependabot
                            </span>
                        </div>
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
                    <div v-else-if="insightsTab.includes('forks')" class="securityMain">
                        <div class="dependabotAlertsBlock">
                            <span class="material-icons">
                                device_hub
                            </span>
                            <h4>
                                No one has forked this repository yet.
                            </h4>
                            <span>
                                Forks are a great way to contribute to a repository. After forking a repository, you can send the original author a pull request.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="repoBody" v-else-if="activeTab.includes('settings')">
                <div class="securityBody">
                    <div class="securityAside">
                        <span :class="{ securityAsideItemActive: settingsTab.includes('options') }" @click="settingsTab = 'options'">
                            <div v-if="settingsTab.includes('options')" class="securityAsideLineItem">

                            </div>
                            Options
                        </span>
                        <span :class="{ securityAsideItemActive: settingsTab.includes('manage access') }" @click="settingsTab = 'manage access'">
                            <div v-if="settingsTab.includes('manage access')" class="securityAsideLineItem">

                            </div>
                            Manage access
                        </span>
                        <span :class="{ securityAsideItemActive: settingsTab.includes('security and analysis') }" @click="settingsTab = 'security and analysis'">
                            <div v-if="settingsTab.includes('security and analysis')" class="securityAsideLineItem">

                            </div>
                            Security and analysis
                        </span>
                        <span :class="{ securityAsideItemActive: securityTab.includes('dependabot alerts') }" @click="settingsTab = 'dependabot alerts'">
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
            insightsTab: 'pulse',
            dependencyGraphTab: 'dependencies',
            settingsTab: 'options',
            repo: {},
            gitfaber: {},
            token: window.localStorage.getItem("gitfabtoken")
        }
    },
    mounted(){
        jwt.verify(this.token, 'gitfabsecret', (err, decoded) => {
            if(err) {
            this.$router.push({ name: 'StartPage' })
            } else {
            // fetch(`https://gitfabric.herokuapp.com/api/repos/get/?repoid=${this.$route.query.repoid}`, {
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
                        this.gitfaber = JSON.parse(result).gitfaber
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

    .dependencyGraphTabs {
        display: flex;
        justify-content: space-around;
    }

    .dependencyGraphTabs > span {
        border-bottom: 1px solid rgb(200, 200, 200);
        box-sizing: border-box;
        padding: 15px;
        cursor: pointer;
    }

    .dependencyGraphActiveTab {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border: 1px solid rgb(200, 200, 200);
        border-bottom: none !important;
    }

    .projectsHeader {
        display: flex;
        justify-content: space-around;

    }
    
    .projectsBody {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 50px;
    }
    
    .projectsRow {
        display: flex;
        justify-content: space-around;
    }

    .project {
        margin: 15px;
        align-items: center;
        width: 55%;
        display: flex;
        flex-direction: column;
    }

    .projectHeader {
        font-weight: bolder;
    }

    .btns {
        display: flex;
        justify-content: space-between;
    }

    .btns > button {
        height: 35px;
        margin: 15px;
    }

    .projectsHeaderTitle {
        width: 50%;
    }

    .learnMoreAboutGitFabActions {
        display: flex;
        justify-content: space-around;
    }
    
    .learnMoreAboutGitFabAction {
        display: flex;
        box-sizing: border-box;
        padding: 15px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgb(235, 235, 235);
        width: 25%;
        height: 200px;
        border-radius: 8px;
    }

    .learnMoreAboutGitFabActionHeader {
        display: flex;
    }

    .learnMoreAboutGitFabActionHeaderTitle {
        font-weight: bolder;
        font-size: 18px;
    }

    .learnMoreAboutGitHubActionsTitle {
        text-align: center;
    }

    .automateEveryStepInYourProcessBlock {
        border-radius: 8px;
        width: 300px;
        height: 250px;
        border: 2px solid rgb(215, 215, 215);
        margin: 25px;
    }

    .automateEveryStepInYourProcessBlock:last-child, .clearer {
        clear: both;
    }

    .automateEveryStepInYourProcessBlockParent {
        display: flex;
        justify-content: space-around;
    }

    .automateEveryStepInYourProcessBlockParentLeft {
        width: 93%;
        display: flex;
        justify-content: flex-start;
        margin: auto;
    }

    .automateEveryStepInYourProcessBlockParentMultiple {
        width: 67%;
        display: flex;
        justify-content: space-around;
        
    }

    .pullRequestsUpdated {
        color: rgb(0, 0, 255);
    }

    .proTip {
        font-weight: bolder;
    }

    .pullRequestsFilters {
        display: flex;
        justify-content: space-around;
    }

    .pullRequestData {
        box-sizing: border-box;
        padding: 25px;
        margin: 35px auto;
        height: 350px;
        width: 75%;
        border: 1px solid rgb(215, 215, 215);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .pullRequestDataHeader {
        font-weight: bolder;
    }

    .createBtn {
        color: rgb(0, 0, 255);
        cursor: pointer;
    }

    .pullRequestDataContent {
        text-align: center;
        width: 65%;
    }

    .proTipRow {
        text-align: center;
    }

</style>
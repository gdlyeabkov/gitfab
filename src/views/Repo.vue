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
                            {{ repo.access }}
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
                    <div :class="{ repoActionsItem: true, repoActionsItemActive: activeTab.includes('code') }">
                        <span class="material-icons-outlined">
                            code
                        </span>
                        <span class="tab" @click="activeTab = 'code'">
                            Code
                        </span>
                    </div>
                    <div :class="{ repoActionsItem: true, repoActionsItemActive: activeTab.includes('issues') }">
                        <span class="material-icons-outlined">
                            adjust
                        </span>
                        <span class="tab" @click="activeTab = 'issues'">
                            Issues
                        </span>
                    </div>
                    <div :class="{ repoActionsItem: true, repoActionsItemActive: activeTab.includes('pull requests') }">
                        <span class="material-icons">
                            device_hub
                        </span>
                        <span class="tab" @click="activeTab = 'pull requests'">
                            Pull requests
                        </span>
                    </div>
                    <div :class="{ repoActionsItem: true, repoActionsItemActive: activeTab.includes('actions') }">
                        <span class="material-icons">
                            play_circle_outline
                        </span>
                        <span class="tab" @click="activeTab = 'actions'">
                            Actions
                        </span>
                    </div>
                    <div :class="{ repoActionsItem: true, repoActionsItemActive: activeTab.includes('projects') }">
                        <span class="material-icons-outlined">
                            insert_chart_outlined
                        </span>
                        <span class="tab" @click="activeTab = 'projects'">
                            Projects
                        </span>
                    </div>
                    <div :class="{ repoActionsItem: true, repoActionsItemActive: activeTab.includes('wiki') }">
                        <span class="material-icons-outlined">
                            menu_book
                        </span>
                        <span class="tab" @click="activeTab = 'wiki'">
                            Wiki
                        </span>
                    </div>
                    <div :class="{ repoActionsItem: true, repoActionsItemActive: activeTab.includes('security') }">
                        <span class="material-icons">
                            warning_amber
                        </span>
                        <span class="tab" @click="activeTab = 'security'">
                            Security
                        </span>
                    </div>
                    <div :class="{ repoActionsItem: true, repoActionsItemActive: activeTab.includes('insights') }">
                        <span class="material-icons">
                            stacked_line_chart
                        </span>
                        <span class="tab" @click="activeTab = 'insights'">
                            Insights
                        </span>
                    </div>
                    <div :class="{ repoActionsItem: true, repoActionsItemActive: activeTab.includes('settings') }">
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
                            <button  @click="togglerBranchesContextMenu = true" id="branchesContextMenu" class="btn btn-light repoBtn">
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
                            <button id="addFileContextMenu" @click="togglerAddFileContextMenu = true" class="btn btn-light repoBtn">
                                <span>
                                    Add file
                                </span>
                                <span class="material-icons">
                                    arrow_drop_down
                                </span>
                            </button>
                            <button id="codeContextMenu" @click="togglerCodeContextMenu = true" class="btn btn-success repoBtn">
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
            <div class="pullRequestsBlock" v-else-if="activeTab.includes('issues')">
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
                        New issue
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
            <div class="pullRequestsBlock" v-else-if="activeTab.includes('pull requests')">
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
            <div class="actionsBlock" v-else-if="activeTab.includes('actions')">
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
                <div class="pullRequestData">
                    <span class="material-icons-outlined">
                        device_hub
                    </span>
                    <span class="pullRequestDataHeader">
                        Welcome to the {{ repo.name }} wiki!
                    </span>
                    <span class="pullRequestDataContent">
                        Wikis provide a place in your repository to lay out the roadmap of your project, show the current status, and document software better, together.
                    </span>
                    <button class="btn btn-success">
                        create the first page
                    </button>
                </div>
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
                        <span :class="{ securityAsideItemActive: settingsTab.includes('branches') }" @click="settingsTab = 'branches'">
                            <div v-if="settingsTab.includes('branches')" class="securityAsideLineItem">

                            </div>
                            Branches
                        </span>
                        <span :class="{ securityAsideItemActive: settingsTab.includes('webhooks') }" @click="settingsTab = 'webhooks'">
                            <div v-if="settingsTab.includes('webhooks')" class="securityAsideLineItem">

                            </div>
                            Webhooks
                        </span>
                        <span :class="{ securityAsideItemActive: settingsTab.includes('notifications') }" @click="settingsTab = 'notifications'">
                            <div v-if="settingsTab.includes('notifications')" class="securityAsideLineItem">

                            </div>
                            Notifications
                        </span>
                        <span :class="{ securityAsideItemActive: settingsTab.includes('integrations') }" @click="settingsTab = 'integrations'">
                            <div v-if="settingsTab.includes('integrations')" class="securityAsideLineItem">

                            </div>
                            Integrations
                        </span>
                        <span :class="{ securityAsideItemActive: settingsTab.includes('deploykeys') }" @click="settingsTab = 'deploykeys'">
                            <div v-if="settingsTab.includes('deploykeys')" class="securityAsideLineItem">

                            </div>
                            Deploy keys
                        </span>
                        <span :class="{ securityAsideItemActive: settingsTab.includes('actions') }" @click="settingsTab = 'actions'">
                            <div v-if="settingsTab.includes('actions')" class="securityAsideLineItem">

                            </div>
                            Actions
                        </span>
                        <span :class="{ securityAsideItemActive: settingsTab.includes('environments') }" @click="settingsTab = 'environments'">
                            <div v-if="settingsTab.includes('environments')" class="securityAsideLineItem">

                            </div>
                            Environments
                        </span>
                        <span :class="{ securityAsideItemActive: settingsTab.includes('secrets') }" @click="settingsTab = 'secrets'">
                            <div v-if="settingsTab.includes('secrets')" class="securityAsideLineItem">

                            </div>
                            Secrets
                        </span>
                        <span :class="{ securityAsideItemActive: settingsTab.includes('pages') }" @click="settingsTab = 'pages'">
                            <div v-if="settingsTab.includes('pages')" class="securityAsideLineItem">

                            </div>
                            Pages
                        </span>
                        <span :class="{ securityAsideItemActive: settingsTab.includes('moderation settings') }" @click="settingsTab = 'moderation settings'">
                            <div v-if="settingsTab.includes('moderation settings')" class="securityAsideLineItem">

                            </div>
                            Moderation settings
                        </span>
                    </div>
                    <div v-if="settingsTab.includes('options')" class="securityMain">
                        <h4>
                            Settings
                        </h4>
                        <hr />
                        <p>
                            Repository name
                        </p>
                        <input v-model="newRepoName" type="text" class="form-control w-50" />
                        <button @click="renameRepo()" class="btn btn-light dangerBtn">
                            Rename
                        </button>
                        <div>
                            <input @change="setTemplateRepository()" v-model="templateRepository" type="checkbox" />
                            <span>
                                Template repository 
                            </span>
                        </div>
                        <span>
                            Template repositories let users generate new repositories with the same directory structure and files. Learn more.
                        </span>
                        <p>
                            Social preview
                        </p>
                        <p>
                            Upload an image to customize your repository’s social media preview.
                        </p>
                        <p>
                            Images should be at least 640×320px (1280×640px for best display).
                        </p>
                        <p class="linkable">
                            Download template
                        </p>
                        <h4>
                            Features
                        </h4>
                        <h4>
                            Merge button
                        </h4>
                        <hr />
                        <span>
                            When merging pull requests, you can allow any combination of merge commits, squashing, or rebasing. At least one option must be enabled. If you have linear history requirement enabled on any protected branch, you must enable squashing or rebasing.
                        </span>
                        <div class="archives">
                            <div class="archivesRow">
                                <input @change="setAllowMergeCommits" v-model="allowMergeCommits" type="checkbox" />
                                <span>
                                    Allow merge commits 
                                </span>
                            </div>
                            <span>
                                Add all commits from the head branch to the base branch with a merge commit.
                            </span>
                        </div>
                        <div class="archives">
                            <div class="archivesRow">
                                <input @change="setAllowSquashMerging" v-model="allowSquashMerging" type="checkbox" />
                                <span>
                                    Allow squash merging 
                                </span>
                            </div>
                            <span>
                                Combine all commits from the head branch into a single commit in the base branch.                                   
                            </span>
                        </div>
                        <div class="archives">
                            <div class="archivesRow">
                                <input @change="setAllowRebaseMerging" v-model="allowRebaseMerging" type="checkbox" />
                                <span>
                                    Allow rebase merging
                                </span>
                            </div>
                            <span>
                                Add all commits from the head branch onto the base branch individually.
                            </span>
                        </div>
                        <span>
                            You can allow setting pull requests to merge automatically once all required reviews and status checks have passed.
                        </span>
                        <div class="archives">
                            <div class="archivesRow">
                                <input @change="setAllowAutoMerge()" v-model="allowAutoMerge" type="checkbox" />
                                <span>
                                    Allow auto-merge
                                </span>
                            </div>
                            <span>
                                Waits for merge requirements to be met and then merges automatically. Learn more
                            </span>
                        </div>
                        <span>
                            After pull requests are merged, you can have head branches deleted automatically.
                        </span>
                        <div class="archives">
                            <div class="archivesRow">
                                <input @change="setAutomaticallyDeleteHeadBranches" v-model="automaticallyDeleteHeadBranches" type="checkbox" />
                                <span>
                                    Automatically delete head branches
                                </span>
                            </div>
                            <span>
                                Deleted branches will still be able to be restored.
                            </span>
                        </div>
                        <h4>
                            Archives
                        </h4>
                        <hr />
                        <div class="archives">
                            <div class="archivesRow">
                                <input @change="setIncludeGitLFSObjectsInArchives" v-model="includeGitLFSObjectsInArchives" type="checkbox" />
                                <span>
                                    Include Git LFS objects in archives 
                                </span>
                            </div>
                            <span>
                                Git LFS usage in archives is billed at the same rate as usage with the client.
                            </span>
                        </div>
                        <span>
                            When creating source code archives, you can choose to include files stored using Git LFS in the archive.
                        </span>
                        <h4>
                            GitFab Pages
                        </h4>
                        <hr />
                        <div class="gitfabPages">
                            <span>
                                Pages settings now has its own dedicated tab! Check it out here!
                            </span>
                        </div>
                        <h4>
                            Danger Zone
                        </h4>
                        <div class="dangerZone">
                            <div class="dangerZoneItem">
                                <div class="dangerZoneLeftBlock">
                                    <span>
                                        Change repository visibility
                                    </span>
                                    <span>
                                        This repository is currently public.
                                    </span>
                                </div>
                                <button @click="changeVisibility()" class="btn btn-light dangerBtn">
                                    Change visibility
                                </button>
                            </div>
                            <hr />
                            <div class="dangerZoneItem">
                                <div class="dangerZoneLeftBlock">
                                    <span>
                                        Transfer ownership
                                    </span>
                                    <span>
                                        Transfer this repository to another user or to an organization where you have the ability to create repositories.
                                    </span>
                                </div>
                                <button class="btn btn-light dangerBtn">
                                    Transfer
                                </button>
                            </div>
                            <hr />
                            <div class="dangerZoneItem">
                                <div class="dangerZoneLeftBlock">
                                    <span>
                                        Archive this repository
                                    </span>
                                    <span>
                                        Mark this repository as archived and read-only.
                                    </span>
                                </div>
                                <button class="btn btn-light dangerBtn">
                                    Archive this repository
                                </button>
                            </div>
                            <hr />
                            <div class="dangerZoneItem">
                                <div class="dangerZoneLeftBlock">
                                    <span>
                                        Delete this repository
                                    </span>
                                    <span>
                                        Once you delete a repository, there is no going back. Please be certain.
                                    </span>
                                </div>
                                <button @click="deleteRepo()" class="btn btn-light dangerBtn">
                                    Delete this repository
                                </button>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="settingsTab.includes('security and analysis')" class="securityMain">
                        <h4>
                            Configure security and analysis features
                        </h4>
                        <hr />
                        <p>
                            Security and analysis features help keep your repository secure and updated. By enabling these features, you're granting us permission to perform read-only analysis on your repository.
                        </p>
                        <div class="securityAndAnalysisBlock">
                            <div class="securityAndAnalysisBlockColumn">
                                <span>
                                    Dependency graph
                                </span>
                                <span>
                                    Understand your dependencies.
                                </span>
                                <span>
                                    Dependency graph is always enabled for public repos.
                                </span>
                            </div>
                            <button :disalbed="true" class="btn btn-light dangerBtn w-25">
                                Disable
                            </button>
                        </div>
                        <hr />
                        <div class="securityAndAnalysisBlock">
                            <div class="securityAndAnalysisBlockColumn">
                                <span>
                                    Dependabot alerts
                                </span>
                                <span>
                                    Receive alerts of new vulnerabilities that affect your dependencies.
                                </span>
                            </div>
                            <button class="btn btn-light dangerBtn w-25">
                                Disable
                            </button>
                        </div>
                        <hr />
                        <div class="securityAndAnalysisBlock">
                            <div class="securityAndAnalysisBlockColumn">
                                <span>
                                    Dependabot security updates
                                </span>
                                <span>
                                    Easily upgrade to non-vulnerable dependencies.
                                </span>
                            </div>
                            <button class="btn btn-light dangerBtn w-25">
                                Enable
                            </button>
                        </div>
                        <hr />
                        <div class="securityAndAnalysisBlock">
                            <div class="securityAndAnalysisBlockColumn">
                                <span>
                                    Code scanning
                                </span>
                                <span>
                                    Automatically detect common vulnerabilities and coding errors.
                                </span>
                            </div>
                            <button class="btn btn-light dangerBtn w-25">
                                Set up
                            </button>
                        </div>
                        <hr />
                    </div>
                    <div v-else-if="settingsTab.includes('manage access')" class="securityMain">
                        <h4>
                            Manage Access
                        </h4>
                        <hr />
                    </div>
                    <div v-else-if="settingsTab.includes('branches')" class="securityMain">
                        <h4>
                            Default branch
                        </h4>
                        <hr />
                        <p>
                            The default branch is considered the “base” branch in your repository, against which all pull requests and code commits are automatically made, unless you specify a different branch.
                        </p>
                        <div class="branchAdvisoriesHeader">
                            <h4>
                                Branch protection rules
                            </h4>
                            <button @click="addRule()" class="btn btn-success">
                                Add rule
                            </button>
                        </div>
                        <hr />
                        <p>
                            Define branch protection rules to disable force pushing, prevent branches from being deleted, and optionally require status checks before merging. New to branch protection rules? Learn more.
                        </p>
                        <p>
                            No branch protection rules defined yet.
                        </p>
                    </div>
                    <div v-else-if="settingsTab.includes('webhooks')" class="securityMain">
                        <div class="securityAdvisoriesHeader">
                            <h4>
                                Webhooks
                            </h4>
                            <button class="btn btn-success">
                                Add webhook
                            </button>
                        </div>
                        <hr />
                        <p>
                            Webhooks allow external services to be notified when certain events happen. When the specified events happen, we’ll send a POST request to each of the URLs you provide. Learn more in our Webhooks Guide.
                        </p>
                    </div>
                    <div v-else-if="settingsTab.includes('notifications')" class="securityMain">
                        <h4>
                            Notifications
                        </h4>
                        <hr />
                    </div>
                    <div v-else-if="settingsTab.includes('integrations')" class="securityMain">
                        <h4>
                            Installed GitHub Apps
                        </h4>
                        <hr />
                        <p>
                            GitHub Apps augment and extend your workflows on GitHub with commercial, open source, and homegrown tools.
                        </p>
                    </div>
                    <div v-else-if="settingsTab.includes('deploykeys')">
                        <div class="branchAdvisoriesHeader">
                            <h4>
                                Deploy keys
                            </h4>
                            <button class="btn btn-success">
                                Add deploy key
                            </button>
                        </div>
                        <p>
                            There are no deploy keys for this repository
                        </p>
                        <p>
                            Check out our guide on deploy keys to learn more.
                        </p>
                    </div>
                    <div v-else-if="settingsTab.includes('actions')" class="securityMain">
                        <h4>
                            Actions permissions
                        </h4>
                        <hr />
                        <div>
                            <div>
                                <input type="radio" />
                                <span>
                                    Allow all actions
                                </span>
                            </div>
                            <span>
                                Any action can be used, regardless of who authored it or where it is defined.
                            </span>
                        </div>
                        <div>
                            <div>
                                <input type="radio" />
                                <span>
                                    Disable Actions
                                </span>
                            </div>
                            <span>
                                The Actions tab is hidden and no workflows can run.
                            </span>
                        </div>
                        <div>
                            <div>
                                <input type="radio" />
                                <span>
                                    Allow local actions only
                                </span>
                            </div>
                            <span>
                                Only actions defined in a repository within glebDyakov can be used.
                            </span>
                        </div>
                        <div>
                            <div>
                                <input type="radio" />
                                <span>
                                    Allow select actions
                                </span>
                            </div>
                            <span>
                                Only actions that match specified criteria, plus actions defined in a repository within glebDyakov, can be used. Learn more about allowing specific actions to run.
                            </span>
                        </div>
                        <button :disabled="true" class="btn dangerBtn btnRow">
                            Save
                        </button>
                        <h4>
                            Artifact and log retention
                        </h4>
                        <p>
                            This is the duration that artifacts and logs will be retained.
                        </p>
                        <input type="text" value="90 days" class="form-control w-25" />
                        <button class="btn dangerBtn">
                            Save
                        </button>
                        <h4>
                            Fork pull request workflows from outside collaborators
                        </h4>
                        <span>
                            Choose which subset of outside collaborators will require approval to run workflows on their pull requests. Learn more.
                        </span>
                        <div>
                            <div>
                                <input type="radio" />
                                <span>
                                    Require approval for first-time contributors who are new to GitHub
                                </span>
                            </div>
                            <span>
                                Only first-time contributors who recently created a GitHub account will require approval to run workflows.
                            </span>
                        </div>
                        <div>
                            <div>
                                <input type="radio" />
                                <span>
                                    Require approval for first-time contributors
                                </span>
                            </div>
                            <span>
                                Only first-time contributors will require approval to run workflows.
                            </span>
                        </div>
                        <div>
                            <div>
                                <input type="radio" />
                                <span>
                                    Require approval for all outside collaborators
                                </span>
                            </div>
                            <span>
                                All outside collaborators will always require approval to run workflows on their pull requests.
                            </span>
                        </div>
                        <button class="btn dangerBtn btnRow">
                            Save
                        </button>
                        <h4>
                            Workflow permissions
                        </h4>
                        <span>
                            Choose the default permissions granted to the GITHUB_TOKEN when running workflows in this repository. You can specify more granular permissions in the workflow using YAML. Learn more.
                        </span>
                        <div>
                            <div>
                                <input type="radio" />
                                <span>
                                    Read and write permissions
                                </span>
                            </div>
                            <span>
                                Workflows have read and write permissions in the repository for all scopes.
                            </span>
                        </div>
                        <div>
                            <div>
                                <input type="radio" />
                                <span>
                                    Read repository contents permission
                                </span>
                            </div>
                            <span>
                                Workflows have read permissions in the repository for the contents scope only.
                            </span>
                        </div>
                        <button class="btn dangerBtn btnRow">
                            Save
                        </button>
                    </div>
                    <div v-else-if="settingsTab.includes('environments')" class="securityMain">
                        <div class="secrets">
                            <h4>
                                Environments
                            </h4>
                            <button class="btn btn-light dangerBtn">
                                New environment
                            </button>
                        </div>
                        <div class="secret">
                            <div class="secretBody">
                                <h4>
                                    There are no environments for this repository
                                </h4>
                                <span>
                                    Environments are used by your workflows for deployments.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="settingsTab.includes('secrets')" class="securityMain">
                        <div class="secrets">
                            <h4>
                                Actions secrets
                            </h4>
                            <button @click="addSecret()" class="btn btn-light dangerBtn">
                                New repository secret
                            </button>
                        </div>
                        <span>
                            Secrets are environment variables that are encrypted. Anyone with collaborator access to this repository can use these secrets for Actions.
                        </span>
                        <p>
                            Secrets are not passed to workflows that are triggered by a pull request from a fork. Learn more.
                        </p>
                        <div class="secret">
                            <div class="secretHeader">
                                <span>
                                    Environment secrets
                                </span>
                            </div>    
                            <div class="secretBody">
                                <h4>
                                    There are no secrets for this repository's environments.
                                </h4>
                                <span>
                                    Encrypted environment secrets allow you to store sensitive information, such as access tokens, in your repository environments.
                                </span>
                                <span class="linkable">
                                    Manage your environments and add environment secrets
                                </span>
                            </div>
                        </div>
                        <div class="secret">
                            <div class="secretHeader">
                                <span>
                                    Repository secrets
                                </span>
                            </div>    
                            <div class="secretBody">
                                <h4>
                                    There are no secrets for this repository.
                                </h4>
                                <span>
                                    Encrypted secrets allow you to store sensitive information, such as access tokens, in your repository.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="settingsTab.includes('pages')" class="securityMain">
                        <h4>
                            GitHub Pages
                        </h4>
                        <span>
                            <span class="linkable">
                                GitHub Pages
                            </span> is designed to host your personal, organization, or project pages from a GitHub repository.
                        </span>
                        <hr />
                        <p>
                            Source
                        </p>
                        <p>
                            GitHub Pages is currently disabled. Select a source below to enable GitHub Pages for this repository. Learn more.
                        </p>
                        <button class="btn bt-light dangerBtn">
                            None
                        </button>
                        <button class="btn bt-light dangerBtn">
                            Save
                        </button>
                        <p>
                            Theme Chooser
                        </p>
                        <p>
                            Select a theme to publish your site with a Jekyll theme using the gh-pages branch. Learn more.
                        </p>
                        <button class="btn bt-light dangerBtn">
                            Choose a theme
                        </button>
                        <div class="gitfabPagesBlock">
                            <span class="gitfabPagesPicture material-icons">
                                dashboard
                            </span>
                            <div class="gitfabPagesColumn">
                                <span>
                                    Publish privately to people with read access to this repository
                                </span>
                                <span>
                                    Try it risk-free for 14 days using a GitHub Enterprise organization, or learn more about changing the visibility of your GitHub Pages site.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="settingsTab.includes('moderation settings')" class="securityMain">
                        <h4>
                            Temporary interaction limits
                        </h4>
                        <hr />
                        <p>
                            Temporarily restrict which external users can interact with your repository (comment, open issues, or create pull requests) for a configurable period of time.
                        </p>
                        <p>
                            This may be used to force a "cool-down" period during heated discussions or prevent unwanted interactions.
                        </p>
                        <div class="reposTable">
                            <div class="reposTableHeader">
                                <span>
                                    You can restrict repository interactions across your account in your account settings        
                                </span>
                            </div>
                            <div class="reposTableHeader">
                                <div class="sessionDataColumn">
                                    <div class="sessionDataColumn">
                                        <span>
                                            Limit to existing users
                                        </span>
                                        <span>
                                            Users that have recently created their account will be unable to interact with the repository.
                                        </span>
                                        <div class="sessionDataRow">
                                            <div>
                                                <span class="material-icons">
                                                    close
                                                </span>
                                                <span>
                                                    New users
                                                </span>
                                            </div>
                                            <div>
                                                <span class="material-icons">
                                                    close
                                                </span>
                                                <span>
                                                    Users
                                                </span>
                                            </div>
                                            <div>
                                                <span class="material-icons">
                                                    close
                                                </span>
                                                <span>
                                                    Contributors
                                                </span>
                                            </div>
                                            <div>
                                                <span class="material-icons">
                                                    close
                                                </span>
                                                <span>
                                                    Collaborators
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="btn btn-light turnBtn">
                                    Enable
                                </button>
                            </div>
                            <div class="reposTableHeader">
                                <div class="sessionDataColumn">
                                    <div class="sessionDataColumn">
                                        <span>
                                            Limit to prior contributors
                                        </span>
                                        <span>
                                            Users that have not previously committed to the master branch of this repository will be unable to interact with the repository.
                                        </span>
                                        <div class="sessionDataRow">
                                            <div>
                                                <span class="material-icons">
                                                    close
                                                </span>
                                                <span>
                                                    New users
                                                </span>
                                            </div>
                                            <div>
                                                <span class="material-icons">
                                                    close
                                                </span>
                                                <span>
                                                    Users
                                                </span>
                                            </div>
                                            <div>
                                                <span class="material-icons">
                                                    done
                                                </span>
                                                <span>
                                                    Contributors
                                                </span>
                                            </div>
                                            <div>
                                                <span class="material-icons">
                                                    done
                                                </span>
                                                <span>
                                                    Collaborators
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="btn btn-light turnBtn">
                                    Enable
                                </button>
                            </div>
                            <div class="reposTableHeader">
                                <div class="sessionDataColumn">
                                    <div class="sessionDataColumn">
                                        <span>
                                            Limit to repository collaborators
                                        </span>
                                        <span>
                                            Users that are not collaborators will not be able to interact with the repository.
                                        </span>
                                        <div class="sessionDataRow">
                                            <div>
                                                <span class="material-icons">
                                                    close
                                                </span>
                                                <span>
                                                    New users
                                                </span>
                                            </div>
                                            <div>
                                                <span class="material-icons">
                                                    close
                                                </span>
                                                <span>
                                                    Users
                                                </span>
                                            </div>
                                            <div>
                                                <span class="material-icons">
                                                    close
                                                </span>
                                                <span>
                                                    Contributors
                                                </span>
                                            </div>
                                            <div>
                                                <span class="material-icons">
                                                    done
                                                </span>
                                                <span>
                                                    Collaborators
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="btn btn-light turnBtn">
                                    Enable
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="togglerBranchesContextMenu" class="brachesContextMenu">
            <div class="brachesContextMenuHeader">
                <span>
                    Switch branches/tags
                </span>
                <span @click="togglerBranchesContextMenu = false" class="closer material-icons">
                    close
                </span>
            </div>
            <input type="text" placeholder="Find or create a branch" class="form-control">
            <div class="brachesContextMenuHeader">
                <span>
                    Branches
                </span>
                <span>
                    Tags
                </span>
            </div>
            <div class="brachesContextMenuHeader">
                <div>
                    <span class="material-icons">
                        done
                    </span>
                    <span>
                        master
                    </span>
                </div>
                <span>
                    Default
                </span>
            </div>
            <span class="linkable">
                View all branches
            </span>
        </div>
        <div v-if="togglerAddFileContextMenu" class="addFileContextMenu">
            <span>
                Create new file
            </span>
            <span>
                Upload files
            </span>
        </div>
        <div v-if="togglerCodeContextMenu" class="codeContextMenu">
            <div class="brachesContextMenuHeader">
                <div>
                    <span class="material-icons">
                        chevron_right
                    </span>
                    <span>
                        Clone
                    </span>
                </div>
                <span class="material-icons">
                    help_outline
                </span>
            </div>
            <div class="brachesContextMenuHeader">
                <span>
                    Https
                </span>
                <span>
                    SSH
                </span>
                <span>
                    GitFab CLI
                </span>
            </div>
            <div class="codeContextMenuHeader">
                <input type="text" value="https://github.com/glebDyakov/mynewrepository.git" class="form-control w-75">
                <span class="material-icons">
                    content_copy
                </span>
            </div>
            <span>
                Use Git or checkout with SVN using the web URL.
            </span>
            <div class="codeContextMenuHeader">
                <span class="material-icons">
                    desktop_windows
                </span>
                <span>
                    Open with GitFab Desktop
                </span>
            </div>
            <div class="codeContextMenuHeader">
                <span>
                    Open with Visual Studio
                </span>
            </div>
            <div class="codeContextMenuHeader">
                <span class="material-icons">
                    folder_zip
                </span>
                <span>
                    Download ZIP
                </span>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

import * as jwt from 'jsonwebtoken'
const ip = require("ip")

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
            newRepoName: '',
            templateRepository: false,
            automaticallyDeleteHeadBranches: false,
            allowAutoMerge: false,
            allowRebaseMerging: false,
            allowSquashMerging: false,
            allowMergeCommits: false,
            allowMergeCommits: false,
            isOwner: false,
            archived: false,
            togglerBranchesContextMenu: false,
            togglerAddFileContextMenu: false,
            togglerCodeContextMenu: false,
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

                        this.newRepoName = this.repo.name
                        this.templateRepository = this.repo.templateRepository
                        this.allowMergeCommits = this.repo.allowMergeCommits
                        this.allowSquashMerging = this.repo.allowSquashMerging
                        this.allowRebaseMerging = this.repo.allowRebaseMerging
                        this.allowAutoMerge = this.repo.allowAutoMerge
                        this.automaticallyDeleteHeadBranches = this.repo.automaticallyDeleteHeadBranches
                        this.includeGitLFSObjectsInArchives = this.repo.includeGitLFSObjectsInArchives
                        this.templateRepository = this.repo.templateRepository
          
                        document.body.addEventListener("click", (event) => {                        
                            if(!event.target.id.includes('branchesContextMenu'))
                                this.togglerBranchesContextMenu = false
                            if(!event.target.id.includes('addFileContextMenu'))
                                this.togglerAddFileContextMenu = false
                            if(!event.target.id.includes('codeContextMenu'))
                                this.togglerCodeContextMenu = false
                            
                        })

                    }
                })
            }
        })
    },
    methods: {
        addSecret(){
            fetch(`http://localhost:4000/api/repos/secrets/set/?repoid=${this.$route.query.repoid}`, {
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
                // console.log(`JSON.parse(result): ${JSON.parse(result).repo.gitfaber}`)
                // if(JSON.parse(result).status.includes('OK')){
                //     this.$router.push({ name: 'Home' })
                // }
            })
            setTimeout(() => {
                this.$router.push({ name: 'Home' })
            }, 1500)
        },
        addRule(){
            fetch(`http://localhost:4000/api/repos/rules/set/?repoid=${this.$route.query.repoid}`, {
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
                // console.log(`JSON.parse(result): ${JSON.parse(result).repo.gitfaber}`)
                // if(JSON.parse(result).status.includes('OK')){
                //     this.$router.push({ name: 'Home' })
                // }
            })
            setTimeout(() => {
                this.$router.push({ name: 'Home' })
            }, 1500)
        },
        setAllowMergeCommits(){
            fetch(`http://localhost:4000/api/repos/allowmergecommits/set/?repoid=${this.$route.query.repoid}&newrepoallowmergecommits=${this.allowMergeCommits}`, {
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
                // console.log(`JSON.parse(result): ${JSON.parse(result).repo.gitfaber}`)
                // if(JSON.parse(result).status.includes('OK')){
                //     this.$router.push({ name: 'Home' })
                // }
            })
            setTimeout(() => {
                this.$router.push({ name: 'Home' })
            }, 1500)
        },
        setAllowSquashMerging(){
            fetch(`http://localhost:4000/api/repos/allowsquashmerging/set/?repoid=${this.$route.query.repoid}&newrepoallowsquashmerging=${this.allowSquashMerging}`, {
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
                // console.log(`JSON.parse(result): ${JSON.parse(result).repo.gitfaber}`)
                // if(JSON.parse(result).status.includes('OK')){
                //     this.$router.push({ name: 'Home' })
                // }
            })
            setTimeout(() => {
                this.$router.push({ name: 'Home' })
            }, 1500)
        },
        setAllowRebaseMerging(){
            fetch(`http://localhost:4000/api/repos/allowrebasemerging/set/?repoid=${this.$route.query.repoid}&newrepoallowrebasemerging=${this.allowRebaseMerging}`, {
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
                // console.log(`JSON.parse(result): ${JSON.parse(result).repo.gitfaber}`)
                // if(JSON.parse(result).status.includes('OK')){
                //     this.$router.push({ name: 'Home' })
                // }
            })
            setTimeout(() => {
                this.$router.push({ name: 'Home' })
            }, 1500)
        },
        setAllowAutoMerge(){
            fetch(`http://localhost:4000/api/repos/allowautomerge/set/?repoid=${this.$route.query.repoid}&newrepoallowautomerge=${this.allowAutoMerge}`, {
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
                // console.log(`JSON.parse(result): ${JSON.parse(result).repo.gitfaber}`)
                // if(JSON.parse(result).status.includes('OK')){
                //     this.$router.push({ name: 'Home' })
                // }
            })
            setTimeout(() => {
                this.$router.push({ name: 'Home' })
            }, 1500)
        },
        setAutomaticallyDeleteHeadBranches(){
            fetch(`http://localhost:4000/api/repos/automaticallydeleteheadbranches/set/?repoid=${this.$route.query.repoid}&newrepoautomaticallydeleteheadbranches=${this.automaticallyDeleteHeadBranches}`, {
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
                // console.log(`JSON.parse(result): ${JSON.parse(result).repo.gitfaber}`)
                // if(JSON.parse(result).status.includes('OK')){
                //     this.$router.push({ name: 'Home' })
                // }
            })
            setTimeout(() => {
                this.$router.push({ name: 'Home' })
            }, 1500)
        },
        setIncludeGitLFSObjectsInArchives(){
            fetch(`http://localhost:4000/api/repos/includegitlfsobjectsinarchives/set/?repoid=${this.$route.query.repoid}&newrepoincludegitlfsobjectsinarchives=${this.includeGitLFSObjectsInArchives}`, {
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
                // console.log(`JSON.parse(result): ${JSON.parse(result).repo.gitfaber}`)
                // if(JSON.parse(result).status.includes('OK')){
                //     this.$router.push({ name: 'Home' })
                // }
            })
            setTimeout(() => {
                this.$router.push({ name: 'Home' })
            }, 1500)
        },
        setArchived(){
            fetch(`http://localhost:4000/api/repos/archived/set/?repoid=${this.$route.query.repoid}&newrepoarcived=${this.repo.archived ? false : true}`, {
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
                // console.log(`JSON.parse(result): ${JSON.parse(result).repo.gitfaber}`)
                // if(JSON.parse(result).status.includes('OK')){
                //     this.$router.push({ name: 'Home' })
                // }
            })
            setTimeout(() => {
                this.$router.push({ name: 'Home' })
            }, 1500)
        },
        setOwnership(){
            fetch(`http://localhost:4000/api/repos/ownership/set/?repoid=${this.$route.query.repoid}&newrepoownership=${false}&newrepoowner=${"admin"}`, {
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
                // console.log(`JSON.parse(result): ${JSON.parse(result).repo.gitfaber}`)
                // if(JSON.parse(result).status.includes('OK')){
                //     this.$router.push({ name: 'Home' })
                // }
            })
            setTimeout(() => {
                this.$router.push({ name: 'Home' })
            }, 1500)
        },
        setTemplateRepository(){
            fetch(`http://localhost:4000/api/repos/templaterepository/set/?repoid=${this.$route.query.repoid}&newrepotemplaterepository=${this.templateRepository}`, {
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
                // console.log(`JSON.parse(result): ${JSON.parse(result).repo.gitfaber}`)
                // if(JSON.parse(result).status.includes('OK')){
                //     this.$router.push({ name: 'Home' })
                // }
            })
            setTimeout(() => {
                this.$router.push({ name: 'Home' })
            }, 1500)
        },
        changeVisibility() {
            fetch(`http://localhost:4000/api/repos/access/set/?repoid=${this.$route.query.repoid}&newrepoaccess=${this.repo.access.includes('Public') ? 'Private' : 'Public'}`, {
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
                // console.log(`JSON.parse(result): ${JSON.parse(result).repo.gitfaber}`)
                // if(JSON.parse(result).status.includes('OK')){
                //     this.$router.push({ name: 'Home' })
                // }
            })
            setTimeout(() => {
                this.$router.push({ name: 'Home' })
            }, 1500)
        },
        deleteRepo(){
            fetch(`http://localhost:4000/api/repos/delete/?repoid=${this.$route.query.repoid}&ip=${ip.address()}`, {
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
                // if(JSON.parse(result).status.includes('OK')){
                    // this.$router.push({ name: 'Home' })
                // }
            })
            setTimeout(() => {
                this.$router.push({ name: 'Home' })
            }, 1500)
        },
        renameRepo(){
            fetch(`http://localhost:4000/api/repos/rename/?repoid=${this.$route.query.repoid}&newreponame=${this.newRepoName}`, {
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
                // if(JSON.parse(result).status.includes('OK')){
                //     this.$router.push({ name: 'Home' })
                // }
            })
            setTimeout(() => {
                this.$router.push({ name: 'Home' })
            }, 1500)
        },
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

    .repoActionsItemActive {
        border-bottom: 2px solid rgb(230, 100, 0);
        padding-bottom: 10px;
        font-weight: bolder;
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
        cursor: pointer;
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

    .branchAside {
        width: 25%;    
        display: flex;
        flex-direction: column;
        border: 1px solid rgb(200, 200, 200);
        background-color: rgb(245, 245, 245);
        border-radius: 7px;
        margin: 35px;
    }

    .brachMain {
        width: 65%;
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
        margin-top: 50px;
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

    .branchAdvisoriesHeader {
        display: flex;
        justify-content: space-between;
        width: 100%;
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
        margin-top: 50px;
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

    .dangerZone {
        margin-top: 25px;
        margin-bottom: 50px;
        display: flex;
        flex-direction: column;
        border: 1px solid rgb(200, 0, 0);
        border-radius: 8px;
        width: 75%;
        /* height: 250px; */
        box-sizing: border-box;
        padding: 15px;
    }

    .dangerZoneItem {
        display: flex;
        justify-content: space-between;
    }

    .dangerZoneLeftBlock {
        display: flex;
        flex-direction: column;
    }

    .dangerBtn {
        font-size: 12px;
        width: 175px;
        border: 1px solid rgb(200, 200, 200);
        align-self: center;
        font-weight: bolder;
        color: rgb(200, 0, 0);
    }

    .gitfabPages {
        margin-top: 25px;
        margin-bottom: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border: 1px solid rgb(215, 150, 0);
        background-color:rgb(250, 250, 200);
        border-radius: 8px;
        width: 75%;
        height: 50px;
        box-sizing: border-box;
        padding: 15px;
    }

    .archives {
        margin-top: 25px;
        margin-bottom: 50px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        border: 1px solid rgb(175, 175, 175);
        border-radius: 8px;
        width: 75%;
        height: 85px;
        box-sizing: border-box;
        padding: 15px;
    }

    .archivesRow {
        align-items: center;
        display: flex;
    }

    .archivesRow > span {
        margin-left: 15px;
        font-weight: bolder;
    }

    .secrets {
        display: flex;
        justify-content: space-between;
    }

    .secret {
        margin: 15px;
        border-radius: 8px;
        width: 75%;
        border: 1px solid rgb(175, 175, 175);
    }

    .secretHeader {
        font-weight: bolder;
        height: 50px;
        border-radius: 8px 8px 0px 0px;
        background-color: rgb(225, 225, 225);
        box-sizing: border-box;
        padding: 15px;
    }

    .secretBody {
        text-align: center;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 25px;
    }

    .linkable {
        color: rgb(0, 0, 255);
        cursor: pointer;
    }

    .actionsBlock {
        margin-top: 50px;
    }

    .btnRow {
        display: block;
    }

    .pullRequestsBlock {
        margin-top: 50px;
    }

    .brachesContextMenu {
        display: flex;
        flex-direction: column;
        background-color: rgb(245, 245, 245);
        top: 270px;
        left: 65px;
        border: 1px solid rgb(175, 175, 175);
        border-radius: 8px;
        box-sizing: border-box;
        padding: 15px;
        position: absolute;
        width: 250px;
        height: 200px;
    }

    .brachesContextMenuHeader {
        display: flex;
        justify-content: space-between;
    }

    .brachesContextMenu > .linkable {
        text-align: center;
    }

    .addFileContextMenu {
        display: flex;
        flex-direction: column;
        background-color: rgb(245, 245, 245);
        top: 275px;
        left: 615px;
        border: 1px solid rgb(175, 175, 175);
        border-radius: 8px;
        box-sizing: border-box;
        padding: 15px;
        position: absolute;
        width: 200px;
        height: 85px;
    }

    .codeContextMenu {
        display: flex;
        flex-direction: column;
        background-color: rgb(245, 245, 245);
        top: 275px;
        left: 600px;
        border: 1px solid rgb(175, 175, 175);
        border-radius: 8px;
        box-sizing: border-box;
        padding: 15px;
        position: absolute;
        width: 375px;
        height: 250px;
    }

    .codeContextMenuHeader {
        display: flex;
        justify-content: space-between;
    }

    .closer {
        cursor: pointer;
    }

    .reposTable {
        border: 1px solid rgb(200, 200, 200);
        border-radius: 8px;
        background-color: rgb(255, 255, 255);
        display: flex;
        flex-direction: column;
    }

    .reposTableHeader {
        box-sizing: border-box;
        padding: 10px;
        display: flex;
        border-bottom: 1px solid rgb(200, 200, 200);
        background-color: rgb(235, 235, 235);
    }

    .reposTableHeader > * {
        display: flex;
        align-items: center;
        margin: 10px;
    }

    .reposTableHeader > * > * {
        margin: 5px;
    }

    .sessionDataColumn {
        display: flex;
        flex-direction: column;
    }
    
    .sessionDataRow {
        display: flex;
    }
    
    .securityAndAnalysisBlock {
        display: flex;
        justify-content: space-between;
        width: 75%;
        height: 100px;
    }

    .securityAndAnalysisBlockColumn {
        display: flex;
        flex-direction: column;
    }

    .gitfabPagesBlock {
        display: flex;
        justify-content: space-between;
        border: 1px solid rgb(175, 175, 175);
        border-radius: 8px;
        background-color: rgb(100, 200, 250);
        align-items: center;
    }

    .gitfabPagesColumn {
        display: flex;
        flex-direction: column;
    }

    .gitfabPagesPicture {
        font-size: 48px;
        color: rgb(245, 245, 200);
    }

</style>
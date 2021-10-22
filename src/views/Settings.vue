<template>
<div>
    <Header />
    <div class="main">
        <div class="avatarRow">
            <div class="avatarBlock">
                <div class="avatar">
                    Г
                </div>
                <div class="avatarInfo">
                    <span class="gitfaber">
                        gdlyeabkov
                    </span>
                    <span>
                        Your personal account
                    </span>
                </div>
            </div>    
            <button class="goToYourPersonalProfile btn btn-light">
                Go to your personal profile
            </button>
        </div>
        <div class="totalContainer">
            <div class="asideMenus">
                <div class="asideMenu">
                    <div class="asideMenuItem">
                        Account settings
                    </div>
                    <div @click="activeTab = 'profile'" class="asideMenuItem">
                        Profile
                    </div>
                    <div @click="activeTab = 'account'" :class="{ asideMenuItem: true, asideMenuActiveItem: activeTab.includes('account')  && activeTab.length <= 7 }">
                        Account
                    </div>
                    <div @click="activeTab = 'appearance'" :class="{ asideMenuItem: true, asideMenuActiveItem: activeTab.includes('appearance') }">
                        Appearance
                    </div>
                    <div @click="activeTab = 'account security'" :class="{ asideMenuItem: true, asideMenuActiveItem: activeTab.includes('account security') && activeTab.length >= 10 }">
                        Account security
                    </div>
                    <div @click="activeTab = 'billing & plans'" :class="{ asideMenuItem: true, asideMenuActiveItem: activeTab.includes('billing & plans') }">
                        Billing & plans
                    </div>
                    <div @click="activeTab = 'security log'" :class="{ asideMenuItem: true, asideMenuActiveItem: activeTab.includes('security log') }">
                        Security log
                    </div>
                    <div @click="activeTab = 'security & analysis'" :class="{ asideMenuItem: true, asideMenuActiveItem: activeTab.includes('security & analysis') }">
                        Security & analysis
                    </div>
                    <div @click="activeTab = 'sponsorship log'" :class="{ asideMenuItem: true, asideMenuActiveItem: activeTab.includes('sponsorship log') }">
                        Sponsorship log
                    </div>
                    <div @click="activeTab = 'emails'" :class="{ asideMenuItem: true, asideMenuActiveItem: activeTab.includes('emails') }">
                        Emails
                    </div>
                    <div @click="activeTab = 'notifications'" :class="{ asideMenuItem: true, asideMenuActiveItem: activeTab.includes('notifications') }">
                        Notifications
                    </div>
                    <div @click="activeTab = 'scheduled reminders'" :class="{ asideMenuItem: true, asideMenuActiveItem: activeTab.includes('scheduled reminders') }">
                        Scheduled reminders
                    </div>
                    <div @click="activeTab = 'ssh and gpg keys'" :class="{ asideMenuItem: true, asideMenuActiveItem: activeTab.includes('ssh and gpg keys') }">
                        SSH and GPG keys
                    </div>
                    <div @click="activeTab = 'repositories'" :class="{ asideMenuItem: true, asideMenuActiveItem: activeTab.includes('repositories') }">
                        Repositories
                    </div>
                    <div @click="activeTab = 'packages'" :class="{ asideMenuItem: true, asideMenuActiveItem: activeTab.includes('packages') }">
                        Packages
                    </div>
                    <div @click="activeTab = 'organizations'" :class="{ asideMenuItem: true, asideMenuActiveItem: activeTab.includes('organizations') }">
                        Organizations
                    </div>
                    <div @click="activeTab = 'saved replies'" :class="{ asideMenuItem: true, asideMenuActiveItem: activeTab.includes('saved replies') }">
                        Saved replies
                    </div>
                    <div @click="activeTab = 'applications'" :class="{ asideMenuItem: true, asideMenuActiveItem: activeTab.includes('applications') }">
                        Applications
                    </div>
                </div>
                <div class="secondAsideMenu">
                    <div class="asideMenuItem">
                        Developer settings
                    </div>
                </div>
                <div class="thirdAsideMenu">
                    <div class="asideMenuItem">
                        Moderation settings
                    </div>
                    <div @click="activeTab = 'blocked users'" :class="{ asideMenuItem: true, asideMenuActiveItem: activeTab.includes('blocked users') }">
                        Blocked users
                    </div>
                    <div @click="activeTab = 'interaction limits'" :class="{ asideMenuItem: true, asideMenuActiveItem: activeTab.includes('interaction limits') }">
                        Interaction limits
                    </div>
                </div>
            </div>
            <div v-if="activeTab.includes('profile')" class="article">
                <h4>
                    Public profile
                </h4>
                <hr />
                <p class="defaultEmail">
                    Name
                </p>
                <input type="text" class="form-control w-50" />
                <span>
                    Your name may appear around GitHub where you contribute or are mentioned. You can remove it at any time.
                </span>
                <p class="defaultEmail">
                    Public email
                </p>
                <input type="text" placeholder="Select a verified email to display" class="form-control w-50" />
                <span>
                    You have set your email address to private. To toggle email privacy, go to email settings and uncheck "Keep my email address private."
                </span>
                <p class="defaultEmail">
                    Bio
                </p>
                <input type="text" placeholder="Tell us a little bit about yourself" class="form-control w-50" />
                <span>
                    You can @mention other users and organizations to link to them.
                </span>
                <p class="defaultEmail">
                    URL
                </p>
                <input type="text" placeholder="Tell us a little bit about yourself" class="form-control w-50" />
                <p class="defaultEmail">
                    Twitter username
                </p>
                <input type="text" placeholder="Tell us a little bit about yourself" class="form-control w-50" />
                <p class="defaultEmail">
                    Company
                </p>
                <input type="text" placeholder="Tell us a little bit about yourself" class="form-control w-50" />
                <span>
                    You can @mention your company’s GitHub organization to link it.
                </span>
                <p class="defaultEmail">
                    Location
                </p>
                <input type="text" placeholder="Tell us a little bit about yourself" class="form-control w-50" />
                <span>
                    All of the fields on this page are optional and can be deleted at any time, and by filling them out, you're giving us consent to share this data wherever your user profile appears. Please see our privacy statement to learn more about how we use this information.
                </span>
                <button class="btn btn-success btnRow">
                    Update profile
                </button>
                <h4>
                    Gitfab Developer Program
                </h4>
                <hr />
                <div class="notificationsBlock">
                    Building an application, service, or tool that integrates with GitHub? Join the GitHub Developer Program, or read more about it at our Developer site.
                </div>
                <span>
                    <span class='linkable'>
                        Check out the Developer site
                    </span>
                     for guides, our API reference, and other resources for building applications that integrate with GitHub. Make sure your contact information is up-to-date below. Thanks for being a member!
                </span>
                <h4>
                    Jobs profile
                </h4>
                <hr />
                <div class="vigilantModeRow">
                    <input type="checkbox">
                    <span>
                        Available for hire
                    </span>
                </div>
                <button class="btn btn-light turnBtn">
                    Save jobs profile
                </button>
                <h4>
                    Trending settings
                </h4>
                <hr />
                <p class="defaultEmail">
                    Preferred spoken language
                </p>
                <button class="btn btn-light turnBtn btnRow">
                    No Preference
                </button>
                <span>
                    We'll use this language preference to filter the trending repository lists on Explore and our Trending Repositories page.
                </span>
                <button class="btn btn-light turnBtn btnRow">
                    Save trending settings
                </button>
            </div> 
            <div v-else-if="activeTab.includes('appearance')" class="article">
                <h4>
                    Theme preferences
                </h4>
                <hr />
                <span>
                    Choose how GitHub looks to you. Select a single theme, or sync with your system and automatically switch between day and night themes.
                </span>
                <p class="defaultEmail">
                    Theme mode
                </p>
                <div class="vigilantModeRow">
                    <button class="btn btn-light turnBtn">
                        Single theme
                    </button>
                    <span>
                        GitHub will use your selected theme
                    </span>
                </div>
                <div class="themes">
                    <div class="themeRow">
                        <div class="theme">
                            <div class="themePreview">
                                
                            </div>
                            <div>
                                <input type="radio">
                                <span class="themeName">
                                    Default light
                                </span>
                            </div>
                        </div>    
                        <div class="theme">
                            <div class="themePreview">
                                
                            </div>
                            <div>
                                <input type="radio">
                                <span class="themeName">
                                    Default dark
                                </span>
                            </div>
                        </div>    
                        <div class="theme">
                            <div class="themePreview">
                                
                            </div>
                            <div>
                                <input type="radio">
                                <span class="themeName">
                                    Dark dimmed
                                </span>
                            </div>
                        </div>    
                    </div>
                    <div class="themeRow">
                        <div class="theme">
                            <div class="themePreview">
                                
                            </div>
                            <div>
                                <input type="radio">
                                <span class="themeName">
                                    Dark high contrast
                                </span>
                            </div>
                        </div>    
                        <div class="theme">
                            <div class="themePreview">
                                
                            </div>
                            <div>
                                <input type="radio">
                                <span class="themeName">
                                    Dark colorblind
                                </span>
                            </div>
                        </div>    
                        <div class="theme">
                            <div class="themePreview">
                                
                            </div>
                            <div>
                                <input type="radio">
                                <span class="themeName">
                                    Light contrast
                                </span>
                            </div>
                        </div>    
                    </div>
                </div>
                <h4>
                    Emoji skin tone preference
                </h4>
                <hr />
                <span class="defaultEmail">
                    Preferred default emoji skin tone
                </span>
                <div class="vigilantModeRow">
                    <div>
                        <input type="radio" />
                        <span class="material-icons">
                            front_hand
                        </span>
                    </div>
                    <div>
                        <input type="radio" />
                        <span class="material-icons">
                            front_hand
                        </span>
                    </div>
                    <div>
                        <input type="radio" />
                        <span class="material-icons">
                            front_hand
                        </span>
                    </div>
                    <div>
                        <input type="radio" />
                        <span class="material-icons">
                            front_hand
                        </span>
                    </div>
                    <div>
                        <input type="radio" />
                        <span class="material-icons">
                            front_hand
                        </span>
                    </div>
                    <div>
                        <input type="radio" />
                        <span class="material-icons">
                            front_hand
                        </span>
                    </div>
                </div>
                <h4>
                    Tab size preference
                </h4>
                <hr />
                <span class="   defaultEmail">
                    Choose the number of spaces a tab is equal to when rendering code
                </span>
                <button class="btn btn-light turnBtn btnRow">
                    8 (Default)
                </button>
                <h4>
                    Markdown editor font preference
                </h4>
                <hr />
            </div>
            <div v-else-if="activeTab.includes('account security')" class="article">
                <h4>
                    Change password
                </h4>
                <hr />
                <p class="labelBlock">
                    Old password
                </p>
                <input type="password" class="form-control w-5" />
                <p class="labelBlock">
                    New password
                </p>
                <input type="password" class="form-control w-5" />
                <p class="labelBlock">
                    Confirm new password
                </p>
                <input type="password" class="form-control w-5" />
                <span>
                    Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter. Learn more.
                </span>
                <div class="vigilantModeRow">
                    <button class="btn btn-light turnBtn">
                        Update password
                    </button>
                    <span class="linkable">
                        I forgot my password
                    </span>
                </div>
                <h4>
                    Two-factor authentication
                </h4>
                <hr />
                <div class="accountSecurityBlock">
                    <span class="material-icons-outlined">
                        lock
                    </span>
                    <h5>
                        Two factor authentication is not enabled yet.
                    </h5>
                    <span>
                        Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to sign in.
                    </span>
                    <button class="btn btn-success">
                        Enable two-factor authentication
                    </button>
                    <span class="linkable">
                        Learn more
                    </span>
                </div>
                <h4>
                    Sessions
                </h4>
                <hr />
                <span>
                    This is a list of devices that have logged into your account. Revoke any sessions that you do not recognize.
                </span>
                <div class="reposTable">
                    <div class="reposTableHeader">
                        <div>
                            <span>
                                Gitfab free
                            </span>
                        </div>
                    </div>
                    <div class="reposTableHeader">
                        <div>
                            <span>
                                Gitfab free
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="activeTab.includes('account')" class="article">
                <h4>
                    Change username
                </h4>
                <hr />
                <span>
                    Changing your username can have unintended side effects.
                </span>
                <button class="btn btn-light turnBtn btnRow">
                    Change username
                </button>
                <div class="vigilantModeRow">
                    <span class="material-icons">
                        help_outline
                    </span>
                    <span>
                        Looking for activity notification controls? Check the Notification center.
                    </span>
                </div>
                <h4>
                    Export account data
                </h4>
                <hr />
                <span>
                    Export all repositories and profile metadata for @glebDyakov. Exports will be available for 7 days.
                </span>
                <button class="btn btn-light turnBtn btnRow">
                    Start export
                </button>
                <h4>
                    Successor settings
                </h4>
                <hr />
                <span>
                    By clicking "Add Successor" below, I acknowledge that I am the owner of the @glebDyakov account, and am authorizing GitHub to transfer content within that account to my GitHub Successor, designated below, in the event of my death. I understand that this appointment of a successor does not override legally binding next-of-kin rules or estate laws of any relevant jurisdiction, and does not create a binding will. Learn more about account successors.
                </span>
                <p class="">
                    Search by username, full name, or email address
                </p>
                <input type="text" class="form-control w-75">
                <button class="btn btn-light turnBtn">
                    Add Successor
                </button>
                <div class="notificationsBlock">
                    <span>
                        You have not designated a successor.
                    </span>
                </div>
                <h4 class="dangerBlock">
                    Delete account
                </h4>
                <hr />
                <span>
                    Once you delete your account, there is no going back. Please be certain.
                </span>
                <button class="btn btn-light turnBtn dangerBlock btnRow">
                    Delete your account
                </button>
            </div>
            <div v-else-if="activeTab.includes('billing & plans')" class="article">
                <h4>
                    Personal billing
                </h4>
                <hr />
                <div class="reposRow">
                    <h4>
                        Current plan
                    </h4>
                    <button class="btn btn-light turnBtn">
                        Compare all plans
                    </button>
                    <button class="btn btn-success">
                        Upgrade
                    </button>
                </div>
                <hr />
                <div class="reposTable">
                    <div class="reposTableHeader">
                        <div>
                            <span>
                                Gitfab free
                            </span>
                        </div>
                    </div>        
                    
                    <div class="currentRepo">
                        <span class="material-icons-outlined">
                            lock
                        </span>
                        <span class="linkable">
                            /
                        </span>
                        <span>
                            1.82 MB
                        </span>
                        <div class="collaboratorsBlock">
                            <span class="material-icons-outlined">
                                group
                            </span>
                            <span class="linkable">
                                0 collaborators
                            </span>
                        </div>
                    </div>
                </div>
                <div class="reposRow">
                    <h4>
                        Current plan
                    </h4>
                    <button class="btn btn-light turnBtn">
                        Get usage report
                    </button>
                </div>
                <hr />
                
                <div class="reposTable">
                    <div class="reposTableHeader">
                        <div>
                            <span>
                                Gitfab free
                            </span>
                        </div>
                    </div>        
                    
                    <div class="currentRepo">
                        <span class="material-icons-outlined">
                            lock
                        </span>
                        <span class="linkable">
                            /
                        </span>
                        <span>
                            1.82 MB
                        </span>
                        <div class="collaboratorsBlock">
                            <span class="material-icons-outlined">
                                group
                            </span>
                            <span class="linkable">
                                0 collaborators
                            </span>
                        </div>
                    </div>
                </div>
                <div class="reposTable">
                    <div class="reposTableHeader">
                        <div>
                            <span>
                                Gitfab free
                            </span>
                        </div>
                    </div>        
                    
                    <div class="currentRepo">
                        <span class="material-icons-outlined">
                            lock
                        </span>
                        <span class="linkable">
                            /
                        </span>
                        <span>
                            1.82 MB
                        </span>
                        <div class="collaboratorsBlock">
                            <span class="material-icons-outlined">
                                group
                            </span>
                            <span class="linkable">
                                0 collaborators
                            </span>
                        </div>
                    </div>
                </div>
                <div class="reposTable">
                    <div class="reposTableHeader">
                        <div>
                            <span>
                                Gitfab free
                            </span>
                        </div>
                    </div>        
                    
                    <div class="currentRepo">
                        <span class="material-icons-outlined">
                            lock
                        </span>
                        <span class="linkable">
                            /
                        </span>
                        <span>
                            1.82 MB
                        </span>
                        <div class="collaboratorsBlock">
                            <span class="material-icons-outlined">
                                group
                            </span>
                            <span class="linkable">
                                0 collaborators
                            </span>
                        </div>
                    </div>
                </div>
                <div class="reposTable">
                    <div class="reposTableHeader">
                        <div>
                            <span>
                                Gitfab free
                            </span>
                        </div>
                    </div>        
                    
                    <div class="currentRepo">
                        <span class="material-icons-outlined">
                            lock
                        </span>
                        <span class="linkable">
                            /
                        </span>
                        <span>
                            1.82 MB
                        </span>
                        <div class="collaboratorsBlock">
                            <span class="material-icons-outlined">
                                group
                            </span>
                            <span class="linkable">
                                0 collaborators
                            </span>
                        </div>
                    </div>
                </div>
                <div class="reposTable">
                    <div class="reposTableHeader">
                        <div>
                            <span>
                                Gitfab free
                            </span>
                        </div>
                    </div>        
                    
                    <div class="currentRepo">
                        <span class="material-icons-outlined">
                            lock
                        </span>
                        <span class="linkable">
                            /
                        </span>
                        <span>
                            1.82 MB
                        </span>
                        <div class="collaboratorsBlock">
                            <span class="material-icons-outlined">
                                group
                            </span>
                            <span class="linkable">
                                0 collaborators
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="activeTab.includes('security log')" class="article">
                <h4>
                    Security log
                </h4>
                <hr />
                <div class="reposRow">
                    <input type="text" placeholder="Search" class="form-control w-50" />
                    <button class="btn btn-success">
                        Export
                    </button>
                </div>
                <div class="reposTable">
                    <div class="reposTableHeader">
                        <div>
                            <span>
                                Recent events
                            </span>
                        </div>
                    </div>        
                    <div v-for="repo in repos" :key="repo.name">
                        <hr />
                        <div class="currentRepo">
                            <span class="material-icons-outlined">
                                lock
                            </span>
                            <span class="linkable">
                                {{ gitfaber.email }}/{{ repo.name }}
                            </span>
                            <span>
                                1.82 MB
                            </span>
                            <div class="collaboratorsBlock">
                                <span class="material-icons-outlined">
                                    group
                                </span>
                                <span class="linkable">
                                    0 collaborators
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="activeTab.includes('security & analysis')" class="article">
                <h4>
                    Configure security and analysis features
                </h4>
                <hr />
                <span>
                    Security and analysis features help keep your repositories secure and updated. By enabling these features, you're granting us permission to perform read-only analysis on your repositories.
                </span>
                <div class="savedReplyRow">
                    <div>
                        <p>
                            Dependency graph
                        </p>
                        <p>
                            Understand your dependencies.
                        </p>
                        <div class="vigilantModeRow">
                            <input type="checkbox">
                            <span>
                                Automatically enable for new private repositories
                            </span>
                        </div>
                    </div>
                    <div>
                        <button class="btn btn-light turnBtn">
                            Disable all
                        </button>
                        <button class="btn btn-light turnBtn">
                            Enalble all
                        </button>
                    </div>
                </div>
                <hr />
                <div class="savedReplyRow">
                    <div>
                        <p>
                            Dependabot alerts
                        </p>
                        <p>
                            Be alerted when a new vulnerability is found in one of your dependencies.
                        </p>
                        <div class="vigilantModeRow">
                            <input type="checkbox">
                            <span>
                                Automatically enable for new repositories
                            </span>
                        </div>
                    </div>
                    <div>
                        <button class="btn btn-light turnBtn">
                            Disable all
                        </button>
                        <button class="btn btn-light turnBtn">
                            Enalble all
                        </button>
                    </div>
                </div>
                <hr />
                <div class="savedReplyRow">
                    <div>
                        <p>
                            Dependabot security updates
                        </p>
                        <p>
                            Easily upgrade to non-vulnerable dependencies.
                        </p>
                        <div class="vigilantModeRow">
                            <input type="checkbox">
                            <span>
                                Automatically enable for new repositories
                            </span>
                        </div>
                    </div>
                    <div>
                        <button class="btn btn-light turnBtn">
                            Disable all
                        </button>
                        <button class="btn btn-light turnBtn">
                            Enalble all
                        </button>
                    </div>
                </div>
                <hr />
            </div>
            <div v-else-if="activeTab.includes('sponsorship log')" class="article">
                <div class="sponsorsLogContainer">
                    <h4>
                        Sponsors log
                    </h4>
                    <button class="btn btn-light w-25 goToYourPersonalProfile">
                        Period: all-time
                    </button>
                </div>
                <span>
                    New sponsorships, changes, and cancellations
                </span>
                <hr />
                <div class="sponsorsLogAligner">
                    <h6>
                        No sponsorship activity in this time period
                    </h6>
                    <span>
                        This is where you can review activity from your sponsorships.
                    </span>
                </div>
            </div>
            <div v-else-if="activeTab.includes('emails')" class="article">
                <h4>
                    Emails
                </h4>
                <hr />
                <p class="defaultEmail">
                    Add email address
                </p>
                <div class="vigilantModeRow">
                    <input type="email" placeholder="Email address" class="form-control w-50">
                    <button class="btn btn-light turnBtn">
                        Add
                    </button>
                </div>
                <hr />
                <p class="defaultEmail">
                    Primary email address
                </p>
                <p>
                    Because you have email privacy enabled, glebdyakov2000@gmail.com will be used for account-related notifications as well as password resets. 67467704+glebDyakov@users.noreply.github.com will be used for web-based Git operations, e.g., edits and merges.
                </p>
                <div class="vigilantModeRow">
                    <input type="email" placeholder="Email address" class="form-control w-50">
                    <button class="btn btn-light turnBtn">
                        Save
                    </button>
                </div>
                <hr />
                <p class="defaultEmail">
                    Backup email address
                </p>
                <p>
                    Your backup GitHub email address will be used as an additional destination for security-relevant account notifications and can also be used for password resets.
                </p>
                <div class="vigilantModeRow">
                    <input type="text" :value="'Allowed all verified emails'" placeholder="Email address" class="form-control w-50">
                    <button class="btn btn-light turnBtn">
                        Save
                    </button>
                </div>
                <span>
                    Please add a verified email, in addition to your primary email, in order to choose a backup email address.
                </span>
                <hr />
                <div class="vigilantModeRow">
                    <input type="checkbox">
                    <span>
                        Keep my email addresses private
                    </span>
                </div>
                <span>
                    We’ll remove your public profile email and use 67467704+glebDyakov@users.noreply.github.com when performing web-based Git operations (e.g. edits and merges) and sending email on your behalf. If you want command line Git operations to use your private email you must set your email in Git.
                </span>
                <p>
                    Commits pushed to GitHub using this email will still be associated with your account.
                </p>
                <div class="vigilantModeRow">
                    <input type="checkbox">
                    <span>
                        Block command line pushes that expose my email
                    </span>
                </div>
                <span>
                    When you push to GitHub, we’ll check the most recent commit. If the author email on that commit is a private email on your GitHub account, we will block the push and warn you about exposing your private email.
                </span>
                <h4>
                    Emails preferences
                </h4>
                <hr />
                <div class="vigilantModeRow">
                    <input checked type="radio" />
                    <span>
                        Receive all emails, except those I unsubscribe from.
                    </span>
                </div>
                <span>
                    We’ll occasionally contact you with the latest news and happenings from the GitHub Universe. Learn more.
                </span>
                <div class="vigilantModeRow">
                    <input type="radio" />
                    <span>
                        Only receive account related emails, and those I subscribe to.
                    </span>
                </div>
                <span>
                    We’ll only send you legal or administrative emails, and any emails you’re specifically subscribed to.
                </span>
                <button class="btn btn-light turnBtn">
                    Save email preferences
                </button>
                <div class="vigilantModeRow">
                    <span class="material-icons">
                        help_outline
                    </span>
                    <span>
                        Looking for activity notification controls? Check the Notification center.
                    </span>
                </div>
            </div>
            <div v-else-if="activeTab.includes('notifications')" class="article">
                <h4>
                    Notifications
                </h4>
                <hr />
                <h4>
                    Email notifications references
                </h4>
                <hr />
                <p class="defaultEmail">
                    Default notification email
                </p>
                <div class="vigilantModeRow">
                    <input type="email" class="form-control w-50">
                    <button class="btn btn-light turnBtn">
                        Save
                    </button>
                </div>
                <p>
                    Choose which email updates you receive on conversations you’re participating in or watching
                </p>
                <div class="vigilantModeRow">
                    <input type="checkbox" checked>
                    <span>
                        Comments on Issues and Pull Requests 
                    </span>
                </div>
                <div class="vigilantModeRow">
                    <input type="checkbox" checked>
                    <span>
                        Pull Request reviews 
                    </span>
                </div>
                <div class="vigilantModeRow">
                    <input type="checkbox" checked>
                    <span>
                        Pull Request pushes 
                    </span>
                </div>
                <div class="vigilantModeRow">
                    <input type="checkbox">
                    <span>
                        Include your own updates
                    </span>
                </div>
                <h4>
                    Custom routing
                </h4>
                <hr />
                <span>
                    You can send notifications to different verified email addresses depending on the organization that owns the repository.
                </span>
                <div class="notificationsBlock">
                    <span>
                        You are not a member of any organizations.
                    </span>
                </div>
            </div>
            <div v-else-if="activeTab.includes('ssh and gpg keys')" class="article">
                <div class="sshKeysRow">
                    <h4>
                        SSH keys
                    </h4>
                    <button class="btn btn-success">
                        New ssh key
                    </button>
                </div>
                <hr />
                <p>
                    There are no SSH keys associated with your account.
                </p>
                <p>
                    Check out our guide to generating SSH keys or troubleshoot common SSH problems.
                </p>
                <div class="sshKeysRow">
                    <h4>
                        GPG keys
                    </h4>
                    <button class="btn btn-success">
                        New gpg key
                    </button>
                </div>
                <hr />
                <p>
                    There are no GPG keys associated with your account.
                </p>
                <p>
                    Learn how to 
                    <span class="generateKey">
                        generate a GPG key and add it to your account .
                    </span>
                </p>
                <div class="vigilantModeRow">
                    <h4>
                        Vigilant mode row
                    </h4>
                    <button class="btn btn-success">
                        Beta
                    </button>
                </div>
                <hr />
                <div class="visilantModeRow">
                    <input type="checkbox">
                    <span>
                        Flag unsigned commits as unverified
                    </span>
                </div>
                <p>
                    This will include any commit attributed to your account but not signed with your GPG or S/MIME key.
                </p>
                <p>
                    Note that this will include your existing unsigned commits.
                </p>
                <span class="generateKey">
                    Learn about vigilant mode.
                </span>
            </div>
            <div v-else-if="activeTab.includes('scheduled reminders')" class="article">
                <h4>
                    Scheduled reminders
                </h4>
                <hr />
                <hr />
            </div>
            <div v-else-if="activeTab.includes('repositories')" class="article">
                <h4>
                    Repository default branch
                </h4>
                <hr />
                <span>
                    Choose the default branch for your new personal repositories. You might want to change the default name due to different workflows, or because your integrations still require “master” as the default branch name. You can always change the default branch name on individual repositories. Learn more about default branches.
                </span>
                <div class="reposRow">
                    <input type="text" class="form-control w-50" />
                    <button class="btn btn-light turnBtn">
                        Update
                    </button>
                </div>
                <h4>
                    Repositories
                </h4>
                <hr />
                <div class="reposTable">
                    <div class="reposTableHeader">
                        <div>
                            <span class="material-icons">
                                delete
                            </span>
                            <span>
                                Repositories
                            </span>
                        </div>
                        <div>
                            <span class="material-icons">
                                delete
                            </span>
                            <span>
                                Deleted repositories
                            </span>
                        </div>
                    </div>        
                    <div class="reposTableHeader">
                        <div class="reposTableAuthor">
                            <span>
                                gdlyeabkov
                            </span>
                        </div>
                    </div>
                    <div v-for="repo in repos" :key="repo.name">
                        <hr />
                        <div class="currentRepo">
                            <span class="material-icons-outlined">
                                lock
                            </span>
                            <span class="linkable">
                                {{ gitfaber.email }}/{{ repo.name }}
                            </span>
                            <span>
                                1.82 MB
                            </span>
                            <div class="collaboratorsBlock">
                                <span class="material-icons-outlined">
                                    group
                                </span>
                                <span class="linkable">
                                    0 collaborators
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="activeTab.includes('packages')" class="article">
                <h4>
                    Deleted Packages
                </h4>
                <span>
                    These are packages that have been previously deleted belonging to you. You can restore a package deleted within the last 30 days.
                </span>
                <input type="text" placeholder="Search deleted packages" class="form-control w-75">
                <div class="packages">
                    No recoverable packages were found for {{ gitfaber.email }}.
                </div>
            </div>
            <div v-else-if="activeTab.includes('organizations')" class="article">
                <h4>
                    Organizations
                </h4>
                <h6 class="transformAccount">
                    You are not a member of any organizations.
                </h6>
                <h4>
                    Transform account
                </h4>
                <hr />
                <button class="turnBtn btn btn-light w-50">
                    Turn glebDyakov into an organization
                </button>
            </div>
            <div v-else-if="activeTab.includes('saved replies')" class="article">
                <h4>
                    Saved replies
                </h4>
                <hr />
                <span>
                    Saved replies are re-usable text snippets that you can use throughout GitHub comment fields. Saved replies can save you time if you’re often typing similar responses. Learn more.
                </span>
                <p class="noSavedRepliesYet">
                    No saved replies yet.
                </p>
                <h4>
                    Add a saved reply
                </h4>
                <hr />
                <span class="savedReplyTitle">
                    Saved reply title
                </span>
                <input type="text" placeholder="Add a short title to your reply" class="form-control w-50">
                <div class="savedReplyArea">
                    <div class="savedReplyAreaHeader">
                        <div class="dependencyGraphTabs">
                            <span @click="savedReplyTab = 'write'" :class="{ dependencyGraphActiveTab: savedReplyTab.includes('write') }">
                                Write
                            </span>
                            <span @click="savedReplyTab = 'preview'" :class="{ dependencyGraphActiveTab: savedReplyTab.includes('preview') }">
                                Preview
                            </span>
                        </div>
                        <span>
                            H
                        </span>
                        <span>
                            B
                        </span>
                        <span>
                            I
                        </span>
                        <span class="material-icons">
                            segment
                        </span>
                        <span class="material-icons">
                            list
                        </span>
                        <span class="material-icons">
                            format_list_numbered
                        </span>
                        <span class="material-icons">
                            domain_verification
                        </span>
                        <span>
                            @
                        </span>
                        <span class="material-icons">
                            chat
                        </span>
                        <span class="material-icons">
                            keyboard_return
                        </span>
                        <span class="material-icons">
                            arrow_drop_down
                        </span>
                    </div>
                    <div>
                        <div v-if="savedReplyTab.includes('write')" class="savedReplyContent">
                            <textarea name="" id="" cols="30" rows="10" placeholder="Add your saved reply" class="form-control"></textarea>
                            <input type="file" class="form-control">
                        </div>
                        <div v-else-if="savedReplyTab.includes('preview')">
                            <span>
                                Nothing to preview
                            </span>
                        </div>
                        <button class="btn btn-success w-25">
                            Add saved reply
                        </button>
                    </div>
                </div>
            </div>
            <div v-else-if="activeTab.includes('applications')" class="article">
                <h4>
                    Applications
                </h4>
                <hr />
                <div class="dependencyGraphTabs">
                    <span @click="appTab = 'installed gitfab apps'" :class="{ dependencyGraphActiveTab: appTab.includes('installed gitfab apps') }">
                        Installed GitHub Apps
                    </span>
                    <span @click="appTab = 'authorized gitfab apps'" :class="{ dependencyGraphActiveTab: appTab.includes('authorized gitfab apps') }">
                        Authorized GitHub Apps
                    </span>
                    <span @click="appTab = 'authorized oauth apps'" :class="{ dependencyGraphActiveTab: appTab.includes('authorized oauth apps') }">
                        Authorized OAuth Apps
                    </span>
                </div>
                <div v-if="appTab.includes('installed gitfab apps')">
                    <span>
                        Gitfab Apps augment and extend your workflows on GitHub with commercial, open source, and homegrown tools.
                    </span>
                </div>
                <div v-else-if="appTab.includes('authorized gitfab apps')">
                    <span>
                        
                    </span>
                </div>
                <div v-else-if="appTab.includes('authorized oauth apps')">
                    <span>
                        
                    </span>
                </div>
            </div>
            <div v-else-if="activeTab.includes('applications')" class="article">
                <h4>
                    Applications
                </h4>
                <hr />
            </div>
            <div v-else-if="activeTab.includes('applications')" class="article">
                <h4>
                    Applications
                </h4>
                <hr />
            </div>
            <div v-else-if="activeTab.includes('blocked users')" class="article">
                <h4>
                    Block a user
                </h4>
                <hr />
            </div>
            <div v-else-if="activeTab.includes('interaction limits')" class="article">
                <h4>
                    Temporary interaction limits
                </h4>
                <hr />
            </div>
        </div>     
    </div>
    <Footer />
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import * as jwt from 'jsonwebtoken'

export default {
    name: 'Settings',
    data(){
        return {
            activeTab: 'profile',
            appTab: 'installed gitfab apps',
            gitfaber: {},
            repos: [],
            token: window.localStorage.getItem("gitfabtoken")
        }
    },
    mounted(){
        jwt.verify(this.token, 'gitfabsecret', (err, decoded) => {
            if(err) {
                this.$router.push({ name: 'StartPage' })
            } else {
                fetch(`http://localhost:4000/api/gitfabers/get/?gitfaberemail=${decoded.gitfaberemail}`, {
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
                        this.gitfaber = JSON.parse(result).gitfaber
                        this.repos = JSON.parse(result).repos
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
    
    .main {
        margin: auto;
        width: 85%;
        display: flex;
        flex-direction: column;
    }

    .goToYourPersonalProfile {
        border: 1px solid rgb(200, 200, 200);
        height: 35px;
        align-self: center;
        font-size: 10px;
    }

    .avatarRow {
        display: flex;
        justify-content: space-between;
    }

    .gitfaber {
        font-weight: bolder;
    }

    .avatarInfo {
        display: flex;
        flex-direction: column;
    }

    .avatar {
        color: rgb(255, 255, 255);
        background-color: rgb(0, 150, 0);
        border-radius: 100%;
        width: 45px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bolder;
    }

    .avatarBlock {
        display: flex;
    }
    
    .avatarBlock > * {
        margin: 10px;
    }

    .asideMenus {
        width: 25%;
    }

    .asideMenu {
        height: 700px;
        display: flex;
        flex-direction: column;
        border: 1px solid rgb(150, 150, 150);
        width: 100%;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 15px;
        margin: 15px 0px;
    }

    .secondAsideMenu {
        margin: 15px 0px;
        height: 50px;
        display: flex;
        flex-direction: column;
        border: 1px solid rgb(150, 150, 150);
        width: 100%;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 15px;
    }

    .thirdAsideMenu {
        margin: 15px 0px;
        height: 150px;
        display: flex;
        flex-direction: column;
        border: 1px solid rgb(150, 150, 150);
        width: 100%;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 15px;
    }

    .asideMenuItem {
        border-bottom: 1px solid rgb(150, 150, 150);
        margin: 5px 0px;
        cursor: pointer;
    }

    .totalContainer {
        display: flex;
    }

    .article {
        width: 70%;
        margin-left: 50px;
    }

    .transformAccount {
        text-align: center;
        width: 100%;
    }

    .turnBtn {
        border: 1px solid rgb(200, 200, 200);
        align-self: center;
        font-weight: bolder;
    }

    .asideMenuActiveItem {
        font-weight: bolder;
    }

    .reposRow {
        display: flex;
    }

    .reposRow > * {
        margin: 5px;
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

    .currentRepo { 
        display: flex;
        height: 50px;
        box-sizing: border-box;
        padding: 10px;
    }

    .currentRepo > * {
        margin: 5px;
    } 

    .linkable {
        color: rgb(0, 0, 255);
        cursor: pointer;
    }

    .collaboratorsBlock {
        display: flex;
        align-items: center;
    }

    .packages {
        box-sizing: border-box;
        padding: 15px;
        width: 75%;
        height: 125px;
        border-radius: 8px;
        background-color: rgb(255, 255, 255);
        border: 1px solid rgb(200, 200, 200);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 15px 0px;
    }

    .sponsorsLogContainer {
        display: flex;
        justify-content: space-around;
    }

    .sponsorsLogAligner {
        text-align: center;
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

    .noSavedRepliesYet {
        text-align: center;
        color: rgb(125, 125, 125);
    }

    .savedReplyTitle {
        font-weight: bolder;
    }
    
    .savedReplyArea {
        border: 1px solid rgb(200, 200, 200);
        border-radius: 8px;
        background-color: rgb(255, 255, 255);
        width: 75%;
        height: 450px;
        margin: 15px;
    }

    .savedReplyAreaHeader {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: rgb(235, 235, 235);
        height: 15%;
    }

    .savedReplyContent {
        width: 85%;
        height: 65%;
        border: 1px solid rgb(200, 200, 200);
        border-radius: 8px;
        background-color: rgb(255, 255, 255);
        margin: 15px auto;
        box-sizing: border-box;
        padding: 10px;
    }

    .savedReplyContent > textarea {
        height: 75%;
    }

    .sshKeysRow {
        display: flex;
        justify-content: space-between;
    }

    .vigilantModeRow {
        display: flex;
        justify-content: flex-start;
    }

    .vigilantModeRow > * {
        margin: 15px;
    }

    .generateKey {
        color: rgb(0, 0, 255);
        cursor: pointer;
    }

    .notificationsBlock {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        width: 65%;
        height: 150px;
        border: 1px solid rgb(200, 200, 200);
    }

    .accountSecurityBlock {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 65%;
        height: 200px;
        flex-direction: column;
        margin: auto;
    }

    .defaultEmail {
        font-weight: bolder;
    }

    .btnRow {
        display: block;
    }

    .dangerBlock {
        color: rgb(215, 0, 0);
    }

    .labelBlock {
        font-weight: bolder;
    }

    .themes {
        display: flex;
        flex-direction: column;
    }
    
    .themeRow {
        margin: 15px;
        display: flex;
        justify-content: space-around;
    }
    
    .theme {
        box-sizing: border-box;
        padding: 15px;
        border: 1px solid rgb(200, 200, 200);
        width: 25%;
        height: 150px;
        border-radius: 8px;
    }
    
    .themePreview {
        height: 75%;
    }

    .themeName {
        font-weight: bolder;
    }

</style>
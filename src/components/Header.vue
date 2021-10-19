<template>
    <div class ="header">
        <div class="headerItem headerLeftItem">
            <img class="logo" width="100px" src="https://repository-images.githubusercontent.com/124369770/d12e6800-b47a-11e9-85a3-5fe53e198d49" alt="">
            <input type="text" placeholder="Search or jump to..." class="searcher form-control">
            <span>
                Pull requests
            </span>
            <span>
                Issues
            </span>
            <span>
                Marketplace
            </span>
            <span>
                Explore
            </span>
        </div>
        <div class="headerItem">
            <span class="material-icons">
                notifications
            </span>
            <span class="material-icons">
                add
            </span>
            <span class="material-icons">
                arrow_drop_down
            </span>
            <div class="avatar">

            </div>
            <span class="material-icons">
                arrow_drop_down
            </span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    
    .header {
        color: rgb(255, 255, 255);
        background-color: rgb(0, 0, 0);
        height: 50px;
        display: flex;
        justify-content: space-around;
    }
    
    .avatar {
        border-radius: 100%;
        width: 25px;
        height: 25px;
        background-color: rgb(0, 155, 0);
    }

    .headerItem {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .headerLeftItem {
        width: 50%;
    }

    .headerLeftItem > span {
        font-weight: bolder;
        font-size: 12px;
    }

    .searcher {
        background-color: rgb(0, 0, 0);
        height: 30px;
        border: 1px solid rgb(125, 125, 125);
        width: 225px;
    }

</style>
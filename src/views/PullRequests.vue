<template>
<div>
    <Header />
    <div>
        <span>
            Pull Requests
        </span>
    </div>
    <Footer />
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'PullRequests',
    components: {
        Header,
        Footer
    }
}
</script>

<style>

</style>
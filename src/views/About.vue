<template>
<div>
    <Header />
    <div>
        <span>
            About
        </span>
    </div>
    <Footer />
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'About',
    components: {
        Header,
        Footer
    }
}
</script>

<style>

</style>
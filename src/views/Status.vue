<template>
<div>
    <Header />
    <div>
        <span>
            Status
        </span>
    </div>
    <Footer />
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Status',
    components: {
        Header,
        Footer
    }
}
</script>

<style>

</style>
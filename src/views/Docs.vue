<template>
<div>
    <Header />
    <div>
        <span>
            Docs
        </span>
    </div>
    <Footer />
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Docs',
    components: {
        Header,
        Footer
    }
}
</script>

<style>

</style>
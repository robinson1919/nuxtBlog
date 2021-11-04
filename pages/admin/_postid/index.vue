<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
        </section>
    </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm';

export default {
    layout: 'admin',
    middleware: ['check-auth', 'auth'],
    components: {
        AdminPostForm
    },
    async asyncData({params, app, error}) {
        let data = await app.$axios.$get(process.env.baseUrl +`/posts/${params.postid}.json`)
        .catch(err => error(err))

        return { 
            loadedPost: {...data, id: params.postid } 
        }
    },
    methods: {
        async onSubmitted(editedPost) {
            await this.$store.dispatch('editPost', editedPost);
            this.$router.push('/admin');
        }
    }
}
</script>


<style scoped>
.update-form {
    width: 90%;
    margin: 20px auto;
}

@media (min-width: 768px){
    .update-form {
        width: 50%;
    }
}
</style>
<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" />
        </section>
    </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm';

export default {
    components: {
        AdminPostForm
    },
    data: () => ({
        loadedPost: {
            author: 'Robinson',
            title: 'the mind',
            content: 'the space of mind',
            thumbnailLink: 'https://www.google.com.do/imgres?imgurl=http%3A%2F%2Fi.huffpost.com%2Fgen%2F1196953%2Fimages%2Fo-MIND-UPLOADING-facebook.jpg&imgrefurl=https%3A%2F%2Ffreeenglishlessonplans.com%2F2016%2F02%2F07%2Fmind-boggling-expressions-with-mind%2F&tbnid=aeu_MRBgnM9bdM&vet=12ahUKEwi_m-a07PDyAhV2wikDHbTFA1UQMygEegUIARDXAQ..i&docid=cr1WTSdIFYcXPM&w=1536&h=1152&q=mind&ved=2ahUKEwi_m-a07PDyAhV2wikDHbTFA1UQMygEegUIARDXAQ'
        }
    })
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
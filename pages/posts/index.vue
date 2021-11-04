<template>
    <div class="posts-page">
        <PostList :posts="loadedPosts"/>
    </div>
</template>

<script>

export default {
  computed: {
    loadedPosts(){
      return this.$store.state.loadedPosts;
    }
  }
}
</script>

<style scoped>
.posts-page {
    display: flex;
    justify-content: center;
    align-content: center;
}


</style>
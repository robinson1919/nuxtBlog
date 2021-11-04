import { wrapFunctional } from './utils'

export { default as Logo } from '../..\\components\\Logo.vue'
export { default as AdminPostForm } from '../..\\components\\Admin\\AdminPostForm.vue'
export { default as NavigationTheHeader } from '../..\\components\\Navigation\\TheHeader.vue'
export { default as NavigationTheSidenav } from '../..\\components\\Navigation\\TheSidenav.vue'
export { default as NavigationTheSideNavToggle } from '../..\\components\\Navigation\\TheSideNavToggle.vue'
export { default as PostsPostList } from '../..\\components\\Posts\\PostList.vue'
export { default as PostsPostPreview } from '../..\\components\\Posts\\PostPreview.vue'
export { default as UIAppButton } from '../..\\components\\UI\\AppButton.vue'
export { default as UIAppControlInput } from '../..\\components\\UI\\AppControlInput.vue'

export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminPostForm = import('../..\\components\\Admin\\AdminPostForm.vue' /* webpackChunkName: "components/admin-post-form" */).then(c => wrapFunctional(c.default || c))
export const LazyNavigationTheHeader = import('../..\\components\\Navigation\\TheHeader.vue' /* webpackChunkName: "components/navigation-the-header" */).then(c => wrapFunctional(c.default || c))
export const LazyNavigationTheSidenav = import('../..\\components\\Navigation\\TheSidenav.vue' /* webpackChunkName: "components/navigation-the-sidenav" */).then(c => wrapFunctional(c.default || c))
export const LazyNavigationTheSideNavToggle = import('../..\\components\\Navigation\\TheSideNavToggle.vue' /* webpackChunkName: "components/navigation-the-side-nav-toggle" */).then(c => wrapFunctional(c.default || c))
export const LazyPostsPostList = import('../..\\components\\Posts\\PostList.vue' /* webpackChunkName: "components/posts-post-list" */).then(c => wrapFunctional(c.default || c))
export const LazyPostsPostPreview = import('../..\\components\\Posts\\PostPreview.vue' /* webpackChunkName: "components/posts-post-preview" */).then(c => wrapFunctional(c.default || c))
export const LazyUIAppButton = import('../..\\components\\UI\\AppButton.vue' /* webpackChunkName: "components/u-i-app-button" */).then(c => wrapFunctional(c.default || c))
export const LazyUIAppControlInput = import('../..\\components\\UI\\AppControlInput.vue' /* webpackChunkName: "components/u-i-app-control-input" */).then(c => wrapFunctional(c.default || c))

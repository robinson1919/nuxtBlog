import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  AdminPostForm: () => import('../..\\components\\Admin\\AdminPostForm.vue' /* webpackChunkName: "components/admin-post-form" */).then(c => wrapFunctional(c.default || c)),
  NavigationTheHeader: () => import('../..\\components\\Navigation\\TheHeader.vue' /* webpackChunkName: "components/navigation-the-header" */).then(c => wrapFunctional(c.default || c)),
  NavigationTheSidenav: () => import('../..\\components\\Navigation\\TheSidenav.vue' /* webpackChunkName: "components/navigation-the-sidenav" */).then(c => wrapFunctional(c.default || c)),
  NavigationTheSideNavToggle: () => import('../..\\components\\Navigation\\TheSideNavToggle.vue' /* webpackChunkName: "components/navigation-the-side-nav-toggle" */).then(c => wrapFunctional(c.default || c)),
  PostsPostList: () => import('../..\\components\\Posts\\PostList.vue' /* webpackChunkName: "components/posts-post-list" */).then(c => wrapFunctional(c.default || c)),
  PostsPostPreview: () => import('../..\\components\\Posts\\PostPreview.vue' /* webpackChunkName: "components/posts-post-preview" */).then(c => wrapFunctional(c.default || c)),
  UIAppButton: () => import('../..\\components\\UI\\AppButton.vue' /* webpackChunkName: "components/u-i-app-button" */).then(c => wrapFunctional(c.default || c)),
  UIAppControlInput: () => import('../..\\components\\UI\\AppControlInput.vue' /* webpackChunkName: "components/u-i-app-control-input" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}

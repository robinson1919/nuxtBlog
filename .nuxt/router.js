import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6e513378 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _5c847942 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _21ca463e = () => interopDefault(import('..\\pages\\posts\\index.vue' /* webpackChunkName: "pages/posts/index" */))
const _780d651a = () => interopDefault(import('..\\pages\\admin\\auth\\index.vue' /* webpackChunkName: "pages/admin/auth/index" */))
const _4f824616 = () => interopDefault(import('..\\pages\\admin\\new-post\\index.vue' /* webpackChunkName: "pages/admin/new-post/index" */))
const _4d687bf8 = () => interopDefault(import('..\\pages\\admin\\_postid\\index.vue' /* webpackChunkName: "pages/admin/_postid/index" */))
const _4a563d9c = () => interopDefault(import('..\\pages\\posts\\_id\\index.vue' /* webpackChunkName: "pages/posts/_id/index" */))
const _38ea5f43 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _6e513378,
    name: "about"
  }, {
    path: "/admin",
    component: _5c847942,
    name: "admin"
  }, {
    path: "/posts",
    component: _21ca463e,
    name: "posts"
  }, {
    path: "/admin/auth",
    component: _780d651a,
    name: "admin-auth"
  }, {
    path: "/admin/new-post",
    component: _4f824616,
    name: "admin-new-post"
  }, {
    path: "/admin/:postid",
    component: _4d687bf8,
    name: "admin-postid"
  }, {
    path: "/posts/:id",
    component: _4a563d9c,
    name: "posts-id"
  }, {
    path: "/",
    component: _38ea5f43,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

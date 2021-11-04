export default function (context) {
    // console.log('[middleware] Auth')
    if(!context.store.getters.isAuthenticated) context.redirect('/admin/auth')
}
import Vuex from 'vuex';
import Cookie from 'js-cookie'

// Vue.use(Vuex)

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: [],
            token: null
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts;
            },
            addPost(state, post) { state.loadedPosts.push(post) },
            editPost(state, editedPost) {
                const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
                state.loadedPosts[postIndex] = editedPost
            },
            setToken(state, payload){
                state.token = payload;
            },
            clearToken(state) {
                state.token = null;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return context.app.$axios.$get('/posts.json')
                    .then(data => {
                        const postsArray = [];
                        for(const key in data){
                            postsArray.push({...data[key], id: key})
                        }    
                                          
                        vuexContext.commit('setPosts', postsArray)
                    })
                    .catch(e => context.error(e))                
            },
            async addPost(vuexContext, posts){
                const createdPost = {
                    ...posts, 
                    updatedDate: new Date()
                }
                let response = await this.$axios.$post(`${process.env.baseUrl}/posts.json?auth=${vuexContext.state.token}`, createdPost)
                .catch(error => console.log(error));
                vuexContext.commit('addPost', {...createdPost, id: response.name})

                return response;
            },
            async editPost(vuexContext, editedPost){
                await this.$axios.$put(`${process.env.baseUrl}/posts/${editedPost.id}.json?auth=${vuexContext.state.token}`, editedPost)
                .catch(err => console.log(err))

                vuexContext.commit('editPost', editedPost);
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            },
            async authencateUser(vuexContext, authData) {
                let authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbAPIKEY}`
                if(!authData.isLogin) authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbAPIKEY}`;
                

                let response = await this.$axios.$post(authUrl, {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                })
                .catch(error => console.log(error))
                let expirationDate = new Date().getTime() + +response.expiresIn * 1000;
                vuexContext.commit('setToken', response.idToken)
                localStorage.setItem('token', response.idToken)
                localStorage.setItem('tokenExpiration', +expirationDate)
                Cookie.set('jwt', response.idToken)
                Cookie.set('expirationDate', +expirationDate)

                const res = await this.$axios.$post('https://nuxtblog1.herokuapp.com/api/track-data', {data: 'hello'})
                .catch(error => console.log(error))

                return response;  
            },
            setLogoutTimer(vuexContext, duration) {
                setTimeout(() => {
                    vuexContext.commit('clearToken')
                }, duration)
            },
            initAuth(vuexContext, req) {
                let token;
                let expirationDate;
                if(req){
                    if(!req.headers.cookie) return;
                    const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
                    if(!jwtCookie) return;
                    token = jwtCookie.split('=')[1]                    
                    expirationDate = req.headers.cookie.split(';').find(c => c.trim().startsWith('expirationDate='))
                    .split('=')[1]
                } else if(process.client) {
                    token = localStorage.getItem('token')
                    expirationDate = localStorage.getItem('tokenExpiration')                    
                }  
                if(new Date().getTime() > +expirationDate || !token) return vuexContext.dispatch('logout');             

                vuexContext.commit('setToken', token)
            },
            logout(vuexContext) {
                vuexContext.commit('clearToken');
                Cookie.remove('jwt'); 
                Cookie.remove('expirationDate'); 
                if(!process.client) return;
                localStorage.removeItem('token')
                localStorage.removeItem('tokenExpiration')
                
            }          
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            },
            isAuthenticated(state) {
                return state.token != null;
            }
        }
    })
}


export default createStore;
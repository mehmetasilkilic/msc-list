import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import CreatePlaylist from '../views/playlists/CreatePlaylist.vue'
import PlaylistDetails from '../views/playlists/PlaylistDetails.vue'
import UserPlaylists from '../views/playlists/UserPlaylists.vue'

import { projectAuth } from "../firebase/config"

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;

  if (!user) {
    next({ name: 'Login' });
  } else {
    next();
  }
}

const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (user) {
    next({ name: "Home" });
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: requireNoAuth
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    beforeEnter: requireNoAuth
  },
  {
    path: '/playlist/create',
    name: 'CreatePlaylist',
    component: CreatePlaylist,
    beforeEnter: requireAuth
  },
  {
    path: '/playlist/:id',
    name: 'PlaylistDetails',
    component: PlaylistDetails,
    beforeEnter: requireAuth,
    props: true
  },
  {
    path: '/playlist/user',
    name: 'UserPlaylists',
    component: UserPlaylists,
    beforeEnter: requireAuth,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Post from "../views/Post.vue"
import MyPage from "../views/MyPage.vue"
import PostsIndex from "../views/PostsIndex.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/post",
    name: "Post",
    component: Post,
  },
  {
    path: "/my-page/:uid",
    name: "MyPage",
    component: MyPage,
  },
  {
    path: "/posts-index",
    name: "PostsIndex",
    component: PostsIndex,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router

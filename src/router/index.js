import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Post from "../views/Post.vue"
import MyPosts from "../views/MyPosts.vue"
import PostsIndex from "../views/PostsIndex.vue"
import Postdetail from "../views/Postdetail.vue"

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
    path: "/my-posts/:uid",
    name: "MyPosts",
    component: MyPosts,
  },
  {
    path: "/posts-index",
    name: "PostsIndex",
    component: PostsIndex,
  },
  {
    path: "/post-detail",
    name: "Postdetail",
    component: Postdetail,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router

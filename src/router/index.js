import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChatAI from "@/views/xunfei/ChatAI.vue"
import SpeechScore from "@/views/xunfei/SpeechScore.vue";
import VoiceToWord from "@/views/xunfei/SpeechToWord.vue";
import SpeechSynthesis from "@/views/xunfei/SpeechSynthesis.vue";
import smartTalkRoutes from "@/router/smartTalkRoutes.js";
import userRoutes from "@/router/userRoutes.js";
import wordRoutes from "@/router/wordRoutes.js";
import xunfeiRoutes from "@/router/xunfeiRoutes.js";
import Test from "@/views/test/Test.vue";
import aboutRoutes from "@/router/aboutRoutes/aboutRoutes.js";
import statisticRoutes from "@/router/statisticRoutes.js";
import Test2 from "@/views/test/Test2.vue";
import bookRoutes from "@/router/bookRoutes.js";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/test',
            name: 'Test',
            component: Test
        },
        {
            path: '/test2',
            name: 'Test2',
            component: Test2
        }
    ].concat(userRoutes, smartTalkRoutes, wordRoutes, xunfeiRoutes, aboutRoutes, statisticRoutes, bookRoutes)
})

export default router

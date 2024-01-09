/// <reference types="vite/client" />
declare module 'swiper/modules'
declare module 'swiper'
declare module 'axios'
// src/vue.d.ts
import { Store } from 'vuex';
import { StateType } from './store'; // Adjust this import to match your store's state type

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store<StateType>;
    }
}
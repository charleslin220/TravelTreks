/// <reference types="vite/client" />
// src/vue.d.ts
import { Store } from 'vuex';
import { StateType } from './store'; // Adjust this import to match your store's state type

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store<StateType>;
    }
}

declare module 'swiper/modules'
declare module 'swiper'
declare module 'axios'
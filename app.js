import { createSSRApp } from 'vue';

const isClient = !!globalThis?.document?.baseURI;
console.log('isClient', isClient);

export function createApp() {
  return createSSRApp({
    data: () => ({ count: 1, isClient }),
    template: `<div v-if="isClient"><button @click="count++">{{ count }}</button></div>`,
  });
}

<template>
    <div class="page">
        <div class="device">
            <div>
                <p>{{ device.type }}</p>
                <h1>{{ device.name }}</h1>
            </div>
            <div class="flex" v-if="device.hasOwnProperty('value')">
                <div class="updown">
                    <div>+</div>
                    <div>-</div>
                </div>
                <input type="text" :placeholder="device.value + device.unit">
                <div class="done">
                    <img src="@/assets/img/done.png" class="w-8">
                </div>
            </div>
            <div v-if="device.hasOwnProperty('on')">
                <p>estado</p>
                <h1>{{ device.on ? 'encendido' : 'apagado' }}</h1>
            </div>
        </div>
    </div>
</template>


<script setup>

/*imports*/
import { ref, onMounted } from 'vue'

import { useRoute } from 'vue-router'

import { getDevice } from '@/firebase.js'

//

const route = useRoute()

//

const device = ref({})

const loadDevice = () => getDevice(route.params.id, doc => device.value = doc.data())

onMounted(() => loadDevice())

</script>


<style scoped>

.device{ @apply flex flex-col gap-8 }

input{ @apply w-full text-right border-solid p-2 text-xl }

h1{ @apply text-3xl }

p{ @apply text-[#aeaeae] }

.done{ @apply bg-[#424242] hover:bg-[#646464] p-2 rounded-r-2xl cursor-pointer flex justify-center items-center }

.updown{ @apply flex flex-col }

.updown div{ @apply font-bold text-xl basis-1/2 w-12 bg-[#424242] hover:bg-[#646464] flex justify-center cursor-pointer }

</style>
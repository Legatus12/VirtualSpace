<template>
    <div class="page">
        <div class="device">
            <div>
                <p>{{ device.type }}</p>
                <h1>{{ device.name }}</h1>
            </div>
            <div class="flex" v-if="device.hasOwnProperty('value')">
                <div class="done" @click="modifyValue()">
                    <img src="@/assets/img/done.png" class="w-8">
                </div>
                <input type="text" v-model="newValue" :placeholder="device.value">
                <h1>&nbsp;{{ device.unit }}</h1>
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

import { getDevice, updateValue } from '@/firebase.js'

//

const route = useRoute()

//

const device = ref({})

const newValue = ref('')

const loadDevice = () => getDevice(route.params.id, doc => device.value = doc.data())

const modifyValue = () => updateValue(route.params.id, {value: newValue.value})

onMounted(() => loadDevice())

</script>


<style scoped>

.device{ @apply flex flex-col gap-8 w-96 }

input{ @apply w-full text-right text-[#121212] border-solid p-2 text-xl }

h1{ @apply text-3xl }

p{ @apply text-[#aeaeae] }

.done{ @apply bg-[#424242] hover:bg-[#646464] p-2 rounded-l-2xl cursor-pointer flex justify-center items-center }

</style>
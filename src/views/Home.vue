<template>
    <div class="page">
        <div class="devices">
            <p v-for="device in devices" @click="router.push({name: 'device', params: { id: device.id}})">
                {{ device.id }} - {{ device.data().name }}
            </p>
        </div>
    </div>
</template>

<script setup>

/*imports*/
import { ref, onMounted } from 'vue'

import { useRouter } from 'vue-router'

import { getAll } from '@/firebase.js'

//

const router = useRouter()

//

const devices = ref([])

onMounted(() => {
    getAll((docs) => docs.forEach(element => {
        devices.value.push(element)
        console.log('echo')
    }))
})

</script>


<style scoped>

.devices{ @apply w-full h-full flex flex-col overflow-y-auto }

p{ @apply text-white p-2 rounded-2xl hover:bg-[#424242] cursor-pointer w-fit }

</style>
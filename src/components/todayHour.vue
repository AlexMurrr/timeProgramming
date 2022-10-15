<script setup>
    import { ref } from "@vue/reactivity";
    import {useStoreVerbs} from '../stores/store';
    import {storeToRefs} from 'pinia';

    const store = useStoreVerbs();
    const {workTime} = storeToRefs(store)
</script>
    
<template>
    <div>
        сегодня <br>
        {{workTime}} ч
    </div>
</template>
    
<style scoped>
</style>
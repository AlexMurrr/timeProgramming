<script setup>
    import {useStoreVerbs} from '../stores/store';
    import {storeToRefs} from 'pinia';

    const store = useStoreVerbs();
    const {increment} = store;
</script>
    
<template>
    <div>
        Добавить 30 минут <br>
        <button @click="increment">+</button>
    </div>
</template>
    
<style scoped>
</style>
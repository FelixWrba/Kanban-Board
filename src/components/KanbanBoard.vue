<template>
    <!-- KANBAN BOARD -->
    <draggable v-model="columns" group="columns" item-key="id" class="board">
        <template #item="{ element: column }">

            <!-- COLUMN -->
            <div class="column" v-show="column.enabled">
                <!-- TITLE -->
                <h2>{{ column.default ? $t('board.' + column.id) : column.id }}</h2>
                <!-- ITEMS -->
                <draggable v-model="column.data" group="data" item-key="id">
                    <template #item="{ element: item }">
                        <div class="item">
                            <span>{{ item.name }}</span>
                        </div>
                    </template>
                </draggable>
            </div>

        </template>
    </draggable>
</template>

<script setup>
import { ref, watch } from 'vue';
import draggable from 'vuedraggable';
import loadColumns from '../utils/loadColumns';

const columns = ref(loadColumns());

// save columns onChange in localStorage
watch(columns, newColumns => {
    localStorage.setItem('columns', JSON.stringify(newColumns));
}, { deep: true });
</script>

<style scoped>
.board {
    display: flex;
    border: 1px solid var(--acc-c);
    border-radius: 8px;
    overflow: hidden;
}

.column {
    flex: 1;
    border-right: 1px solid var(--acc-c);
}

.column h2 {
    background-color: var(--secondary-c);
    text-align: center;
    padding: 4px 8px;
    border-bottom: 1px solid var(--acc-c);
    font-size: 1.2em;
}

.column:last-child {
    border: none;
}

.item {
    margin: 8px;
    padding: 4px;
    border-radius: 4px;
    border: 1px solid #ff4e4e;
    background-color: rgb(255, 195, 195);
    cursor: pointer;
}

.column div:not(.item) {
    min-height: 100%;
}
</style>
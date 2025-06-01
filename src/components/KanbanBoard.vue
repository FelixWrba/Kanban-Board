<template>
    <!-- KANBAN BOARD -->
    <draggable v-model="columns" group="columns" item-key="id" class="board">
        <template #item="{ element: column }">

            <div class="column" v-show="column.enabled">
                <!-- TITLE -->
                <div class="title-bar">
                    <h2>{{ column.default ? $t('board.' + column.id) : column.id }}</h2>
                    <button @click="handleAddModal(column.id)" @touchstart="handleAddModal(column.id)" aria-label="Create Task" title="Create Task"
                        class="icon-btn">
                        <PlusIcon class="icon" />
                    </button>
                </div>

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

    <AddModal @addData="createTask" ref="addModal" />
</template>

<script setup>
import { ref, watch, useTemplateRef } from 'vue';
import draggable from 'vuedraggable';
import loadColumns from '../utils/loadColumns';
import AddModal from '../components/AddModal.vue';
import { PlusIcon } from '@heroicons/vue/24/outline';

const columns = ref(loadColumns());
const addModal = useTemplateRef('addModal');

const addColumnId = ref(null);
// opens dialog and sets addColumnId
function handleAddModal(columnId) {
    addModal.value.openDialog();
    addColumnId.value = columnId;
}

// save columns onChange in localStorage
watch(columns, newColumns => {
    localStorage.setItem('columns', JSON.stringify(newColumns));
}, { deep: true });

function createTask(data) {
    data.name = data.title.trim();

    if (countOccurenceOf(data.title) > 0) {
        alert("Task name taken. Please try another.");
        return;
    }
    // add task to selected column
    const columnIndex = columns.value.findIndex(column => column.id === addColumnId.value);
    columns.value[columnIndex].data = [...columns.value[columnIndex].data, data];
}

/**
 * Counts the occurence of the given name in the tasks of each column.
 * @param {string} name - Name of task to count the occurrence of.
 */
function countOccurenceOf(name) {
    return columns.value
        .flatMap(column => column.data)
        .filter(task => task ? task.name === name : false)
        .length;
}
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

.column div:not(.item) {
    min-height: 100%;
}

.title-bar {
    background-color: var(--secondary-c);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 8px;
    border-bottom: 1px solid var(--acc-c);
    min-height: unset !important;
}

.title-bar h2 {
    font-size: 1.2em;
}

.item {
    margin: 8px;
    padding: 4px;
    border-radius: 4px;
    border: 1px solid #ff4e4e;
    background-color: rgb(255, 195, 195);
    cursor: pointer;
}

@media (max-width: 600px) {
    .board {
        flex-direction: column;
    }

    .column {
        border-right: none;
        border-top: 1px solid var(--acc-c);
    }

    .column:first-child {
        border-top: none;
    }

    .column div:not(.item) {
        min-height: 50px;
    }

    .column:first-child {
        border: none;
    }
}
</style>
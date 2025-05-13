<template>
    <div class="board">
        <div class="column" v-for="column in sortByEnabled(data)" :key="column.id">
            <h2>{{ column.name }}</h2>
            <div v-for="item in column.data" class="item" draggable="true">
                <span>{{ item.name }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const data = [
    {
        id: "backlog",
        name: "Backlog",
        default: false,
        enabled: true,
        data: [{ name: "log 1", }],
    },
    {
        id: "tasks",
        name: "Tasks",
        default: true,
        enabled: true,
        data: [{ name: "taks 1" }, { name: "task 2" }],
    },
    {
        id: "progress",
        name: "In progress",
        default: true,
        enabled: true,
        data: [],
    },
    {
        id: "done",
        name: "Done",
        default: true,
        enabled: true,
        data: [{ name: "done 1", }],
    }
];

/**
 * Function removes objects from given array where object.enabled = false.
 * @param columns {object[]} - Array with objects containing enabled property
 * @returns {object[]}
 */
function sortByEnabled(columns) {
    return columns.filter(column => column.enabled);
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

.item:active {
    cursor: move;
}
</style>
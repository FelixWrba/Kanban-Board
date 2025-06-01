<template>
    <dialog ref="dialog" @close="closeDialog" aria-modal="true" role="dialog">
        <!-- form -->
        <form class="add-form" @submit.prevent="createTask">
            <h2>{{ $t('addModal.label') }}</h2>

            <label for="title">{{ $t('addModal.title') }}</label>
            <input type="text" id="title" v-model="formData.title" required>

            <label for="description">{{ $t('addModal.description') }}</label>
            <textarea id="description" v-model="formData.description"></textarea>

            <label for="category">{{ $t('addModal.category') }}</label>
            <input type="text" id="category" list="category-list" v-model="formData.category" required>
            <datalist id="category-list">
                <option value="General"></option>
                <option value="Work"></option>
                <option value="School"></option>
                <option value="Private"></option>
            </datalist>

            <label for="color">{{ $t('addModal.color') }}</label>
            <select id="color" v-model="formData.color" required>
                <option value="green">{{ $t('addModal.green') }}</option>
                <option value="yellow">{{ $t('addModal.yellow') }}</option>
                <option value="red">{{ $t('addModal.red') }}</option>
                <option value="blue">{{ $t('addModal.blue') }}</option>
            </select>

            <div class="cta">
                <button type="submit" class="btn">{{ $t('addModal.add') }}</button>
                <button type="button" @click="closeDialog" class="btn secondary">{{ $t('addModal.close') }}</button>
            </div>
        </form>
    </dialog>
</template>

<script setup>
import { ref } from 'vue';

const dialog = ref(null);
const emit = defineEmits(['addData']);

const defaultForm = {
    title: "",
    description: "",
    category: "",
    color: "red"
};

const formData = ref({ ...defaultForm });
const clearFormData = () => formData.value = { ...defaultForm };

function createTask() {
    emit('addData', { ...formData.value });
    closeDialog();
}

function openDialog() {
    dialog.value.showModal();
}

function closeDialog() {
    // play fade animation
    dialog.value.classList.add('leave');
    setTimeout(() => {
        dialog.value.classList.remove('leave');
        dialog.value.close(); // close dialog after animation ends
        clearFormData();
    }, 300);
}

defineExpose({ openDialog });
</script>

<style scoped>
dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.1);
    animation: fade .3s;
    height: 140vh;
    top: -20vh;
}

dialog {
    outline: none;
    border: 1px solid var(--acc-c);
    border-radius: 8px;
    padding: 16px;
    animation: fade .3s;
    opacity: 1;
    transform: translateY(0em);
    background-color: var(--bg-c);
    color: var(--txt-c);
}

dialog.leave,
dialog.leave::backdrop {
    transform: translateY(1em);
    opacity: 0;
    transition: all .3s;
}

@keyframes fade {
    0% {
        opacity: 0;
        transform: translateY(-1em);
    }
}

.add-form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 700px;
    width: 70vw;
}

textarea {
    resize: vertical;
    height: 4em;
}

input,
textarea {
    flex: 1;
}

.cta {
    display: flex;
    gap: 8px;
    margin-top: 8px;
}
</style>
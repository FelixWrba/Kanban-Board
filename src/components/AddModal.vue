<template>
    <dialog ref="dialog" @close="closeDialog">
        <!-- form -->
        <div class="add-form">
            <h2>{{ $t('addModal.label') }}</h2>

            <label for="title">{{ $t('addModal.title') }}</label>
            <input type="text" id="title" v-model="formData.title">

            <label for="description">{{ $t('addModal.description') }}</label>
            <textarea id="description" v-model="formData.description"></textarea>

            <label for="category">{{ $t('addModal.category') }}</label>
            <input type="text" id="category" list="category-list" v-model="formData.category">
            <datalist id="category-list">
                <option value="General"></option>
                <option value="Work"></option>
                <option value="School"></option>
                <option value="Private"></option>
            </datalist>

            <label for="color">{{ $t('addModal.color') }}</label>
            <select id="color" v-model="formData.color">
                <option value="green">{{ $t('addModal.green') }}</option>
                <option value="yellow">{{ $t('addModal.yellow') }}</option>
                <option value="red">{{ $t('addModal.red') }}</option>
                <option value="blue">{{ $t('addModal.blue') }}</option>
            </select>

            <div class="cta">
                <button @click="closeDialog" class="btn">{{ $t('addModal.add') }}</button>
                <button @click="closeDialog" class="btn secondary">{{ $t('addModal.close') }}</button>
            </div>
        </div>
    </dialog>

    <button @click="openDialog" class="btn">Öffnen</button>
</template>

<script setup>
import { ref } from 'vue';

const dialog = ref('dialog');
const formData = ref({
    title: "",
    description: "",
    category: "",
    color: "red"
});

function openDialog() {
    dialog.value.showModal();
}

function closeDialog() {
    // play fade animation
    dialog.value.classList.add('leave');
    setTimeout(() => {
        dialog.value.classList.remove('leave');
        // close dialog after animation ends
        dialog.value.close();
    }, 300);
}
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

dialog.leave, dialog.leave::backdrop {
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
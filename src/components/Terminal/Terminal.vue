<template>
  <div class="terminal" @click="focusInput">
    <div v-if="welcomeMessage" class="terminal__welcome">
      {{ welcomeMessage }}
    </div>
    <div class="terminal__content" ref="contentRef">
      <div
        v-for="(cmd, index) in commands"
        :key="index"
        class="terminal__command"
      >
        <div class="terminal__line">
          <span class="terminal__prompt">{{ prompt }}</span>
          <span class="terminal__text">{{ cmd.text }}</span>
        </div>
        <div
          v-if="cmd.response"
          class="terminal__response"
          aria-live="polite"
        >
          {{ cmd.response }}
        </div>
      </div>
      <div class="terminal__line terminal__line--input">
        <span class="terminal__prompt">{{ prompt }}</span>
        <input
          ref="inputRef"
          v-model="currentCommand"
          type="text"
          class="terminal__input"
          :aria-label="ariaLabel"
          @keydown.enter="executeCommand"
        />
      </div>
    </div>
  </div>
</template>

<style src="./Terminal.scss"></style>

<script setup>
import { ref, nextTick, onMounted } from "vue";

defineOptions({
  name: "Terminal"
});

const props = defineProps({
  prompt: {
    type: String,
    default: "$"
  },
  welcomeMessage: {
    type: String,
    default: null
  },
  ariaLabel: {
    type: String,
    default: "Terminal input"
  }
});

const emit = defineEmits(["command"]);

const commands = ref([]);
const currentCommand = ref("");
const inputRef = ref(null);
const contentRef = ref(null);

const focusInput = () => {
  inputRef.value?.focus();
};

const executeCommand = () => {
  const text = currentCommand.value.trim();
  if (!text) return;

  const command = {
    text,
    response: null
  };

  commands.value.push(command);
  currentCommand.value = "";

  emit("command", text, (response) => {
    command.response = response;
  });

  nextTick(() => {
    scrollToBottom();
  });
};

const scrollToBottom = () => {
  if (contentRef.value) {
    contentRef.value.scrollTop = contentRef.value.scrollHeight;
  }
};

const addResponse = (response) => {
  if (commands.value.length > 0) {
    commands.value[commands.value.length - 1].response = response;
    nextTick(() => {
      scrollToBottom();
    });
  }
};

const clear = () => {
  commands.value = [];
};

onMounted(() => {
  focusInput();
});

defineExpose({
  addResponse,
  clear,
  focusInput
});
</script>

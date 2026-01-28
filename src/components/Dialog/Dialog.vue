<template>
  <Teleport to="body">
    <Transition name="dialog-fade">
      <div
        v-if="visible"
        class="dialog__overlay"
        :class="{ 'dialog__overlay--modal': modal }"
        @click="onOverlayClick"
        @keydown.escape="onEscapeKey"
      >
        <Transition name="dialog-scale">
          <div
            v-if="visible"
            ref="dialogRef"
            class="dialog"
            :class="additionalClasses"
            role="dialog"
            :aria-modal="modal"
            :aria-labelledby="headerId"
            @click.stop
          >
            <div v-if="$slots.header || header || closable" class="dialog__header">
              <slot name="header">
                <span :id="headerId" class="dialog__title">{{ header }}</span>
              </slot>
              <button
                v-if="closable"
                type="button"
                class="dialog__close"
                aria-label="Close"
                @click="close"
              >
                <svg
                  class="dialog__close-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div class="dialog__content">
              <slot />
            </div>

            <div v-if="$slots.footer" class="dialog__footer">
              <slot name="footer" />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style src="./Dialog.scss"></style>

<script setup>
import { computed, ref, watch, onMounted, onUnmounted } from "vue";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  header: {
    type: String,
    default: "",
  },
  closable: {
    type: Boolean,
    default: true,
  },
  modal: {
    type: Boolean,
    default: true,
  },
  draggable: {
    type: Boolean,
    default: false,
  },
  dismissableMask: {
    type: Boolean,
    default: false,
  },
  closeOnEscape: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String,
    default: "md",
    validator: (v) => ["sm", "md", "lg", "xl"].includes(v),
  },
});

const emit = defineEmits(["update:visible", "show", "hide"]);

const dialogRef = ref(null);
const headerId = `dialog-header-${Math.random().toString(36).substr(2, 9)}`;

// Drag state
const isDragging = ref(false);
const dragOffset = ref({ x: 0, y: 0 });
const dialogPosition = ref({ x: 0, y: 0 });

const additionalClasses = computed(() => [
  `dialog--size-${props.size}`,
  props.draggable && "dialog--draggable",
].filter(Boolean).join(" "));

const close = () => {
  emit("update:visible", false);
  emit("hide");
};

const onOverlayClick = () => {
  if (props.dismissableMask) {
    close();
  }
};

const onEscapeKey = (event) => {
  if (props.closeOnEscape && props.visible) {
    event.preventDefault();
    close();
  }
};

// Dragging functionality
const onDragStart = (event) => {
  if (!props.draggable || !dialogRef.value) return;

  isDragging.value = true;
  const rect = dialogRef.value.getBoundingClientRect();
  dragOffset.value = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };

  document.addEventListener("mousemove", onDragMove);
  document.addEventListener("mouseup", onDragEnd);
};

const onDragMove = (event) => {
  if (!isDragging.value) return;

  dialogPosition.value = {
    x: event.clientX - dragOffset.value.x,
    y: event.clientY - dragOffset.value.y,
  };

  if (dialogRef.value) {
    dialogRef.value.style.left = `${dialogPosition.value.x}px`;
    dialogRef.value.style.top = `${dialogPosition.value.y}px`;
    dialogRef.value.style.transform = "none";
  }
};

const onDragEnd = () => {
  isDragging.value = false;
  document.removeEventListener("mousemove", onDragMove);
  document.removeEventListener("mouseup", onDragEnd);
};

// Block scroll when modal is open
watch(
  () => props.visible,
  (newValue) => {
    if (newValue) {
      emit("show");
      if (props.modal) {
        document.body.style.overflow = "hidden";
      }
    } else {
      if (props.modal) {
        document.body.style.overflow = "";
      }
    }
  }
);

// Cleanup on unmount
onUnmounted(() => {
  document.body.style.overflow = "";
  document.removeEventListener("mousemove", onDragMove);
  document.removeEventListener("mouseup", onDragEnd);
});
</script>

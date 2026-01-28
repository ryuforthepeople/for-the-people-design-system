<template>
  <Teleport to="body">
    <Transition name="sidebar-fade">
      <div
        v-if="visible"
        class="sidebar__overlay"
        @click="onOverlayClick"
        @keydown.escape="onEscapeKey"
      >
        <Transition :name="transitionName">
          <div
            v-if="visible"
            ref="sidebarRef"
            class="sidebar"
            :class="additionalClasses"
            role="dialog"
            aria-modal="true"
            :aria-labelledby="headerId"
            @click.stop
          >
            <div v-if="$slots.header || header || closable" class="sidebar__header">
              <slot name="header">
                <span :id="headerId" class="sidebar__title">{{ header }}</span>
              </slot>
              <button
                v-if="closable"
                type="button"
                class="sidebar__close"
                aria-label="Close"
                @click="close"
              >
                <svg
                  class="sidebar__close-icon"
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

            <nav class="sidebar__content">
              <slot />
            </nav>

            <div v-if="$slots.footer" class="sidebar__footer">
              <slot name="footer" />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style src="./Sidebar.scss"></style>

<script setup>
import { computed, ref, watch, onUnmounted } from "vue";

const props = defineProps({
  /**
   * Controls sidebar visibility.
   */
  visible: {
    type: Boolean,
    default: false,
  },
  /**
   * Header text displayed in the sidebar header.
   */
  header: {
    type: String,
    default: "",
  },
  /**
   * Position of the sidebar (left or right).
   */
  position: {
    type: String,
    default: "left",
    validator: (v) => ["left", "right"].includes(v),
  },
  /**
   * Whether the sidebar takes full screen width.
   */
  fullScreen: {
    type: Boolean,
    default: false,
  },
  /**
   * Whether to show the close button.
   */
  closable: {
    type: Boolean,
    default: true,
  },
  /**
   * Closes sidebar when clicking the overlay.
   */
  dismissable: {
    type: Boolean,
    default: true,
  },
  /**
   * Closes sidebar when pressing Escape key.
   */
  closeOnEscape: {
    type: Boolean,
    default: true,
  },
  /**
   * Whether to block body scroll when sidebar is open.
   */
  blockScroll: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["update:visible", "show", "hide"]);

const sidebarRef = ref(null);
const headerId = `sidebar-header-${Math.random().toString(36).substr(2, 9)}`;

const additionalClasses = computed(() =>
  [
    `sidebar--position-${props.position}`,
    props.fullScreen && "sidebar--fullscreen",
  ]
    .filter(Boolean)
    .join(" ")
);

const transitionName = computed(() => {
  return `sidebar-slide-${props.position}`;
});

const close = () => {
  emit("update:visible", false);
  emit("hide");
};

const onOverlayClick = () => {
  if (props.dismissable) {
    close();
  }
};

const onEscapeKey = (event) => {
  if (props.closeOnEscape && props.visible) {
    event.preventDefault();
    close();
  }
};

// Block scroll when sidebar is open
watch(
  () => props.visible,
  (newValue) => {
    if (newValue) {
      emit("show");
      if (props.blockScroll) {
        document.body.style.overflow = "hidden";
      }
    } else {
      if (props.blockScroll) {
        document.body.style.overflow = "";
      }
    }
  }
);

// Cleanup on unmount
onUnmounted(() => {
  document.body.style.overflow = "";
});
</script>

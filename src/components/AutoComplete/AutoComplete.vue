<template>
  <div
    ref="containerRef"
    class="autocomplete"
    :class="additionalClasses"
  >
    <div class="autocomplete__input-wrapper" @click="focusInput">
      <!-- Multiple mode chips -->
      <span
        v-for="(item, index) in selectedItems"
        :key="`chip-${index}`"
        class="autocomplete__chip"
      >
        <span class="autocomplete__chip-label">{{ getOptionLabel(item) }}</span>
        <button
          v-if="!isDisabled"
          type="button"
          class="autocomplete__chip-remove"
          aria-label="Remove"
          @click.stop="removeItem(index)"
        >
          <svg
            class="autocomplete__chip-remove-icon"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 4.5L9.5 9.5M9.5 4.5L4.5 9.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </span>

      <input
        ref="inputRef"
        v-model="query"
        class="autocomplete__input"
        type="text"
        :placeholder="showPlaceholder ? placeholder : ''"
        :disabled="isDisabled"
        :aria-invalid="isInvalid || undefined"
        :aria-expanded="isOpen"
        aria-autocomplete="list"
        role="combobox"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        @keydown="onKeydown"
      />

      <span v-if="isLoading" class="autocomplete__loader">
        <svg
          class="autocomplete__loader-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-dasharray="31.4 31.4"
          />
        </svg>
      </span>

      <span v-else-if="!multiple && modelValue && !isDisabled" class="autocomplete__clear" @click.stop="clearValue">
        <svg
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 4.5L9.5 9.5M9.5 4.5L4.5 9.5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>

      <span class="autocomplete__icon">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </div>

    <!-- Dropdown -->
    <Teleport to="body">
      <div
        v-if="isOpen && filteredSuggestions.length > 0"
        ref="dropdownRef"
        class="autocomplete__dropdown"
        :style="dropdownStyle"
        role="listbox"
      >
        <div
          v-for="(suggestion, index) in filteredSuggestions"
          :key="`suggestion-${index}`"
          class="autocomplete__option"
          :class="{
            'autocomplete__option--highlighted': index === highlightedIndex,
            'autocomplete__option--selected': isSelected(suggestion)
          }"
          role="option"
          :aria-selected="isSelected(suggestion)"
          @mousedown.prevent="selectSuggestion(suggestion)"
          @mouseenter="highlightedIndex = index"
        >
          <slot name="option" :option="suggestion">
            {{ getOptionLabel(suggestion) }}
          </slot>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style src="./AutoComplete.scss"></style>

<script setup>
import { computed, ref, watch, nextTick, onMounted, onUnmounted } from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number, Object, Array],
    default: null,
  },
  suggestions: {
    type: Array,
    default: () => [],
  },
  optionLabel: {
    type: String,
    default: "label",
  },
  optionValue: {
    type: String,
    default: "value",
  },
  placeholder: {
    type: String,
    default: "",
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  minLength: {
    type: Number,
    default: 1,
  },
  delay: {
    type: Number,
    default: 300,
  },
  size: {
    type: String,
    default: "md",
    validator: (v) => ["sm", "md", "lg"].includes(v),
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  isInvalid: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  dropdown: {
    type: Boolean,
    default: false,
  },
  completeOnFocus: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits([
  "update:modelValue",
  "complete",
  "select",
  "unselect",
  "focus",
  "blur",
  "clear",
]);

const containerRef = ref(null);
const inputRef = ref(null);
const dropdownRef = ref(null);
const query = ref("");
const isOpen = ref(false);
const isFocused = ref(false);
const highlightedIndex = ref(-1);
const dropdownStyle = ref({});
let debounceTimer = null;

const selectedItems = computed(() => {
  if (!props.multiple) return [];
  return Array.isArray(props.modelValue) ? props.modelValue : [];
});

const showPlaceholder = computed(() => {
  if (props.multiple) {
    return selectedItems.value.length === 0 && !query.value;
  }
  return !props.modelValue && !query.value;
});

const filteredSuggestions = computed(() => {
  if (props.multiple) {
    return props.suggestions.filter((s) => {
      const value = getOptionValue(s);
      return !selectedItems.value.some((item) => getOptionValue(item) === value);
    });
  }
  return props.suggestions;
});

const getOptionLabel = (option) => {
  if (option === null || option === undefined) return "";
  if (typeof option === "string" || typeof option === "number") return option;
  return option[props.optionLabel] || "";
};

const getOptionValue = (option) => {
  if (option === null || option === undefined) return option;
  if (typeof option === "string" || typeof option === "number") return option;
  return option[props.optionValue] ?? option;
};

const isSelected = (suggestion) => {
  if (props.multiple) {
    return selectedItems.value.some(
      (item) => getOptionValue(item) === getOptionValue(suggestion)
    );
  }
  return getOptionValue(props.modelValue) === getOptionValue(suggestion);
};

const updateDropdownPosition = () => {
  if (!containerRef.value) return;
  const rect = containerRef.value.getBoundingClientRect();
  dropdownStyle.value = {
    position: "fixed",
    top: `${rect.bottom + 4}px`,
    left: `${rect.left}px`,
    width: `${rect.width}px`,
    zIndex: 1000,
  };
};

const openDropdown = () => {
  if (props.isDisabled) return;
  isOpen.value = true;
  highlightedIndex.value = -1;
  nextTick(updateDropdownPosition);
};

const closeDropdown = () => {
  isOpen.value = false;
  highlightedIndex.value = -1;
};

const focusInput = () => {
  inputRef.value?.focus();
};

const onInput = () => {
  if (debounceTimer) clearTimeout(debounceTimer);

  if (query.value.length >= props.minLength) {
    debounceTimer = setTimeout(() => {
      emit("complete", { query: query.value });
      openDropdown();
    }, props.delay);
  } else {
    closeDropdown();
  }
};

const onFocus = (event) => {
  isFocused.value = true;
  emit("focus", { originalEvent: event });

  if (props.completeOnFocus || props.dropdown) {
    emit("complete", { query: query.value });
    openDropdown();
  }
};

const onBlur = (event) => {
  isFocused.value = false;
  closeDropdown();
  emit("blur", { originalEvent: event });
};

const onKeydown = (event) => {
  switch (event.key) {
    case "ArrowDown":
      event.preventDefault();
      if (!isOpen.value) {
        openDropdown();
        emit("complete", { query: query.value });
      } else if (highlightedIndex.value < filteredSuggestions.value.length - 1) {
        highlightedIndex.value++;
      }
      break;
    case "ArrowUp":
      event.preventDefault();
      if (highlightedIndex.value > 0) {
        highlightedIndex.value--;
      }
      break;
    case "Enter":
      event.preventDefault();
      if (isOpen.value && highlightedIndex.value >= 0) {
        selectSuggestion(filteredSuggestions.value[highlightedIndex.value]);
      }
      break;
    case "Escape":
      closeDropdown();
      break;
    case "Backspace":
      if (props.multiple && !query.value && selectedItems.value.length > 0) {
        removeItem(selectedItems.value.length - 1);
      }
      break;
  }
};

const selectSuggestion = (suggestion) => {
  if (props.multiple) {
    const newValue = [...selectedItems.value, suggestion];
    emit("update:modelValue", newValue);
    emit("select", { value: suggestion });
    query.value = "";
  } else {
    emit("update:modelValue", suggestion);
    emit("select", { value: suggestion });
    query.value = getOptionLabel(suggestion);
    closeDropdown();
  }
};

const removeItem = (index) => {
  const removed = selectedItems.value[index];
  const newValue = selectedItems.value.filter((_, i) => i !== index);
  emit("update:modelValue", newValue);
  emit("unselect", { value: removed });
};

const clearValue = () => {
  emit("update:modelValue", null);
  emit("clear");
  query.value = "";
  focusInput();
};

// Sync query with single selection
watch(
  () => props.modelValue,
  (newValue) => {
    if (!props.multiple && newValue && !isFocused.value) {
      query.value = getOptionLabel(newValue);
    }
  },
  { immediate: true }
);

// Handle scroll and resize
const handleScroll = () => {
  if (isOpen.value) updateDropdownPosition();
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, true);
  window.addEventListener("resize", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll, true);
  window.removeEventListener("resize", handleScroll);
  if (debounceTimer) clearTimeout(debounceTimer);
});

const additionalClasses = computed(() =>
  [
    `autocomplete--size-${props.size}`,
    props.multiple && "autocomplete--multiple",
    isFocused.value && "autocomplete--focused",
    props.isDisabled && "autocomplete--disabled",
    props.isInvalid && "autocomplete--invalid",
  ]
    .filter(Boolean)
    .join(" ")
);

defineExpose({
  focus: () => inputRef.value?.focus(),
  blur: () => inputRef.value?.blur(),
  el: inputRef,
});
</script>

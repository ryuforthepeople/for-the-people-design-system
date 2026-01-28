<template>
  <div class="form-field" :class="{ 'form-field--error': !!error, 'form-field--required': required }">
    <label v-if="label" :for="htmlFor" class="form-field__label">
      {{ label }}
      <span v-if="required" class="form-field__required" aria-hidden="true">*</span>
    </label>
    <div class="form-field__control">
      <slot />
    </div>
    <small
      v-if="error"
      :id="errorId"
      class="form-field__error"
      role="alert"
    >
      {{ error }}
    </small>
    <small
      v-else-if="hint"
      :id="hintId"
      class="form-field__hint"
    >
      {{ hint }}
    </small>
  </div>
</template>

<script setup lang="ts">
import type { FormFieldProps } from '../../types';

defineOptions({ name: 'FtpFormField' });

let idCounter = 0;
const useId = () => 'ftp-ff-' + idCounter++;

const props = withDefaults(defineProps<FormFieldProps>(), {
  required: false,
});

const errorId = useId();
const hintId = useId();
</script>

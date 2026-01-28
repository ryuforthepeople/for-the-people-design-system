# Surface Architecture

A 5-layer elevation model for consistent depth hierarchy across the design system.

## The 5 Layers

| Layer | Token | Background | Border | Shadow | Usage |
|-------|-------|-----------|--------|--------|-------|
| 0 | `--surface-canvas` | navy.900 | none | none | Page background |
| 1 | `--surface-panel` | navy.800 | `--border-subtle` | `--shadow-xs` | Cards, sidebars, sections |
| 2 | `--surface-elevated` | navy.700 | `--border-default` | `--shadow-s` | Nested cards, form sections |
| 3 | `--surface-raised` | navy.600 | `--border-strong` | `--shadow-m` | Dropdowns, popovers, tooltips |
| 4 | `--surface-elevated` | navy.700 | `--border-strong` | `--shadow-xl` | Modals, dialogs, command palette |

> Layer 4 reuses `surface-elevated` but with maximum shadow depth — the shadow does the heavy lifting for perceived elevation.

## Nesting Rules

1. **Always go up** — children should be at a higher layer than parents
2. **Never skip more than 2 layers** — canvas(0) → elevated(2) is fine, canvas(0) → raised(3) is jarring
3. **Inputs go down** — form inputs inside cards use `surface-muted` (darker than parent) to feel recessed
4. **Overlays jump** — modals/dialogs use layer 4 regardless of context, they float above everything

## Using the Elevation Mixin

```scss
@use "../../scss/mixins/elevation" as *;

// Apply a complete elevation layer (background + border + shadow + radius)
.my-card {
  @include elevation(1);
}

.my-dropdown-panel {
  @include elevation(3);
}

.my-modal {
  @include elevation(4);
}
```

The mixin sets `background`, `border`, `box-shadow`, and `border-radius`. Component-specific token overrides can follow the mixin call.

## Special Surfaces

### Muted (recessed)
For inputs and recessed areas inside cards:
```scss
@include surface-muted;
// → background: --surface-muted, border: --border-subtle
```

### Accent (highlighted)
For featured/highlighted cards with gradient borders:
```scss
@include surface-accent;
// → background: --surface-accent, gradient border
```

## Component Mapping

| Component | Elevation |
|-----------|-----------|
| Card | 1 |
| Dialog | 4 |
| Dropdown panel | 3 |
| Menu | 3 |
| Toast | 3 |
| OverlayPanel | 3 |
| PopOver | 3 |
| ContextMenu | 3 |
| Tooltip | 3 |
| CommandPalette | 4 |

import './scss/fonts.scss'
import '../dist/css/tokens.css'
import '../dist/css/theme-dark.css'

// Apply dark theme and base styles
document.documentElement.setAttribute('data-theme', 'dark')
document.body.style.backgroundColor = 'var(--surface-canvas, #0a0e1f)'
document.body.style.color = 'var(--text-default, #ffffff)'
document.body.style.fontFamily = '"DM Sans", sans-serif'

# PZH Style Library

Deze laag van de is verantwoordelijk voor het loskoppelen van style/ambiance. De doelstelling is opstellen en onderhouden van style definities.

## Input

- [Design system](https://www.figma.com/file/11ZuN25dSOqx3w1ie9Avbz/Design-System---Provincie-Zuid-Holland)

## Output

- Website [Website](https://n2dabaed4e91d4ca59f2a437.azurewebsites.net/) welke inzicht geeft in verschillende bouwblokken
- SCSS variabelen, mixins en fucties gedeployed als Prive NPM Library te vinden op [documentatie](https://www.npmjs.com/package/@pzh-temporary/style-library)
- Utility classes typografie, margins, paddings
- ?? Utility classes grid

## Techniek

### Technologieen

- Storybook
- Vue 3 als template engine
- Custom node workflow tools
  -- Omzetten van variable source files naar bijvoorbeeld .scss bestanden

### Benodigdheden

- Node 18.12.1
- NPM 8.19.2
- NPM account op basis van je PZH emailadres. Dit account dient gerechtigd te zijn om private packages (@pzh-temporary) te gebruiken van PZH.

### Installeren dependencies

```bash
npm install
```

### Ontwikkelen

Dit start een storybook instantie in development mode

```bash
npm run dev
```

### Build

Dit bouwt een storybook instantie zodat deze gepubliceerd kan worden.

```bash
npm run build
```

### Publiceren

Publiceert nieuwe versie naar NPM en publiceert utility classes naar het CDN

1. Verhoog attribuut 'version' in bestand package.json volgens [SemVer](https://semver.org/)
1. Zorg dat je ingelogd bent bij NPM. Zo niet voer in command line commando 'npm login' uit
1. Voer in command line commando 'npm run publish-all' uit

#### Deploy library to CDN 

npm publish all

### Deploy utility classes to CDN (inclusief fonts)

```bash
npm run deploy-utility-classes
```

### Deploy static assets to CDN (inclusief fonts)

```bash
npm run deploy-assets
```






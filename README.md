# Project Documentation

## Overview

This project is a Nuxt application that showcases characters from different universes, such as Rick and Morty and Pokemon. Users can navigate through different universes, view characters from each universe, and see detailed information about each character.

### Features

- **Universe Selection:** Users can select a universe (e.g., Rick and Morty, Pokemon) from the homepage.
- **Character Overviews:** Once a universe is selected, users can view a list of characters within that universe.
- **Character Details:** Clicking on a character opens a detailed view, displaying information such as images, properties, and extra details about the character.
- **Pagination:** The character lists support pagination to browse through multiple characters.
- **Grid/List** View Toggle: The application allows switching between grid and list views on the overview pages for better user experience.

### Included universes

1. [**Rick and Morty**](https://rickandmortyapi.com/documentation)
2. [**Pokemon**](https://pokeapi.co/docs/v2)
3. [**Star Wars**](https://swapi.dev/documentation)

## Getting started

### Prerequisites

- **Node.js** (version 18.x or later)
- **Yarn**

### Cloning the Repository

```bash
git clone https://github.com/TimHaerkens/front-end-boilerplate.git
cd front-end-boilerplate
```

### Project Setup

```bash
yarn
```

### Environment Setup

Copy the example environment file:

```bash
cp .env.example .env
```

Configure the environment variables as necessary. For the assignment purposes the variables are filled with "Pro DB" and my Github repo url.

```bash
APP_NAME="Pro DB"
GIT_REPOSITORY="https://github.com/TimHaerkens/front-end-boilerplate"
```

### Running the Project

To start the development server:

```bash
yarn dev
```

This will start the application on http://localhost:3000.

---

## Running Tests

### Unit Tests

The project includes unit tests using **Vitest**. To run these tests:

```bash
yarn test
```

### End-to-End (E2E) Tests

End-to-End tests are set up using Playwright and @nuxt/test-utils/e2e to verify the user flows from navigating between pages. To run the E2E tests:

```bash
yarn dev
yarn test:e2e
```

**Note: You have to run a dev server on port 3000 for this test to work**

## What the Tests Cover

**Unit Tests:** Tests for individual components like CharacterProperties.vue, Pagination.vue, and others.

**End-to-End Tests:** Full session from selecting a universe, navigating to character pages, and verifying character details and image.

## Setting Up More Universes

To add more universes:

Add the endpoint to `apiParty.endpoints` in `nuxt.config.ts`:

```ts
universe: {
        url: 'https://universeapi.com/api/',
}
```

Update the data/universes.ts file with the new universe data:

```ts
[
  // ... other universes
  {
    name: 'Universe name',
    description: 'Description characters',
    route: 'universes/starwars',
    image: '/images/logos/starwars.jpg',
    api: useUniverseData, // use{name like in apiParty}Data
    fetch: $universe, // ${name like in apiParty}
    characterPath: 'characters', // character endpoint
    pagination: (page: number) => `?page=${page}`,
    pages: (data: any) => Math.ceil(data.count / 10),
    mapData: (data: any) => data.results.map((character: any) => ({
      id: character.id,
      name: character.name,
      image: character.img,
      url: `/universes/universe/${character.id}`,
    })),
    mapCharacter: (data: any) => {
      return ({
        id: data.id,
        name: data.name,
        image: data.img,
        universe: 'universe',
        main_properties: {
          gender: data.gender,
          height: data.height,
          weight: data.mass,
        },
        extra_properties: {
          hair_color: data.hair_color,
          skin_color: data.skin_color,
        },
      })
    }
  }
]
```

Read the API Documentation well and customize the mapping functions accordingly so that they will work well with the application.

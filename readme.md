### Blog App Frontend

Frontend for a simple CRUD blog application.

## Installation

- Clone the repo.
- Make sure backend is running properly.
- Update environment variables.
- Switch to node version 18 & run following commands.

```bash
nvm use 18
yarn
yarn dev
```

## Tools Used

- Typescript
- React , Redux & Redux Saga

## Folder structure

| Folder     | Purpose                         |
| ---------- | ------------------------------- |
| src/       | Source code entrypoint          |
| components | UI Components                   |
| helpers    | Common helper modules           |
| interfaces | Interface for different modules |
| pages      | Pages built with components     |
| layouts    | Different UI layouts            |
| schemas    | Validation schema               |
| store      | Redux store                     |
| types      | Typescript types                |

## Packages used and their purpose

| Module | Purpose              |
| ------ | -------------------- |
| redux  | For state management |
| Zod    | Form Validation      |

## Todos

- ~~Prepare initial boilerplate~~
- ~~Prepare initial design~~
- ~~Include react router~~
- ~~Implement basic Auth~~
- ~~Include redux~~
- ~~Include redux saga~~
- ~~Include Auth flow with redux~~
- ~~Implement admin dashboard layout~~
- ~~Implement CRUD on admin dashboard~~
- ~~Integrate backend with redux+saga~~
- Frontend form validation
- Include testing
- Design refactorings
- Code refactorings
- Testing & testing
- Release v1 to staging

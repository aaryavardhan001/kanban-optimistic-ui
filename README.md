Kanban Board - Optimistic UI Implementation

## Features
- **Optimistic UI Updates**: Tasks move instantly to the next column for zero-latency.
- **State Rollback**: If the "Server" (Mock API) fails, the UI automatically reverts the task to its original position.
- **Mock API Service**: Simulated 1-2s delay with a 20% random failure rate.
- **Persistent Storage**: Board state and Auth sessions are saved in LocalStorage.

## Tech Stack
- React.js (Context API for State)
- Tailwind CSS (Styling)
- Lucide-React (Icons)
- React-Hot-Toast (Notifications)

## How to Run
1. Unzip the folder.
2. Run `npm install --legacy-peer-deps`.
3. Run `npm start`.
//frontend flow 

main.jsx → App start hota hai
app/

App.jsx → Routes render karta hai
app.routes.jsx → Saari routes define hain
app.store.js → Redux store — poori app ki state yahan
index.css → Global styles

features/auth/

pages/ → Login, Register pages
components/ → Form components
hooks/ → Auth ke custom hooks
service/ → API calls (login, register)
auth.slice.js → Redux state (user, token)

features/chat/

hooks/ → useChat — socket connection
services/ → chat.socket.js — socket setup
Dashboard.jsx → Chat UI



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

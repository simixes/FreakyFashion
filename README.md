# Freaky Fashion 🛍️

Fraky Fashion är en e-handelsplattform för kläder byggd med **React** och **Vite**. Projektet är en del av ett skolprojekt och använder moderna verktyg för frontend-utveckling.

## 🚀 Teknologier

Projektet använder följande teknologier och bibliotek:

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router 7](https://reactrouter.com/)
- [Bootstrap 5](https://getbootstrap.com/)
- ESLint för kodkvalitet

## 📂 Projektstruktur

```
client/
│── public/
│   ├── images/         # Bilder för projektet
│── src/
│   ├── assets/         # Statiska resurser
│   ├── components/     # Återanvändbara komponenter
│   │   ├── Admin/
│   │   ├── BasketDetails/
│   │   ├── Carousel/
│   │   ├── Checkout/
│   │   ├── Footer/
│   │   ├── Global/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── ProductGrid/
│   │   ├── SearchResults/
│   │   ├── Spots/
│   ├── layout/         # Layout-komponenter
│   ├── pages/          # Sidor i applikationen
│   │   ├── Admin/AdminNewProdPage/
│   │   ├── Basket/
│   │   ├── Checkout/
│   │   ├── Home/
│   │   ├── Products/
│   ├── vite.config.js      # Vite-konfiguration
│   ├── package.json        # Projektberoenden och skript
│── server/             # Backend-server
```

## 🛠️ Installation & Körning

1. **Kloning av repository:**
   ```sh
   git clone https://github.com/simixes/FreakyFashion.git
   cd FreakyFashion
   ```

2. **Installera beroenden:**
   ```sh
   npm install
   ```

3. **Starta frontend och backend i separata terminaler:**
   **Terminal 1:**
   ```sh
   cd client
   npm run dev
   ```
   - Frontend startas på `http://localhost:3000`

   **Terminal 2:**
   ```sh
   cd server
   npm run dev
   ```
   - Backend-servern körs på `http://localhost:8000`

4. **Bygga för produktion:**
   ```sh
   npm run build
   ```

5. **Förhandsgranska byggd version:**
   ```sh
   npm run preview
   ```

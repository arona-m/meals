# Dokumentacioni i Projektit: MERN Stack Meals

## Përmbledhje

Ky dokumentacion ofron një udhëzues të plotë për MERN Stack Aplikacionin e Meals. Projekti është një aplikacion që përdor MERN stack (MongoDB, Express, React, Node.js). Ai vendos komunikim mes serverit dhe klijentit përmes një API-je, ku klijenti ndihmohet nga një API Meals. Serveri implementon autentikimin JWT dhe ruaj tokenin në HTTP cookies për autentikim të sigurt të përdoruesit.

## Tabela e Përmbajtjes

1. Struktura e Projektit
2. Teknologjitë e Përdorura
3. Funksionaliteti
4. Integrimi i API-së
5. Autentikimi

## 1. Struktura e Projektit

Projekti ndahet në dy pjesë kryesore:

- **Pjesa e Serverit:**
  - Server Express me MongoDB Atlas si bazë të të dhënave.
  - Rruget për autentikim, regjistrim përdoruesi, shikim profil, dhe përditësim profil.
  - Autentikim JWT për mbrojtjen e routes.

- **Pjesa e Klientit:**
  - Aplikacion SPA bazuar në React.
  - Faqe për regjistrim përdoruesi, hyrje, dalje, shikim profil, dhe përditësim profil.
  - Integrim me një API Meals për shfaqjen e informacionit të meals.
  - Përdor React-Icons, Bootstrap, Redux, React Router DOM,React Toastify dhe Vite.

## 2. Teknologjitë e Përdorura

- **Serveri:**
  - Node.js
  - Express.js
  - MongoDB
  - JWT (JSON Web Token) për autentikim

- **Klienti:**
  - React
  - React-Icons, Bootstrap, React-Redux, React Router DOM, React Toastify

## 3. Funksionaliteti

- **Autentikimi i Përdoruesit:**
  - Funksionaliteti i regjistrimit, hyrjes dhe daljes.
  - Autentikim i sigurt duke përdorur JWT dhe ruajtjen ne cookies HTTP.

- **Menaxhimi i Profilit:**
  - Shikoni dhe përditësoni profilet e përdoruesit.

- **Informacioni i Meals**
  - Shfaq meals nga API-ja e Meals.
  - Lejo përdoruesit të shfletojnë dhe ruajne recetat e tyre të preferuara.

## 4. Integrimi i API

- **MealDB**
  - Perdorimi i MealDB API per shfaqjen e gjellave te ndryshme, duke kerkuar me emrin e nje gjelle apo nje gjelle te random
  - Shfaq detajet e gjellave si emri, përbërësit, foto dhe udhëzimet.

## 5. Autentikimi

- **Autentikimi JWT:**
  - Autentikim i sigurt i përdoruesit duke përdorur JSON Web Tokens.
  - Perdor MongoDB Atlas
 
  ## Qasja
  - npm run start / backend
  - npm run dev / frontend
  - JWT ruhet në HTTP cookies vetëm për shtim të sigurisë.
#   c o o k b o o k 
 
 

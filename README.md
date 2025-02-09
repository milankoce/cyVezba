# Cypress Automation Project

Ovo je Cypress automatizacioni projekat namenjen za testiranje web aplikacija.

## 📌 Instalacija

1. **Kloniranje repozitorijuma**
   ```bash
   git clone <URL_REPOZITORIJUMA>
   cd <IME_PROJEKTA>
   ```

2. **Instalacija zavisnosti**
   Ako koristiš `npm`:
   ```bash
   npm install
   ```
   Ako koristiš `yarn`:
   ```bash
   yarn install
   ```

## 🚀 Pokretanje testova

### 1️⃣ Pokretanje Cypress UI
   ```bash
   npx cypress open
   ```
   ili ako koristiš `yarn`:
   ```bash
   yarn cypress open
   ```
   Ovim se otvara Cypress Test Runner gde možeš vizuelno birati testove za izvršavanje.

### 2️⃣ Pokretanje testova u headless modu
   ```bash
   npx cypress run
   ```
   ili
   ```bash
   yarn cypress run
   ```
   Ovo pokreće testove u terminalu bez otvaranja preglednika.

## ⚙ Konfiguracija

- Konfiguracija se nalazi u `cypress.config.ts` fajlu gde možeš podesiti bazni URL, vremenske pragove i druge opcije.

## 📜 Struktura projekta

```
📂 cypress
 ┣ 📂 e2e        # Test skripte
 ┣ 📂 fixtures   # Test podaci
 ┣ 📂 support    # Pomoćni fajlovi i komande
 ┣ 📜 cypress.config.ts  # Konfiguracija Cypress-a
 ┗ 📜 package.json  # Definisane zavisnosti
```

## 📢 Napomena

Ukoliko koristiš Allure report:
```bash
npm run all-tests
npm run merge-json-reports
npm run send-email
```

Srećno testiranje! 🚀

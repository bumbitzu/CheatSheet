# Cheat Sheet: Sesiuni în Express cu express-sessions

## Introducere
`express-session` este un middleware pentru Express.js care facilitează gestionarea sesiunilor utilizator. Permite stocarea datelor sesiunii pe server și le asociază cu un cookie trimis clientului, asigurând un mecanism de autentificare și menținerea stării sesiunii.

## Configurarea Middleware-ului express-session

1. **Instalare**: Înainte de a utiliza `express-session`, trebuie instalat prin npm:
   ```bash
   npm install express-session
   ```

2. **Configurare Basică**: Importă și utilizează `express-session` în aplicația Express:
   ```javascript
   const session = require('express-session');

   app.use(session({
     secret: 'cheie_secreta_aici',
     resave: false,
     saveUninitialized: true,
     cookie: { secure: true }
   }));
   ```
   - `secret`: Un șir de caractere utilizat pentru semnarea cookie-ului sesiunii, esențial pentru securitate.
   - `resave`: Forțează sesiunea să fie salvată în magazinul de sesiuni la fiecare cerere, indiferent dacă sesiunea a fost modificată sau nu.
   - `saveUninitialized`: Forțează o sesiune neinițializată (nouă, dar neschimbată) să fie salvată în magazinul de sesiuni.

## Proprietăți Specifice

- **resave**: Setează pe `false` pentru a preveni salvarea repetitivă a sesiunilor care nu au fost modificate. Acest lucru reduce sarcina pe magazinul de sesiuni și evită conflictele de concurență.

- **saveUninitialized**: Setează pe `false` pentru a preveni stocarea sesiunilor noi și neutilizate, contribuind la economisirea resurselor și îmbunătățirea securității prin evitarea creării cookie-urilor de sesiune pentru vizitatorii care nu interacționează cu sesiunea.

## Configurarea Cookie-urilor

```javascript
cookie: {
  secure: true, // Asigură că cookie-ul este trimis doar peste HTTPS
  httpOnly: true, // Previne accesul clientului JavaScript la cookie
  domain: 'exemplu.com',
  maxAge: 1000 * 60 * 60 // Setează durata de viață a cookie-ului (în acest caz, 1 oră)
}
```

## Stocarea Sesiunii în Memorie

Implicit, `express-session` utilizează stocarea în memorie pentru sesiuni, ceea ce este suficient pentru dezvoltare și testare. Totuși, pentru producție, se recomandă utilizarea unui magazin de sesiuni dedicat, cum ar fi Redis, MongoDB etc., pentru durabilitate și scalabilitate.

## Integrarea Sesiunilor în Procesul de Autentificare

1. **Crearea Sesiunii**: La autentificarea cu succes a unui utilizator, inițiază o sesiune și stochează informații relevante (de exemplu, ID-ul utilizatorului).
   ```javascript
   req.session.userId = utilizator.id;
   ```

2. **Verificarea Sesiunii**: În middleware-ul ulterior sau în rute, verifică prezența `userId` în sesiune pentru a determina dacă utilizatorul este autentificat.
   ```javascript
   if (req.session.userId) {
     // Utilizatorul este autentificat
   }
   ```

## Accesul și Modificarea Sesiunii După Autentificare

După autentificare, poți accesa și modifica sesiunea utilizând `req.session`. De exemplu, pentru a actualiza o preferință a utilizatorului:
```javascript
req.session.userPreference = { tema: 'întunecată' };
```

Pentru a încheia sesiunea și a șterge cookie-ul asociat:
```javascript
req.session.destroy(err => {
  if (err) {
    // gestionare eroare
  }
  res.clearCookie('connect.sid'); // Numele cookie-ului de sesiune este 'connect.sid' prin default
  // Redirecționează utilizatorul sau trimite un răspuns
});
```
##Exemplu

Pentru a crea un exemplu complet de cod care utilizează `express-session` pentru gestionarea sesiunilor într-o aplicație Express, vom realiza următorii pași:

1. Configurarea serverului Express și middleware-ului `express-session`.
2. Implementarea unui sistem simplu de autentificare.
3. Utilizarea sesiunilor pentru a menține starea autentificării utilizatorului.
4. Accesarea și modificarea datelor sesiunii după autentificare.
5. Logout și ștergerea sesiunii.

### Pasul 1: Configurarea Serverului Express și express-session

```javascript
const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
  secret: 'cheie_secreta_aici', // Schimbați acest șir cu unul propriu, unic
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // Pentru HTTPS setați ca true
    httpOnly: true,
    maxAge: 1000 * 60 * 60 // Durata de viață a cookie-ului este de 1 oră
  }
}));
```

### Pasul 2: Implementarea Sistemului de Autentificare

Vom crea un mecanism simplu de autentificare pentru demonstrație. Într-o aplicație reală, ar trebui să verificați credențialele utilizatorului împotriva unei baze de date sau unui serviciu de autentificare.

```javascript
const users = {
  user1: { password: "parola123", id: 1 },
  // Adaugă aici alți utilizatori după necesități
};

app.post('/login', (req, res) => {
  const { username, password } = req.body; // Presupunem că datele sunt trimise prin formular
  const user = users[username];

  if (user && user.password === password) {
    req.session.userId = user.id; // Crearea sesiunii pentru utilizator
    res.send('Autentificare reușită!');
  } else {
    res.send('Nume de utilizator sau parolă incorectă.');
  }
});
```

### Pasul 3: Utilizarea Sesiunilor

```javascript
app.get('/secret', (req, res) => {
  if (req.session.userId) {
    res.send('Conținut secret!');
  } else {
    res.status(401).send('Necesită autentificare');
  }
});
```

### Pasul 4: Modificarea Datelor Sesiunii

```javascript
app.get('/change-preference', (req, res) => {
  if (req.session.userId) {
    // Exemplu de modificare a preferinței utilizatorului
    req.session.userPreference = { theme: 'dark' };
    res.send('Preferința a fost actualizată.');
  } else {
    res.status(401).send('Necesită autentificare');
  }
});
```

### Pasul 5: Logout și Ștergerea Sesiunii

```javascript
app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.send('Eroare la delogare');
    }
    res.clearCookie('connect.sid'); // Șterge cookie-ul de sesiune
    res.send('Ai fost delogat cu succes.');
  });
});
```

### Rularea Serverului

Nu uitați să rulați serverul prin adăugarea următoarei linii la sfârșitul scriptului:

```javascript
app.listen(3000, () => console.log('Serverul rulează pe portul 3000'));
```

Pentru a testa această aplicație, veți avea nevoie să instalați Express și express-session (`npm install express express-session`), și să folosiți Postman sau un browser pentru a face cereri către endpoint-urile definite. Asigurați-vă că trimiteti cereri POST către `/login` cu un `body` ce conține `username` și `password` pentru a testa autentificarea, și apoi accesați `/secret` pentru a verifica starea sesiunii.

## Concluzie

Folosind `express-session`, poți adăuga cu ușurință gestionarea sesiunilor în aplicațiile Express, îmbunătățind securitatea și experiența utilizatorului. Este important să alegi cu atenție setările pentru a echilibra performanța, securitatea și experiența utilizatorului, și să folosești un magazin de sesiuni adecvat pentru mediul de producție.
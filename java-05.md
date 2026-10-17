# RideShare — Java 5 · Hyrja dhe lejet

Ruaje si java-05.md pranë README, jashtë aplikacioni/.
Hiqi shenjat \[PLOTËSO]. Mos vendos sekrete, email ose pamje të kredencialeve.



## Çfarë ndërtova

Shpjego dallimin mes identitetit, rolit dhe pronësisë në aplikacionin tënd.

&#x09;Në këtë detyrë ndërtova funksionalitetin e hyrjes me GitHub dhe kontrollin e lejeve në aplikacionin RideShare.

&#x09;Identiteti tregon se cili përdorues është kyçur në aplikacion. Në këtë projekt identiteti merret përmes llogarisë GitHub.

&#x09;Roli përcakton se çfarë veprimesh mund të kryejë përdoruesi. Për shembull, roli shofer i lejon përdoruesit të kryejë veprime të caktuara si shofer.

&#x09;Pronësia përcakton se cilit përdorues i përket një udhëtim. Një shofer mund ta ndryshojë vetëm udhëtimin që i përket atij, jo udhëtimin e një shoferi tjetër.



## Provat që bëra

### Prova 1: Hyrja, rifreskimi dhe dalja



Hapa panelin /panel për të kontrolluar sjelljen e aplikacionit para dhe pas hyrjes. Aplikacioni më kërkoi të hyja për të pasur qasje në panel. U kyça përmes GitHub dhe paneli shfaqi të dhënat e përdoruesit dhe rolin përkatës.



Pas rifreskimit, paneli vazhdoi të shfaqej dhe hyrja mbeti aktive. Pas daljes, sesioni u mbyll dhe më nuk kisha qasje në panel si përdoruese e kyçur.



### Prova 2: Shoferi ndryshon udhëtimin e vet



Si shofer i udhëtimit me ID 2, e ndryshova orën nga 08:15 në 08:25 përmes formularit në panel.

Pas klikimit te Ruaj orën, aplikacioni shfaqi mesazhin: “Ora u ruajt me sukses. Kontrollo listën dhe detajet.”

Ndryshimi u shfaq në listën e udhëtimeve dhe te detajet e ID 2. Gjithashtu, në Neon SQL Editor verifikova se ora ishte ruajtur si 08:25.

Në fund, e riktheva orën e udhëtimit me ID 2 në 08:15, siç kërkohej në detyrë.



### Prova 3: Veprimi pa leje refuzohet



Nga formulari i panelit ndryshova përkohësisht ID-në e udhëtimit nga 2 në 1 dhe provova ta ruaja ndryshimin.

Aplikacioni shfaqi mesazhin “Nuk ke leje për këtë udhëtim. Ora nuk ndryshoi”. Kjo tregoi se serveri e refuzoi veprimin për një udhëtim që nuk më përket.

Në Neon SQL Editor kontrollova udhëtimin me ID 1 dhe verifikova se ora kishte mbetur 08:00. Pas provës, e rifreskova panelin dhe kontrollova që ID 2 të ishte përsëri në 08:15.Ku gjendet puna



## Çfarë mbetet për përmirësim



Do të përmirësoja trajtimin e gabimeve gjatë ruajtjes, në mënyrë që përdoruesi të kuptojë më lehtë pse një ndryshim nuk u ruajt.



## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)

Nuk përdora AI.












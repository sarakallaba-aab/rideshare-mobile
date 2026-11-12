# RideShare — Java 8

## Çfarë ndërtova
Këtë javë shtova funksionalitetin për zgjedhjen e vendtakimit në detajet e udhëtimit. Përdoruesi mund ta shkruajë vetë vendtakimin dhe ta konfirmojë në telefon, ose të kërkojë vendndodhjen përmes GPS-it. Gjithashtu shtova mesazhe për rastet kur leja refuzohet, GPS-i nuk është i disponueshëm ose kërkimi përfundon me timeout. Vendtakimi i konfirmuar ruhet në gjendjen lokale të komponentit

## Provat që bëra
### Prova 1: Leja nuk kërkohet sapo hapet faqja.
Hapat: Hapa faqen /java-08-test pa klikuar butonin për vendndodhje.

Rezultati i pritur: Faqja hapet pa kërkuar leje për GPS.

Çfarë ndodhi: Faqja u hap normalisht dhe leja për vendndodhje nuk u kërkua deri në momentin kur klikova butonin "Përdor vendndodhjen time".

### Prova 2: Refuzimi i lejes nuk e bllokon përdoruesin.
Hapat: Bllokova lejen për vendndodhje nga shfletuesi, rifreskova faqen dhe klikova butonin për GPS.

Rezultati i pritur: Shfaqet mesazhi se leja është refuzuar, ndërsa fusha manuale mbetet funksionale.

Çfarë ndodhi: U shfaq mesazhi "Leja u refuzua. Shkruaj vendtakimin vetë." dhe munda të vazhdoj me zgjedhjen manuale të vendtakimit.

### Prova 3: Dëshmitë në GitHub nuk tregojnë adresën time reale.
Hapat: Kontrollova dëshmitë e testimit dhe informacionet e publikuara në GitHub për t'u siguruar që nuk përmbajnë adresën time reale ose koordinatat GPS.

Rezultati i pritur: Dëshmitë nuk përmbajnë të dhëna personale për vendndodhjen time.

Çfarë ndodhi: Dëshmitë e testimit tregojnë funksionimin e aplikacionit pa ekspozuar adresën time reale ose koordinatat e vendndodhjes.
## Ku gjendet puna
src/components/Vendtakimi.tsx – komponenti për zgjedhjen manuale dhe GPS.
src/app/udhetimi/[id]/page.tsx – integrimi i komponentit në detajet e udhëtimit.
src/app/java-08-test/page.tsx – faqja për testimin e funksionalitetit.
mobile-week08.json – skedari i javës 8.
java-08.md – dokumentimi i punës.

## Çfarë mbetet për përmirësim
Vendndodhja GPS nuk garanton gjithmonë saktësi të lartë, pasi kjo varet nga pajisja dhe shfletuesi. Gjithashtu, koordinatat nuk shndërrohen automatikisht në emër të një vendi. Në të ardhmen mund të shtohet një shërbim që i kthen koordinatat në adresa ose vende të njohura.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
Përdora AI për ndihmë gjatë trajtimit të gabimeve të GPS-it.

## Prova me një hyrje të re
Hyrja që provova: Ndryshimi i vendtakimit nga Biblioteka në Parkingu pa e konfirmuar ndryshimin.

Parashikimi im para klikimit: Vendtakimi i konfirmuar duhet të mbetet Biblioteka, ndërsa fusha duhet të përmbajë Parkingu.

Çfarë pashë realisht: [Plotëso me rezultatin e testit ku nuk e klikon butonin Konfirmo.]

Skedari dhe funksioni që e shpjegojnë: src/components/Vendtakimi.tsx, funksioni konfirmoVendtakimin() dhe gjendjet teksti dhe vendtakimi.

Çfarë kuptova ose korrigjova: Kuptova se teksti i shkruar dhe vendtakimi i konfirmuar janë dy gjendje të ndara. Ndryshimi i tekstit nuk e ndryshon vendtakimin e konfirmuar pa klikuar butonin e konfirmimit.

Këtë pjesë e shpjegoj në klasë. Kontrolli automatik nuk verifikon vërtetësinë e provës.

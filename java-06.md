# RideShare — Java 6 · PWA dhe puna offline

## Çfarë ndërtova

Ndërtova një PWA (Progressive Web App) për RideShare AAB, që mundëson hapjen e aplikacionit dhe leximin e listës së udhëtimeve edhe pa internet. Manifesti përcakton emrin dhe ikonat e aplikacionit, Service Worker menaxhon kërkesat dhe ruajtjen e të dhënave, ndërsa kopja publike ruan listën e udhëtimeve në pajisje për lexim offline.

## Provat që bëra

### Prova 1: Manifesti dhe vizita online

Hapa URL-në http://localhost:3000/manifest.webmanifest dhe kontrollova manifestin e aplikacionit. Emri i aplikacionit është RideShare AAB, ndërsa ikonat kanë përmasat 192×192 dhe 512×512 pikselë. Kontrollova Service Worker dhe Cache Storage për të verifikuar nëse lista e udhëtimeve ishte ruajtur.

### Prova 2: Pa internet dhe pas rifreskimit

Ndërprerjen e internetit e simulova përmes Chrome DevTools, te skeda Network, duke zgjedhur Offline. Pastaj e rifreskova faqen me Ctrl + R për të kontrolluar nëse të dhënat e ruajtura hapeshin pa internet.



Rezultati: U shfaqën tri kartat, mirëpo mundësia është vetëm leximi i udhëtimeve jo kërkimi i një vendi të lirë. Tregon ruajtjen e fundit të listës. Pa lidhje me serverin nuk mund të verifikohet disponueshmëria aktuale dhe të konfirmohet rezervimi.

### Prova 3: Lidhja rikthehet

Kontrollova listën e udhëtimeve offline dhe ndryshimin e orës së udhëtimit me ID 2 në Neon. Pas rikthimit të internetit, përdora funksionin Rifresko listën për të marrë të dhënat më të reja nga serveri. Në listën para ndryshimeve udhëtimi me ID 2 ora e nisjes ishte: 08:15 kurse pas rifreskimit të të dhënave ora ndryshoi në: 08:25.

## Ku gjendet puna

Github: https://github.com/sarakallaba-aab/rideshare-mobile

Skedarët e shtuar: manifesti, Service Worker, komponenti Pwa, faqja offline dhe ikonat e aplikacionit.

Demo në Vercel: https://vercel.com/sara-a778/rideshare-mobile-pm26



## Çfarë mbetet për përmirësim

Në vizitën e parë pa internet, kur nuk ekziston ende një kopje e ruajtur, aplikacioni mund të mos jetë në gjendje ta shfaqë listën e udhëtimeve. Leximi offline kufizohet te të dhënat e ruajtura më parë dhe nuk garanton që ato janë të përditësuara. Për këtë arsye, përditësimi dhe konfirmimi i rezervimeve kërkojnë lidhje me serverin.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)

Nuk përdora AI.


# SHABLLON PRD (Product Requirements Document) — 1 Faqe

**Shkurtesat:** PWA (Progressive Web App – aplikacion web progresiv); PRD (Product Requirements Document – dokumenti i kërkesave të produktit); MVP (Minimum Viable Product – produkti minimal i përdorshëm).
**Kursi:** Programimi për Pajisje Mobile (2026/2027) • **Kolegji AAB**  
**Emri i Projektit:** AAB RideShare 
**Themeluesi / Ekipi:** \[Sara Kallaba, RE-59454/24]  
**Data \& Versioni:** Java 02 • Versioni 1.0 (Draft për MVP)

\---

## 1\. Përdoruesi dhe Problemi Real

Përdoruesit kryesorë janë studentët e Kolegjit AAB që udhëtojnë çdo ditë nga qytetet e tjera drejt Prishtinës, si dhe studentët që kanë vetura dhe vende të lira gjatë udhëtimit për në fakultet.



Problemi shfaqet kur studentët kanë nevojë për transport në një orar të caktuar, por nuk e dinë se cilët kolegë udhëtojnë në të njëjtën kohë dhe kanë vende të lira. Shpesh ata kërkojnë transport përmes grupeve nëpër rrjete sociale të ndryshme ose përdorin autobusë dhe taksi. Kjo e vështirëson organizimin e udhëtimit, mund të shkaktojë pritje dhe rrit shpenzimet, ndërsa shoferët vazhdojnë të udhëtojnë me vende të lira në veturë.

## 2\. Evidenca e Vëzhgimit (3 Bisedat me Përdoruesit)

Problemi ilustrohet përmes shembullit të dy studentëve ku njëri nga ta kërkon transport për në AAB, ndërsa tjetri udhëton në të njëjtën kohë dhe ka dy vende të lira në veturë. Megjithatë, ata nuk arrijnë të lidhen me njëri-tjetrin sepse informacioni për udhëtimet është i shpërndarë në biseda të ndryshme.



Ky shembull tregon se një aplikacion i përbashkët mund ta lehtësojë komunikimin mes studentëve. Për të kuptuar nëse ky problem paraqitet edhe në jetën e përditshme, duhet të bisedohet me studentë që udhëtojnë dhe me studentë që kanë vetura. 

## 3\. Hipoteza e Vlerës

Përmes këtij aplikacioni, shoferët do të mund t'i ndajnë informacionet për udhëtimin e tyre, ndërsa udhëtarët do të mund të zgjedhin udhëtimin që u përshtatet. Për të vërtetuar nëse aplikacioni e zgjidh problemin, do të testohet nëse përdoruesit mund ta gjejnë një udhëtim dhe ta dërgojnë kërkesën pa pasur nevojë për ndihmë.



## 4\. Rrjedha Kryesore e Përdoruesit (Core Flow — Max 5 Hapa)

1. **Kyçja:** Studenti kyçet me email zyrtar AAB.
2. **Kërkimi / Postimi:** Shoferi shënon nisjen/orën/vendet; udhëtari shikon listën e veturave të lira.
3. **Kërkesa:** Udhëtari zgjedh veturën dhe shtyp butonin `\\\[Kërko Vend]`.
4. **Konfirmimi:** Shoferi merr njoftim dhe e konfirmon udhëtarin në çast.
5. **Përfundimi:** Udhëtimi kryhet dhe të dy palët lënë vlerësim me 1-prekje.

## 5\. Kufijtë e MVP-së (Scope Contract)

Në versionin e parë të aplikacionit do të përfshihen vetëm funksionet kryesore që nevojiten për organizimin e një udhëtimi. Qëllimi është që aplikacioni të funksionojë si duhet, pa humbur kohë në veçori shtesë.



* **Brenda MVP-së:**

  1. Shoferët mund t'i publikojnë udhëtimet me orën e nisjes dhe numrin e vendeve të lira.
  2. Udhëtarët mund t'i shikojnë udhëtimet dhe të kërkojnë një vend.
  3. Shoferët mund t'i pranojnë ose t'i refuzojnë kërkesat, ndërsa statusi dhe numri i vendeve të lira përditësohen sipas përgjigjes.



* **Jashtë MVP-së:**

  1. Hartat GPS dhe përcjellja e veturës në kohë reale.
  2. Pagesat përmes kartelave bankare.
  3. Chat-i brenda aplikacionit dhe sistemi i vlerësimeve.



Këto veçori mund të shtohen në të ardhmen, nëse versioni i parë funksionon mirë dhe përdoruesit kanë nevojë për to. 



## 6\. Kriteret e Pranimit (Acceptance Criteria - Çfarë testohet)

* \[ ] **AC-1:** Kur një shofer poston 3 vende, ato shfaqen menjëherë te të gjithë pa rifreskuar faqen.
* \[ ] **AC-2:** Kur një udhëtar konfirmohet, numri i vendeve të lira zbret nga 3 në 2.
* \[ ] **AC-3:** Përdoruesit pa email `@universitetiaab.com` bllokohen nga sistemi.
* \[ ] **AC-4:** Aplikacioni hapet dhe shfaq gjendjen offline kur fiket interneti.
* \[ ] **AC-5:** Kur shoferi e refuzon kërkesën, statusi ndryshon në “E refuzuar” dhe numri i vendeve të lira mbetet i njëjtë.
* \[ ] **AC-6:** Kur nuk ka më vende të lira, sistemi nuk lejon konfirmimin e një udhëtari tjetër.

## 7\. Modeli Minimal i të Dhënave (Supabase PostgreSQL)

```sql
profiles (id, full\\\_name, email, phone, role)
rides (id, driver\\\_id, origin, departure\\\_time, available\\\_seats, price\\\_eur, status)
bookings (id, ride\\\_id, passenger\\\_id, status, created\\\_at)
```

## 8\. Rreziku Kryesor që Duhet Testuar



Rreziku kryesor është që studentët të mos kenë besim të udhëtojnë me persona që nuk i njohin personalisht. Edhe nëse aplikacioni e lehtëson gjetjen e transportit, përdoruesit duhet të ndihen të sigurt para se ta dërgojnë ose ta pranojnë një kërkesë.



Për ta kuptuar më mirë këtë problem, do të bisedohet me studentë dhe do të pyeten se çfarë informacioni do të dëshironin ta shihnin për shoferin dhe udhëtimin para se të rezervonin një vend.



Qëllimi është të kuptohet nëse aplikacioni mund ta bëjë organizimin e transportit më të lehtë dhe nëse përdoruesit mund ta përfundojnë rrjedhën nga kërkimi i udhëtimit deri te konfirmimi pa paqartësi.


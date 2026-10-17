# RideShare — Java 4 · Neon dhe PostgreSQL

Ruaje këtë skedar si java-04.md pranë README, jashtë aplikacioni/.
Plotëso të gjitha përgjigjet; hiqi shenjat \[PLOTËSO].
Mos vendos DATABASE\_URL, pamje të kredencialeve ose të dhëna reale.



## Çfarë ndërtova

Në këtë ushtrim e lidha aplikacionin RideShare me databazën PostgreSQL në Neon. Krijova tabelën udhetimet dhe shtova tri udhëtime me të dhëna fiktive. Skedari schema.sql përmban strukturën e tabelës dhe të dhënat fillestare.



Në src/lib/db.ts krijova funksionin për lidhjen me databazën duke përdorur DATABASE\_URL nga skedari lokal .env.local. Në src/lib/udhetimet.ts përshtata funksionet lexoUdhetimet() dhe gjejUdhetimin(id) për t'i lexuar udhëtimet nga Neon përmes pyetjeve SQL.



Faqja kryesore i shfaq udhëtimet e marra nga databaza, ndërsa faqja e detajeve i shfaq të dhënat e udhëtimit të zgjedhur sipas ID-së. Në këtë mënyrë, ndryshimet në databazë mund të shfaqen në aplikacion pa pasur nevojë të ndryshohet lista statike në kod.



## Provat që bëra

### Prova 1: Ndryshimi në databazë shfaqet në aplikacion



Në Neon SQL Editor ndryshova përkohësisht orën e udhëtimit me ID 2 nga 08:15 në 08:25. Pas rifreskimit të listës, karta e udhëtimit me ID 2 shfaqi orën 08:25. Edhe faqja e detajeve për të njëjtin udhëtim shfaqi orën e re.



Më pas e riktheva orën në 08:15 përmes SQL Editor dhe verifikova që të dyja faqet shfaqnin përsëri orën fillestare.

### Prova 2: Lista bosh dhe rikthimi



Në funksionin lexoUdhetimet() shtova përkohësisht WHERE false në pyetjen SQL, pa ndryshuar të dhënat në databazë.



Me këtë kusht, pyetja nuk ktheu asnjë rezultat dhe aplikacioni shfaqi mesazhin “Nuk ka udhëtime për momentin.”. Pas heqjes së WHERE false dhe rifreskimit të faqes, tri kartat e udhëtimeve u shfaqën përsëri.



### Prova 3: Lidhja mungon, rikthimi dhe siguria



Në skedarin .env.local ndryshova përkohësisht emrin e variablës DATABASE\_URL në DATABASE\_URL\_PA\_TEST dhe e rinisa serverin e zhvillimit. Aplikacioni shfaqi mesazhin “Nuk u lidhëm me databazën. Provo përsëri.”, sepse variabla e kërkuar nuk ishte më e disponueshme.



Pastaj e riktheva emrin DATABASE\_URL, e rinisa serverin dhe kontrollova përsëri aplikacionin.

Skedari .env.local përmban të dhëna konfidenciale të lidhjes me databazën dhe nuk është i publikuar në GitHub.



## Ku gjendet puna

schema.sql — në folderin aplikacioni/, pranë package.json.

src/lib/db.ts — përgatit lidhjen me databazën Neon.

src/lib/udhetimet.ts — përmban funksionet për leximin e udhëtimeve.

src/app/page.tsx — shfaq listën e udhëtimeve.

src/app/udhetimi/\[id]/page.tsx — shfaq detajet e udhëtimit.

src/app/udhetimi/\[id]/kerkesa/page.tsx — paraqet simulimin e kërkesës për vend.

Repository: https://github.com/sarakallaba-aab/rideshare-mobile

Aplikacioni në Vercel (opsional): https://vercel.com/sara-a778/rideshare-mobile-pm26



## Çfarë mbetet për përmirësim

Kërkesa për vend është ende simulim dhe nuk krijon rezervim real në databazë. Si hap të ardhshëm planifikoj të shtoj ruajtjen e kërkesave, kontrollin e vendeve të lira dhe konfirmimin e rezervimit, në mënyrë që numri i vendeve të përditësohet saktë.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)

Përdora AI për deploy të aplikacionit në Vercel pasi që hasa në disa vështirësi. Ndihmën e përdora si udhëzim për deploy të suksesshëm të projektit në Vercel.


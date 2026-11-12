# Java 7 – Provo, korrigjo dhe shpjego RideShare-in tënd

## 1. Rasti im

Rasti i zgjedhur: Lista dhe detajet e udhëtimeve.

Kodi i rastit: P7-322

GitHub: sarakallaba-aab

Ky rast fokusohet në funksionimin e listës së udhëtimeve dhe hapjen e detajeve përmes ID-së përkatëse. Qëllimi është që përdoruesi të hapë udhëtimin e saktë dhe të marrë mesazh të qartë nëse udhëtimi nuk ekziston.

## 2. Parashikimi

Pres që çdo udhëtim i shfaqur në listë të hapet përmes ID-së së tij dhe të shfaqë të dhënat përkatëse. Nëse përdoret një ID që nuk ekziston, aplikacioni duhet të shfaqë një mesazh informues dhe jo të paraqesë të dhëna të pasakta.

## 3. Ndryshimi i ri

Fokusi i punës është kontrollimi dhe përmirësimi i lidhjes ndërmjet listës së udhëtimeve dhe faqes së detajeve.

Është e rëndësishme që ID-ja e përdorur gjatë navigimit të jetë e njëjtë me ID-në e udhëtimit që kërkohet nga sistemi. Gjithashtu, duhet të trajtohet rasti kur udhëtimi nuk gjendet.

## 4. Ndihma nga AI

AI është përdorur për sqarimin e logjikës së routing-ut dinamik në Next.js.

## 5. Dy probleme

### 1. Problemi i parë – Hapja e udhëtimit sipas ID-së

- Përshkrimi: Gjatë kontrollimit të faqeve të detajeve, ID-ja 56 shfaqte mesazhin "Udhëtimi nuk u gjet", ndërsa ID-ja 1 shfaqte udhëtimin Prishtinë–AAB.
- Hapat: Hapja e `/udhetimi/56` dhe pastaj e `/udhetimi/1`.
- Sjellja aktuale: ID-ja 56 nuk shfaq udhëtim, ndërsa ID-ja 1 shfaq detajet.
- Sjellja e pritur: Çdo ID që ekziston në databazë duhet të shfaqë udhëtimin përkatës, ndërsa ID-ja që nuk ekziston duhet të trajtohet me mesazh të qartë.

### 2. Problemi i dytë – Trajtimi i ID-së që nuk ekziston

- Përshkrimi: Duhet të verifikohet nëse aplikacioni e dallon saktë një ID të pavlefshme nga një udhëtim që ekziston.
- Hapat: Hapja e një URL-je me ID që nuk gjendet në databazë.
- Sjellja aktuale: [PLOTËSO PAS TESTIMIT]
- Sjellja e pritur: Aplikacioni duhet të shfaqë mesazhin se udhëtimi nuk është gjetur, pa paraqitur të dhëna të tjera.

## 6. Korrigjimi

- Problemi i korrigjuar: Kontrollimi i ID-së dhe trajtimi i rastit kur udhëtimi nuk ekziston.
- Skedari: [VENDOS SHTEGUN E SAKTË TË FILE-IT KU ËSHTË BËRË KORRIGJIMI]
- Arsyeja: Që aplikacioni të mos shfaqë të dhëna të pasakta dhe përdoruesi të marrë përgjigje të qartë kur kërkon një udhëtim që nuk ekziston.

## 7. Prova 1 – Hapja e udhëtimit nga lista

- Hapat: Hapet lista e udhëtimeve dhe zgjidhet një udhëtim për të parë detajet.
- Pritshmëria: Hapet faqja e detajeve me të dhënat e të njëjtit udhëtim.
- Vëzhgimi: [PLOTËSO PAS TESTIMIT]

## 8. Prova 2 – Testimi i ID-së së pavlefshme

- Hapat: Hapet direkt një URL me ID që nuk ekziston, për shembull `/udhetimi/99999`.
- Pritshmëria: Shfaqet mesazhi "Udhëtimi nuk u gjet".
- Vëzhgimi: [PLOTËSO PAS TESTIMIT]

## 9. Prova 3 – Testimi me një ID tjetër

- Hapat: Hapet një udhëtim tjetër nga lista dhe kontrollohen të dhënat e tij në faqen e detajeve.
- Pritshmëria: Shfaqen të dhënat e udhëtimit të zgjedhur dhe jo të një udhëtimi tjetër.
- Vëzhgimi: [PLOTËSO PAS TESTIMIT]
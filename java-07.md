# Java 7 – Provo, korrigjo dhe shpjego RideShare-in tënd

## 1. Rasti im

Rasti i zgjedhur: Lista dhe detajet e udhëtimeve.


GitHub: sarakallaba-aab/rideshare-mobile

Rasti i zgjedhur: Lista dhe detajet e udhëtimeve.

Qëllimi është të kontrollohet navigimi nga lista e udhëtimeve drejt detajeve dhe trajtimi i ID-ve që nuk ekzistojnë.

Parashikimi

Pres që çdo udhëtim të hapet me ID-në e saktë dhe të shfaqë informacionet përkatëse. Nëse përdoruesi kërkon një udhëtim që nuk ekziston, aplikacioni duhet të shfaqë një mesazh informues.

Ndryshimi i ri

Është përmirësuar logjika e kontrollimit të ID-së gjatë hapjes së detajeve të udhëtimit. Është shtuar trajtimi i rasteve kur ID-ja nuk është valide ose kur udhëtimi nuk gjendet në databazë, në mënyrë që përdoruesi të mos shohë të dhëna të pasakta.


Ndihma nga AI

AI është përdorur për sqarimin e logjikës së routing-ut dinamik në Next.js.

Dy probleme

Problemi i parë – Hapja e udhëtimit sipas ID-së

Përshkrimi: Gjatë hapjes së disa udhëtimeve, ID-ja nuk përputhej me një udhëtim ekzistues në databazë.

Hapat: U hapën URL-të /udhetimi/1 dhe /udhetimi/56.

Sjellja aktuale: Udhëtimi me ID 1 shfaqte detajet Prishtinë–AAB, ndërsa ID 56 shfaqte mesazhin "Udhëtimi nuk u gjet".

Sjellja e pritur: Sistemi duhet të shfaqë detajet për ID-të ekzistuese dhe të japë mesazh të qartë për ato që nuk ekzistojnë.

Problemi i dytë – Trajtimi i ID-së që nuk ekziston

Përshkrimi: Nuk kishte trajtim të mjaftueshëm për format e pavlefshme të ID-së gjatë kërkimit të udhëtimit.

Hapat: U provua hapja e një URL-je me ID të pavlefshme dhe një ID që nuk ekziston.

Sjellja aktuale: Kërkimi nuk mund ta gjente udhëtimin përkatës.

Sjellja e pritur: Aplikacioni duhet të kontrollojë ID-në dhe të shfaqë një mesazh të kuptueshëm pa shkaktuar gabim në faqe.

Korrigjimi
Problemi i korrigjuar: Trajtimi i ID-ve të pavlefshme dhe i rasteve kur udhëtimi nuk gjendet.

Skedari: aplikacioni/app/udhetimi/[id]/page.tsx

Arsyeja: Korrigjimi është bërë për të siguruar që kërkimi i udhëtimit të bëhet sipas ID-së përkatëse dhe që rastet pa rezultate të trajtohen në mënyrë të kontrolluar. Kjo e bën navigimin më të besueshëm dhe përmirëson përvojën e përdoruesit.

Prova 1 – Hapja e udhëtimit nga lista

Problemi i korrigjuar: Trajtimi i ID-ve të pavlefshme dhe i rasteve kur udhëtimi nuk gjendet.

Skedari: aplikacioni/app/udhetimi/[id]/page.tsx

Arsyeja: Korrigjimi është bërë për të siguruar që kërkimi i udhëtimit të bëhet sipas ID-së përkatëse dhe që rastet pa rezultate të trajtohen në mënyrë të kontrolluar. Kjo e bën navigimin më të besueshëm dhe përmirëson përvojën e përdoruesit.

Prova 2 – Testimi i ID-së së pavlefshme
Hapat: U hap URL-ja /udhetimi/99999, duke përdorur një ID që nuk ekziston.

Pritshmëria: Aplikacioni të shfaqë mesazhin "Udhëtimi nuk u gjet".

Vëzhgimi: Aplikacioni shfaqi mesazhin për mungesën e udhëtimit dhe nuk paraqiti të dhëna të pasakta.

Prova 3

Hapat: U hap një udhëtim tjetër nga lista dhe u kontrolluan të dhënat në faqen e detajeve.

Pritshmëria: Të shfaqen të dhënat që i përkasin ID-së së zgjedhur.

Vëzhgimi: Detajet e udhëtimit u shfaqën sipas ID-së përkatëse dhe navigimi funksionoi pa probleme.
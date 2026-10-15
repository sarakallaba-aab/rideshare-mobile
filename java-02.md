# RideShare — Java 2

**Shkurtesat:** MVP (Minimum Viable Product – produkti minimal i përdorshëm); AI (Artificial Intelligence – inteligjencë artificiale).

## 1\. Problemi

Çfarë vështirësie kanë studentët që udhëtojnë për në AAB?

&#x09;Studentët që udhëtojnë drejt AAB-së e kanë të vështirë të gjejnë transport që u përshtatet orarit të ligjëratave, ndërsa disa shoferë udhëtojnë me vende të lira në veturë. Informacioni shpesh shpërndahet në grupe të ndryshme dhe studentët nuk arrijnë të lidhen lehtë me njëri-tjetrin.



## 2\. Përdoruesit

Çfarë dëshiron shoferi? Çfarë dëshiron udhëtari?

**Shoferi:** Dëshiron ta publikojë udhëtimin, të tregojë sa vende të lira ka dhe t'i pranojë ose refuzojë kërkesat.



**Udhëtari:** Dëshiron të gjejë një udhëtim që i përshtatet orarit dhe të kërkojë një vend te shoferi.



## 3\. Tri ekranet

* Lista e udhëtimeve:

&#x09;Shfaq udhëtimet e publikuara, destinacionin, orën e nisjes dhe numrin e vendeve të lira.

* Detajet e udhëtimit: 

&#x09;Shfaq informacionet e plota për udhëtimin e zgjedhur dhe një buton për të kërkuar vend.

* Kërkesa në pritje: 

&#x09;Shfaq kërkesën e dërguar me statusin “Në pritje”, derisa shoferi të përgjigjet.



## 4\. MVP — vetëm tri veçori

Cilat tri veprime duhet të funksionojnë në versionin e parë?



Shoferi mund ta publikojë një udhëtim me orën dhe numrin e vendeve të lira.

Udhëtari mund të zgjedhë një udhëtim dhe të kërkojë një vend.

Shoferi mund ta pranojë ose refuzojë kërkesën dhe sistemi e përditëson statusin.



## 5\. Çfarë e lëmë për më vonë?

Shëno dy gjëra që nuk na duhen ende.



Hartat GPS dhe përcjelljen e veturës në kohë reale.

Pagesat përmes aplikacionit.



## 6\. Si e provoj?

Çfarë duhet të ndodhë kur kërkoj një vend?

&#x09;Kërkesa duhet të ruhet dhe të shfaqet me statusin “Në pritje”. Pasi shoferi ta pranojë, statusi ndryshon në “E konfirmuar” dhe numri i vendeve të lira zvogëlohet për një.


Çfarë ndodh nëse nuk ka vende të lira?

&#x09;Sistemi nuk duhet të lejojë dërgimin ose konfirmimin e një kërkese të re për atë udhëtim, sepse të gjitha vendet janë zënë.

## 7\. Prova me kolegun

Ku u hutua kolegu dhe çfarë ndryshova në skicë?

&#x09;Kolegu u hutua te dallimi mes detajeve të udhëtimit dhe dërgimit të kërkesës. Në skicë e bëra më të qartë butonin “Kërko vend” në ekranin e detajeve, në mënyrë që përdoruesi ta kuptojë kur duhet të veprojë.



## 8\. Ndihma nga AI

Shëno çfarë ndihme more dhe çfarë kontrollove vetë, ose shkruaj: Nuk përdora AI.

Hiqi shenjat e plotësimit pasi t'i zëvendësosh me përgjigjet e tua.

&#x09;Përdora AI për të organizuar kërkesat e projektit dhe për t'i bërë më të qarta kriteret e funksionimit. Përgjigjet i kontrollova duke i krahasuar me kërkesat e ligjëratës dhe duke u siguruar që funksionet kryesore janë të realizueshme për MVP-në.


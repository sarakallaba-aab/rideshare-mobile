# RideShare — Java 3

Ruaje këtë skedar si `java-03.md` pranë README në repository-n tënd, jashtë dosjes `aplikacioni/`. Mos shto `.txt` pas emrit. Zëvendëso të gjitha shenjat e plotësimit me atë që ndodhi vërtet. Mjafton një fjali e qartë për çdo provë, por trego çfarë prite dhe çfarë pe.

## Çfarë ndërtova

Shkruaj cilat ekrane të RideShare përfundove sot.

Sot vazhdova zhvillimin e RideShare me Next.js dhe TypeScript. Përfundova faqen kryesore me listën e udhëtimeve, komponentin KartaUdhetimi.tsx për paraqitjen e secilit udhëtim dhe faqen dinamike të detajeve te /udhetimi/\[id], ku shfaqen nisja, destinacioni, ora, vendtakimi dhe vendet e lira. Shtova edhe lidhjen për kërkimin e një vendi dhe trajtimin e udhëtimeve që nuk gjenden.



## Provat që bëra

### Prova 1: Lista në telefon



Hapa faqen kryesore në pamjen e telefonit; prisja që tri kartat e udhëtimeve të shfaqeshin pa lëvizje horizontale, ndërsa rezultatin e paraqitjes në ekran duhet ta konfirmoj pas testimit.



### Prova 2: Detajet e udhëtimit të dytë

Klikova kartën e dytë dhe u hap faqja /udhetimi/2, ku u shfaqën nisja, destinacioni, ora dhe vendtakimi i udhëtimit. Kontrollova edhe kartën e tretë me zero vende të lira dhe u shfaq opsioni i çaktivizuar “Nuk ka vende të lira”. Kur hapa /udhetimi/99, aplikacioni shfaqi faqen për udhëtim që nuk u gjet.



### Prova 3: Kërkesa në pritje

Klikova “Kërko vend” dhe u hap faqja e kërkesës, ku u shfaq mesazhi “Simulim: Në pritje”, pa u krijuar rezervim real. Pastaj u ktheva te detajet e udhëtimit dhe te lista kryesore, dhe navigimi funksionoi siç pritej.



## Çfarë do të përmirësoj

Do të përmirësoj paraqitjen e aplikacionit në telefon dhe do të kontrolloj që navigimi, shfaqja e vendeve të lira dhe trajtimi i udhëtimeve që nuk ekzistojnë të funksionojnë saktë.



## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)

Përdora AI për të kuptuar dhe rregulluar gabimet gjatë zhvillimit


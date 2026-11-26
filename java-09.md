# RideShare — Java 9

## Çfarë ndërtova
Këtë javë kam implementuar funksionalitetin për ruajtjen e udhëtimeve në listën e preferimeve. Përdoruesi i kyçur mund ta ruajë një udhëtim duke klikuar mbi yllin në faqen e detajeve.

Kam përdorur përditësimin optimist të ndërfaqes (Optimistic UI), ku ylli mbushet dhe numri i preferimeve rritet menjëherë, pa pritur përgjigjen nga serveri. Nëse ruajtja dështon, ndërfaqja rikthehet në gjendjen fillestare.

Preferimet ruhen në databazën Neon dhe lidhen me identitetin e përdoruesit të kyçur. Gjithashtu, kam vendosur një kufizim unik në databazë për të parandaluar ruajtjen e të njëjtit udhëtim disa herë nga i njëjti përdorues.

Kam përmirësuar edhe stilizimin e komponentëve të vendtakimit dhe preferimeve, duke i përshtatur me dizajnin ekzistues të aplikacionit.

## Provat që bëra
### Prova 1: Ruajtja e suksesshme mbetet pas rifreskimit.
Hapat:

U kyça në aplikacion përmes GitHub.

Hapa udhëtimin me ID 2.

Klikova butonin për ruajtjen në të preferuara.

Rifreskova faqen.

Kontrollova tabelën favoritet në Neon.

Rezultati i pritur: Ylli mbushet, numri i preferimeve rritet nga 0 në 1 dhe preferimi mbetet i ruajtur edhe pas rifreskimit të faqes.

Rezultati aktual: Ruajtja u krye me sukses. Pas rifreskimit, ylli mbeti i mbushur dhe numri i preferimeve mbeti 1. Në databazë u verifikua ekzistenca e preferimit.

Statusi: PASS

### Prova 2: Gabimi i serverit nuk lë një sukses të rremë në ekran.
Hapat:

Fshiva preferimin ekzistues të testimit nga databaza.

Aktivizova variablën SIMULO_DESHTIM_FAVORIT=true në .env.local.

Rinisja aplikacionin dhe klikova butonin e preferimeve.

Kontrollova gjendjen e ndërfaqes dhe tabelën në Neon.

Çaktivizova simulimin dhe provova ruajtjen përsëri.

Rezultati i pritur: Në rast dështimi të serverit, ylli dhe numri i preferimeve duhet të rikthehen në gjendjen fillestare. Nuk duhet të krijohet asnjë preferim në databazë dhe përdoruesi duhet të ketë mundësi të provojë përsëri.

Rezultati aktual: Pas dështimit të simuluar, ylli u kthye në gjendjen fillestare, numri i preferimeve u kthye në 0 dhe u shfaq mesazhi i gabimit. Kontrolli në Neon konfirmoi se nuk ishte krijuar asnjë rresht. Pas çaktivizimit të simulimit, preferimi u ruajt me sukses.

Statusi: PASS

### Prova 3: Klikimet e përsëritura nuk krijojnë kopje.
Hapat:

Fshiva preferimin ekzistues të testimit.

Rifreskova faqen dhe tentova ta klikoj butonin disa herë me shpejtësi.

Kontrollova numrin e preferimeve në Neon.

Tentova të shtoj përsëri të njëjtin kombinim të përdoruesit dhe udhëtimit në databazë, duke përdorur ON CONFLICT DO NOTHING.

Rezultati i pritur: Butoni duhet të çaktivizohet gjatë dhe pas ruajtjes, ndërsa databaza duhet të lejojë vetëm një preferim për të njëjtin kombinim të përdoruesit dhe udhëtimit.

Rezultati aktual: Butoni u çaktivizua dhe nuk lejoi klikime të tjera. Edhe pas tentimit për ruajtje të përsëritur në databazë, numri i preferimeve mbeti 1. Kufizimi unik parandaloi krijimin e kopjeve.

Statusi: PASS për kontrollet në ndërfaqe dhe databazë.

## Ku gjendet puna
Skedarët kryesorë të implementimit janë:

aplikacioni/src/components/Favoriti.tsx – komponenti i preferimeve dhe përditësimi optimist i ndërfaqes.

aplikacioni/src/lib/favoritet.ts – logjika e ruajtjes dhe leximit të preferimeve nga databaza.

aplikacioni/src/app/udhetimi/actions.ts – Server Action për ruajtjen e preferimeve.

aplikacioni/src/app/udhetimi/[id]/page.tsx – integrimi i preferimeve në faqen e detajeve.

aplikacioni/migrations/009_favoritet.sql – krijimi i tabelës dhe kufizimit unik në databazë.

aplikacioni/src/app/globals.css – përmirësimi i stilizimit të ndërfaqes.

Demonstrimi lokal: http://localhost:3000/udhetimi/2

## Çfarë mbetet për përmirësim
Aktualisht, përdoruesi mund ta ruajë një udhëtim në të preferuara, por nuk mund ta largojë atë përmes ndërfaqes. Në të ardhmen, mund të implementohet edhe largimi i preferimeve dhe një faqe e veçantë ku përdoruesi mund t'i shohë të gjitha udhëtimet e ruajtura.

Gjithashtu, mund të shtohen teste të automatizuara për ruajtjen, rikthimin e gjendjes pas dështimit dhe parandalimin e dublikimeve.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
Kam përdorur AI për të marrë udhëzime gjatë implementimit të përditësimit optimist të ndërfaqes

# KMOM01
**Berätta utförligt om din syn på Express och Pug och hur de samverkar. Relatera till andra ramverk du jobbat med. Lyft fram de fördelar och eventuellt nackdelar du finner, eller bara notera skillnader och likheter.**

Jag tyckte att pug tillsammans med express var ett smidigt sätt att komma igång med javascript-ramverk. Till en början kändes syntaxen för pug-templates väldigt främmande. Jag kände mig mer bekväm att skriva ren html istället, men när man väl skrivit några templates så får man in tänket. Jag har använt Angular inom js-världen innan och det finns både för och nackdelar. Den största skillnaden är att vi renderar vyerna på serversidan istället för clienten, vilket lämpar sig bra för vår statiska me-sida. Dock tror jag det hade varit en nackdel om vi hade skapat mer dynamiska sidor där vyerna kommer ändras mycket. En fördel jag märkte snabbt var att det tog väldigt kort tid att komma igång. Man kan få upp en fungerande sida väldigt snabbt vilket inte riktigt är sant med angular som behöver lite preparation.

**Berätta om din katalogstruktur och hur du organiserade din kod, hur tänkte du?**

Jag strukturerade upp koden på ett sätt jag själv gillar och förstår. Jag har en basfil (app.js) där jag hanterar vilka routes som ska finnas, middleware samt startar servern. Sedan har jag delat upp specifika kategorier i enskilda folders. Content för markdownfiler samt folders för routes och views. Denna struktur gör det lätt att hitta vad man letar efter samt ger projektet en bättre överblick. Denna struktur kan dock komma att ändras senare, beroende på hur enhetstestningen kommer fungera.

**Använde du någon form av scaffolding som Express erbjuder?**

Nej det gjorde jag inte. Jag tittade istället på mos struktur på github samt express hemsida för att fatta mig en egen uppfattning om hur ett projekt ska struktureras. Jag tyckte jag lyckades hyfsat bra!

**Jobbar du med Markdown för innehållet, eller annat liknande?**

Jag använder markdown-it för att kunna inkludera markdown i mina vyer. Det är väldigt smidigt, speciellt nu när jag skriver min redovisning. Dock kan jag tycka att det är överdrivet att använda markdown i vissa sammanhang, som till exempel viss text på startsidan. Jag är bekväm med att använda markdown på routes med stora textstycken, annars tycker jag vanlig html funkar väl.

# KMOM02
**Har du jobbat med Docker eller andra virtualiseringstekniker innan?**

Jag har jobbat med virtualbox och vagrant innan. Det var dock inte jag som satte upp det så man kan i princip säga att jag är helt ny till denna sortens teknik. Jag har länge förstått vad man använder virtualisering till inom webbutveckling men jag har inte använt tekniken på ett meningsfullt sätt. Det ska bli spännande att integrera docker med enhetstestning senare i kursmomenten.

**Hur ser du på möjligheterna att använda dig av Docker för att jobba med tester av ditt repo?**

När man väl fått igång docker så är det väldigt smidigt. Det känns som att docker kommer göra det mycket lättare att enhetstesta sin kod under olika konfigurationer och versioner jämfört med tidigare då man i princip endast testat sin kod på de versionerna av programvaran man hade installerad.

**Gick allt smidigt eller stötte du på problem?**

Det verkar som att jag stötte på mer problem än majoriteten av kursdeltagarna. Eftersom att jag satt på Windows 10 Home så såg jag att man kunde använda Docker-toolbox. Jag installerade det och försökte starta men inget gick rätt till. Toolbox verkade inte gilla att jag hade olika sökvägar på specifika program (Git) då jag har flera diskar. Därför blev det till att skaffa Edu versionen av Windows 10 från BTH och uppgradera. Då kunde jag installera vanliga versionen av Docker.  

Installationen gick felfri men jag stötte på problem åter igen när jag skulle bocka i vilka diskar jag ville dela med Docker. Docker behövde mitt lokala Windows konto användarnamn och lösenord. Jag har dock inget lösenord på mitt konto eftersom att jag vill att min dator ska ha snabb uppstart utan hinder. Gissa vad Docker krävde att jag skulle lägga till? ¯\\_(ツ)_/¯

När jag väl kom igång med Docker så fick jag problem med att sätta upp en container som delade filer med en lokal folder. Det var --volume flaggan som krånglade. Efter felsökande kom jag på att jag inte fick sitta i cygwin eller git bashen. Det var bäst att använda windows powershell märkte jag. Git bash och cygwin la till ett sorts prefix på sökvägarna som förhindrade containern att hitta rätt.

När jag väl kommit över hindret med att installera och få upp en container så gick det mycket smidigare. Det tog lite tid att komma på vad yml filen behövde när det kom till att sätta upp node, det var dock inget man blev frustrerad över. Nu när man är klar så verkar Docker vara väldigt smidigt. Containers går upp och ner väldigt snabbt och det ska bli spännande att enhetstesta i nästa kmom!

**Skapade du din egen image, berätta om den?**

Nej det gjorde jag ej. Det känns inte som att jag behöver en egen image just nu. Dock skulle det nog behövas senare vid enhetstestning. Det är något man får kolla på efter hand känner jag.

# KMOM03

**Berätta vilka tekniker/verktyg du valde för enhetstester och kodtäckning och varför?**

Till redovisningssidan samt serversidan till appen så använder jag Mocha för enhetstestning och Istanbul till kodtäckning. För att kunna testa http requests så använder jag supertest.  

Min klient använder Angular och filerna är genererade genom Angulars egna CLI. Därför packas Jasmin och Istanbul med och kofigureras upp automatiskt vilket är anledningen till att jag inte använde Mocha till klienten.

**Berätta om cin CI-kedja och reflektera över de valen du gjorde?**

Till min redovisningssida så testade jag på de flesta verktygen och la till en badge i readme'n. Jag gillade vissa och tyckte vissa var överflödiga. Jag har valt att använda Travis CI för att vara säker på att varje commit byggs korrekt, Scrutinizer för kodkvalite och Coveralls för kodtäckning. Dessa verktygen i kombination med varandra tycker jag ger en hjälpsam uppfattning om projektets kvalitet samt hur man kan förbättra det. Man kan såklart göra en CI kjedja med fler verktyg som täcker samma sak bara för att vara säker, men jag tycker inte det är nödvändigt. Största anledningen till att jag valde verktygen var framför allt utseendet.

**Reflektera över hur det gick att integrera enhetstesterna i olika Docker-kontainerns och om du ser någon nytta med detta.**

Jag ser helt klart nytta med att kunna enhetstesta i dockercontainers, dock vet jag inte om vi kommer få någon stor nytta av det i den här kursen. Dock är jag väldigt glad över att ha fått konfigurera upp Docker, det var väldigt nyttigt. Det tar sin tid, men när allt väl fungerar så är det smidigt att dra upp containers. Att integrera enhetstester var en utmaning för man måste tänka på ett annat sätt. Först måste man skriva dockerfilen där man måste tänka till vad containern behöver, vilka commands som ska köras etc. Angular använder Jasmin för att enhetstesta som i sin tur använder en webbläsare för att displaya resultatet. Därför behövs en headless browser i containern för att testerna ska gå igenom. Det var en del trial & error vilket var frustrerande men jag fick det att fungera till slut.

**Hur väl lyckades du utvärdera TDD-konceptet och vilka är dina reflektioner?**

Jag har använt TDD i andra kurser innan så jag är väl medveten om fördelarna med det. Främst så ser jag det som ett bra sätt att inte glömma bort att enhetstesta. Det är lätt att springa ifrån med kodandet och sen skita i att testa koden. Dock måste jag ändå säga att jag inte är en stor fan av TDD. Det tar alldeles för lång tid att hålla på att gå fram och tillbaks till att skriva kod och tester och det kan i de flesta fallen också vara väldigt tråkigt. Jag förstår dock nyttan med det och ska försöka hålla uppe min kodtäckning så gott jag kan under kursen.

**Berätta om tankarna kring din klient/server applikation och nämn de tekniker du använder.**

Jag har för tillfället ej kommit på något speciellt jag vill göra med min applikation, så jag har bara konfigurerat upp en placeholder server och klient så att jag lätt kan börja arbeta senare när jag kommit på en ide att slutföra. Klienten använder som sagt Angular och servern använder express. Angular använder Typescript, ett superset till javascript och på stylesidan så används LESS. CI kjedjan är uppgjord av Travis CI, Scrutinizer CI samt Coveralls. Servern är tänkt att fungera som ett REST API och använda mongoDB i framtiden. Detta är dock inte riktigt implementerat än.

# KMOM04

**Är du ny på realtidsprogrammering eller har du gjort liknande tidigare?**

Har gjort liknande i en annan javascriptkurs där vi också gjorde en chatt med server och klient liknande den man gjorde på redovisningssidan. Har arbetat väldigt lite med sockets i python också för att kunna skicka information mellan två användare. Annars har det varit väldigt lite realtidsprogrammering för min del.

**Hur gick det att jobba med konceptet realtidsprogrammering i webben, några reflektioner?**

Generellt så gick det bra när jag implementerade koden till båda chatterna. Konceptet med realtid och async är jag van vid då jag jobbat med det tidigare inom angular. Att veta vilka lifecycle hooks man ska använda och utnyttja kan ta sin tid i början men när man väl kommer in i det så är det inte så svårt. Det svåraste i detta kursmoment var att bestämma sig för vilket subprotokoll man skulle använda. Jag bestämde mig för json och då var man såklart tvungen att anpassa koden för json vilket tog sin lilla tid att felsöka.

Annars rullade det på fint. Jag fick lite problem med att connecta till min socket när jag använde min egen klient och server i appen och jag trodde det var ett cors-problem, det visade sig dock bara vara en bugg med ordningen jag strukturerade upp koden i. Klienten hann inte connecta till websocketen innan jag kollade socketens readystate.

**Berätta om din chatt som du integrerade i redovisa-sidan.**

Chatten på redovisningssidan är i princip samma chatt som man guidades igenom i kursmomentet. En chatt som hade möjlighet att välja subprotol beroende på vilken server man anslöt sig till. Det jag la till var naturligtvis att skriva ut nicket på användarna.

**Berätta om den realtidsfunktionalitet du väljer att integrera i din klient/server applikation.**

Jag har väldigt svårt att komma på en app att göra till projektet. Jag fortsätter med kursmomenten och implementerar något generellt sålänge som jag kan göra om och använda senare. Jag använder Angular så jag har implementerat en chatt till min app som använder json. Detta kan såklart komma att bli något helt annat än en chatt i slutändan, men just nu så anpassade jag bara koden till angular.

Som slutnotis kan jag säga att jag hade väldigt svårt att enhetstesta websockets så min coverage drogs ner till bottnen. Det hade varit kul om något exempel på enhetstestning med websockets hade kunnat tas upp senare.

# KMOM05
**Hur gick det att komma igång med databasen MongoDB?**

Gick riktigt dåligt i början. Jag kör docker på windows och jag lyckades inte få mongo att fungera. Mongo ville ej starta så det var omöjligt att använda klienten. Jag kommer inte riktigt ihåg vad jag fick för felmeddelande men jag kommer ihåg att jag inte hade tålamod nog att lösa det. Jag installerade istället elementary OS, ett linuxdistro baserat på ubuntu. KÖrde upp en docker med mongo där och allt fungerade perfekt på en gång.

Efter det gick det rätt snabbt att komma igång. Jag tyckte det var lite småbökigt att hantera datan i express med bara mongodb, men när jag la till mongoose så blev allt väldigt mycket enklare. Man skapar bara ett schema som visar hur datan ska se ut. Sen kan man lätt skapa objekt från dessa scheman som man lägger in i databasen.

**Vilken syn har du på databaser inom konceptet NoSQL?**

Då jag använder Angular så är det väldigt uppskattat att använda mongoDb och NoSQL databaser. Man jobbar oftast med objekt och json och då blir allt mycket enklare att göra i databasen. Detta gör dock inte NoSQL bättre än relationsdatabaser på alla plan. Det gäller bara att hitta rätt användningsområde för allt.

**Reflektera över skillnader och likheter mellan relationsdatabaser och databaser inom NoSQL.**

Som sagt så blir det mycket smidigare att använda NoSQL i detta syftet då man lätt bara kan stoppa in och ta ut sin data. Jag kan antingen få ut allt eller specificera exakt det jag vill ha. Det kan man såklart med relationsdatabaser också men det känns smidigare att göra det i mongodb då det ej behövs kluriga sql satser eller relationer mellan objekten. Det känns som att NoSQL är det man ska arbeta med om man kodar i JavaScript medans relationsdatabaser är enklare att arbeta med i tex PHP.

**Vilka är dina tankar om asynkron programmering med JavaScript?**

Angular använder asynkron programmering väldigt ofta. Det händer mest när man använder services för att använda get, post, put, delete etc. Man kan antingen välja att använda promises för att requesta något från servern och vara säker på att allt gått rätt till eller använda Observables där man kan subscriba till dem för att få alla ändringar som görs i ett typ av flöde. Jag använder just nu promises då jag requestar information en gång och inte mer till databasen. Det finns även lifecycle hooks i komponenter man kan använda för att få rätt på det asynkrona inom Angular, tex onCreate().

**Hur känner du för Docker och det sättet vi jobbar med tjänster i kontainrar?**

Docker har jag knappt sett någon mening med i tidigare kursmoment men nu i kmom05 har det varit väldigt användbart. Att starta upp express länkat till mongodb är väldigt smidigt och jag hade nog inte gjort på något annat sett om jag hade fått bestämma själv. Nu måste ju dock användare starta upp sina egna mongodb om de ska använda npm start, men det får dem hantera antar jag.


# KMOM06
**Reflektera över vikten av infrastruktur för moduler för ett programmeringsspråk.**

Det är väldigt viktigt att allt går snabbt och smärtfritt för ett programmeringsspråk som JavaScript. Vid större projekt är man beroende av mängder av dependencies vilket resulterar i att infrastrukturen för moduler måste hålla hög kvalite. Enkelt att installera, uppdatera och använda är måsten. Python gör detta väldigt bra till exempel. Man importerar paket som magi i Python. Npm har lyckats uppnå en väldigt simpel och förståelig struktur vilket jag tror är anledningen till att det har blivit så populärt. En bra infrastruktur lockar snabbt användare och språket växer.

**Vill du ge dig på att förklara att just npm är den tjänsten som växt snabbast av de modulerkataloger som presenteras på webbplatsen “Module Counts”?**

Jag hade sagt att det är tillgängligheten och att det är så modulärt som gör det så populärt. Det tar ett commando så är man helt plötsligt igång. Man kan smidigt välja om man ska installera globala eller lokala paket, för användare eller för utvecklare. Versioner hanteras på ett smart sätt och kan såklart ändras snabbt. Att publicera och versionshantera görs med ett commando vardera. Det går så otroligt snabbt att publicera ett paket som hela världen kan ta del av.

**Reflektera över hur arbetet gick att välja, separera, publisera och sedan åter integrera module i din applikation.**

Jag ville göra en modul som inte blev för mäktig kodmässigt. Jag valde att separera min middleware i Express som verifierar inkommande requests jwt token. Det gick snabbt att flytta ut middleware'en till en egen modul och publicera. Att åter intergrera modulen i mitt projekt gick väldigt smidigt och det var skönt att man några rader kod med paketet. Det som tog mest tid med projektet var att enhetstesta modulen noggrant. Jag har inte så bra koll på enhetstester men jag kände att jag har bättre koll nu. Jag använde Mocha och Chai som assertion bibliotek och det funkade väldigt bra.

Det största problemet var att lyckas få upp en server som kunde köra testerna automatiskt, men det lyckades jag med till slut. Att publicera modulen till npm gick på några minuter. Jag blev överraskad över hur smidigt det var!

**Sista uppgiften om att dokumentera och färdigställa redovisa-sidan, tog det mycket tid eller hade du allt klart?**

Som tur var så hade jag redan den delen klar sedan tidigare.

# Project
**Länka till ditt GitHub repo och berätta om/vilka optionella krav du gjort. Berätta också om du byggde vidare på applikationen från kursmomenten eller om du gjorde nya vägval rörande tekniker och applikation inför projektet.**

Jag skrev en artikel till Krav 6 om hur man implementerar JWT tokens och säkerställer sin applikation / REST API med Express och Angular. Den tar upp vad jwt är för något, vad de är bra till samt kodexempel som visar hur implementationen kan se ut på klienten samt backenden.

Krav 4 får bedömas av rättaren om jag har klarat eller ej. Det var inga direkta riktlinjer på hur en bra README ser ut så jag strukturerade min readme på ett sätt jag själv hade velat att en readme skulle sett ut. Jag har tydliga sektioner, requirements finns i en tabell samt är kod highlightad i kodblock.

Krav 5 har jag ej gjort, dock har jag försökt deploya mitt projekt. Jag lyckades komma halvvägs. Klienten lyckades jag builda och driftsätta på github pages. Dock är inte servern driftsatt än så klienten är rätt värdelös. Klienten hittas under paikz.github.io/scenery

Jag delade upp applikationen i backend och frontend. Till backenden kunde jag sno mycket struktur från redovisningssidan. Då backenden är ett REST API så tog jag min redovisningssida och tog bort de delar jag inte behövde, vilket i runda slängar var routes, viewengine, less och den publika foldern. Jag ville bara starta en server som tog emot request och skickade tillbaks information.

Frontenden gjorde jag dock från scratch i Angular. Det var frontend som tog mest tid i detta projekt. Att strukturera upp en applikation tog sin tid. Det var mycket att tänka på. Tittar man på requirements tabellen i README'n så är de viktigaste funktionerna listade vilket även är dem som tog upp det mesta av tiden. Det har dock varit väldigt nyttigt. Även om jag har arbetat med Angular innan så har jag tvingats få mycket bättre koll på javascript som ett språk under detta projekt.

Promises har jag arbetat med väldigt mycket i detta projekt samt async. Det är ett helt annat tänk att koda med async vilket tar sin tid att komma in i. Att till exempel requesta 10 bilder från servern, processa dessa som blobs och sedan sortera dem beroende på datumet de är skapade på var komplicerat att få rätt.

Det känns som att jag fokuserade på fel delar i detta projekt. Jag gjorde väldigt mycket funktioner och skrev mycket kod till min applikation men la bland annat unit testing och docker images på storen lite åt sidan för att hinna med så mycket som möjligt. Det känns som att kursen är mer en devops kurs än fokus på ramverken man använder vilket nu i efterhand känns tråkigt för betyget då jag inte hann med att deploya hela min applikation och skapa docker images på storen. Men men, jag har lärt mig mycket i alla fall.

**Skriv ett allmänt stycke om hur projektet gick att genomföra. Problem/lösningar/strul/enkelt/svårt/snabbt/lång tid, etc. Var projektet lätt eller svårt? Tog det lång tid? Vad var svårt och vad gick lätt? Var det ett bra och rimligt projekt för denna kursen?**

Det tog väldigt lång tid att göra projektet för mig. Devops delen stal mycket tid för att få saker som docker och CI kedjan att fungera. Att man själv kodade både frontend och backend var mäktigt, jag märkte nu i efterhand att jag tog på mig alldeles för svårt projekt. Dock är jag väldigt nöjd med vad jag åstadkommit med tiden jag lagt ner på projektet.

Det svåraste problemet jag stötte på var att lagra uppladdade filer till databasen. Jag ville kunna ladda upp egna bilder från datorn eller mobilen, inte använda url'er. Jag ville först lagra bilderna i databasen men det var för mycket strul så fick jag till en lösning där jag lagrade bilden på servern, sparade pathen i databasen och sedan fick jag skicka bilderna som blobs till klienten.

Som jag skrev innan hade jag även problem att visa bilderna och dess properties rätt. Det handlade om att jag inte kunde mappa rätt data i varje http call. Det är en dålig ide att använda for loopar tillsammans med async och promises, men en .bind() funktion räddade mig.

Att lära sig mongodb / Mongoose tog sin tid det med då man var tvungen att lära sig hur man bäst skulle strukturera sina modeller för att kunna få allt att fungera. Ett exempel på detta var att kunna följa och avfölja olika users. User-modellerna var tvungna att ha en array med User-objekt för att kunna nå deras properties. Detta gjorde att man kunde få tag på varenda post alla man följde publicerade, genom sitt eget user-objekt. Att läsa Mongoose manual rekommenderas, det gäller att ha koll på de inbyggda funktionerna.

Mycket tid har även lagts ner på responsiv design. Sidan skalar bra till olika sorters upplösningar och storlekar.

Projektet tog lång tid för mig som sagt och det var stressigt, men jag tror jag gjorde det svårt för mig själv. Jag kunde gjort ett mindre projekt och fokuserat mer på devopsdelen. Så svårighetsgraden kan jag inte direkt klaga på. Dock lärde jag mig jättemycket så nu i efterhand är jag ändå glad att jag la ner så mycket tid på det.

Projektet känns absolut rimligt för denna kurs. Det kändes som ett bra avslut på det man lärt sig.

**Avsluta med ett sista stycke med dina tankar om kursen och vad du anser om materialet och handledningen (ca 5-10 meningar). Ge feedback till lärarna och förslå eventuella förbättringsförslag till kommande kurstillfällen. Är du nöjd/missnöjd? Kommer du att rekommendera kursen till dina vänner/kollegor? På en skala 1-10, vilket betyg ger du kursen?**

Med tanke på namnet så trodde jag att större fokus skulle läggas på javascriptramverk som React, Angular, Vue etc. Dock visade det sig att det var större fokus på devops med ci kedjor, docker och unittest. Det är inget klagomål, jag bara förväntade mig annat från första början. Man har ju alltid haft friheten att göra vad man vill i princip så kursens upplägg har det inte varit något fel på. Något jag absolut ville lära mig var node och Express, och det fick jag så jag är nöjd.

Jag är dock missnöjd med att projektet hade så lite fokus på implementationen man gjorde. Man får poäng för devopsdelarna men har man gjort något coolt kodmässigt så belönas man ej. Jag störde mig även lite på hur repetivt det var att skapa 4+ github repon och sätta upp docker och CI kedjor till dem. Jag antar att det hör ihop, dock tar det tid som jag hellre hade lagt på annat.

Förutom ovanstående missnöjen så är jag sammanfattningsvis nöjd med kursen. Detta är en av dem kurserna jag lärt mig mest av under hela utbildningen och jag hade rekommenderat alla webbproggare att ta sig an denna kursen. Man tar ju sig an rollen som en team leader som ska välja tekniker och det har varit väldigt nyttigt och utmanande.

Jag ger kursen 9/10 på grund av hur mycket man faktiskt lär sig under resan.

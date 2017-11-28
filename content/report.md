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
TBA
# KMOM05
TBA
# KMOM06
TBA
# Project
TBA

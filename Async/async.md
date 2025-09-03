# Asynchronous Javascript

## Saida?
Hanesan metodo ida iha javascript ne'ebe permite code ou process ida ne'ebe presiza tempo naruk atu termina bele lao hela iha backgroudn no la presiza process ne'e hotu mak foin website bele lao.

Jadi seq quando nia program ou task ne'e finish ona nia resultado hein fo sai deit la presiza ita hein tan

Exemplo husi process sira iha browser ne'ebe presiza tempo naruk mak hansean
* Hallo HTTP request uza `fetch()`
* access user nia microphone ou camera `getUserMedia()`
* Promt User atu hili file `showOpenFilePicker()`


## EVENT LOOPs

Event loops mak core husi asynchronous programming iha javascript nia

   ### Javascript is Single Threaded Language
   Jadi javascript ne'e so bele deit halao proccess ida. Imajina deit ponte ida ne'ebe so kareta ida mak bele liu no ponte ne'e ita hanaran **Call Stack**

### Actores Prinsipal iha Javascript
1. **Call Stack**: fatin ne'ebe coce sira run, exemplo se JS run code ida nanti nia tau tia iha call stack, run tia foin hasai fali
   
2. **Web APIs**: function sira ne'ebe provide husi web broser hanesan `setTimeOut` no  `fetch` jadi nia fo ba browser mak urus no javascript continua halo buat seluk 

3. **CallBack Queue**: depois WEB API nia servisu hotu nia rai iha Call back queue. Ne'e fatin atu rai process sira ne'ebe readya atu run maibe seidauk tau iha call stack

4. **MicroTask Queue**: queue ne'ebe nia priority boot liu bahkan husi call back queue, tanba iha ne function `promises` no  `async/await` rai iha ne'ebe tanba logic ne'ebe critical husi coding ida nian sempre uza buat rua ne'e

5. **Event Loop**: Nia mak kontrola tomak process sira hanesan hare call stack mamuk ga lae, saida saida mak hein hela iha callback queue

## Promises

Check iha Promises.js

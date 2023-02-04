plate - element selector - seleziona tutti gli elementi di un determinto tipo
bento - element selector - seleziona tutti gli elementi di un determinto tipo
#fancy - id selector - seleziona un elemento con un determinato id
plate apple - descendant selector - seleziona l'elemento apple contenuti all'interno dell'elemento plate
#fancy pickle - descendant selector - seleziona l'elemento pickle all'inteerno dell'elemento con id fancy
.small - class selector - seleziona gli elementi con classe small
orange.small - seleziona gli elementi orange che hanno small come class
bento orange.small -seleziona gli elementi orange che hanno small come class e sono all'interno di bento
plate,bento - seleziona sia gli elementi plati sia quelli bento
*- * selector - seleziona tutti gli elementi della pagina
plate * - seleziona tutti gli elementi all'interno di plate
plate + apple - adjacent sibling - seleziona l'elemento apple fratello di plate immediatamente successivo a quest'ultimo
bento ~ pickle - general sibling - seleziona tutti gli elementi pickle fratelli di bento successivi a quest'ultimo
plate > apple - direct child - seleziona l'elemento apple contenuto direttamente dentro plate
orange:first-child - structural e postional pseudoclass - seleziona il primo elemento orange all'interno di un altro elemento

apple,pickle:last-child - seleziona gli ultimi elementi apple e pickle all'interno di un altro elemento
plate:nth-child(3n) - seleziona il terzo (e il sesto e il nono ecc.) elemento plate all'interno di un altro elemento
bento:first-of-type - seleziona il primo elemento di tipo bento
apple:first-of-type - seleziona il primo elemento di tipo apple 
plate:nth-child(2n) - seleziona il secondo (e il quarto il sesto ecc.) elemento plate all'interno di un altro elemento
plate:nth-child(2n+3) - seleziona il secondo elemento plate partendo dal secondo
plate:nth-of-type(2n) apple - seleziona l'elemento apple all'interno del secondo elemento di tipo plate
orange:last-of-type,apple:last-of-type - seleziona l'ultimo elemento di tipo apple e di tipo orange
bento:empty - seleziona l'elemento bento senza contenuto all'interno
apple:not(.small) - seleziona tutti gli elementi apple che non hanno small come class
[for] - seleziona tutti gli elementi con un attributo for
plate[for] - seleziona tutti gli elementi plate con attributo for
bento[for="Vitaly"] - seleziona gli elementi bento con attributo for e valore "Vitaly"
[for^="S"] - seleziona gli elementi con attributo for e valore che inizia con "S"
[for$=ato] - seleziona gli elementi con attributo for e valore che termina in "ato"
[for*="obb"] - seleziona gli elementi con attributo for e valore che contiene al suo interno "obb"
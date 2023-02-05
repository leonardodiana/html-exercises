ul li {} 0-0-2: 2 element selectors
ul > li {} 0-0-2: 2 element selectors
body > #main.mobile a:hover {} 1-2-2: 1 for the ID selector, 2 for the class selector and the psuedoclass selector, 2 for element body and a
div p > span {} 0-0-3: 3 element selectors
.users .name {} 0-2-0: 2 class selectors
[href$='.pdf'] {}0-1-0: attribute selector
:hover {}0-1-0: pseudoclass selector
div .name {} 0-1-1: class selector for name and element selector div
a[href$='.pdf'] {} 0-1-1, attribute selector and an element selector
.pictures img:hover {} 0-2-1: class selector pictures, pseudoclass, and element
.news.breaking.featured {} 0-3-0: 3 class selectors
.user #name {} 1-1-0: id selector, class selector.
#name span {} 1-0-1: id selector, element selector
nav#nav > li:hover {} 1-1-2, id selector, pseudoclass, 2 element
li:nth-child(2n+1):hover {} 0-2-1, 2 pseudoclasses, 1 element
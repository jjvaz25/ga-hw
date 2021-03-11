/**
Follow the instructions below to pratice turning JSON strings into JavaScript objects.
**/

var jsonString = '{ "title": "Uploads from everyone", "link": "https://www.flickr.com/photos/", "description": "", "modified": "2016-02-23T18:48:14Z", "generator": "https://www.flickr.com/", "items": [{ "title": "Edelweiss Air, Airbus A320-214, HB-IJU", "link": "https://www.flickr.com/photos/rs_1978/24588086024/", "media": { "m": "https://farm2.staticflickr.com/1552/24588086024_a8eb33a475_m.jpg" }, "date_taken": "2016-02-21T11:27:58-08:00", "description": " RS_1978 posted a photo: Paris-Zürich, CDG-ZRH", "published": "2016-02-23T18:48:14Z", "author": "nobody@flickr.com (RS_1978)", "author_id": "91733444@N08", "tags": "mountains schweiz aircraft berge airbus zürich ch a320 montagnes avions kloten flugzeuge olympusem5ii" }, { "title": "029.jpg", "link": "https://www.flickr.com/photos/jankcan/24591927533/", "media": { "m": "https://farm2.staticflickr.com/1661/24591927533_f094271284_m.jpg" }, "date_taken": "2016-02-23T12:47:45-08:00", "description": " KayCantrell posted a photo: ", "published": "2016-02-23T18:48:14Z", "author": "nobody@flickr.com (KayCantrell)", "author_id": "97464899@N02", "tags": "" }, { "title": "Ambassador South", "link": "https://www.flickr.com/photos/135809419@N03/24591927613/", "media": { "m": "https://farm2.staticflickr.com/1562/24591927613_36a4ca782f_m.jpg" }, "date_taken": "2015-10-12T10:04:25-08:00", "description": " tgoilservices posted a photo: ", "published": "2016-02-23T18:48:15Z", "author": "nobody@flickr.com (tgoilservices)", "author_id": "135809419@N03", "tags": "" }, { "title": "IPCamera alarm:StavangerBy detected alarm at 2016-2-23 21:19:49", "link": "https://www.flickr.com/photos/133198303@N02/24591927753/", "media": { "m": "https://farm2.staticflickr.com/1627/24591927753_3a89b263f1_m.jpg" }, "date_taken": "2016-02-23T10:48:15-08:00", "description": " Jallis.kalli posted a photo: Your IPCamera:StavangerBy IP:10.0.1.30 detected motion alarm at 2016-2-23 21:19:49", "published": "2016-02-23T18:48:15Z", "author": "nobody@flickr.com (Jallis.kalli)", "author_id": "133198303@N02", "tags": "" }, { "title": "Torre", "link": "https://www.flickr.com/photos/heldraug/24851049089/", "media": { "m": "https://farm2.staticflickr.com/1474/24851049089_b453c161c7_m.jpg" }, "date_taken": "2015-12-29T13:03:52-08:00", "description": " Heldraug posted a photo: Torre de extracción.", "published": "2016-02-23T18:48:08Z", "author": "nobody@flickr.com (Heldraug)", "author_id": "45161691@N07", "tags": "méxico mexico mx hidalgo realdelmonte pueblomágico mineraldelmonte minaladificultad" }, { "title": "justine", "link": "https://www.flickr.com/photos/136014283@N07/24851050899/", "media": { "m": "https://farm2.staticflickr.com/1473/24851050899_51292b08f7_m.jpg" }, "date_taken": "2016-02-23T10:48:15-08:00", "description": " civinelli20011 posted a photo: ", "published": "2016-02-23T18:48:15Z", "author": "nobody@flickr.com (civinelli20011)", "author_id": "136014283@N07", "tags": "" }, { "title": "DSCN2787", "link": "https://www.flickr.com/photos/50745053@N03/24923135500/", "media": { "m": "https://farm2.staticflickr.com/1590/24923135500_8b227b12d9_m.jpg" }, "date_taken": "2015-09-22T11:56:51-08:00", "description": " MizzieMorawez posted a photo: ", "published": "2016-02-23T18:48:12Z", "author": "nobody@flickr.com (MizzieMorawez)", "author_id": "50745053@N03", "tags": "" }, { "title": "Intento de Batimovil 1", "link": "https://www.flickr.com/photos/132983250@N07/25100481202/", "media": { "m": "https://farm2.staticflickr.com/1680/25100481202_02f342be1b_m.jpg" }, "date_taken": "2016-02-20T22:41:21-08:00", "description": " @deejaykat posted a photo: ", "published": "2016-02-23T18:48:09Z", "author": "nobody@flickr.com (@deejaykat)", "author_id": "132983250@N07", "tags": "" }, { "title": "20160221-DSC_4931", "link": "https://www.flickr.com/photos/124555880@N07/25125526531/", "media": { "m": "https://farm2.staticflickr.com/1683/25125526531_76082236b2_m.jpg" }, "date_taken": "2016-02-21T01:16:45-08:00", "description": " Lukasz Stecko Photography posted a photo: Wrocław", "published": "2016-02-23T18:48:08Z", "author": "nobody@flickr.com (Lukasz Stecko Photography)", "author_id": "124555880@N07", "tags": "way diamond bom wroclaw droga 2016 buddyzm diamentowa" }, { "title": "Railpage Albion Camera #3 Rail Movement Detection", "link": "https://www.flickr.com/photos/kubcam3/25125526981/", "media": { "m": "https://farm2.staticflickr.com/1610/25125526981_5daf95d808_m.jpg" }, "date_taken": "2016-02-24T05:48:10-08:00", "description": " Railpage Albion Railcam 3 posted a photo: Total axel count.... Please view the camera:http://10.10.19.4:80/index.html", "published": "2016-02-23T18:48:10Z", "author": "nobody@flickr.com (Railpage Albion Railcam 3)", "author_id": "137412266@N06", "tags": "australia melbourne railways albion railcam railpage nodekub" }, { "title": "barcellona", "link": "https://www.flickr.com/photos/115536615@N04/25125527901/", "media": { "m": "https://farm2.staticflickr.com/1660/25125527901_d33085b9fc_m.jpg" }, "date_taken": "2016-02-13T14:22:50-08:00", "description": " alfio68 posted a photo: ", "published": "2016-02-23T18:48:13Z", "author": "nobody@flickr.com (alfio68)", "author_id": "115536615@N04", "tags": "" }, { "title": "Nicola enjoying Tenby", "link": "https://www.flickr.com/photos/105987794@N04/25192452966/", "media": { "m": "https://farm2.staticflickr.com/1633/25192452966_c5dd907b61_m.jpg" }, "date_taken": "2016-02-23T10:48:11-08:00", "description": " thomas whitehouse posted a photo: via Instagram ift.tt/1OsTmYD", "published": "2016-02-23T18:48:11Z", "author": "nobody@flickr.com (thomas whitehouse)", "author_id": "105987794@N04", "tags": "instagram ifttt" }, { "title": "", "link": "https://www.flickr.com/photos/mark_firley/25192453006/", "media": { "m": "https://farm2.staticflickr.com/1720/25192453006_ab9ebc8245_m.jpg" }, "date_taken": "2015-07-29T12:51:27-08:00", "description": " Mark Firley posted a photo: ", "published": "2016-02-23T18:48:11Z", "author": "nobody@flickr.com (Mark Firley)", "author_id": "78613975@N06", "tags": "" }, { "title": "Classic Sofa Designs", "link": "https://www.flickr.com/photos/121356883@N02/25192453956/", "media": { "m": "https://farm2.staticflickr.com/1669/25192453956_8320ce6a79_m.jpg" }, "date_taken": "2016-02-23T10:48:15-08:00", "description": " spacitylife posted a photo: via SpacityLife.com ift.tt/20Tj8fA spacitylife.com", "published": "2016-02-23T18:48:15Z", "author": "nobody@flickr.com (spacitylife)", "author_id": "121356883@N02", "tags": "classic sofa designs" }, { "title": "starr-130702-5482-Macaranga_tanarius-flowers_and_leaves-Kealia_Pond-Maui", "link": "https://www.flickr.com/photos/starr-environmental/25218735885/", "media": { "m": "https://farm2.staticflickr.com/1442/25218735885_2532145bfc_m.jpg" }, "date_taken": "2013-07-02T11:49:57-08:00", "description": " Starr Environmental posted a photo: Macaranga tanarius (Parasol leaf tree) Flowers and leaves at Kealia Pond, Maui, Hawaii. July 02, 2013 #130702-5482 - Image Use Policy", "published": "2016-02-23T18:48:07Z", "author": "nobody@flickr.com (Starr Environmental)", "author_id": "97499887@N06", "tags": "macarangatanarius" }, { "title": "P1070948.jpg", "link": "https://www.flickr.com/photos/tinkeringschool/25218735915/", "media": { "m": "https://farm2.staticflickr.com/1605/25218735915_898b6ce543_m.jpg" }, "date_taken": "2016-02-19T10:31:01-08:00", "description": " tinkeringschool posted a photo: ", "published": "2016-02-23T18:48:07Z", "author": "nobody@flickr.com (tinkeringschool)", "author_id": "95914042@N03", "tags": "aquarium tinkeringschool februarybreak breakcamp ages614 1960bryantst breakcamp2016" }, { "title": "IMG_3525", "link": "https://www.flickr.com/photos/94117823@N05/25218736135/", "media": { "m": "https://farm2.staticflickr.com/1482/25218736135_271493bf24_m.jpg" }, "date_taken": "2015-10-19T18:35:29-08:00", "description": " ahmetozkan05 posted a photo: ", "published": "2016-02-23T18:48:08Z", "author": "nobody@flickr.com (ahmetozkan05)", "author_id": "94117823@N05", "tags": "" }, { "title": "#25expressionchallenge #comics #comicart", "link": "https://www.flickr.com/photos/twilightstation/25218736415/", "media": { "m": "https://farm2.staticflickr.com/1714/25218736415_41fce09aec_m.jpg" }, "date_taken": "2016-02-23T13:48:09-08:00", "description": " Mightywombat posted a photo: ", "published": "2016-02-23T18:48:09Z", "author": "nobody@flickr.com (Mightywombat)", "author_id": "40795280@N00", "tags": "square squareformat iphoneography instagramapp uploaded:by=instagram" }, { "title": "ND2_4921.jpg", "link": "https://www.flickr.com/photos/dontliketobebored/25218736925/", "media": { "m": "https://farm2.staticflickr.com/1693/25218736925_b831dab3a8_m.jpg" }, "date_taken": "2016-02-23T13:42:03-08:00", "published": "2016-02-23T18:48:11Z", "author": "nobody@flickr.com (Dont like to be Bored)", "author_id": "25084319@N07", "tags": "fun nikon lego d700 nickspicsphotography sigma35mmdgf14art" }, { "title": "FragileCreatures_0007", "link": "https://www.flickr.com/photos/peter_williams/25218737415/", "media": { "m": "https://farm2.staticflickr.com/1466/25218737415_d672892f81_m.jpg" }, "date_taken": "2016-02-19T21:52:24-08:00", "published": "2016-02-23T18:48:13Z", "author": "nobody@flickr.com (Peter-Williams)", "author_id": "16700347@N08", "tags": "uk music studio sussex concert brighton spectrum gig performance band dome singer songwriter fragilecreatures" }]}';
/*
1. Convert the string `jsonString` to a Javascript Object and store it in a variable
called `flickerObj`
*/

let flickerObj = JSON.parse(jsonString);
console.log(flickerObj);


/*
2. Iterate (this means 'use a loop') and do a console.log of each of the item titles
with the date the photo was taken. The first console.log should return the following:
"Edelweiss Air, Airbus A320-214, HB-IJU 2016-02-21T11:27:58-08:00"
*/

let jsonItems = flickerObj.items;

for (let i = 0; i < jsonItems.length; i++) {
    console.log(jsonItems[i].title, jsonItems[i].date_taken);
};

/*
3. Create a new array called 'links'. Iterate through the items array in flickerObj and store the the links to each item in the 'links' array.
*/

let links = [];

for (let i = 0; i <= jsonItems.length; i++) {
    links.push(jsonItems[i].link);
};



/*
4. Convert the 'links' array into a JSON string. Do a console.log of that JSON string, copy the results from the terminal and paste them into the input box at http://jsonlint.com/
Did it create a valid JSON string?
*/

console.log(JSON.stringify(links[i]));


// Hi Kyle, I keep getting the following error and I'm not sure what I need to change:

/*
let links = [];

for (let i = 0; i <= jsonItems.length; i++) {
    links.push(jsonItems[i].link);
};
VM1419:4 Uncaught TypeError: Cannot read property 'link' of undefined
    at <anonymous>:4:29
(anonymous) @ VM1419:4

console.log(JSON.stringify(links[i]));
VM1424:2 Uncaught ReferenceError: i is not defined
    at <anonymous>:2:34
(anonymous) @ VM1424:2
*/
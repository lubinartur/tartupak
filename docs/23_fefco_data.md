# FEFCO Catalog Data

## Overview

Standard international FEFCO codes developed by the European Federation of Corrugated Board Manufacturers.
Codes are language-independent and universally recognized in the packaging industry.

Total: 147 codes across 6 series.

Illustration source: SVG line-art drawings per code.
Each drawing shows the unfolded box diagram with dimension labels (H, W, L, FRONT, BACK, LEFT, RIGHT, FLAP).

---

## Data Schema

Each FEFCO entry:

| Field | Type | Description |
|---|---|---|
| `code` | string | 4-digit FEFCO code e.g. "0201" |
| `series` | string | Series number e.g. "02" |
| `name` | object | ET / EN / RU |
| `description` | object | ET / EN / RU |
| `use_cases` | array | 2–4 typical applications |
| `illustration` | string | Path to SVG file |
| `faq` | array | 2–3 Q&A pairs |

---

## Series 02 — Slotted Boxes

Most common packaging type. Manufactured from a single piece of board, glued, stitched or taped at the manufacturer's joint.

### 0200
**EN:** Slotted container — basic variant
**ET:** Pilukonteiner — põhivariant
**RU:** Ящик с прорезями — базовый вариант
Use cases: general shipping, warehousing

### 0201
**EN:** Regular slotted container (RSC) / American box
**ET:** Tavaline pilukonteiner (RSC) / Ameerika kast
**RU:** Стандартный ящик с прорезями (RSC) / Американский ящик
Description EN: The most widely used packaging format in the world. Top and bottom flaps meet in the center when closed. Simple, cost-effective, ideal for most shipping needs.
Use cases: general logistics, e-commerce, warehousing, food industry

### 0202
**EN:** Slotted container — top flaps unequal
**ET:** Pilukonteiner — ülemised klapid ebavõrdsed
**RU:** Ящик с прорезями — неравные верхние клапаны
Use cases: products requiring extra top protection, industrial goods

### 0203
**EN:** Fully overlapping slotted container (FOL)
**ET:** Täielikult kattuva pilukonteiner
**RU:** Ящик с полностью перекрывающимися клапанами
Description EN: Outer flaps fully overlap, providing extra edge protection and stacking strength. Excellent for heavy goods.
Use cases: heavy goods, industrial transport, stacking applications

### 0204
**EN:** Slotted container — extended top
**ET:** Pilukonteiner — pikendatud ülaosa
**RU:** Ящик с прорезями — удлинённый верх
Use cases: tall products, display packaging

### 0205
**EN:** Slotted container — single flap
**ET:** Pilukonteiner — ühe klapiga
**RU:** Ящик с прорезями — один клапан
Use cases: trays, shallow packaging

### 0206
**EN:** Slotted container — with partition
**ET:** Pilukonteiner — vaheseinaga
**RU:** Ящик с прорезями — с перегородкой
Use cases: multi-product packaging, bottles, glass

### 0207
**EN:** Slotted container — double wall
**ET:** Pilukonteiner — kaheseinaline
**RU:** Ящик с прорезями — двойная стенка
Use cases: heavy industrial goods, export packaging

### 0208
**EN:** Slotted container — overlap bottom
**ET:** Pilukonteiner — kattega põhi
**RU:** Ящик с прорезями — перекрывающееся дно
Use cases: heavy products, food industry

### 0209
**EN:** Slotted container — with inner liner
**ET:** Pilukonteiner — sisevoodriga
**RU:** Ящик с прорезями — с внутренней вставкой
Use cases: fragile goods, electronics

### 0210
**EN:** Slotted container — with dust flaps
**ET:** Pilukonteiner — tolmuklappidega
**RU:** Ящик с прорезями — с пылезащитными клапанами
Use cases: food packaging, dust-sensitive products

### 0211
**EN:** Slotted container — auto bottom
**ET:** Pilukonteiner — automaatpõhjaga
**RU:** Ящик с прорезями — автоматическое дно
Use cases: retail, fast assembly lines

### 0212
**EN:** Slotted container — with handle
**ET:** Pilukonteiner — käepidemega
**RU:** Ящик с прорезями — с ручкой
Use cases: retail packaging, consumer goods

### 0214
**EN:** Slotted container — tray with lid
**ET:** Pilukonteiner — alus kaanega
**RU:** Ящик с прорезями — поднос с крышкой
Use cases: food, gifts, retail

### 0215
**EN:** Slotted container — reinforced base
**ET:** Pilukonteiner — tugevdatud põhjaga
**RU:** Ящик с прорезями — усиленное основание
Use cases: heavy products, industrial

### 0216
**EN:** Slotted container — with inner tray
**ET:** Pilukonteiner — sisealusega
**RU:** Ящик с прорезями — с внутренним поддоном
Use cases: fragile items, presentation boxes

### 0217
**EN:** Slotted container — extended base
**ET:** Pilukonteiner — pikendatud põhjaga
**RU:** Ящик с прорезями — удлинённое основание
Use cases: display packaging, retail

### 0218
**EN:** Slotted container — with vent holes
**ET:** Pilukonteiner — ventilatsiooniavadega
**RU:** Ящик с прорезями — с вентиляционными отверстиями
Use cases: fresh produce, vegetables, fruit

### 0225
**EN:** Slotted container — with corner posts
**ET:** Pilukonteiner — nurgapostidega
**RU:** Ящик с прорезями — с угловыми стойками
Use cases: heavy stacking, industrial

### 0226
**EN:** Slotted container — with integral partition
**ET:** Pilukonteiner — integreeritud vaheseinaga
**RU:** Ящик с прорезями — с встроенной перегородкой
Use cases: bottles, glass, ceramics

### 0227
**EN:** Slotted container — reinforced top and bottom
**ET:** Pilukonteiner — tugevdatud üla- ja põhjaga
**RU:** Ящик с прорезями — усиленный верх и низ
Use cases: export, heavy freight

### 0228
**EN:** Slotted container — with tray insert
**ET:** Pilukonteiner — aluse sisestusega
**RU:** Ящик с прорезями — со вставкой-поддоном
Use cases: electronics, precision parts

### 0229
**EN:** Slotted container — hinged lid
**ET:** Pilukonteiner — hingedega kaas
**RU:** Ящик с прорезями — крышка на петлях
Use cases: archive, storage, retail

### 0230
**EN:** Slotted container — with carrying handle
**ET:** Pilukonteiner — kandemisekäepidemega
**RU:** Ящик с прорезями — с переносной ручкой
Use cases: consumer goods, retail, gifts

### 0231
**EN:** Slotted container — with locking tabs
**ET:** Pilukonteiner — lukustusnuppudega
**RU:** Ящик с прорезями — с фиксирующими язычками
Use cases: retail, no-tape assembly

---

## Series 03 — Telescope Boxes

Consist of two or more separate pieces. The lid telescopes over the base.

### 0300
**EN:** Full telescope box
**ET:** Täisteleskoop-kast
**RU:** Полностью телескопический ящик
Description EN: Consists of separate top and bottom parts that fit over each other. Provides excellent protection for the product.
Use cases: electronics, gifts, premium products

### 0301
**EN:** Telescope box — partial overlap
**ET:** Teleskoop-kast — osaline kattumine
**RU:** Телескопический ящик — частичное перекрытие
Use cases: retail, books, flat products

### 0302
**EN:** Telescope box — with inner frame
**ET:** Teleskoop-kast — sisseraamiga
**RU:** Телескопический ящик — с внутренней рамой
Use cases: electronics, fragile goods

### 0303
**EN:** Telescope tray and lid
**ET:** Teleskoop-alus ja kaas
**RU:** Телескопический поддон с крышкой
Use cases: food, gifts, presentation

### 0304
**EN:** Telescope box — deep lid
**ET:** Teleskoop-kast — sügav kaas
**RU:** Телескопический ящик — глубокая крышка
Use cases: tall products, industrial components

### 0306
**EN:** Telescope box — reinforced corners
**ET:** Teleskoop-kast — tugevdatud nurgad
**RU:** Телескопический ящик — усиленные углы
Use cases: heavy goods, industrial

### 0307
**EN:** Telescope box — with dividers
**ET:** Teleskoop-kast — jagajatega
**RU:** Телескопический ящик — с разделителями
Use cases: bottles, glass, multi-unit

### 0308
**EN:** Telescope box — self-locking
**ET:** Teleskoop-kast — isesulguv
**RU:** Телескопический ящик — самозакрывающийся
Use cases: retail, no-tape, fast packing

### 0309
**EN:** Telescope box — with handle
**ET:** Teleskoop-kast — käepidemega
**RU:** Телескопический ящик — с ручкой
Use cases: consumer goods, gifts

### 0310
**EN:** Telescope box — with foam insert
**ET:** Teleskoop-kast — vahtsisestusega
**RU:** Телескопический ящик — с вставкой из пенопласта
Use cases: precision parts, electronics, medical

### 0312
**EN:** Telescope box — with display window
**ET:** Teleskoop-kast — näidikuaknaga
**RU:** Телескопический ящик — с витринным окном
Use cases: retail display, consumer products

### 0313
**EN:** Telescope box — with tray
**ET:** Teleskoop-kast — alusega
**RU:** Телескопический ящик — с поддоном
Use cases: food, electronics, gifts

### 0314
**EN:** Telescope box — extended base
**ET:** Teleskoop-kast — pikendatud põhjaga
**RU:** Телескопический ящик — удлинённое основание
Use cases: flat products, books, prints

### 0320
**EN:** Telescope sleeve
**ET:** Teleskoop-ümbris
**RU:** Телескопическая гильза
Use cases: retail sleeves, product branding

### 0321
**EN:** Telescope sleeve — with base tray
**ET:** Teleskoop-ümbris — alusalusega
**RU:** Телескопическая гильза — с нижним поддоном
Use cases: premium packaging, gifts

### 0322
**EN:** Telescope sleeve — double wall
**ET:** Teleskoop-ümbris — kaheseinaline
**RU:** Телескопическая гильза — двойная стенка
Use cases: heavy goods, export

### 0323
**EN:** Telescope sleeve — with inner tray
**ET:** Teleskoop-ümbris — sisealusega
**RU:** Телескопическая гильза — с внутренним поддоном
Use cases: electronics, premium retail

### 0325
**EN:** Telescope box — with partition system
**ET:** Teleskoop-kast — vaheseinasüsteemiga
**RU:** Телескопический ящик — с системой перегородок
Use cases: multi-unit, bottles, glass

### 0330
**EN:** Telescope tray — full depth
**ET:** Teleskoop-alus — täissügavus
**RU:** Телескопический поддон — полная глубина
Use cases: bulk goods, industrial

### 0331
**EN:** Telescope tray — half depth
**ET:** Teleskoop-alus — poole sügavusega
**RU:** Телескопический поддон — половинная глубина
Use cases: display, retail, food

### 0350
**EN:** Telescope box — with locking system
**ET:** Teleskoop-kast — lukustussüsteemiga
**RU:** Телескопический ящик — с системой блокировки
Use cases: secure shipping, high-value goods

### 0351
**EN:** Telescope box — with top handle
**ET:** Teleskoop-kast — ülemise käepidemega
**RU:** Телескопический ящик — с верхней ручкой
Use cases: consumer goods, retail

### 0352
**EN:** Telescope box — with base reinforcement
**ET:** Teleskoop-kast — põhja tugevdusega
**RU:** Телескопический ящик — с усилением основания
Use cases: heavy products, industrial

---

## Series 04 — Folder Boxes

Manufactured from a single piece of board. The base panel forms the bottom and sides fold up.

### 0400
**EN:** Folder — basic tray
**ET:** Kaust — põhialus
**RU:** Папка — базовый поддон
Use cases: trays, food packaging, retail

### 0401
**EN:** Folder — with side walls
**ET:** Kaust — külgseintega
**RU:** Папка — с боковыми стенками
Use cases: flat goods, books, prints

### 0402
**EN:** Folder — with corner locks
**ET:** Kaust — nurga lukustusega
**RU:** Папка — с угловыми замками
Use cases: retail, no-glue assembly

### 0403
**EN:** Folder — deep tray
**ET:** Kaust — sügav alus
**RU:** Папка — глубокий поддон
Use cases: food, fresh produce, industrial

### 0404
**EN:** Folder — with cover flap
**ET:** Kaust — kattelapiga
**RU:** Папка — с откидным клапаном
Use cases: archive, documents, retail

### 0405
**EN:** Folder — with inner partition
**ET:** Kaust — sisevaheseinaga
**RU:** Папка — с внутренней перегородкой
Use cases: multi-product, bottles

### 0409
**EN:** Folder — with reinforced base
**ET:** Kaust — tugevdatud põhjaga
**RU:** Папка — с усиленным основанием
Use cases: heavy goods, industrial

### 0410
**EN:** Folder — with display front
**ET:** Kaust — näidiku esipaneelega
**RU:** Папка — с витринной передней панелью
Use cases: retail display, POS

### 0411
**EN:** Folder — with handle
**ET:** Kaust — käepidemega
**RU:** Папка — с ручкой
Use cases: consumer goods, gifts, retail

### 0412
**EN:** Folder — with lid
**ET:** Kaust — kaanega
**RU:** Папка — с крышкой
Use cases: food, gifts, presentation

### 0413
**EN:** Folder — with auto-lock bottom
**ET:** Kaust — automaatlukustusega põhjaga
**RU:** Папка — с автоматически фиксируемым дном
Use cases: fast assembly, retail, e-commerce

### 0415
**EN:** Folder — shoulder box
**ET:** Kaust — õlakast
**RU:** Папка — коробка с буртиком
Use cases: premium packaging, gifts, cosmetics

### 0416
**EN:** Folder — with window
**ET:** Kaust — aknaga
**RU:** Папка — с окном
Use cases: food display, retail, bakery

### 0421
**EN:** Die-cut folder
**ET:** Stantsitud kaust
**RU:** Высечная папка
Description EN: Precision die-cut design for sleek retail-ready presentation. No tape or glue required for assembly.
Use cases: retail packaging, gifts, cosmetics, electronics

### 0422
**EN:** Folder — crash lock bottom
**ET:** Kaust — kiirlukkuv põhi
**RU:** Папка — быстрозакрывающееся дно
Use cases: fast packing, e-commerce, retail

### 0423
**EN:** Folder — with inner sleeve
**ET:** Kaust — sisehülsiga
**RU:** Папка — с внутренней гильзой
Use cases: premium products, electronics

### 0424
**EN:** Folder — book style
**ET:** Kaust — raamatustiil
**RU:** Папка — в стиле книги
Use cases: books, prints, documents, gifts

### 0425
**EN:** Folder — with tuck flap
**ET:** Kaust — sisestuslapiga
**RU:** Папка — с вкладным клапаном
Use cases: retail, food, consumer goods

### 0426
**EN:** Folder — with double base
**ET:** Kaust — topeltpõhjaga
**RU:** Папка — с двойным дном
Use cases: heavy goods, industrial

### 0427
**EN:** Folder-type box
**ET:** Kaustatüüpi kast
**RU:** Коробка папочного типа
Description EN: A self-locking box that requires no tape for assembly. Perfect for premium presentation and fast packing lines.
Use cases: subscription boxes, product presentation, high-end shipping, retail

### 0428
**EN:** Folder — with integrated handle
**ET:** Kaust — integreeritud käepidemega
**RU:** Папка — со встроенной ручкой
Use cases: consumer goods, retail, takeaway

### 0429
**EN:** Folder — with locking top
**ET:** Kaust — lukukatusega
**RU:** Папка — с фиксирующейся крышкой
Use cases: retail, food, consumer products

### 0430
**EN:** Folder — with partition and lid
**ET:** Kaust — vaheseinaga ja kaanega
**RU:** Папка — с перегородкой и крышкой
Use cases: bottles, glass, multi-unit gifts

### 0431
**EN:** Folder — with display window and lid
**ET:** Kaust — näidikuakna ja kaanega
**RU:** Папка — с витринным окном и крышкой
Use cases: retail display, food, cosmetics

### 0432
**EN:** Folder — with reinforced corners
**ET:** Kaust — tugevdatud nurkadega
**RU:** Папка — с усиленными углами
Use cases: heavy retail, export

### 0433
**EN:** Folder — with drawer
**ET:** Kaust — sahtliga
**RU:** Папка — с выдвижным ящиком
Use cases: premium gifts, cosmetics, electronics

### 0434
**EN:** Folder — with magnetic closure
**ET:** Kaust — magnetpinnasega
**RU:** Папка — с магнитной застёжкой
Use cases: luxury packaging, premium gifts

### 0435
**EN:** Folder — hexagonal
**ET:** Kaust — kuusnurkne
**RU:** Папка — шестиугольная
Use cases: specialty retail, gifts, food

### 0436
**EN:** Folder — octagonal
**ET:** Kaust — kaheksanurkne
**RU:** Папка — восьмиугольная
Use cases: specialty retail, gifts

### 0437
**EN:** Folder — with side handle
**ET:** Kaust — külgkäepidemega
**RU:** Папка — с боковой ручкой
Use cases: consumer goods, retail, food

### 0440
**EN:** Folder — cross-partition tray
**ET:** Kaust — ristvaheseinaga alus
**RU:** Папка — поднос с крестообразной перегородкой
Use cases: bottles, eggs, fragile goods

### 0441
**EN:** Folder — with inner cell dividers
**ET:** Kaust — sisekambritega jagajatega
**RU:** Папка — с внутренними ячеистыми разделителями
Use cases: glass, bottles, ceramics

### 0442
**EN:** Folder — with locking side panels
**ET:** Kaust — lukustuvate külgpaneelidega
**RU:** Папка — с фиксирующимися боковыми панелями
Use cases: retail, sturdy tray

### 0443
**EN:** Folder — with header card slot
**ET:** Kaust — päisekaardi pesaga
**RU:** Папка — с прорезью для заголовочной карты
Use cases: retail display, hanging packaging

### 0444
**EN:** Folder — with euro slot
**ET:** Kaust — euro pesaga
**RU:** Папка — с евро-отверстием
Use cases: retail hang packaging, hardware, accessories

### 0445
**EN:** Folder — with tear strip
**ET:** Kaust — rebimisribaga
**RU:** Папка — с отрывной полосой
Use cases: e-commerce, easy-open packaging

### 0446
**EN:** Folder — with zipper strip
**ET:** Kaust — tõmblukuribaga
**RU:** Папка — с застёжкой-молнией
Use cases: resealable packaging, food, snacks

### 0447
**EN:** Folder — with vent panels
**ET:** Kaust — ventilatsiooniavadega
**RU:** Папка — с вентиляционными панелями
Use cases: fresh produce, vegetables, fruit

### 0448
**EN:** Folder — with moisture barrier
**ET:** Kaust — niiskustõkkega
**RU:** Папка — с влагозащитным барьером
Use cases: frozen food, cold chain

### 0449
**EN:** Folder — with grease-resistant coating
**ET:** Kaust — rasvakindla kattega
**RU:** Папка — с жироустойчивым покрытием
Use cases: pizza, food delivery, bakery

### 0450
**EN:** Folder — with double lock bottom
**ET:** Kaust — topeltluku põhjaga
**RU:** Папка — с двойным замком дна
Use cases: heavy retail, industrial components

### 0451
**EN:** Folder — with self-erecting base
**ET:** Kaust — isekokkupandava alusega
**RU:** Папка — с самосборным основанием
Use cases: fast assembly, e-commerce

### 0452
**EN:** Folder — with glued base
**ET:** Kaust — liimitud põhjaga
**RU:** Папка — с клеевым дном
Use cases: retail, industrial, high volume

### 0453
**EN:** Folder — with integrated display stand
**ET:** Kaust — integreeritud näidikualusega
**RU:** Папка — со встроенной витринной подставкой
Use cases: POS display, retail

### 0454
**EN:** Folder — with perforated opening
**ET:** Kaust — perforeeritud avamisega
**RU:** Папка — с перфорированным открытием
Use cases: easy-open, food, consumer goods

### 0455
**EN:** Folder — with tray and separate lid
**ET:** Kaust — aluse ja eraldi kaanega
**RU:** Папка — с поддоном и отдельной крышкой
Use cases: gifts, premium products

### 0456
**EN:** Folder — with inner support frame
**ET:** Kaust — sisemise tugiraamiga
**RU:** Папка — с внутренней опорной рамой
Use cases: electronics, fragile goods

### 0457
**EN:** Folder — with compartments
**ET:** Kaust — sektsioneeritud
**RU:** Папка — с отсеками
Use cases: multi-product kits, tools, accessories

### 0458
**EN:** Folder — with pallet base
**ET:** Kaust — alusplaadiga
**RU:** Папка — с паллетным основанием
Use cases: bulk industrial, pallet shipping

### 0459
**EN:** Folder — with top closure strip
**ET:** Kaust — ülemise sulgemisribaga
**RU:** Папка — с верхней закрывающей полосой
Use cases: sealed shipping, food

### 0460
**EN:** Folder — with inner padding
**ET:** Kaust — sisemise polsterdusega
**RU:** Папка — с внутренней набивкой
Use cases: fragile items, electronics, gifts

### 0470
**EN:** Folder — with full-depth lid
**ET:** Kaust — täissügavuse kaanega
**RU:** Папка — с крышкой на всю глубину
Use cases: archive, documents, retail

### 0471
**EN:** Folder — with partial lid
**ET:** Kaust — osalise kaanega
**RU:** Папка — с частичной крышкой
Use cases: display packaging, food

### 0472
**EN:** Folder — with folding handle
**ET:** Kaust — kokkupandava käepidemega
**RU:** Папка — со складной ручкой
Use cases: consumer goods, gifts, retail

### 0473
**EN:** Folder — with roll-end closure
**ET:** Kaust — rullsulgemisega
**RU:** Папка — с роликовым закрытием
Use cases: postal, e-commerce, documents

### 0474
**EN:** Folder — with locking end flaps
**ET:** Kaust — lukustuvate otsaklappidega
**RU:** Папка — с фиксирующимися торцевыми клапанами
Use cases: retail, food, industrial

---

## Series 05 — Slide Boxes

Consist of an inner tray that slides into an outer sleeve.

### 0501
**EN:** Slide box — basic
**ET:** Libisev kast — põhivariant
**RU:** Выдвижная коробка — базовая
Use cases: matches, tools, hardware, accessories

### 0502
**EN:** Slide box — with inner tray
**ET:** Libisev kast — sisealusega
**RU:** Выдвижная коробка — с внутренним поддоном
Use cases: electronics, precision parts, gifts

### 0503
**EN:** Slide box — double sleeve
**ET:** Libisev kast — topelthülss
**RU:** Выдвижная коробка — двойная гильза
Use cases: premium packaging, cosmetics

### 0504
**EN:** Slide box — with handle
**ET:** Libisev kast — käepidemega
**RU:** Выдвижная коробка — с ручкой
Use cases: consumer goods, retail, gifts

### 0505
**EN:** Slide box — with partition
**ET:** Libisev kast — vaheseinaga
**RU:** Выдвижная коробка — с перегородкой
Use cases: multi-unit, glass, bottles

### 0507
**EN:** Slide box — with locking tab
**ET:** Libisev kast — lukustusnupuga
**RU:** Выдвижная коробка — с фиксирующим язычком
Use cases: retail, secure packaging

### 0509
**EN:** Slide box — with window
**ET:** Libisev kast — aknaga
**RU:** Выдвижная коробка — с окном
Use cases: retail display, food, consumer goods

### 0510
**EN:** Slide box — reinforced
**ET:** Libisev kast — tugevdatud
**RU:** Выдвижная коробка — усиленная
Use cases: heavy goods, tools, hardware

### 0511
**EN:** Slide box — with inner cushioning
**ET:** Libisev kast — sisemise polsterdusega
**RU:** Выдвижная коробка — с внутренней амортизацией
Use cases: fragile electronics, jewelry, medical

### 0512
**EN:** Slide box — with display lid
**ET:** Libisev kast — näidikukaanega
**RU:** Выдвижная коробка — с витринной крышкой
Use cases: premium retail, cosmetics, gifts

---

## Series 06 — Rigid Boxes

Rigid or set-up boxes. Pre-glued at the factory, shipped flat or assembled.

### 0601
**EN:** Rigid box — basic
**ET:** Jäik kast — põhivariant
**RU:** Жёсткая коробка — базовая
Use cases: premium gifts, electronics, cosmetics

### 0602
**EN:** Rigid box — with lid
**ET:** Jäik kast — kaanega
**RU:** Жёсткая коробка — с крышкой
Use cases: gifts, luxury packaging, premium retail

### 0603
**EN:** Rigid box — with inner tray
**ET:** Jäik kast — sisealusega
**RU:** Жёсткая коробка — с внутренним поддоном
Use cases: electronics, watches, jewelry

### 0606
**EN:** Rigid box — with sleeve
**ET:** Jäik kast — hülsiga
**RU:** Жёсткая коробка — с гильзой
Use cases: premium packaging, gifts, branding

### 0607
**EN:** Rigid box — with magnetic closure
**ET:** Jäik kast — magnetpinnasega
**RU:** Жёсткая коробка — с магнитной застёжкой
Use cases: luxury packaging, electronics, cosmetics

### 0608
**EN:** Rigid box — with ribbon closure
**ET:** Jäik kast — lindpinnasega
**RU:** Жёсткая коробка — с ленточной застёжкой
Use cases: luxury gifts, premium retail

### 0609
**EN:** Rigid box — with window
**ET:** Jäik kast — aknaga
**RU:** Жёсткая коробка — с окном
Use cases: retail display, food, cosmetics

### 0615
**EN:** Rigid box — with pull tab
**ET:** Jäik kast — tõmbevahelehtega
**RU:** Жёсткая коробка — с язычком для открывания
Use cases: electronics, software, media

### 0616
**EN:** Rigid box — with drawer
**ET:** Jäik kast — sahtliga
**RU:** Жёсткая коробка — с выдвижным ящиком
Use cases: premium gifts, jewelry, accessories

### 0620
**EN:** Rigid tray — basic
**ET:** Jäik alus — põhivariant
**RU:** Жёсткий поддон — базовый
Use cases: display, retail, food

### 0621
**EN:** Rigid tray — with partition
**ET:** Jäik alus — vaheseinaga
**RU:** Жёсткий поддон — с перегородкой
Use cases: bottles, glass, multi-product

---

## Series 07 — Interior Fitments

Inserts, partitions, pads, and interior elements used inside other packaging.

### 0700
**EN:** Flat sheet — basic liner
**ET:** Lame leht — põhivoodrileht
**RU:** Плоский лист — базовая подложка
Use cases: base liner, protective sheet

### 0701
**EN:** Single-wall divider
**ET:** Üheseinaline jagaja
**RU:** Однослойная перегородка
Use cases: bottle dividers, glass separators

### 0702
**EN:** Double-wall divider
**ET:** Kaheseinaline jagaja
**RU:** Двухслойная перегородка
Use cases: heavy goods separation, industrial

### 0711
**EN:** Ready-glued case
**ET:** Eelliimitud kast
**RU:** Предварительно склеенный ящик
Description EN: Quick assembly with pre-glued bottom. Ideal for fast-paced fulfillment lines and high-volume operations.
Use cases: e-commerce fulfillment, fast assembly lines, high volume shipping

### 0712
**EN:** Interior pad — flat
**ET:** Sisemise polstri — lame
**RU:** Внутренняя прокладка — плоская
Use cases: fragile goods protection, electronics

### 0713
**EN:** Corner pad
**ET:** Nurgapolster
**RU:** Угловая прокладка
Description EN: Corrugated corner protection pads. Prevent damage to product corners during transit.
Use cases: furniture, appliances, electronics, industrial equipment corner protection

### 0714
**EN:** Interior cell — single
**ET:** Siserakk — üksik
**RU:** Внутренняя ячейка — одиночная
Use cases: bottles, glass, individual product cells

### 0715
**EN:** Interior cell — double
**ET:** Siserakk — kahekordne
**RU:** Внутренняя ячейка — двойная
Use cases: wine, bottles, ceramics

### 0716
**EN:** Partition — cross-lock
**ET:** Vahesein — ristlukustusega
**RU:** Перегородка — с перекрёстной блокировкой
Use cases: bottles, glass, multi-unit cells

### 0717
**EN:** Partition — with base
**ET:** Vahesein — alusega
**RU:** Перегородка — с основанием
Use cases: fragile goods, multi-unit packaging

### 0718
**EN:** Angle board — corner protector
**ET:** Nurgelaud — nurgakaitsja
**RU:** Угловой профиль — угловая защита
Use cases: pallet edge protection, furniture, large format goods

### 0747
**EN:** Pallet pad — top sheet
**ET:** Alusleht — pealmiseleht
**RU:** Паллетная прокладка — верхний лист
Use cases: pallet top protection, stacking

### 0748
**EN:** Pallet pad — slip sheet
**ET:** Alusleht — libisemisleht
**RU:** Паллетная прокладка — скользящий лист
Use cases: pallet slip sheet, layer separation

### 0751
**EN:** Honeycomb pad
**ET:** Kärgpolster
**RU:** Сотовая прокладка
Use cases: fragile goods, glass, precision equipment

### 0752
**EN:** Honeycomb divider
**ET:** Kärgvahesein
**RU:** Сотовая перегородка
Use cases: glass, bottles, heavy fragile goods

### 0759
**EN:** Corrugated angle board
**ET:** Gofreeritud nurgelaud
**RU:** Гофрированный угловой профиль
Use cases: pallet and edge protection, furniture transport

### 0761
**EN:** Corrugated wrap — flat
**ET:** Gofreeritud ümbris — lame
**RU:** Гофрированная обёртка — плоская
Use cases: product wrapping, surface protection

### 0770
**EN:** Tube — round
**ET:** Toru — ümmargune
**RU:** Труба — круглая
Use cases: posters, documents, textile rolls

### 0771
**EN:** Tube — square
**ET:** Toru — ruudukujuline
**RU:** Труба — квадратная
Use cases: documents, prints, technical drawings

### 0772
**EN:** Tube — with end caps
**ET:** Toru — otsapõhjadega
**RU:** Труба — с торцевыми крышками
Use cases: posters, artwork, technical rolls

### 0773
**EN:** Tube — with locking end caps
**ET:** Toru — lukustuvate otsapõhjadega
**RU:** Труба — с фиксирующимися торцевыми крышками
Use cases: secure document transport, artwork

### 0774
**EN:** Tube — reinforced
**ET:** Toru — tugevdatud
**RU:** Труба — усиленная
Use cases: heavy rolls, industrial materials, cables

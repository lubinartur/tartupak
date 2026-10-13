import csv, sys
BASE = "https://www.tartupak.ee"
CAMPAIGNS = []

def camp(name, lang, budget, suffix, negatives, groups):
    CAMPAIGNS.append(dict(name=name, lang=lang, budget=budget, suffix=suffix, neg=negatives, groups=groups))

# ---------- Estonian ----------
camp("Search ET", "et", "3.00", "utm_source=google&utm_medium=cpc&utm_campaign=search-et",
  ["kolimiseks","kolimine","kolimiskastid","tasuta","bauhof","kasutatud","ise tegema"],
  [
   dict(name="ET Pappkastid", url="/et/products/transpordipakend", p1="pappkastid", p2="tellimus",
        kw=["pappkast","pappkastid","papp kastid","pappkarbid","papp karbid","pappkastid müük","pappkarbid müük","suured pappkastid","väikesed pappkarbid"],
        H=["Pappkastid ja lainepappkarbid","Tartupak – tootja Tartumaal","Karbid alates 1 tükist","Standardmõõdud ja eritellimus","Tootmine alates 2001. aastast","FEFCO karbitüüpide kataloog","Küsi pakkumist veebis","Trükiga pappkastid","Kuni 4-värviline fleksotrükk","Vastupidavad transpordikarbid","Kaitse kaupa transpordil","Lainepappkarbid Eestist"],
        D=["Vastupidavad lainepappkastid transpordiks ja ladustamiseks. Tellimine alates 1 tükist.",
           "Standardmõõdud või kast sinu toote järgi. Fleksotrükk kuni 4 värvi. Küsi pakkumist!",
           "Lainepappkarpide tootja Tõrvandis, Tartumaal. Tootmine alates 2001. aastast.",
           "Vali FEFCO kataloogist sobiv karbitüüp ja saada päring."]),
   dict(name="ET Pitsakarbid", url="/et/products/pizzakarbid", p1="pitsakarbid", p2="pakkumine",
        kw=["pitsakarp","pitsakarbid","pizzakarbid","pizza karbid"],
        H=["Pitsakarbid lainepapist","Pizzakarbid restoranidele","Toiduohutud pitsakarbid","Ventileeritud, rasvakindlad","Logo trükk kuni 4 värvi","Standard- ja eritellimusmõõt","Pitsakarbid kullerteenustele","Tartupak – tootja Tartumaal","Küsi pakkumist veebis","Tootmine alates 2001. aastast"],
        D=["Toiduohutud lainepapp-pitsakarbid restoranidele ja kullerteenustele. Küsi pakkumist.",
           "Ventileeritud ja rasvakindlad. Standardmõõdud või eritellimus, soovi korral logoga.",
           "Fleksotrükk kuni 4 värvis – sinu bränd karbil. Tootja Tõrvandis, Tartumaal."]),
   dict(name="ET Lainepapp ja pakend", url="/et/products/lainepapp", p1="lainepapp", p2="pakend",
        kw=["kartongpakend","lainepapp","lainepapist karbid","pakendite tootja","lainepappkarbid"],
        H=["Lainepapp ja lainepappkarbid","Ühe-, kahe- ja kolmeseinaline","Pruun või valge väliskiht","Rullpapp 1000 ja 1600 mm","Tartupak – tootja Tartumaal","Eritellimusel karbid","Stantsitud eritellimuspakend","Küsi pakkumist veebis","CAD-disain sinu tootele","Tootmine alates 2001. aastast"],
        D=["Lainepapp ühe-, kahe- ja kolmeseinalisena. Rullpapp laiusega 1000 ja 1600 mm.",
           "Valmis karbid või lainepapp toormaterjaliks. Pruun või valge väliskiht.",
           "CAD-disain ja stantsimine sinu toote mõõtude järgi. Küsi pakkumist."]),
  ])

# ---------- Russian ----------
camp("Search RU", "ru", "2.00", "utm_source=google&utm_medium=cpc&utm_campaign=search-ru",
  ["переезд","переезда","бесплатно","б/у","своими руками","макулатура"],
  [
   dict(name="RU Коробки", url="/ru/products/transpordipakend", p1="korobki", p2="zakaz",
        kw=["картонные коробки","гофрокороб","гофрокороба","коробки купить","купить коробки","коробки для упаковки","упаковка из картона","гофрокартон"],
        H=["Гофрокороба от производителя","Картонные коробки на заказ","Производство в Тырванди","Заказ от 1 штуки","Стандартные и свои размеры","Печать до 4 цветов","Каталог конструкций FEFCO","Запросите предложение","Прочные транспортные коробки","Производим с 2001 года","Коробки для перевозки","Защита груза при перевозке"],
        D=["Прочные гофрокороба для перевозки и хранения. Заказ от 1 штуки, размеры под ваш товар.",
           "Стандартные размеры или коробка под ваше изделие. Флексопечать до 4 цветов.",
           "Производитель гофроупаковки в Тырванди, Тартуский уезд. Работаем с 2001 года.",
           "Выберите конструкцию в каталоге FEFCO и отправьте запрос на расчёт."]),
   dict(name="RU Коробки для пиццы", url="/ru/products/pizzakarbid", p1="pizza", p2="korobki",
        kw=["коробки для пиццы","коробка для пиццы","пицца коробки"],
        H=["Коробки для пиццы","Гофрокороба для пиццы","Безопасные для еды","Вентиляция и жироустойчивость","Печать логотипа до 4 цветов","Стандартные и свои размеры","Для ресторанов и доставки","Запросите предложение","Производитель Tartupak"],
        D=["Коробки для пиццы из гофрокартона: безопасные для еды, вентилируемые, жироустойчивые.",
           "Для ресторанов и доставки. Стандартные размеры или под заказ, печать до 4 цветов.",
           "Производство в Тырванди, Тартуский уезд. Запросите предложение на сайте."]),
  ])

# ---------- validate ----------
errs = []
for c in CAMPAIGNS:
    for g in c["groups"]:
        for h in g["H"]:
            if len(h) > 30: errs.append(f"H>30 ({len(h)}): {h}")
        for d in g["D"]:
            if len(d) > 90: errs.append(f"D>90 ({len(d)}): {d}")
        if len(g["H"]) < 3 or len(g["D"]) < 2: errs.append(f"too few assets: {g['name']}")
        if len(g["p1"])>15 or len(g["p2"])>15: errs.append("path>15")
if errs:
    print("VALIDATION ERRORS"); [print(" ", e) for e in errs]; sys.exit(1)

cols = ["Campaign","Campaign Status","Campaign Type","EU political ads","Contains EU political advertising","Budget","Budget type","Bid Strategy Type","Networks","Languages","Final URL suffix",
        "Location","Location ID","Ad Group","Ad Group Status","Max CPC","Keyword","Criterion Type","Ad type","Final URL","Path 1","Path 2","Status"] \
       + [f"Headline {i}" for i in range(1,16)] + [f"Description {i}" for i in range(1,5)]
rows = []
def row(**kw):
    r = {c: "" for c in cols}; r.update(kw); rows.append(r)

for c in CAMPAIGNS:
    row(**{"Campaign": c["name"], "Campaign Status": "Paused", "Campaign Type": "Search", "EU political ads": "No", "Contains EU political advertising": "No", "Budget": c["budget"], "Budget type": "Daily",
           "Bid Strategy Type": "Manual CPC", "Networks": "Google search", "Languages": c["lang"], "Final URL suffix": c["suffix"]})
    row(**{"Campaign": c["name"], "Location": "Estonia", "Location ID": "2233"})
    for n in c["neg"]:
        row(**{"Campaign": c["name"], "Keyword": n, "Criterion Type": "Negative Phrase"})
    for g in c["groups"]:
        row(**{"Campaign": c["name"], "Ad Group": g["name"], "Ad Group Status": "Enabled", "Max CPC": "0.70"})
        for k in g["kw"]:
            row(**{"Campaign": c["name"], "Ad Group": g["name"], "Keyword": k, "Criterion Type": "Phrase", "Status": "Enabled"})
        ad = {"Campaign": c["name"], "Ad Group": g["name"], "Ad type": "Responsive search ad", "Final URL": BASE + g["url"],
              "Path 1": g["p1"], "Path 2": g["p2"], "Status": "Enabled"}
        for i, h in enumerate(g["H"], 1): ad[f"Headline {i}"] = h
        for i, d in enumerate(g["D"], 1): ad[f"Description {i}"] = d
        row(**ad)

with open("campaigns.csv", "w", newline="", encoding="utf-8-sig") as f:
    w = csv.DictWriter(f, fieldnames=cols); w.writeheader(); w.writerows(rows)
print("OK rows:", len(rows), "| campaigns:", len(CAMPAIGNS), "| ad groups:", sum(len(c['groups']) for c in CAMPAIGNS),
      "| keywords:", sum(len(g['kw']) for c in CAMPAIGNS for g in c['groups']))
print("longest headline:", max(len(h) for c in CAMPAIGNS for g in c['groups'] for h in g['H']),
      "| longest description:", max(len(d) for c in CAMPAIGNS for g in c['groups'] for d in g['D']))

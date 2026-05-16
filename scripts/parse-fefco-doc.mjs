import fs from "fs";

const md = fs.readFileSync("docs/23_fefco_data.md", "utf8");
const blocks = md.split(/^### /gm).slice(1);
const entries = [];

for (const block of blocks) {
  const code = block.slice(0, 4);
  if (!/^\d{4}$/.test(code)) continue;

  const getLang = (lang) => {
    const re = new RegExp(`\\*\\*${lang}:\\*\\*\\s*(.+)$`, "m");
    const m = block.match(re);
    return m ? m[1].trim() : "";
  };

  const descEnMatch = block.match(/Description EN:\s*(.+)$/m);
  const nameEn = getLang("EN");
  const nameEnShort = nameEn.split(" / ")[0].trim() || nameEn;
  const descEn =
    descEnMatch?.[1].trim() ||
    (nameEn.includes("—") ? nameEn.split("—").slice(1).join("—").trim() : "") ||
    nameEnShort;

  const useMatch = block.match(/Use cases:\s*(.+)$/im);
  const useCases = useMatch
    ? useMatch[1].split(",").map((s) => s.trim()).filter(Boolean)
    : ["General packaging", "Industrial shipping"];

  const etName = getLang("ET");
  const ruName = getLang("RU");

  entries.push({
    code,
    series: code.slice(0, 2),
    name: {
      en: nameEnShort,
      et: etName.split(" / ")[0].trim() || etName,
      ru: ruName.split(" / ")[0].trim() || ruName,
    },
    description: {
      en: descEn,
      et: etName.includes("—") ? etName.split("—").slice(1).join("—").trim() : etName || descEn,
      ru: ruName.includes("—") ? ruName.split("—").slice(1).join("—").trim() : ruName || descEn,
    },
    useCases,
  });
}

entries.sort((a, b) => a.code.localeCompare(b.code));
console.log(`Parsed ${entries.length} codes`);
fs.writeFileSync("scripts/fefco-parsed.json", JSON.stringify(entries, null, 2));

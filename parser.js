// parser.js
import fs from "fs";
import yaml from "js-yaml";

// Lee el archivo YAML
const file = fs.readFileSync("workflows/gmail.yml", "utf8");

// Convierte YAML → JSON
const data = yaml.load(file);

// Guarda el resultado en workflows/gmail.json
fs.writeFileSync("workflows/gmail.json", JSON.stringify(data, null, 2));

console.log("✅ YAML convertido a JSON en workflows/gmail.json");

const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "src");
const indexFilePath = path.join(__dirname, "index.ts");

const iconExports = [];

// Function to convert a string to UpperCamelCase
function toUpperCamelCase(str) {
    return str.replace(/([-_]\w)/g, (match) => match[1].toUpperCase()).replace(/^./, (match) => match.toUpperCase());
}

// Recursively search for SVG files in the src directory
function findSvgFiles(dir, parentDirs = []) {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            findSvgFiles(filePath, [...parentDirs, file]);
        } else if (path.extname(file) === ".svg") {
            const iconName = path.basename(file, ".svg");
            const upperCamelCaseIconName = toUpperCamelCase(iconName);
            const prefixParts = parentDirs.map(f => f === "fontawesome" ? "fa" : f).map(toUpperCamelCase);
            const prefixedIconName = prefixParts.join("") + upperCamelCaseIconName;
            const relativePath = path.relative(path.dirname(indexFilePath), filePath);
            const exportStatement = `export { default as ${prefixedIconName} } from './${relativePath.replace(/\\/g, "/")}';`;
            iconExports.push(exportStatement);

            normalizeSvg(filePath);
        }
    });
}

function normalizeSvg(file) {
    const svgContent = fs.readFileSync(file, "utf8");

    if (svgContent.includes("fill=")) {
        const updatedSvgContent = svgContent.replace(/fill="[^"]*"/g, "fill=\"currentColor\"");
        if (updatedSvgContent !== svgContent) {
            fs.writeFileSync(file, updatedSvgContent, "utf8");
        }
    } else {
        const updatedSvgContent = svgContent.replace(/<svg/g, "<svg fill=\"currentColor\"");
        if (updatedSvgContent !== svgContent) {
            fs.writeFileSync(file, updatedSvgContent, "utf8");
        }
    }
}

// Find all SVG files and generate export statements
findSvgFiles(srcDir);

// Generate the index.ts file content
const indexFileContent = iconExports.join("\n");

// Write the index.ts file (overwrite the contents)
fs.writeFileSync(indexFilePath, indexFileContent);

console.log("index.ts file generated successfully!");

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import * as sass from "sass";

const input = "src/scss/dashboard.scss";
const output = "dist/dashboard.css";

const result = sass.compile(input, {
	loadPaths: ["node_modules"],
	style: "expanded",
	quietDeps: true,
	silenceDeprecations: [
		"import",
		"if-function",
		"global-builtin",
		"color-functions"
	]
});

mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, result.css);

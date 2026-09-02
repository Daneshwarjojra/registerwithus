import fs from "fs";
import path from "path";

const root = path.resolve("components");

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function adaptSource(source) {
  let next = source;

  next = next.replace(
    /import ['"]bootstrap\/dist\/css\/bootstrap\.min\.css['"];?\n?/g,
    ""
  );
  next = next.replace(
    /import ['"]bootstrap\/dist\/js\/bootstrap\.bundle\.min\.js['"];?\n?/g,
    ""
  );
  next = next.replace(
    /import ['"]@fortawesome\/fontawesome-free\/css\/all\.min\.css['"];?\n?/g,
    ""
  );

  next = next.replace(
    /from ['"]\.\.\/\.\.\/utils\/api(?:\.js)?['"]/g,
    'from "@/lib/api"'
  );
  next = next.replace(
    /from ['"]\.\.\/utils\/api(?:\.js)?['"]/g,
    'from "@/lib/api"'
  );

  next = next.replace(
    /src=["']img\//g,
    'src="/img/'
  );
  next = next.replace(
    /src=\{`img\//g,
    "src={`/img/"
  );

  const routerMatch = next.match(
    /import\s+\{([^}]+)\}\s+from\s+['"]react-router-dom['"];?\n?/
  );
  if (routerMatch) {
    const names = routerMatch[1]
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean);
    const lines = [];
    if (names.includes("Link")) {
      lines.push('import Link from "next/link";');
    }
    const navHooks = names.filter((name) =>
      ["useParams", "usePathname", "useSearchParams", "useRouter"].includes(name)
    );
    if (navHooks.length) {
      lines.push(`import { ${navHooks.join(", ")} } from "next/navigation";`);
    }
    next = next.replace(routerMatch[0], lines.length ? `${lines.join("\n")}\n` : "");
  }

  next = next.replace(/(<Link\b[^>]*?)\sto=/g, "$1 href=");

  if (!next.startsWith("'use client'") && !next.startsWith('"use client"')) {
    next = `'use client';\n\n${next}`;
  }

  return next;
}

for (const file of walk(root)) {
  if (!file.endsWith(".js")) continue;
  const original = fs.readFileSync(file, "utf8");
  const adapted = adaptSource(original);
  if (adapted !== original) {
    fs.writeFileSync(file, adapted);
    console.log("adapted", path.relative(process.cwd(), file));
  }
}

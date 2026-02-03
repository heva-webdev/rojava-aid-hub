import fs from "node:fs";
import path from "node:path";

export default function VerifyPage() {
  const filePath = path.join(process.cwd(), "content", "verification.md");
  const md = fs.readFileSync(filePath, "utf8");

  return (
    <div className="prose prose-invert max-w-none">
      <pre className="whitespace-pre-wrap rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-6">
        {md}
      </pre>
    </div>
  );
}
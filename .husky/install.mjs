// Skip Husky install in production and CI
import "jsr:@std/dotenv/load";

if (
  Deno.env.get("NODE_ENV") === "production" ||
  Deno.env.get("CI") === "true"
) {
  Deno.exit(0);
}

const husky = (await import("husky")).default;
console.info(husky());

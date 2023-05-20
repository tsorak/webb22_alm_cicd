//These tests assume the server is running on port 8080
import { assertEquals } from "./deps.ts";

Deno.test("Sum 1 + 2", async () => {
  const query = new URLSearchParams({ a: "1", b: "2" }).toString();
  const req = new Request(`http://localhost:8080/sum?${query}`);

  const res = await fetch(req);
  const json = await res.json();

  assertEquals(res.status, 200);
  assertEquals(json, { sum: 3 });
});

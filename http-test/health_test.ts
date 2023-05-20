//These tests assume the server is running on port 8080
import { assertEquals } from "./deps.ts";

Deno.test("Server health check", async () => {
  const res = await fetch("http://localhost:8080/");
  const _ = await res.json();

  assertEquals(res.status, 200);
});

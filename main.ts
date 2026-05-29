import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const handler = async (req) => {
  const url = new URL(req.url);
  if (url.pathname === "/" || url.pathname === "") {
    const html = await Deno.readTextFile("./index.html");
    return new Response(html, { headers: { "content-type": "text/html; charset=utf-8" } });
  }
  return new Response("Not Found", { status: 404 });
};

serve(handler, { port: 8080 });
console.log("Palette Generator at http://localhost:8080");

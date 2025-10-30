/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request, env, ctx) {
    // You can view your logs in the Observability dashboard
    console.info({ message: "Hello World Worker received a request!" });
    const html = `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GA4 Sandbox - Sub Domain</title>
    <style>
        body { font-family: sans-serif; text-align: center; padding-top: 50px; background-color: #eef; }
    </style>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-YXBZRS2RDH"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-YXBZRS2RDH');
    </script>
</head>
<body>
    <h1>別ドメインページ</h1>
    <p>クロスドメイン計測の遷移先ページです。</p>
    <p>セッションが維持されていればテスト成功です。</p>
    <p><a href="https://podhmo.github.io/ga4-sandbox/demo">[元のドメイン]トップページに戻る</a></p>
</body>
</html>
`;
    return new Response(html, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
};

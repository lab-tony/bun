const server = Bun.serve({
    port: Bun.env.PORT || 8000,
    fetch(request) {
        const url = new URL(request.url);

        if (url.pathname === '/') return new Response('Home!');
        if (url.pathname === '/category') return new Response('Category!');
        else new Response('404');
    },
});

console.log(`Listening to server on port ${server.port}`);

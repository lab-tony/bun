const server = Bun.serve({
    port: Bun.env.PORT || 8000,
    fetch(request, server) {
        return new Response('Hello world');
    },
});

console.log(`Listening to server on port ${server.port}`);

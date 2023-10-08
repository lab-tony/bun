const server = Bun.serve({
    port: 5000,
    fetch(request, server) {
        return new Response('Hello world');
    },
});

console.log(`Listening to server on port ${server.port}`);

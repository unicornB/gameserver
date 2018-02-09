exports.keys="gameserver";
exports.io = {
    init: { }, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: ['conn'],
        packetMiddleware: [],
      }   
    },
    redis: {
        host: '127.0.0.1',
        port: 6379,
        auth_pass: 'hyl',
        db: 0,
    },
};
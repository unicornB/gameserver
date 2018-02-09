module.exports = app => {
    return async (ctx, next) => {
      ctx.socket.emit('res', 'connected');
      console.log('connected!');
      await next();
      // execute when disconnect.
      console.log('disconnection!');
    };
};
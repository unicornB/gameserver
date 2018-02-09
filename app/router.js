module.exports = app => {
    const { router, controller, io } = app;
    io.of('/').route('server', io.controller.default.ping);
    io.of('/').route('login', io.controller.auth.login);
};
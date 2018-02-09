'use strict';
const Controller = require('egg').Controller;
const Room=require("../game/room");
class AuthController extends Controller {
  async login() {
    const { ctx, app } = this;
    const message = ctx.args[0];
    //var logininfo=JSON.parse(message);
    var roomId=message.roomId;
    var _roomList = [];
    if (_roomList.length === 0){
        _roomList.push(Room());
    }
    if ( _roomList[_roomList.length - 1].getPlayerCount() >= 6){
        _roomList.push(Room());
    }
    _roomList[_roomList.length - 1].createPlayer(roomId,ctx.socket);
    await ctx.socket.emit('loginres', `登录成功`);
  }
}
module.exports = AuthController;
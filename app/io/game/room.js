const Room = function () {
    var that = {};
    var _playerList = [];
    that.getPlayerCount=function(){
        return _playerList.length;
    }
    that.createPlayer=function(roomId,socket){
        socket.join(roomId);
        
        socket.to(roomId).emit('join_player',socket.id+"加入");
    }
    return that;
}
module.exports=Room;
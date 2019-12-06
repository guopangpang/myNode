let ws = require('ws');
let uuid = require('uuid');
let http = require('http');
let express = require('express');

let socketServer = ws.Server;
let wss = new socketServer({port:9090});
let clients = [];

/**
 * 广播所有客户端消息
 * @param  {String} type     广播方式(admin为系统消息，user为用户消息)
 * @param  {String} message  消息
 * @param  {String} nickname 用户昵称，广播方式为admin时可以不存在
 */
function broadcastSend(type, message, nickname) {
    clients.forEach(function(v, i) {
        if(v.ws.readyState === ws.OPEN) {
            v.ws.send(JSON.stringify({
                "type": type,
                "nickname": nickname,
                "message": message
            }));
        }
    })
}
wss.on('connection',function (ws) {
    let client_uuid = uuid.v4();
    let nickname = `AnonymousUser`;
    clients.push({
        "id": client_uuid,
        "ws": ws,
        "nickname": nickname
    });
    console.log(`client ${client_uuid} connected`);
    ws.on('message',function (message) {
        console.log('message',message);
        ws.send(message)
    });
    ws.on('close',function (message) {
        console.log('close',message);
    })
});





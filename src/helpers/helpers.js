export default function establishConnection(name, roomCode, isCreator) {
    console.log(name, roomCode, isCreator);
    const conn = new WebSocket(`ws://54.91.19.50:8080/ws?code=${roomCode}&name=${name}&creator=${isCreator}`);
    conn.onclose = function(evt) {
        console.log(evt);
    }
    conn.onmessage = function(evt) {
        var msg
        console.log(evt);
        var obj = JSON.parse(evt.data);
        if ("error" in obj) {
            var item = document.createElement("div");
            item.innerText = obj.error
            document.body.appendChild(item);
            return;
        }
        switch (obj.event_type) {
            case "join":
                msg = `${obj.data.name} has joined the room.`;
                console.log(msg)
                break;
            case "start":
                msg = `The following activity was selected by ${obj.data.username}: ${obj.data.game}.`
                console.log(msg)
                break;  
            case "cthullu":
                msg = `${obj.data.username} added the message: ${obj.data.message} was added to category: ${obj.data.category}.`
                console.log(msg)
                break;
            default:
                break;
        }
        var item = document.createElement("div");
        item.innerText = msg
        document.body.appendChild(item);
    };
}
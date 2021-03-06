//adding new chat document
//setting up real time listener to get new chats
//updating the username
//upading the room
class Chatroom{
    constructor(room,username){
        this.room=room;
        this.username=username;
        this.chats=db.collection('chats');
    }
    async addChat(message){
        const now=new Date();
        const chat={
            message:message,
username:this.username,
room:this.room,
created_at:firebase.firestore.Timestamp.fromDate(now)
        };
        //save chat doc
        const response=await this.chats.add(chat);
        return response;
    }
    getChats(callback){
        
        this.chats.where('room','==',this.room).orderBy(created_at)
        .onSnapshot(snapshot=>{
snapshot.docChanges().forEach(change=>{
if(change.type==='added'){
//update the ui
callback(change.doc.data());
}
});
        });
    }
}
const chatroom=new Chatroom('music','Ashu');
chatroom.getChats((data)=>{
    console.log(data);
});
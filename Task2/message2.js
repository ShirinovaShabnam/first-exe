class Message{
    constructor(name,send_time,msg_content,messages=[]){
        this.name=name
        this.send_time=send_time
        this.msg_content=msg_content
        this.messages=messages
    }

    toString(){
        console.log(`name: ${this.name}; send_time: ${this.send_time}; msg_content: ${this.msg_content}`)
    }
}

class Messenger extends Message{
    constructor(name,send_time,msg_content,messages) {
        super(name,send_time,msg_content,messages);
      }

      send(name, msg_content){
        this.name=name
        this.msg_content=msg_content
        
        this.messages.push([`${this.gettime()} ${this.name}: ${this. msg_content}`])
      }
      
      gettime() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`
      }

      show_history(){
        this.messages.forEach(item=>{
            console.log(item[0])
        })
      }
}
let messenger = new Messenger()
messenger.send('Adil', 'ilk mesaj')
messenger.send('Məryəm', 'İkinci mesaj')
messenger.show_history()
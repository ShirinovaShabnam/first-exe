const inp_name=document.querySelector('.name-input')
const inp_content=document.querySelector('.content-input')
const users=document.querySelector('.messages-div')
const btn=document.querySelector('.send-msg')


class Message{
    constructor(name,msg_content,msg_time){
        this.name=name
        this.msg_content=msg_content
        this.msg_time=msg_time
    }

    toString(st){
        return st
    }
}

class Messenger{
    constructor() {
      this.messages=[]
      }

      send(name, msg_content){
        console.log(name)
        let messenger = new Message(name,msg_content,this.gettime())
        let msg=`${messenger.msg_time} ${messenger.name}: ${messenger.msg_content}`
        this.messages.push(messenger.toString(msg))

        let html=`<div class="py-3 px-5">
        
        <!-- Chat list -->
            <!-- User -->
            <button class="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                <div class="flex items-center">
                    <img class="rounded-full items-start flex-shrink-0 mr-3" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-02_vll8uv.jpg" width="32" height="32" alt="Nhu Cassel" />
                    <div>
                        <h4 class="text-sm font-semibold text-gray-900">${messenger.name}</h4>
                        <div class="text-[13px]">${messenger.msg_content} 👋, · ${messenger.msg_time}</div>
                    </div>
                </div>
            </button>
            <!-- User -->
        </div>

    </div>`
    users.innerHTML+=html
        
      }
      
      gettime() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`
      }

      show_history(){
        this.messages.forEach(item=>{
            console.log(item)
        })
        console.log(this.messages)
      }
}
let messenger = new Messenger()
btn.addEventListener('click',()=>{
  messenger.send(inp_name.value, inp_content.value)
  messenger.show_history()
})


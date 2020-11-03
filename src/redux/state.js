const state = {
    
        profilePage: {
            posts: [
                {id: 1, message: "Привет!", likeCount: 5}, 
                {id: 2, message: "Как дела?", likeCount: 7},
                {id: 3, message: "Эй!", likeCount: 12},
                {id: 4, message: "Чё молчишь?", likeCount: 6}
              ]
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: "Andrey"}, 
                {id: 2, name: "Sergey"},
                {id: 3, name: "Ivan"},
                {id: 4, name: "Masha"}
              ],
            messages: [
                {id: 1, message: "Привет!"}, 
                {id: 2, message: "Как дела?"},
                {id: 3, message: "Эй!"},
                {id: 4, message: "Чё молчишь?"}
              ]
        }
}

export default state
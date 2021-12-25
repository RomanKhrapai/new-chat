export function createChat(){
    return (` 
    <div class="chat">
    <div class="chat-name-container">
        <h1 class="chat-name">7Pro</h1>
        <button type="button" class="btn-sign-out msg-btn"> Sign out </button>
    </div>
    <div id="chat-window" class="chat-window">

        <ul id="messages" class="messages">
           
        </ul>
        <form id="msg-form" class="msg-form" autocomplete="off">
            <input type="text" id="msg-input" name="msg" class="msg-input" placeholder="Enter a message">
            <button type="submit" id="msg-btn" class="msg-btn">Send</button>
        </form>

    </div>
</div>`);
}
export function createTextMsg(array,id){
    
    const markup = array.map(({photoURL,uid,message, displayName}) =>{
        const classElement = id===uid? "msg my": "msg";
return `
<li class="${classElement}">
<img class="img" width='40' height="40" src="${photoURL}">
            
                <span class="msg-span">
                    <i class="name">${displayName}: </i>${message} 
                </span>
            </li>
`
    }).join('');
    return markup;
}
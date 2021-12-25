export function createChat(){
    return (` <button type="button" class="btn-sign-out msg-btn"> Sign out </button>
    <div class="chat">
    <div class="chat-name-container">
        <a href="#login_form" id="login_pop">Log In</a>
        <h1 class="chat-name">7Pro</h1>
    </div>
    <div id="chat-window" class="chat-window">

        <ul id="messages" class="messages">
            <li class="msg">
            <img class="img" width='50' height="50" src="https://lh3.googleusercontent.com/a/AATXAJxeILJJoqYUMDTSuMLTEitIC-D0cvMfM0ax1H7a=s96-c">
 
                <span class="msg-span">
                    <i class="name">Lorem: </i>Hello! 
                </span>
            </li>
            <li class="msg my">
<img class="img" width='50' height="50" src="https://lh3.googleusercontent.com/a/AATXAJxeILJJoqYUMDTSuMLTEitIC-D0cvMfM0ax1H7a=s96-c">
            
                <span class="msg-span">
                    <i class="name">Ipsum: </i>Hello! 
                </span>
            </li>
           
        </ul>
        <form id="msg-form" class="msg-form" autocomplete="off">
            <input type="text" id="msg-input" name="msg" class="msg-input" placeholder="Enter a message">
            <button type="submit" id="msg-btn" class="msg-btn">Send</button>
        </form>

    </div>
</div>`);
}
export function createTextMsg(array,id){
    const markup = array.map(({photoUrl,uid,message}) =>{
        const classElement = id===uid? "msg my": "msg";
return `
<li class="${classElement}">
<img class="img" width='50' height="50" src="${photoUrl}">
            
                <span class="msg-span">
                    <i class="name">Ipsum: </i>${message} 
                </span>
            </li>
`
    }).join('');
    return markup;
}
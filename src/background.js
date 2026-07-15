function reopen(){console.log('reopen command');chrome.sessions.restore();}
chrome.runtime.onMessage.addListener((message)=>{if(message.command==='reopen_last_tab') reopen();});
chrome.commands.onCommand.addListener((command)=>{console.log('command',command); if(command==='reopen_last_tab') reopen();});

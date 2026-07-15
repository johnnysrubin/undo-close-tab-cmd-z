function reopenLastClosedTab() {
    chrome.sessions.restore();
}

chrome.runtime.onMessage.addListener((message) => {
    if (message.command === "reopen_last_tab") {
        reopenLastClosedTab();
    }
});

chrome.commands.onCommand.addListener((command) => {
    if (command === "reopen_last_tab") {
        reopenLastClosedTab();
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const githubButton = document.getElementById("githubButton");

    githubButton.addEventListener("click", () => {
        chrome.tabs.create({
            url: "https://github.com/johnnysrubin/undo-close-tab-cmd-z"
        });
    });
});
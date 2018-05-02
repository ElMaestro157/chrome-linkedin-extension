chrome.runtime.onMessage.addListener(function (msg, sender, res) {
    if ((msg.from === 'content') && (msg.subject === 'showPage')) {
        chrome.pageAction.show(sender.tab.id);
    }
});
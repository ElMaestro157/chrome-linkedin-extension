chrome.runtime.sendMessage({
    from: 'content',
    subject: 'showPage'
});

chrome.runtime.onMessage.addListener(function (msg, sender, res) {
    if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
        res({ message: window.document.getElementsByTagName('h1')[0].innerText });
    }
});
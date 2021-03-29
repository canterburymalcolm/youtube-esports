// ==UserScript==
// @name         Hide Youtube video length
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide's video length to prevent spoilers.
// @author       You
// @match        https://www.youtube.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      file://C:\Users\cante\Dev\TamperMonkey\YoutubeEsports\app.user.js
// ==/UserScript==

$(document).ready(() => {
    console.log('Jquery doc ready');
    // const progressBar = $('.ytp-progress-bar-container');
    // if (progressBar.length) {
    //     console.log('found p bar');
    //     progressBar.css('display', 'none');
    //     $('.ytp-time-display').css('display', 'none');
    // }
    const hideProgressBarStyle = $('<style>.ytp-progress-bar-container { display: none !important; } </style>');
    const hideTimeDisplayStyle = $('<style>.ytp-time-display { display: none !important; } </style>');

    const hideThumbnailTimeStyle = $('<style>ytd-thumbnail-overlay-time-status-renderer { display: none; } </style>');
    $('html > head').append(hideProgressBarStyle).append(hideTimeDisplayStyle).append(hideThumbnailTimeStyle);

    // waitForThumbnails();

    // if (related.length) { 
    //     observer.observe(related, { childList: true, subtree: true });
    // }
    // console.log($('#overlays')[0]);
    // const thumbnailTime = $('.ytd-thumbnail-overlay-time-status-renderer');
    // if (thumbnailTime.length) {
    //     console.log('found thumbnail time');
    //     console.log(thumbnailTime.length);
    //     thumbnailTime.css('display', 'none');
    // }
    //.ytp-time-display
});

const waitForThumbnails = () => {
    const contents = $('#contents');
    if (!contents.length) {
        console.log('waiting...');
        window.setTimeout(waitForThumbnails, 500);
        return;
    }

    console.log('found contents');
    console.log(`${contents.length}`);
    console.log(contents);
    console.log(contents[0]);
    const observer = new MutationObserver((muts, obs) => {
        console.log('Observed mutation');
        console.log(muts);
    });
    observer.observe(contents[0], { childList: true, subtree: true });
}
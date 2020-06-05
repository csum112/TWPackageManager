export class AppDescriptionComponent extends HTMLElement {

    style = `
        <style>
            
            article {
                position: relative;
                display: inline-block;
                max-height: 40vh;
                overflow-y: auto;
                padding: 2rem;
            }

            p {
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: lighter;
            }

        </style>
    `;


    template = `
        <link href="https://fonts.googleapis.com/css?family=Zilla+Slab+Highlight&display=swap" rel="stylesheet" />
        <article>
            <p>VLC is the VideoLAN project's media player. It plays MPEG, MPEG-2, MPEG-4,
            DivX, MOV, WMV, QuickTime, WebM, FLAC, MP3, Ogg/Vorbis files, DVDs, VCDs,
            podcasts, and multimedia streams from various network sources.</p>

            <p>VLC is the VideoLAN project's media player. It plays MPEG, MPEG-2, MPEG-4,
            DivX, MOV, WMV, QuickTime, WebM, FLAC, MP3, Ogg/Vorbis files, DVDs, VCDs,
            podcasts, and multimedia streams from various network sources.</p>

            <p>VLC has support for on-the-fly transcoding of audio and video formats, either
            for broadcasting purposes or for movie format transformations.</p>
        </article>
    `;

    constructor() {
        super();
        this._shadow = this.attachShadow({ mode: "open" });
        this._shadow.innerHTML = this.style + this.template;
    }

} 
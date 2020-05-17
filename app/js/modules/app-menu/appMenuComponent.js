export class AppMenuComponent extends HTMLElement {
    style = `<style>
    .menu-shell {
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        max-width: 100%;
    }

    .tabs {
        display: flex;
        margin-left: 2rem;
        justify-content: space-around;
    }

    .tabs h3 {
        display: inline;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
    }

    .tabs h3 > a {
        text-decoration: none;
    }

    hr {
        width: 85%;
    }

    .add-button {
        position: absolute;
        bottom: 12rem;
        right: 2rem;

        color: #fff;
        background: #35D9D8;
        padding: 1rem 1rem;
        border-radius: 1rem;
        box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.06);
    
    }

    .content {
        height: 70vh;
        padding: 2rem;
    }
    
    .content h1, .content p {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
    }
    
    </style>`;

    template = `
    <link href="/assets/fontawesome/css/all.css" rel="stylesheet">
    <div class="menu-shell">
        <dm-app-cover></dm-app-cover>

        <div class="tabs">
            <h3><a href="#">Description<a></h3>
            <h3><a href="#">Info<a></h3>
            <h3><a href="#">Dependencies<a></h3>
        </div>
        <hr>

        <div class="content">
            <div class="header">
                <p>VLC is the VideoLAN project's media player. It plays MPEG, MPEG-2, MPEG-4,
                DivX, MOV, WMV, QuickTime, WebM, FLAC, MP3, Ogg/Vorbis files, DVDs, VCDs,
                podcasts, and multimedia streams from various network sources.</p>
            
                <p>VLC can also be used as a streaming server that duplicates the stream it
                reads and multicasts them through the network to other clients, or serves
                them through HTTP.</p>
                
                <p>VLC has support for on-the-fly transcoding of audio and video formats, either
                for broadcasting purposes or for movie format transformations.</p>
            </div>
        </div>

        <a href="#" class="add-button">
            <i class="fas fa-plus"></i>
        </a>
    </div>`;

    constructor() {
        super();
        this._shadow = this.attachShadow({ mode: "open" });
        this._shadow.innerHTML = this.style + this.template;
    }
}
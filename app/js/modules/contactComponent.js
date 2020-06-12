export class ContactComponent extends HTMLElement {

    style = `
        <style>

        .page_content {
            margin-bottom: 5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
        }

        h1{
            color: white;
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: bold;
            margin-right: 25px;
        }

        .contact_containers {

                display: flex;
                position: relative;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
                margin-top: 50px;
        }

        .contact_container {
            padding: 0.75rem;
            border-radius: 40px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin: 10px;
            border: 2px solid #894EC6;
            width: 30vw;
        
        }
        .contact_container h1 {
            color: #894EC6;
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: bold;
            margin-bottom: 15px;
            margin-top: 5px;
        }

        h3 {
            margin-top: 15px;
            color: white;
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: normal;
            margin-bottom: 20px;
        }

        img {

            border-radius: 50%;
            border: 1.5px solid white;
        }

        .contact_details {

            padding: 0.75rem;
            background: #3b3f54;
            border-radius: 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        .contact_detail {
            padding: 0.75rem;
            border-radius: 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
        }

        .contact_type {
            font-size: 10px;
            color: White;
            margin-right: 1rem;
            color: #894EC6;
        }

        .contact_label {
            font-family: 'Roboto', sans-serif;
            font-size: 15px;
            color: White;
        }

        @media (max-width: 720px) and (orientation: portrait) {
            
            .contact_containers {
                flex-direction: column;
            }

            .contact_container {
                width: 88vw;
                padding: 0.25rem;  
            }

            .contact_details {
                flex-direction: column;
                align-items: flex-start;
                padding: 0rem;
            }

            .fa-mobile-alt {
                margin-left: 7px;
            }
            
        }

        @media (max-width: 1337px) and (orientation: landscape) {
            
            .contact_containers {
                flex-direction: column;
            }

            .contact_container {
                width: 88vw;
                padding: 0.25rem;  
            }

            .contact_details {
                flex-direction: column;
                align-items: flex-start;
                padding: 0rem;
            }

            .fa-mobile-alt {
                margin-left: 7px;
            }
            
        }
    </style>`;

    template = `
    <link href="/assets/fontawesome/css/all.css" rel="stylesheet">
    <div class="page_content">
        <h1> CONTACT US </h1>
        <div class="contact_containers">
            <div class="contact_container">
                <div class="contact_avatar">
                    <img src="/assets/png/CRM.jpg" alt="C-Rosu" width="100" height="100">
                </div>
                
                <h1>Rosu Cristian-Mihai</h1>

                <div class="contact_details">
                    <div class="contact_detail">
                        <div class="contact_type">
                            <i class="fas fa-mobile-alt fa-4x"></i>
                        </div>
                        <div class="contact_label">
                            +40 0742012345
                        </div>
                    </div>

                    <div class="contact_detail">
                        <div class="contact_type">
                        <i class="far fa-envelope fa-4x"></i>
                        </div>
                        <div class="contact_label">
                            cristian.rosu@demiweb.com
                        </div>
                    </div>
                </div>
            </div>

            <div class="contact_container">
                <div class="contact_avatar">
                    <img src="/assets/png/c_rosu.png" alt="C-Rosu23" width="100" height="100">
                </div>
                
                <h1>Sumanaru Catalin</h1>

                <div class="contact_details">
                    <div class="contact_detail">
                        <div class="contact_type">
                            <i class="fas fa-mobile-alt fa-4x"></i>
                        </div>
                        <div class="contact_label">
                            +40 0741222333
                        </div>
                    </div>

                    <div class="contact_detail">
                        <div class="contact_type">
                        <i class="far fa-envelope fa-4x"></i>
                        </div>
                        <div class="contact_label">
                            sumanaru.catalin@debiweb.com
                        </div>
                    </div>
                </div>
            </div>

            <div class="contact_container">
                <div class="contact_avatar">
                    <img src="/assets/png/BRA.jpg" alt="rzv" width="100" height="100">
                </div>
                
                <h1>Bejenariu Razvan-Andrei</h1>

                <div class="contact_details">
                    <div class="contact_detail">
                        <div class="contact_type">
                            <i class="fas fa-mobile-alt fa-4x"></i>
                        </div>
                        <div class="contact_label">
                            +40 0755667788
                        </div>
                    </div>

                    <div class="contact_detail">
                        <div class="contact_type">
                        <i class="far fa-envelope fa-4x"></i>
                        </div>
                        <div class="contact_label">
                            bejenariu.razvan@demiweb.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    constructor() {
        super();
        this._shadow = this.attachShadow({ mode: "open" });
        this._shadow.innerHTML = this.style + this.template;
        
    }

}
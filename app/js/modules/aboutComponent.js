export class AboutComponent extends HTMLElement {

    style = `
        <style>

            .page-content {
                margin-top: 2rem;
                margin-bottom: 5rem;
                padding-left: 20rem;
                padding-right: 20rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;
            }
            
            a:link, a:visited {
                text-decoration: none;
            }
            
            h1, h2, p, ol {
                color: #fff;
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: lighter;
            }

            h1, h2 {
                border-bottom: 2px solid #894EC6;
            }
            
            @media (max-width: 720px) and (orientation: portrait) {
            
                .distros {
                    flex-direction: column;
                }
            
            }
        </style>
    `;

    template = `
        <article typeof="schema:ScholarlyArticle" resource="#">
            <div class="page-content">
                <h1 property="schema:name">About</h1>

                <!--Authors and affiliations-->
                <section>
                    <ol>
                        <!--Primul membru al echipei-->
                        <li property="schema:author" typeof="sa:ContributorRole">
                            <a property="schema:author" href="#" target="_blank" typeof="schema:Person">
                                <span property="schema:givenName">Cristian</span>
                                <span property="schema:familyName">Rosu</span>
                            </a>
                            <a href="#uaic" property="sa:roleAffiliation" resource="https://www.info.uaic.ro/">FII, UAIC</a>
                        </li>
                        <!--Al doilea membru al echipei-->
                        <li property="schema:author" typeof="sa:ContributorRole">
                            <a property="schema:author" href="#" target="_blank" typeof="schema:Person">
                                <span property="schema:givenName">Razvan</span>
                                <span property="schema:familyName">Bejenariu</span>
                            </a>
                            <a href="#uaic" property="sa:roleAffiliation" resource="https://www.info.uaic.ro/">FII, UAIC</a>
                        </li>
                        <!--Al treilea membru al echipei-->
                        <li property="schema:author" typeof="sa:ContributorRole">
                            <a property="schema:author" href="#" target="_blank" typeof="schema:Person">
                                <span property="schema:givenName">Catalin</span>
                                <span property="schema:familyName">Sumanaru</span>
                            </a>
                            <a href="#uaic" property="sa:roleAffiliation" resource="https://www.info.uaic.ro/">FII, UAIC</a>
                        </li>
                    </ol>
                    
                    <!--Affiliations list-->
                    <ol>
                        <li id="uaic">
                            <a href="https://www.info.uaic.ro/" target="_blank" typeof="schema:Corporation">
                                <span property="schema:name">Facultatea de Informatica UAIC, Iasi</span>
                            </a>
                        </li>
                    </ol>
                </section>

                <section typeof="sa:Abstract">
                    <h2>Main project requirements</h2>
                    
                    <p>Actualmente, exista o multitudine de aplicatii de sine-statatoare pentru managementul pachetelor software. 
                    Instalarea unui nou computer implica folosirea acestor aplicatii pentru a realiza un mediu comun util dezvoltatorilor 
                    (novici sau profesionisti) dintr-o organizatie academica ori comerciala. Pachetele necesare sunt dependente de altele; 
                    pot exista, de asemenea, diverse conflicte datorate incompatibilitatilor dintre versiuni, compilatoare, limbaje etc.</p>
                    
                    <p>Sa se implementeze un sistem Web care ofera suport "inteligent" pentru problemele mentionate via un API REST de 
                    management unificat al gestionarii componentelor software. Se vor genera si script-urile necesare pentru asigurarea 
                    fluxurilor de activitati de administrare. Ca inspiratie, a se considera solutii precum Bower, Docker, NuGet, npm, 
                    Puppet.</p>
                </section>

                <section typeof="sa:Abstract">
                    <h2>Main project requirements</h2>
                    
                    <p>Actualmente, exista o multitudine de aplicatii de sine-statatoare pentru managementul pachetelor software. 
                    Instalarea unui nou computer implica folosirea acestor aplicatii pentru a realiza un mediu comun util dezvoltatorilor 
                    (novici sau profesionisti) dintr-o organizatie academica ori comerciala. Pachetele necesare sunt dependente de altele; 
                    pot exista, de asemenea, diverse conflicte datorate incompatibilitatilor dintre versiuni, compilatoare, limbaje etc.</p>
                    
                    <p>Sa se implementeze un sistem Web care ofera suport "inteligent" pentru problemele mentionate via un API REST de 
                    management unificat al gestionarii componentelor software. Se vor genera si script-urile necesare pentru asigurarea 
                    fluxurilor de activitati de administrare. Ca inspiratie, a se considera solutii precum Bower, Docker, NuGet, npm, 
                    Puppet.</p>
                </section>

                <section typeof="sa:Abstract">
                    <h2>Main project requirements</h2>
                    
                    <p>Actualmente, exista o multitudine de aplicatii de sine-statatoare pentru managementul pachetelor software. 
                    Instalarea unui nou computer implica folosirea acestor aplicatii pentru a realiza un mediu comun util dezvoltatorilor 
                    (novici sau profesionisti) dintr-o organizatie academica ori comerciala. Pachetele necesare sunt dependente de altele; 
                    pot exista, de asemenea, diverse conflicte datorate incompatibilitatilor dintre versiuni, compilatoare, limbaje etc.</p>
                    
                    <p>Sa se implementeze un sistem Web care ofera suport "inteligent" pentru problemele mentionate via un API REST de 
                    management unificat al gestionarii componentelor software. Se vor genera si script-urile necesare pentru asigurarea 
                    fluxurilor de activitati de administrare. Ca inspiratie, a se considera solutii precum Bower, Docker, NuGet, npm, 
                    Puppet.</p>
                </section>

                <section typeof="sa:Abstract">
                    <h2>Main project requirements</h2>
                    
                    <p>Actualmente, exista o multitudine de aplicatii de sine-statatoare pentru managementul pachetelor software. 
                    Instalarea unui nou computer implica folosirea acestor aplicatii pentru a realiza un mediu comun util dezvoltatorilor 
                    (novici sau profesionisti) dintr-o organizatie academica ori comerciala. Pachetele necesare sunt dependente de altele; 
                    pot exista, de asemenea, diverse conflicte datorate incompatibilitatilor dintre versiuni, compilatoare, limbaje etc.</p>
                    
                    <p>Sa se implementeze un sistem Web care ofera suport "inteligent" pentru problemele mentionate via un API REST de 
                    management unificat al gestionarii componentelor software. Se vor genera si script-urile necesare pentru asigurarea 
                    fluxurilor de activitati de administrare. Ca inspiratie, a se considera solutii precum Bower, Docker, NuGet, npm, 
                    Puppet.</p>
                </section>

                <section typeof="sa:Abstract">
                    <h2>Main project requirements</h2>
                    
                    <p>Actualmente, exista o multitudine de aplicatii de sine-statatoare pentru managementul pachetelor software. 
                    Instalarea unui nou computer implica folosirea acestor aplicatii pentru a realiza un mediu comun util dezvoltatorilor 
                    (novici sau profesionisti) dintr-o organizatie academica ori comerciala. Pachetele necesare sunt dependente de altele; 
                    pot exista, de asemenea, diverse conflicte datorate incompatibilitatilor dintre versiuni, compilatoare, limbaje etc.</p>
                    
                    <p>Sa se implementeze un sistem Web care ofera suport "inteligent" pentru problemele mentionate via un API REST de 
                    management unificat al gestionarii componentelor software. Se vor genera si script-urile necesare pentru asigurarea 
                    fluxurilor de activitati de administrare. Ca inspiratie, a se considera solutii precum Bower, Docker, NuGet, npm, 
                    Puppet.</p>
                </section>

                <section typeof="sa:Abstract">
                    <h2>Main project requirements</h2>
                    
                    <p>Actualmente, exista o multitudine de aplicatii de sine-statatoare pentru managementul pachetelor software. 
                    Instalarea unui nou computer implica folosirea acestor aplicatii pentru a realiza un mediu comun util dezvoltatorilor 
                    (novici sau profesionisti) dintr-o organizatie academica ori comerciala. Pachetele necesare sunt dependente de altele; 
                    pot exista, de asemenea, diverse conflicte datorate incompatibilitatilor dintre versiuni, compilatoare, limbaje etc.</p>
                    
                    <p>Sa se implementeze un sistem Web care ofera suport "inteligent" pentru problemele mentionate via un API REST de 
                    management unificat al gestionarii componentelor software. Se vor genera si script-urile necesare pentru asigurarea 
                    fluxurilor de activitati de administrare. Ca inspiratie, a se considera solutii precum Bower, Docker, NuGet, npm, 
                    Puppet.</p>
                </section>
                
            </div>
        </article>
    `;

    constructor() {
        super();
        this._shadow = this.attachShadow({ mode: "open" });
        this._shadow.innerHTML = this.style + this.template;
    }

}
export class AboutComponent extends HTMLElement {

    style = `
        <style>

            .page-content {
                margin-top: 2rem;
                margin-bottom: 5rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
            }

            section {
                width: 70vw;
            }

            a:link, a:visited {
                text-decoration: none;
                color: #894EC6;
            }
            
            h1, h2, h3, p, ul, ol {
                color: #fff;
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: lighter;
            }

            h1, h2, h3 {
                border-bottom: 2px solid #894EC6;
            }
            
            code {
                color: #fff;
            }

            pre {
                background: rgba(202, 204, 219, 0.3);
                border-radius: 10px;
            }

            .api, #cristi, #catalin, #razvan {
                color: #894EC6;
            }

            .sub {
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
            }

            .subv {
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
            }

            iframe, img {
                border: 2px solid #894EC6;
                border-radius: 10px;
            }

            img {
                height: auto;
                width: 35vw;
            }

            @media (max-width: 720px) and (orientation: portrait) {
            
                .distros, .sub {
                    flex-direction: column;
                }

                iframe {
                    width: 306px;
                    height: 172px;
                }
            
            }
        </style>
    `;

    template = `
        <article typeof="schema:ScholarlyArticle" resource="#">
            <div class="page-content">
                <h1 property="schema:name">ABOUT</h1>
                <p property="schema:alternateName" role="doc-subtitle">Scholarly HTML Reports</p>

                <!--Authors and affiliations-->
                <div class="contentinfo">
                    <section typeof="sa:AuthorsList">
                        <h2>Authors</h2>

                        <ul>
                            <!--Primul membru al echipei-->
                            <li property="schema:author" typeof="sa:ContributorRole">
                                <span typeof="schema:Person" resource="https://www.facebook.com/cristi.rosu.37">
                                    <meta property="schema:givenName" content="Cristian">
                                    <meta property="schema:additionalName" content="Mihai">
                                    <meta property="schema:familyName" content="Rosu">
                                    <span property="schema:name">Ro&#351;u Cristian-Mihai</span>
                                </span>
                                <sup><a href="#fiiuaic" target="_blank" property="sa:roleAffiliation" resource="https://www.info.uaic.ro/">1</a></sup>
                                <sup><a href="#cristi" target="_blank" property="sa:roleAffiliation" resource="#">i</a></sup>
                            </li>

                            <!--Al doilea membru al echipei-->
                            <li property="schema:author" typeof="sa:ContributorRole">
                                <span typeof="schema:Person" resource="https://www.facebook.com/notcata.sum">
                                    <meta property="schema:givenName" content="Catalin">
                                    <meta property="schema:familyName" content="Sumanaru">
                                    <span property="schema:name">Sum&#259;naru C&#259;t&#259;lin</span>
                                </span>
                                <sup><a href="#fiiuaic" target="_blank" property="sa:roleAffiliation" resource="https://www.info.uaic.ro/">1</a></sup>
                                <sup><a href="#catalin" target="_blank" property="sa:roleAffiliation" resource="#">i</a></sup>
                            </li>

                            <!--Al treilea membru al echipei-->
                            <li property="schema:author" typeof="sa:ContributorRole">
                                <span typeof="schema:Person" resource="https://www.facebook.com/razvanarb">
                                    <meta property="schema:givenName" content="Razvan">
                                    <meta property="schema:additionalName" content="Andrei">
                                    <meta property="schema:familyName" content="Bejenariu">
                                    <span property="schema:name">Bejenariu R&#259;zvan Andrei</span>
                                </span>
                                <sup><a href="#fiiuaic" target="_blank" property="sa:roleAffiliation" resource="https://www.info.uaic.ro/">1</a></sup>
                                <sup><a href="#razvan" target="_blank" property="sa:roleAffiliation" resource="#">i</a></sup>
                            </li>
                        </ul>
                    </section>

                    <section typeof="sa:Affiliations">
                        <h2>Affiliations</h2>

                        <ol>
                            <li id="fiiuaic">
                                <span typeof="schema:Organization" resource="https://www.info.uaic.ro/">
                                    <span property="schema:name">Computer Science Faculty</span>
                                    <span property="schema:parentOrganization">
                                        <span typeof="schema:Organization">
                                            <span property="schema:name">- "Alexandru Ioan Cuza" University</span>
                                            <span property="schema:location" typeof="schema:Place">
                                                <span property="schema:address" typeof="schema:PostalAddress">
                                                    <span property="schema:addressLocality">- Iasi</span>,
                                                    <span property="schema:addressRegion">Iasi</span>,
                                                    <span property="schema:addressCountry">Romania</span>
                                                </span>
                                            </span>
                                            <sup><a href="https://www.info.uaic.ro/" target="_blank">i</a></sup>
                                        </span>
                                    </span>
                                </span>
                            </li>
                        </ol>
                    </section>
                </div>

                <section typeof="sa:Abstract">
                    <h2>Main project requirements</h2>
                    
                    <p>At the moment, there are a multitude of stand-alone package management applications. Setting up a new computer
                    implies using these applications to create a shared environment useful to developers (beginners or professionals)
                    from an academic or comercial organization. The required packages depend on others; there could also be a variety 
                    of conflicts caused by version, compiler or language incompatibility.</p>
                    
                    <p>Implement a Web system that offers "smart" support for the aformentioned problem via a REST API for unified
                    management of software components. The required scripts that ensure a administration activity flux will also be
                    generated. As inspiration, consider solutions such as <a href="https://bower.io/" target="_blank">Bower</a>, 
                    <a href="https://www.docker.com/" target="_blank">Docker</a>, <a href="https://www.nuget.org/" target="_blank">NuGet</a>, 
                    <a href="https://www.npmjs.com/" target="_blank">npm</a>, <a href="https://puppet.com/" target="_blank">Puppet</a>.</p>
                </section>

                <section role="doc-dedication">
                    <h2>Project API documentation</h2>

                    <p>First of all, there is no authentication required for using the backend API. As for a quickstart guide,
                    the <i>User guide</i> section below has that covered.</p>

                    <p>Now, we will describe the specific endpoints:</p>
                    
                    <ul>
                        <li>GET <p class="api">/api/{distro}/packages?querry</p></li>
                    </ul>
                    <pre><code>
                        ["&lt;packageName1&gt;", "&lt;packageName2&gt;", ...]
                    </code></pre>
                    <p>This endpoint is called on the client's side after the distribution has been chosen and the user visits the 
                    Browse page. It is called only once upon visit since the packages are then stored in the browser's local storage. 
                    The endpoint returns a JSON response as the one above.</p>
                    
                    <ul>
                        <li>GET <p class="api">/api/{distro}/{package}</p></li>
                    </ul>
                    <pre><code>
                    {
                        "name": {package},
                        "desc": "...",
                        "homepage": "...",
                        "dependencies": [
                            "&lt;packageName1&gt;",  ..., "&lt;packageNameN&gt;"
                        ]
                    }
                    </code></pre>
                    <p>This endpoint is called on the client's side every time a user checks for a listed package's details.</p>

                    <ul>
                        <li>POST <p class="api">/api/{distro}/checkout</p></li>
                    </ul>
                    <pre><code>
                    {
                        ["&lt;packageName1&gt;", "&lt;packageName2&gt;", ...]
                    }	
                    </code></pre>
                    <p>This endpoint is called on the client's side after the checkout button is pressed once a list of packages
                    has been composed. The response is a string representing the required script to run in order to install the
                    specified packages.</p>

                    <section role="doc-dedication">
                        <h3>Personal contribution</h3>

                        <p>Our development cycle and personal contributions can be more easily observed on our 
                        <a href="https://github.com/csum112/TWPackageManager" target="_blank">Github repository</a>, but we will also 
                        present them in short here:</p>

                        <ul>
                            <li id="cristi">Ro&#351;u Cristian-Mihai</li>
                            <ul>
                                <li>
                                    Frontend - created welcome page, package details component, checkout component, about page,
                                    distro selection functionality
                                </li>
                                <li>
                                    Backend - API POST endpoint and final script generation
                                </li>
                            </ul>

                            <li id="catalin">Sum&#259;naru C&#259;t&#259;lin</li>
                            <ul>
                                <li>
                                    Frontend - created router, package component and the package list view, browse page, created 
                                    concept design, app list service, basket service, navigation service
                                </li>
                                <li>
                                    Backend -  
                                </li>
                            </ul>

                            <li id="razvan">Bejenariu R&#259;zvan Andrei</li>
                            <ul>
                                <li>
                                    Frontend - created navigation page, filtering page, contact page, default template
                                    for these components
                                </li>
                                <li>
                                    Backend - soon
                                </li>
                            </ul>
                        </ul>
                    </section>
                </section>

                <section role="presentation">
                    <h2>User guide</h2>
                    
                    <div class="sub">
                        <p>Entering the site, the first page the user is greeted with is the welcome page where the choices of Linux
                        distributions compatible with our package management system are listed. Before going any further, the user
                        needs to choose one of the options.</p>
                        <figure typeof="sa:Image" figcaption="Welcome page">
                            <img id="welcome" src="/assets/png/welcome.png" alt="Welcome page">
                        </figure>
                    </div>

                    <div class="sub">
                        <p>After having chosen one, the user is then guided to the main navigation page where he can choose to either 
                        <i>Browse</i> through the available packages for the selected distribution, <i>Change distributions</i> if needed,
                        get in <i>Contact</i> with us or learn more <i>About</i> this project.</p>
                        <figure typeof="sa:Image" figcaption="Nav page">
                            <img id="nav" src="/assets/png/nav.png" alt="Nav page">
                        </figure>
                    </div>

                    <div class="sub">
                        <p>Changing distribution will lead the user back to the welcome page where he can choose another option, while
                        visiting Contact will lead him to the page on the right, containing information of the three members of the team
                        that created this project. Visiting About will lead them right to this page itself!</p>
                        <figure typeof="sa:Image" figcaption="Contact page">
                            <img id="contact" src="/assets/png/contact.png" alt="Contact page">
                        </figure>
                    </div>

                    <div class="sub">
                        <p>Now, the core of the application. Visiting the Browse page will bring the user to the page below. Here, the 
                        user can either browse through the list of available packages or even search for specific ones by name or by
                        certain filters, by clicking the button next to the search bar.
                        Selecting a package will change the white window on the right to a package details view where the user also
                        has the option to see other information about that package or its dependencies. After deciding on a package, 
                        the bottom right button can be clicked to add that package to the package list. Once the list is formed, another
                        click of a button will generate the user's required install script!</p>
                        <figure typeof="sa:Image" figcaption="Browse page">
                            <img id="browse" src="/assets/png/browse.png" alt="Browse page">
                        </figure>
                    </div>

                    <div class="subv">
                        <p>Below is a short video showcasing page navigation and utilization:</p>
                        <figure typeof=""sa:Video figcaption="User guide video">
                        <iframe width="613" height="345" src="https://www.youtube.com/embed/BoRnPuSwZFI" frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </figure>
                    </div>
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
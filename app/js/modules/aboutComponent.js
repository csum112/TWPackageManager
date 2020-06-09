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
                color: #894EC6;
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
                    <h2>Authors</h2>
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
                    <h2>Affiliations</h2>
                    <ol>
                        <li id="uaic">
                            <a href="https://www.info.uaic.ro/" target="_blank" typeof="schema:Corporation">
                                <span property="schema:name">Computer Science Faculty, UAIC, Iasi</span>
                            </a>
                        </li>
                    </ol>
                </section>

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

            </div>
        </article>
    `;

    constructor() {
        super();
        this._shadow = this.attachShadow({ mode: "open" });
        this._shadow.innerHTML = this.style + this.template;
    }

}
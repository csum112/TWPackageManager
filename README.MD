
##  [TW] - DeMI (My Developer Machine Installer)

### Todo
- [ ] Define project requirements.
- [ ] Use Cases.
- [ ] Wireframe the UI.
- [ ] App and Database UML modeling.


### Cerinta Proiectului
Actualmente, exista o multitudine de aplicatii de sine-statatoare pentru managementul pachetelor software. Instalarea unui nou computer implica folosirea acestor aplicatii pentru a realiza un mediu comun util dezvoltatorilor (novici sau profesionisti) dintr-o organizatie academica ori comerciala. Pachetele necesare sunt dependente de altele; pot exista, de asemenea, diverse conflicte datorate incompatibilitatilor dintre versiuni, compilatoare, limbaje etc. Sa se implementeze un sistem Web care ofera suport "inteligent" pentru problemele mentionate via un API REST de management unificat al gestionarii componentelor software. Se vor genera si script-urile necesare pentru asigurarea fluxurilor de activitati de administrare. Ca inspiratie, a se considera solutii precum Bower, Docker, NuGet, npm, Puppet.

### Tehnologii care probabil o sa le utilizam
Nui-i neaparat asa. Presupun ca vine cat mai usor cu ele.
#### Docker
Standarizare pt cross-development. Asa putem separa in module disjuncte, si ii mai usor de lucrat in echipa.
Cum se instaleaza aici: 
* Docker Engine: [link](https://docs.docker.com/install/)
* Docker Compose: [link](https://docs.docker.com/compose/install/)  (Cred ca pentru windows/mac vine built-in.)

Daca vrei pe linux:
```output
sudo apt-get update
```
```output
sudo apt-get remove docker docker-engine docker.io
```
```output
sudo apt install docker.io
```
```output
docker --version
```
#### Oracle Database 11gR2 XE
Suntem somewhat familiari. Should be okay, nu stiu cu licenta caii mai dubios. Alternatively schimbam pe [PostgreSQL](https://www.postgresql.org/))
Nu trebuie instalat nic, are grija Docker.

#### Node.js
Pentru CLI - Usor de dezvoltat, merge pe toate platformele so thats a plus. Se scrie in JS, so ii easier-ish de scris. [Getting Started](https://nodejs.org/en/docs/guides/getting-started-guide/)

#### Apache2
#### PHP 5.6

##  Getting Started
```
git clone https://github.com/csum112/TWPackageManager.git
cd TWPackageManager
docker-compose up -d
```
Should be up and running by now. Try http://localhost:666

## Resources

### Siteuri de genul asta:
* https://www.npmjs.com/
* https://bower.io/
* https://hub.docker.com/
* https://brew.sh/ (ish, not really)

### Usefull stuff
* https://codepen.io/
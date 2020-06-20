export class AppInfoComponent {
    constructor() {
        window.packageDetailsService.getContent()
            .then(content => { 
                this.version = 'none';
                this.homepage = content.data.homepage; 
            });
    }
}
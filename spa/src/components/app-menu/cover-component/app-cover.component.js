export class AppCoverComponent{
    _getColor() {
        return (
          "hsl(" +
          360 * Math.random() +
          "," +
          (25 + 70 * Math.random()) +
          "%," +
          (65 + 10 * Math.random()) +
          "%)"
        );
    }

    constructor(componentRef) {
        this.content = 'python';
        componentRef.onViewLoad = () => {this.initColor(componentRef)}
    }
    
    initColor(componentRef) {
        let coverRef = componentRef.shadowRoot.querySelector('.cover');
        coverRef.style.background = `linear-gradient(114.42deg, ${this._getColor()} 0%, ${this._getColor()} 50%, ${this._getColor()} 100%)`;
    }
}
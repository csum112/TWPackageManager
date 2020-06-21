export class ThumbnailComponent {
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
    this.packageName = componentRef.getAttribute("packageName");
    if (this.packageName.length > 1) {
      this.firstLetter = this.packageName[0].toUpperCase();
      this.secondLetter = this.packageName[1].toUpperCase();
      this.bothLeters = this.firstLetter + this.secondLetter;
    }

    componentRef.onViewLoad = () => {
      this.initColor(componentRef);
      componentRef.onclick = () => {
        window.router.navigateTo("/package/" + this.packageName + "/description");
      }
    }
  }

  initColor(componentRef) {
    let cardRef = componentRef.shadowRoot.querySelector('.card');
    cardRef.style.background = `linear-gradient(180deg, ${this._getColor()} 0%, ${this._getColor()} 100%)`
  }
}

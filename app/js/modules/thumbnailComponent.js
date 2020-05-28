export class ThumbnailComponent extends HTMLElement {
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
  constructor() {
    super();
    this.packageName = this.getAttribute("packageName");
    if (this.packageName.length > 1) {
      this.firstLetter = this.packageName[0].toUpperCase();
      this.secondLetter = this.packageName[1].toUpperCase();
    }
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = this._getStyle() + this._getTemplate();
  }

  _getTemplate() {
    return `
<div class="thumbnail">
  <div class="card">
    <span class="app-name">${this.firstLetter + this.secondLetter}</span>
    <span class="watermark left">${this.firstLetter}</span>
    <span class="watermark right">${this.secondLetter}</span>
  </div>
  <div class="name">${this.packageName}</div>
</div>
`;
  }

  _getStyle() {
    return `
<style>
  .thumbnail {

      animation: ease-out 300m;
  }
  .card {
    margin-left: 1rem;
    margin-top: 0.8rem;
    position: relative;
    background: linear-gradient(180deg, ${this._getColor()} 0%, ${this._getColor()} 100%);
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.06);
    border-radius: 1rem;
    overflow: hidden;
    width: 5rem;
    height: 5rem;
    text-align:center;
  }

  .app-name {
    position: relative;
    width: 100%:
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 2.4rem;
    line-height: 4.5rem;
    color: #FFFFFF;
    text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04);
  }

  .watermark {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1rem;
    color: #FFFFFF;
    opacity: 0.13;
  }

  .right {
    position: absolute;
    font-size: 2.7rem;
    left: calc(50% + 8px);
    top: calc(50%);
  }

  .left {
    font-size: 2.7rem;
    position: absolute;
    left: calc(50% - 36px);
    top: calc(50% - 18px);
  }

  div.name{
    position: relative;
    width: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 0.8rem;
    line-height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #CACCDB;
    text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.06);
  }

  :host(:hover) > div.thumbnail{
     transform: scale(1.1);
  }
  :host(:hover) > div.thumbnail > div.card {
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  }
</style>
`;
  }
}

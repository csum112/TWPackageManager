export function ComponentDecorator(targetClass, options) {

  let newClassName = targetClass.name + "Final";
  let newClass = class TransitionClass extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: "open" });
      const template = options.template;
      const style = options.style;
      const beforeObject = new targetClass(this);
      Object.assign(this, beforeObject);
      shadowRoot.innerHTML = `<style>${style}</style>` + this.replaceInTemplates(template);
      if(this.onViewLoad) this.onViewLoad()
    }

    replaceInTemplates(template) {
      const idRegexp = /{{(([A-z]|[0-9])+)}}/gm
      const templateVars = template.matchAll(idRegexp);
      Array.from(templateVars).forEach(templateVar => {
        template = template.replace(templateVar[0], this[templateVar[1]]);
      })
      return template;
    }
  };

  window[newClassName] = newClass;
  customElements.define(options.selector, window[newClassName]);
}

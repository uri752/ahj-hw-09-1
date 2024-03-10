import './collapse.css';

export default class Collapse {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }

    this.container = container;
  }

  init() {
    this.drawUi();
    this.addEvents();
  }

  drawUi() {
    this.container.innerHTML = `
      <div class="collapse-wrapper">
        <button type="button" class="show-collapse">Collapse</button>
        <div class="content-collapse">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sapiente molestiae repudiandae reiciendis minima totam cumque maxime, deleniti necessitatibus iure fuga non esse tenetur, asperiores sit accusantium commodi officia exercitationem?</div>
      </div>      
      `;
  }

  addEvents() {
    const collapseBtn = this.container.querySelector('.show-collapse');
    collapseBtn.addEventListener('click', () => this.container
      .querySelector('.content-collapse')
      .classList.toggle('content-collapse_visible'));
  }
}

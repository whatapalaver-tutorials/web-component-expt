import { html, render } from 'lit-html';
import './to-do-item.js';

class TodoApp extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });

        this.todos = [
          { text: 'Learn about Lit-html', checked: true },
          { text: 'Lit-html in practice', checked: false },
          { text: 'Supercharge our web component', checked: false },
          { text: 'Attributes, properties, and events', checked: false },
          { text: 'Wrapping up', checked: false }
        ];
        this.$input = this._shadowRoot.querySelector('input');
    }

    _removeTodo(e) {
      this.todos = this.todos.filter((todo,index) => {
          return index !== e.detail;
      });
    }

    _toggleTodo(e) {
      this.todos = this.todos.map((todo, index) => {
          return index === e.detail ? {...todo, checked: !todo.checked} : todo;
      });
    }

    _addTodo(e) {
      e.preventDefault();
      if(this.$input.value.length > 0) {
          this.todos = [...this.todos, { text: this.$input.value, checked: false }];
          this.$input.value = '';
      }
    }

    template() {
        return html`
            <style>
                :host {
                    display: block;
                    font-family: sans-serif;
                    text-align: center;
                }
                button {
                    border: none;
                    cursor: pointer;
                    background-color: Transparent;
                }
                ul {
                    list-style: none;
                    padding: 0;
                }
            </style>
            <h3>Lit-html Web Components</h3>
            <br>
            <h1>To do</h1>
            <form id="todo-input">
                <input type="text" placeholder="Add a new to do"></input>
                <button @click=${this._addTodo}>✅</button>
            </form>
            <ul id="todos">
              ${this.todos.map((todo, index) => html`
                    <to-do-item 
                        ?checked=${todo.checked}
                        .index=${index}
                        text=${todo.text}
                        @onRemove=${this._removeTodo}
                        @onToggle=${this._toggleTodo}>    
                    </to-do-item>
                  `
              )}
            </ul>
        `;
    }

    set todos(value) {
        this._todos = value;
        render(this.template(), this._shadowRoot, {eventContext: this});
    }

    get todos() {
        return this._todos;
    }
}

window.customElements.define('to-do-app', TodoApp);
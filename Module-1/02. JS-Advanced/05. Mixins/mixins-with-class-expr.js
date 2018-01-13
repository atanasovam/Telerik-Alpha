class UIComponent {
    constructor() {
        console.log(`I'm UIComponent`);
    }
}
class Button extends UIComponent {
    constructor() {
        super();
        console.log(`I'm Button`);
    }
}

const newUIComponent = new UIComponent();
console.log('*'.repeat(20));
const newButton = new Button();

class Label extends UIComponent {
    constructor() {
        super();
        console.log(`I'm Label`);
    }
}

console.log('*'.repeat(20));
const newLabel = new Label();

const RoundedCornersMixin = function(Base) {
    return class extends Base {
        constructor() {
            super();
            console.log(`I'm RoundedCornersMixin`);
        }
    };
};

/* eslint-disable*/
console.log('*'.repeat(20));
const NewRoundedClass = RoundedCornersMixin(Label);
console.log(NewRoundedClass);
const newRoundedObj = new NewRoundedClass();

const highlightOnClickMixin = (Base) => class extends Base {
    constructor() {
        super();
        console.log(`I'm HighlightOnClickMixin`);
    }
};
class GlowButton
    extends RoundedCornersMixin(highlightOnClickMixin(Button)) {
    constructor() {
        super();
        console.log(`I'm GlowButton`);
    }
}
class CircleLabel extends RoundedCornersMixin(Label) {
    constructor() {
        super();
        console.log(`I'm CircleLabel`);
    }
}

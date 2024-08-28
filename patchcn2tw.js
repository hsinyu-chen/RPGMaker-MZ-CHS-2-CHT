import './cn2t.js'
(() => {
    const converter = OpenCC.Converter({ from: 'cn', to: 'tw' });
    const convert = (text) => {
        const convertered = converter(text);
        if (text.length == convertered.length) {
            return convertered
        }
        text;
    };

    setTimeout(() => {
        const add = Game_Message.prototype.add;
        Game_Message.prototype.add = function (text) {
            add.apply(this, [convert(text)])
        }
        const setChoices = Game_Message.prototype.setChoices;
        Game_Message.prototype.setChoices = function (choices, defaultType, cancelType) {
            setChoices.apply(this, [choices.map(convert), defaultType, cancelType]);
        }
    }, 0);
})();
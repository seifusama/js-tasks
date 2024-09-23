const pattern = /^(hand)(\w*)(s|y|le)$/gmi;

let input = ['handOn', 'hands', 'hanDLes', 'Handcuffs', 'handmade', 'in-hands', 'HANDINGLY'];
let output = [];
input.forEach((i) => {
    if(pattern.test(i)) {
        output.push(i);
    }
});
console.log(output);
const { FORMS, forgot } = require('./index.js');
const target = { id: 'obs_42' };
console.log(forgot(FORMS.BUNDLE, target, { reason: 'rolled up' }));
console.log(forgot(FORMS.TRAVERSAL, target));
console.log(forgot(FORMS.EVIDENCE, target, { scar_text: 'evidence dim' }));

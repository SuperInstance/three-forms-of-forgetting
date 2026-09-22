// three-forms-of-forgetting: the canonical forgetting forms
//
// Just as there are three FORMS of evidence, there are three FORMS of
// forgetting. Forgetting is not deletion — the scar remains. Forgetting is
// the act of making something less retrievable in the search paths, even though
// the substrate HOLDS it forever.
//
// 1. BUNDLE forgetting: forget the individual entries; keep the bundle ID
//    (collapse detail, retain summary)
// 2. TRAVERSAL forgetting: walk away from an observation along its edges,
//    never to return from this entry point (drop the path)
// 3. EVIDENCE forgetting: stop recording evidence for new observations (the
//    observations remain but the trail gets dim — they are no longer
//    verifiability-anchored)
//
// Each form is recoverable if you know where to look.

const FORMS = Object.freeze({
  BUNDLE: 'bundle',
  TRAVERSAL: 'traversal',
  EVIDENCE: 'evidence',
});

function forgot(form, target, opts = {}) {
  if (!Object.values(FORMS).includes(form)) {
    throw new Error(`forgetting form must be one of ${Object.values(FORMS).join('/')}`);
  }
  if (!target?.id) throw new Error('forgetting requires target with id');

  return {
    type: 'forgetting_event',
    form,
    target_id: target.id,
    timestamp: opts.timestamp || Date.now(),
    reason: opts.reason || null,
    is_recoverable: true, // all forms of forgetting are reversible in the substrate
    scar_text: opts.scar_text || `forgot ${form} for ${target.id}`,
  };
}

module.exports = { FORMS, forgot };

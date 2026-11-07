// Run with: node tests/verified-only.test.js
const fs = require('fs');
const vm = require('vm');
const assert = require('assert');
const base = require('path').join(__dirname,'../app/src/main/assets');
const db = fs.readFileSync(require('path').join(base,'database.js'),'utf8');
const engine = fs.readFileSync(require('path').join(base,'engine.js'),'utf8');
const ctx = vm.createContext({});
vm.runInContext(db + '\n' + engine,ctx);
const lookup = (a,b,t) => Array.from(ctx.identifyUJoint(a,b,t));
const actual = lookup(1.063,3.219,'outside');
assert(actual.length>0, 'Expected starter positive match');
assert(actual.every(x=>x.verified===true), 'Unverified record leaked');
assert(!actual.some(x=>x.brand==='Precision'&&x.part==='369'), 'Precision negative control leaked');
assert.strictEqual(lookup(1.063,9.999,'outside').length,0, 'No-match test failed');
assert.strictEqual(lookup(1.063,3.219,'inside').length,0, 'Retainer mismatch test failed');
assert.strictEqual(lookup(-1,3.219,'outside').length,0, 'Invalid input test failed');
// Isolated negative control: remove all verified records and ensure Precision never appears.
const isolated=vm.createContext({});
vm.runInContext(db.replace(/verified: true/g,'verified: false')+'\n'+engine,isolated);
assert.strictEqual(isolated.identifyUJoint(1.063,3.219,'outside').length,0,'Negative control failed');
console.log('PASS: verified-only filter, Precision negative control, no-match, retainer, invalid inputs');

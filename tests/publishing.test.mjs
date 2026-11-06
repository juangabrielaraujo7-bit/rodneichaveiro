import {test} from 'node:test';
import assert from 'node:assert/strict';
import {canIndex,definitiveOrigin} from '../src/lib/publishing.mjs';
test('demo stays blocked by default and with missing definitive domain',()=>{
  assert.equal(canIndex({}),false);
  assert.equal(canIndex({INDEXING_ENABLED:'true'}),false);
  assert.equal(canIndex({INDEXING_ENABLED:'false',SITE_URL:'https://example.com'}),false);
});
test('temporary, insecure and malformed origins cannot enable indexing',()=>{
  for(const SITE_URL of ['https://rodnei.vercel.app','https://vercel.app','http://example.com','https://localhost','https://127.0.0.1','oops','https://example.com/test','https://example.com?q=1','https://user:secret@example.com']){
    assert.equal(definitiveOrigin({SITE_URL}),undefined,SITE_URL);
    assert.equal(canIndex({SITE_URL,INDEXING_ENABLED:'true'}),false,SITE_URL);
  }
});
test('only approved production domain with explicit opt in can index; previews stay blocked',()=>{
  const env={SITE_URL:'https://example.com',INDEXING_ENABLED:'true'};
  assert.equal(definitiveOrigin(env),'https://example.com');assert.equal(canIndex(env),true);
  assert.equal(canIndex({...env,VERCEL_ENV:'preview'}),false);
});

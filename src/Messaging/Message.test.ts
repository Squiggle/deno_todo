import { assertEquals } from '../test_deps.ts';
import { getMessage } from './Message.ts';

Deno.test("says hello world", () => {
  assertEquals(getMessage(), 'Hello world');
});
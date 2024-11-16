"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/on-exit-leak-free";
exports.ids = ["vendor-chunks/on-exit-leak-free"];
exports.modules = {

/***/ "(ssr)/./node_modules/on-exit-leak-free/index.js":
/*!*************************************************!*\
  !*** ./node_modules/on-exit-leak-free/index.js ***!
  \*************************************************/
/***/ ((module) => {

eval("\n\nconst refs = {\n  exit: [],\n  beforeExit: []\n}\nconst functions = {\n  exit: onExit,\n  beforeExit: onBeforeExit\n}\n\nlet registry\n\nfunction ensureRegistry () {\n  if (registry === undefined) {\n    registry = new FinalizationRegistry(clear)\n  }\n}\n\nfunction install (event) {\n  if (refs[event].length > 0) {\n    return\n  }\n\n  process.on(event, functions[event])\n}\n\nfunction uninstall (event) {\n  if (refs[event].length > 0) {\n    return\n  }\n  process.removeListener(event, functions[event])\n  if (refs.exit.length === 0 && refs.beforeExit.length === 0) {\n    registry = undefined\n  }\n}\n\nfunction onExit () {\n  callRefs('exit')\n}\n\nfunction onBeforeExit () {\n  callRefs('beforeExit')\n}\n\nfunction callRefs (event) {\n  for (const ref of refs[event]) {\n    const obj = ref.deref()\n    const fn = ref.fn\n\n    // This should always happen, however GC is\n    // undeterministic so it might not happen.\n    /* istanbul ignore else */\n    if (obj !== undefined) {\n      fn(obj, event)\n    }\n  }\n  refs[event] = []\n}\n\nfunction clear (ref) {\n  for (const event of ['exit', 'beforeExit']) {\n    const index = refs[event].indexOf(ref)\n    refs[event].splice(index, index + 1)\n    uninstall(event)\n  }\n}\n\nfunction _register (event, obj, fn) {\n  if (obj === undefined) {\n    throw new Error('the object can\\'t be undefined')\n  }\n  install(event)\n  const ref = new WeakRef(obj)\n  ref.fn = fn\n\n  ensureRegistry()\n  registry.register(obj, ref)\n  refs[event].push(ref)\n}\n\nfunction register (obj, fn) {\n  _register('exit', obj, fn)\n}\n\nfunction registerBeforeExit (obj, fn) {\n  _register('beforeExit', obj, fn)\n}\n\nfunction unregister (obj) {\n  if (registry === undefined) {\n    return\n  }\n  registry.unregister(obj)\n  for (const event of ['exit', 'beforeExit']) {\n    refs[event] = refs[event].filter((ref) => {\n      const _obj = ref.deref()\n      return _obj && _obj !== obj\n    })\n    uninstall(event)\n  }\n}\n\nmodule.exports = {\n  register,\n  registerBeforeExit,\n  unregister\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb24tZXhpdC1sZWFrLWZyZWUvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyIvVXNlcnMvY3VydGlzL0Rlc2t0b3AvRVRIX0dMT0JBTC9sYXRlc3Qvbm9kZV9tb2R1bGVzL29uLWV4aXQtbGVhay1mcmVlL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5jb25zdCByZWZzID0ge1xuICBleGl0OiBbXSxcbiAgYmVmb3JlRXhpdDogW11cbn1cbmNvbnN0IGZ1bmN0aW9ucyA9IHtcbiAgZXhpdDogb25FeGl0LFxuICBiZWZvcmVFeGl0OiBvbkJlZm9yZUV4aXRcbn1cblxubGV0IHJlZ2lzdHJ5XG5cbmZ1bmN0aW9uIGVuc3VyZVJlZ2lzdHJ5ICgpIHtcbiAgaWYgKHJlZ2lzdHJ5ID09PSB1bmRlZmluZWQpIHtcbiAgICByZWdpc3RyeSA9IG5ldyBGaW5hbGl6YXRpb25SZWdpc3RyeShjbGVhcilcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnN0YWxsIChldmVudCkge1xuICBpZiAocmVmc1tldmVudF0ubGVuZ3RoID4gMCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgcHJvY2Vzcy5vbihldmVudCwgZnVuY3Rpb25zW2V2ZW50XSlcbn1cblxuZnVuY3Rpb24gdW5pbnN0YWxsIChldmVudCkge1xuICBpZiAocmVmc1tldmVudF0ubGVuZ3RoID4gMCkge1xuICAgIHJldHVyblxuICB9XG4gIHByb2Nlc3MucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uc1tldmVudF0pXG4gIGlmIChyZWZzLmV4aXQubGVuZ3RoID09PSAwICYmIHJlZnMuYmVmb3JlRXhpdC5sZW5ndGggPT09IDApIHtcbiAgICByZWdpc3RyeSA9IHVuZGVmaW5lZFxuICB9XG59XG5cbmZ1bmN0aW9uIG9uRXhpdCAoKSB7XG4gIGNhbGxSZWZzKCdleGl0Jylcbn1cblxuZnVuY3Rpb24gb25CZWZvcmVFeGl0ICgpIHtcbiAgY2FsbFJlZnMoJ2JlZm9yZUV4aXQnKVxufVxuXG5mdW5jdGlvbiBjYWxsUmVmcyAoZXZlbnQpIHtcbiAgZm9yIChjb25zdCByZWYgb2YgcmVmc1tldmVudF0pIHtcbiAgICBjb25zdCBvYmogPSByZWYuZGVyZWYoKVxuICAgIGNvbnN0IGZuID0gcmVmLmZuXG5cbiAgICAvLyBUaGlzIHNob3VsZCBhbHdheXMgaGFwcGVuLCBob3dldmVyIEdDIGlzXG4gICAgLy8gdW5kZXRlcm1pbmlzdGljIHNvIGl0IG1pZ2h0IG5vdCBoYXBwZW4uXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAob2JqICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGZuKG9iaiwgZXZlbnQpXG4gICAgfVxuICB9XG4gIHJlZnNbZXZlbnRdID0gW11cbn1cblxuZnVuY3Rpb24gY2xlYXIgKHJlZikge1xuICBmb3IgKGNvbnN0IGV2ZW50IG9mIFsnZXhpdCcsICdiZWZvcmVFeGl0J10pIHtcbiAgICBjb25zdCBpbmRleCA9IHJlZnNbZXZlbnRdLmluZGV4T2YocmVmKVxuICAgIHJlZnNbZXZlbnRdLnNwbGljZShpbmRleCwgaW5kZXggKyAxKVxuICAgIHVuaW5zdGFsbChldmVudClcbiAgfVxufVxuXG5mdW5jdGlvbiBfcmVnaXN0ZXIgKGV2ZW50LCBvYmosIGZuKSB7XG4gIGlmIChvYmogPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndGhlIG9iamVjdCBjYW5cXCd0IGJlIHVuZGVmaW5lZCcpXG4gIH1cbiAgaW5zdGFsbChldmVudClcbiAgY29uc3QgcmVmID0gbmV3IFdlYWtSZWYob2JqKVxuICByZWYuZm4gPSBmblxuXG4gIGVuc3VyZVJlZ2lzdHJ5KClcbiAgcmVnaXN0cnkucmVnaXN0ZXIob2JqLCByZWYpXG4gIHJlZnNbZXZlbnRdLnB1c2gocmVmKVxufVxuXG5mdW5jdGlvbiByZWdpc3RlciAob2JqLCBmbikge1xuICBfcmVnaXN0ZXIoJ2V4aXQnLCBvYmosIGZuKVxufVxuXG5mdW5jdGlvbiByZWdpc3RlckJlZm9yZUV4aXQgKG9iaiwgZm4pIHtcbiAgX3JlZ2lzdGVyKCdiZWZvcmVFeGl0Jywgb2JqLCBmbilcbn1cblxuZnVuY3Rpb24gdW5yZWdpc3RlciAob2JqKSB7XG4gIGlmIChyZWdpc3RyeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgcmVnaXN0cnkudW5yZWdpc3RlcihvYmopXG4gIGZvciAoY29uc3QgZXZlbnQgb2YgWydleGl0JywgJ2JlZm9yZUV4aXQnXSkge1xuICAgIHJlZnNbZXZlbnRdID0gcmVmc1tldmVudF0uZmlsdGVyKChyZWYpID0+IHtcbiAgICAgIGNvbnN0IF9vYmogPSByZWYuZGVyZWYoKVxuICAgICAgcmV0dXJuIF9vYmogJiYgX29iaiAhPT0gb2JqXG4gICAgfSlcbiAgICB1bmluc3RhbGwoZXZlbnQpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHJlZ2lzdGVyLFxuICByZWdpc3RlckJlZm9yZUV4aXQsXG4gIHVucmVnaXN0ZXJcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/on-exit-leak-free/index.js\n");

/***/ })

};
;
import { TextDecoder, TextEncoder } from "util";

/* JestDom currently doesn't have support for Text Encoder, so we define it: */
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

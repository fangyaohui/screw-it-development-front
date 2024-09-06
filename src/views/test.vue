<template>
  <div v-html="compiledMarkdown"></div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { marked } from 'marked';
import hljs from 'highlight.js';

const props = defineProps({
  content: String
});

const compiledMarkdown = ref('fasdfasdfasdfasdf');

watch(
    () => props.content,
    (newVal) => {
      compileMarkdown(newVal);
    },
    { immediate: true }
);

function compileMarkdown(content) {
  const renderer = new marked.Renderer();
  renderer.code = (code, language) => {
    if (language && hljs.getLanguage(language)) {
      try {
        const validCode = hljs.highlight(code, { language }).value;
        return `<pre class="hljs"><code>${validCode}</code></pre>`;
      } catch (err) {
        console.error(err);
      }
    }
    // Fallback to default
    return `<pre class="hljs"><code>${code}</code></pre>`;
  };
  compiledMarkdown.value = marked(content, { renderer });
}
</script>

<style>
/* Add your styles for the markdown here */
pre {
  background-color: #f4f4f4;
  border-radius: 4px;
  padding: 10px;
}
code {
  font-family: 'Source Code Pro', monospace;
}
</style>

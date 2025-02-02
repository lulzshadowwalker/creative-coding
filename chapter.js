export default {
  props: {
    name: String,
    examples: Array, // [ { name: String, iframe: 'https...' } ]
  },
  template: `
    <section class="space-y-4 mb-12">
        <h2 class="text-3xl font-bold tracking-wide mb-8">{{ name }}</h2>
        <iframe
            v-for="example in examples"
            class="w-full border rounded-2xl"
            loading="lazy"
            :src="example.iframe"
            style="aspect-ratio: 2.66667 / 1"
        ></iframe>
    </section>
    `
}

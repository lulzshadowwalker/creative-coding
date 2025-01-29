export default {
    props: {
        name: String,
        examples: Array, // [ { name: String, iframe: 'https...' } ]
    },
    template: `
    <section class="space-y-4">
        <iframe
            v-for="example in examples"
            class="w-full border-none transition-opacity opacity-100"
            loading="lazy"
            :src="example.iframe"
            style="aspect-ratio: 2.66667 / 1"
        ></iframe>
    </section>
    `
}
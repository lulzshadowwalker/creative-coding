const ExampleCard = {
  props: {
    example: Object,
  },
  data() {
    return {
      loaded: false,
    };
  },
  methods: {
    loadIframe() {
      this.loaded = true;
    },
  },
  template: `
    <div class="mb-6">
      <div v-if="!loaded" 
           class="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-2xl p-4 cursor-pointer hover:bg-gray-50"
           @click="loadIframe">
        <h3 class="text-xl font-semibold mb-2">{{ example.name }}</h3>
        <p class="text-sm text-gray-500">Click to load example</p>
      </div>
      <iframe v-else
              class="w-full border rounded-2xl"
              loading="lazy"
              :src="example.iframe"
              style="aspect-ratio: 1.8 / 1">
      </iframe>
    </div>
  `,
};

export default {
  props: {
    title: String,        // e.g., "Day 3: Forces"
    examples: Array,      // each example is { name: String, iframe: String }
  },
  components: {
    ExampleCard,
  },
  template: `
    <section class="space-y-4 mb-12">
      <h2 class="text-3xl font-bold tracking-wide mb-8">{{ title }}</h2>
      <div class="grid grid-cols-1 gap-4">
        <example-card 
          v-for="example in examples" 
          :key="example.name" 
          :example="example" />
      </div>
    </section>
  `,
};

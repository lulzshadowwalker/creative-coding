const ExampleCard = {
  inject: ['activeFrame'],
  props: {
    example: Object,
  },
  computed: {
    loaded() {
      return this.activeFrame === this.example.iframe;
    },
  },
  methods: {
    loadIframe() {
      this.$emit('load-iframe', this.example.iframe);
    },
  },
  template: `
    <div class="mb-6">
      <div v-if="!loaded" 
           class="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-2xl p-4 cursor-pointer hover:bg-gray-50"
           @click="loadIframe">
        <div class="mb-2">
          <h3 class="text-xl font-semibold mb-1">{{ example.name }}</h3>
          <p v-if="example.description" class="text-sm text-gray-500 tracking-wide">{{ example.description }}</p>
        </div>

        <p class="text-sm text-gray-500 tracking-wide">Click to load example</p>
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
    title: String,
    examples: Array,
  },
  components: {
    ExampleCard,
  },
  methods: {
    loadIFrame(iframe) {
      this.$emit('load-iframe', iframe);
    },
  },
  template: `
    <section class="space-y-4 mb-12">
      <h2 class="text-3xl font-bold tracking-wide mb-8">{{ title }}</h2>
      <div class="grid grid-cols-1 gap-4">
        <div v-if="!examples.length" 
            class="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-2xl p-4"
            @click="loadIframe">
            <h3 class="text-xl font-semibold mb-2 text-italic">Nothing to see here 🤷🏻‍♀️</h3>
        </div>

        <example-card 
          v-for="example in examples" 
          @load-iframe="$emit('load-iframe', $event)"
          :key="example.name" 
          :example="example" />
      </div>
    </section>
  `,
};

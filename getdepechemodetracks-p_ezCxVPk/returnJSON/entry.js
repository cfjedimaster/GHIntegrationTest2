export default defineComponent({
  async run({ steps, $ }) {
    await $.respond({
      status: 200,
      headers: {
        "Content-Type":"application/json"
      },
      body: steps.filterResults.$return_value,
    })
  },
})

import { defineComponent } from 'vue'

function logText() {
  console.log('foo foo')
}

const BarTsx = defineComponent({
  render() {
    return (
      <div>
        Test TSX
        <button onClick={logText}>click</button>
      </div>
    )
  }
})
export { BarTsx }

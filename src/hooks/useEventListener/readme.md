# useEventListener

> 一个可以帮你自动销毁的事件绑定 hooks

## API

### 函数参数

| 参数名    | 描述           | 类型         | 必须    | 默认值 |
| --------- | -------------- | ------------ | ------- | ------ |
| eventName | 事件名称       | `string`     | `true`  | `-`    |
| handler   | 监听的回调函数 | `()=> void`  | `true`  | `-`    |
| options   | 配置项         | `OptionType` | `false` | `-`    |

### 函数返回值

> 无返回值

### OptionType

| 属性名称  | 描述             | 类型      | 必须     | 默认值  |
| --------- | ---------------- | --------- | -------- | ------- | -------- | ----------- | -------- | ------- | -------- |
| target    | 监听对象         | `string   | Ref<any> | Window  | Document | HTMLElement | Element` | `false` | `window` |
| immediate | 是否立即执行一次 | `boolean` | `false`  | `false` |

## 使用案例

```typescript
import { useEventListener } from '@/hooks/useEventListener'

const handler = () => console.log(123)

// 不使用hook的写法
onMounted(() => {
  const handler = () => console.log(123)
  docuemnt.querySelect('#app').addEventListener('click', handler)
  onUnmounted(() => {
    docuemnt.querySelect('#app').removeEventListener('click', handler)
  })
})

// 使用hook的写法
useEventListener('click', handler, {
  taget: '#app',
  immediate: true,
})
```

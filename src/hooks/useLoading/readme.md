# useLoading

> 一个简单的 loading 状态控制的 hook

## API

### 函数参数

> 1. delay 延时的作用在于，如果设置`delay=1000`, 调
>    用`openLoading`和`closeLoading`的间隔于`1000`, 那么会延时到满`1000ms`后关
>    闭`loading`,避免间隔过小出现页面闪烁的问题。
>
> 2. delay 同样只有在调用 hook 提供的`openLoading`和`closeLoading`方法下生效，直
>    接修改`loading`变量不生效。

| 参数名       | 描述               | 类型      | 必须    | 默认值  |
| ------------ | ------------------ | --------- | ------- | ------- |
| defaultValue | 默认值             | `boolean` | `false` | `false` |
| delay        | 加载延时(单位毫秒) | `number`  | `false` | `0`     |

### 函数返回值

| 属性名称      | 描述     | 类型           |
| ------------- | -------- | -------------- |
| loading       | 加载状态 | `Ref<boolean>` |
| openLoading   | 打开加载 | `()=>void`     |
| cloaseLoading | 关闭加载 | `()=>void`     |

## 使用案例

```typescript
import { useLoading } from '@/hooks/useLoading'

const { loading, openLoading, closeLoading } = useLoading(false, 1000 * 0.5)
openLoading()
closeLoading()
```

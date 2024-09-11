import type { Ref } from 'vue'
/**
 *
 * @param dataR 缓存对象
 * @param replace 默认值false，基于缓存决定是否执行业务方法；true，执行业务方法，并将结果置于缓存
 * @returns 缓存对象，或更新后的缓存对象
 */
export function StoreCache(dataR: Ref<any>, replace = false) {
  return (_: any, __: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value
    descriptor.value = async (...args: any[]) => {
      const val = dataR.value
      // 响应式对象存在，直接返回
      if (
        !replace &&
        ((Object.prototype.toString.call(val) === '[object Array]' && (val as []).length > 0) ||
          Object.prototype.toString.call(val) === '[object Object]')
      ) {
        console.log('call from store')
        return Promise.resolve(dataR)
      }
      console.log('call from method')
      // 异步执行目标方法并将结果置于store
      const r = await originalMethod.apply(descriptor, args)
      return (dataR.value, r) && dataR
    }
    return descriptor
  }
}

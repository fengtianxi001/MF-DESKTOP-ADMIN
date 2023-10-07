/** @description: 数字类型的排序规则 */
export const number =
  (key: string) =>
  (itemA: any, ItemB: any, { direction }: any) =>
    direction === 'ascend' ? itemA[key] - ItemB[key] : ItemB[key] - itemA[key]

/** @description: 字符串类型的排序规则 */
export const string =
  (key: string) =>
  (itemA: any, ItemB: any, { direction }: any) =>
    direction === 'ascend'
      ? itemA[key]?.localeCompare(ItemB[key])
      : ItemB[key]?.localeCompare(itemA[key])

export const sorters: any = {
  number,
  string,
}

export default sorters

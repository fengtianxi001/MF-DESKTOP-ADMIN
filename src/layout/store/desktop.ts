import { ref } from 'vue'

export const desktop = ref([
  {
    id: 'desktop007',
    name: 'WidgetWeather',
    data: {},
  },
  {
    id: 'desktop004',
    name: 'WidgetHotpoints',
    data: {},
  },
  {
    id: 'desktop006',
    name: 'WidgetStatistics',
    data: {},
  },
  {
    id: 'desktop001',
    name: 'WidgetCalendar',
    data: {},
  },
  {
    id: 'desktop003',
    name: 'WidgetDam',
    data: {},
  },

  {
    id: 'desktop005',
    name: 'WidgetPolling',
    data: {},
  },

  ...new Array(100).fill(0).map(() => {
    return {
      id: 'desktop' + Math.random() * 1000,
      name: 'WidgetBlock',
      data: {},
    }
  }),
])

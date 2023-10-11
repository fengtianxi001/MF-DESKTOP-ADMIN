import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'

export const widgetStore = ref([
  {
    id: uuidv4(),
    name: 'WidgetMap',
    data: {},
  },
  {
    id: uuidv4(),
    name: 'WidgetWeather',
    data: {},
  },
  {
    id: uuidv4(),
    name: 'WidgetHotpoints',
    data: {},
  },
  {
    id: uuidv4(),
    name: 'WidgetStatistics',
    data: {},
  },
  {
    id: uuidv4(),
    name: 'WidgetCalendar',
    data: {},
  },
  {
    id: uuidv4(),
    name: 'WidgetDam',
    data: {},
  },

  {
    id: uuidv4(),
    name: 'WidgetNews',
    data: {},
  },
  {
    id: uuidv4(),
    name: 'WidgetMove',
    data: {},
  },
])

export default widgetStore

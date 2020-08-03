import metrics from '../apps/metrics/store'

export interface RootState {
  version: string
}

export const state = () => ({
  version: '0.1.1'
})

export const actions = {
}

export const modules = {
  metrics
}

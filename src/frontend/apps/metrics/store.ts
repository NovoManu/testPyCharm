import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { RootState } from '../../store'
import { Role } from '~/apps/metrics/types'

interface MetricsState {
  silencedFailedEventIds: number[]
  rolesMap: { [key in Role]?: number }
  metrics: string[]
}

const state: () => MetricsState = () => ({
  silencedFailedEventIds: [],
  rolesMap: {},
  metrics: []
})

const mutations: MutationTree<MetricsState> = {}

const getters: GetterTree<MetricsState, RootState> = {}

const actions: ActionTree<MetricsState, RootState> = {}

const metrics: Module<MetricsState, RootState> = {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}

export default metrics

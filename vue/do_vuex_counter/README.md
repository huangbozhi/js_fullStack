Vue的大型项目开发, 分成两种任务
组件开发工作 业务量开发
vuex 数据设计 store 独立于组件之外的，应用app的中央数据管理中心
eg: 公司: CEO state {count: 0} 共享的状态
     actions 日常动(工)作, 修改状态 
修改: dispatch 派发 一个 action('name', payload) 
=> action commit('mutationname') mutations
=> state 修改数据 
mutations 财务部 和老板接触 state
审核对状态的修改是否和公司规定

组件 读 this.$store.state.count
     写 actions(组件调用动作方法, )

- data 是组件自有数据, 没有多少, 思考会不会被共享, 应用层共享的, 只要多于一个组件要用, 且关系不是简单的兄弟, 就用vuex
- 共享状态,  
  vuex state 管理
  mutations 才能修改
  actions 被触发动作, 提交到mutation
  getters 对state的包装

mapActions mapGetters 引入组件
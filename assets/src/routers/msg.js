export default {
    path: 'msg',

    /* 布局基页 */
    getComponent (nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('../components/ShowUserInfo').default)
        }, 'msgView')
    },

    indexRoute: { // 对应 /msg
        getComponent (nextState, cb) {
            require.ensure([], (require) => {
                cb(null, connectComponent(require('COMPONENT/Msg/MsgList').default))
            }, 'msgList')
        }
    }
}
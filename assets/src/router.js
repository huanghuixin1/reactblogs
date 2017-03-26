import ShowUserInfo from "./components/ShowUserInfo";
export default [
    {
        path: '/',
        exact: true,
        component: ShowUserInfo
    },
    {
        path: '/test',
        component: ShowUserInfo
        // getComponents(location, callback) {
        //     require.ensure([], function (require) {
        //         callback(null, require('./components/tables1'))
        //     })
        // }
        // routes: [
        //     {
        //         path: '/child/:id/grand-child',
        //         component: GrandChild
        //     }
        // ]
    }
]

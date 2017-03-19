/**
 * Created by hhx2 on 2017/3/5.
 */
import {observable, computed} from 'mobx';
import {observer} from 'mobx-react';
class UserInfoStore {
    @observable userInfo = {id: 1, name: 'hhx'}

    setUser(userInfo) {
        this.userInfo = userInfo
        console.info("修改用户", this.userInfo);
    }
}

export default new UserInfoStore()
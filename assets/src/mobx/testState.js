/**
 * Created by hhx2 on 2017/3/5.
 */
import {observable, computed} from 'mobx';
class TestState {
    @observable testInfo = [1, 2, 3, 4]

    pushData(val) {
        this.testInfo.push(val)
    }

    popData() {
        return this.testInfo.pop()
    }
}

export default new TestState()
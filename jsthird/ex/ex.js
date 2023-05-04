/*
    ES6 Module 사용하기
        - import: export 키워드로 내보내진 변수, 함수 등등을 불러올 수 있는 키워드
        - 스크립트 의존성을 훨씬 간편하게 관리할 수 있다.
        - 사용되거나 사용되지 않는 스크립트를 추적할 수 있다.
        - import로 불러오는 경우의 순서는 무관하다. (컴포넌트 순서로 인한 스트레스 해방)
        - script src로 불러오는 것과 다르게 전역 오염이 발생하지 않는다.
        - import를 사용하려면 웹 서버가 필요한데 serve 모듈로 로컬 웹 서버를 띄워서 진행하기 때문에 우린 상관없다.
        - ! from 이후 모듈 이름 맨 뒤에 .js 잘 붙였는지 확인할 것
*/

// module-name 내에 export default로 내보내진 것을 가져온다
import defaultExport from "module-name";

// module-name 내에서 export된 모든 것을 모두 가져온다. as 이후 이름은 중복되지만 않으면 자유롭게 정할 수 있다.
import * as allItems from "module-name";

// module-name 내에서 export 된 것 중에 특정 값만 가져온다.
import {loadItem} from "module-name";

// module-name 내에서 export 된 것 중에 특정 값만 이름을 바꿔서 가져온다.
import {
    loadItem as loadSomething
} from "module-name";

// export default된 것과 개별 export 된 것을 한번에 가져올 수도 있다.
import defaultFunction, {
    loadItem
} from "module-name";

// 별도의 모듈 바인딩이 없이 불러오기
import "module.name"
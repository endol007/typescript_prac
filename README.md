# typescript 게시판 만들기
 - 첫 번째: react+ redux + redux-saga
 - 두 번째: react+ mobx + postcss + tailwindcss

## typescript
- 타입스크립트는 자바스크립트에 타입을 부여한 언어이다. 자바스크립트의 확장된 언어라고 볼 수 있고 브라우저에서 실행하려면 파일을 한번 컴파일 해주어야한다.
- 타입스크립트를 쓰는이유?
	1. 에러의 사전 방지
	2. 코드 자동 완성과 가이드

## Webpack
Javascript 애플리케이션을 위한 정적 모듈 번들러이다. webpack이 애플리케이션을 처리할 때, 내부적으로는 프로젝트에 필요한 모든 모듈을 매핑하고 하나 이상의 번들을 생성하는 디펜던시 그래프를 만든다. 6가지 concepts(Entry, Output, Loaders, Plugins, Mode, Browser Compatibility)가 있다.

## Babel
자바스크립트 컴파일러이다. ES2015+코드들을 이전버전의 JS로 변환해주는데 주로 사용된다. 컴파일러중에서도 트랜스파일러라고 말할 수 있다. 자바스크립트는 엄청나게 다양한 환경에서 쓰이는데 그런 특성 때문에 특정 버전 이상에서만 실행되는 코드들이 있다. 그래서 모든 자바스크립트 환경에서 정상적으로 동작할 수 있게 할려면 바벨이 필요하다.

## Redux
리덕스의 핵심개념은 flux패턴과 유사함
- 상태를 저장하는 Store
- 상태 변경 정보인 Action
- Action을 Store에 반영하는 Dispatcher
- Action이 Store에 어떤 변화를 줄지 알려주는 Reducer

![redux](https://res.cloudinary.com/practicaldev/image/fetch/s--fCDvEpjd--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i.stack.imgur.com/LNQwH.png)

## Redux saga


## Postcss
Postcss는 js플러그인을 사용하여 css를 변환시키는 툴이다. Postcss는 언어가 아니라 자동을 신기술 css를 호환가능하도록 변환시켜주는 플러그인이다.
그 자체로는 아무 일도 하지않지만 다양한 플러그인과, 플러그인을 추가할 수 있는 환경을 제공한다.
플러그인의 대표적인 예로 autoprefixer, postcss-color-function, post-custom-properties 등이 있다.

## Tailwind css
Tailwind css는 Utility-first를 지향하는 css프레임워크이다. css를 작성하는 방법론중 하나인 BEM(Block Element Modifier)은 마크업을 컴포넌트 단위로 구분하고 상태에 따라 스타일을 변경하는 식으로 재활용할 수 있도록 한다. 반면에 유틸리티를 우선하는 CSS 프레임워크는 클래스와 스타일을 새로 작성하지 않는다. 레이아웃, 포지션, 스페이스, 컬러, 폰트 등이 이미 사전에 정의 되어있고 이 조합된 클래스들을 사용하기만 하면 된다. 그래서 유틸리티 클래스 기반의 장점으로는
- 컴포넌트를 작성할 때 css 클래스 이름을 고민할 필요가 없다.
- 컴포넌트의 수가 늘어나도 css파일의 사이즈는 크게 늘어나지 않는다.
- 복잡한 구조의 클래스+태그 셀렉터를 사용하지 않기 때문에 버그 발생가능성이 낮고 수정이 쉽다.

** BEM(Block Element Modifier): Block다음에 Element 다음에 Modifier순으로 네이밍을 한다는 의미이다.

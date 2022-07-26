# 3. React.js 이용해서 만들기

## 설명
### 실행 방법
```bash
git clone https://github.com/zmin9/InternAssignment.git
cd ./InternAssignment/3
npm start
```

개발자 도구 > `Dimensions: iPhone12 Pro` 로 설정

* 타이틀의 날짜 오른쪽의 ⌄ 버튼을 눌러 과거 날짜의 태스크를 확인할 수 있습니다.
  * _태스크가 존재했던 날짜의 경우 날짜 아래에 점이 표시됩니다._ 
  * 지난 날짜의 경우 태스크 수정 및 추가가 불가능합니다.
  * 미래의 경우 선택할 수 없습니다.
* _화면 상단의 전체 또는 카테고리 버튼을 눌러 카테고리별로 태스크를 확인할 수 있습니다._
* 각 태스크를 눌러 상태를 변경할 수 있습니다.
* 오른쪽 하단의 + 버튼을 눌러 새 태스크를 추가할 수 있습니다.
    * _현재 태스크 목록에 존재하는 카테고리의 경우 입력창 하단의 버튼을 눌러 카테고리를 지정할 수 있습니다._
    * _새로운 카테고리의 경우 + 버튼을 눌러 입력할 수 있습니다._

### 코드 구조 - src 폴더
<img width="177" alt="스크린샷 2022-07-26 오전 11 39 25" src="https://user-images.githubusercontent.com/60884877/180912268-05faca62-132c-482c-b797-133011456c79.png">

* `component/` : 페이지별로 추상화 덜 된 기본 컴포넌트들
    * `button/`
    * `calendar/`
    * `container/` : 
    * `layout/` : children으로 전달된 값들을 배치
    * `popup/` : ToastMessage, Modal 등
    * `text/`
    * `textInput/` 
* `pages/` : 페이지별로 추상화된 컴포넌트
    * `addPage/`
    * `mainPage/`

### 사용한 라이브러리
* styled-components : `^5.3.5`
* react-calendar: `^4.7.0`
* react-router-dom : `^6.3.0`, 사실 없어도 될 정도의 간단한 웹앱이지만 사용해보고 싶었다.

## 쉽지 않았던 부분
* Thinking in React ..
* 어디까지 컴포넌트로 만드는 것이 좋은지

## 더 공부해보고 싶은 부분
* 비동기 작업
* 리액트 네이티브
  * 리액트랑 비슷해 보이는데 어떻게 잘 돌아가는지
  * 자바스크립트로 앱을 어떻게 만드는지..?
* 타입스크립트

## 개선이 가능한 부분
* 컴포넌트 구조 설계 (컴포넌트의 추상화 단계 설계..?)
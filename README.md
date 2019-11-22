// VScode 단축키
전체 선택 : Ctrl + A
자동 정렬 : Ctrl + K + F
주석 처리 : Ctrl + K, C 
주석 처리 해제 : Ctrl + K + U 
글자 연속적으로 찾기 : Ctrl + I
커서위치 내용의 정의로 이동 : F12 
커서 위치 내용의 선언으로 이동 : Ctrl + F12

디버그 시작 : F5 


// Node.JS 
// 교육 사이트
https://riptutorial.com/
http://expressjs.com/ko/guide/routing.html

- npm(Node Package Manager)
npm은 자바스크립트 개발자들이 특정 문제나 모듈(패키지)등의 오픈 소스등을 쉽게 
공유하고 코드를 재사용하기 위해서 개발된 응용프로그램이다. 모듈을 검색할 수 있고, 
서버측에서 사용할 수 있는 모듈들을 많이 검색할 수 있다. 모듈은 일부 메타 데이터와 
'package.json'라는 파일이 있고, 하나 이상의 파일로 이루어져 있다.
일반적으로 킷허브와 그 역할이 유사하다고 보면 된다. 

package.json : Node 어플리케이션, 모듈의 경로에 위치하고 있으며 패키지의 속성을 정의한다.
프로젝트가 의존하는 모듈과 모듈버전의 정보를 담고 있다. 

https://programmingsummaries.tistory.com/385?category=604662

//npm 최신버전으로 설치하기 (-g : 전체사용으로 설정)
>npm install npm -g

// 현재 폴더에서 npm 초기 셋팅하기 -> package.json 생성됨
>npm init


//대표적인 npm 패키지
async
express
formidable
mysql
util
body-parser
express-formidable
jsonfile
node-gcm
cookie-parser
fbgraph
mongodb
quick-local-ip

passport
passport-local
express-session
connect-flash


- Express
Express는 웹 및 모바일 애플리케이션을 위한 일련의 강력한 기능을 제공하는 간결하고 유연한 Node.js 웹 애플리케이션 프레임워크입니다. 대표적인 패키지이며, 많이 사용되는 미들웨어 패키지라고 할 수 있다. 이미지, CSS, JavaScript 파일과 같은 정적파일을 제공하기 위해서 express.static 함수를 제공한다. 

// express 설치
>npm install express --save

// express + 예제 파일 생성
>npm install -g express express-generator

//nodemon 설치
>npm install nodemon --g

//react 사용하기
>npm install react react-dom

passport, passport-local, express-session connect-flash 설치
>npm install passport, passport-local express-session connect-flash --save-dev
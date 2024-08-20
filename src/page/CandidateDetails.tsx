import Sidebar from '../Component/Sidebar'

import About from './About'

export const CandidateDetails = () => {
  return (
    <>
      <Sidebar />
      <About
        num={44444}
        path={
          'https://s3-alpha-sig.figma.com/img/3dfa/a8ed/c7211dcc2f9d86fa262b7190aa7252a8?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZAULKaUADxb9mF0jMVVvx0WAtPKLc6daok~3sEW-EtSbGg278r-Dsl8bvXlyXx9mGOp~O3M2Vxl5dFzOFRx-hia5KRBoEZa0Qn4C4f~6WdlKGzgCAqo3xkSfh93p9mMN8SpqnrJD2WWg50rNZ9iZWTxe3qRm078Z77QbnVV7kDouS2Zm0WEom2ZsadkjyuK6feItoSvpG7hB-5fbobrJIgY3htd4KI5bHfk~TYw7gKKHuZvC90j1vwClgP3Tzw1yOj~vzMDTVz9ZX8KTd8WXfBbHMlG66~9QNKyQo-socp7MMrUOGbjSOAjrR-zrFeXlLAEoXFHy2qtsw-OXuUxN-A__'
        }
        name={'Moka'}
      />
    </>
  )
}

import { Container } from 'apps/front-office/design-system/components/Grids'
import { CommentsWrapper, SliderWrapper } from './style'
import { H3 } from 'apps/front-office/design-system/components/Typography'
import { trans } from '@mongez/localization'
import CommentsSlider from './CommentsSlider'
import { CommentsIcon } from 'shared/assets/svgs'

const comments = [
  {
    comment: "شركه محترمه قمه الالتزام ربنا يوفقكم ",
    userName: "Walid Salah",
    commentType: trans("facebookComment"),
    image: <CommentsIcon type="facebook" />
  },
  {
    comment: "تعاملاتهم ممتازة و التزمو بكل شىء   ",
    userName: "Amrsaad.91",
    commentType: trans("instagramComment"),
    image: <CommentsIcon type="instagram" />
  },
  {
    comment: "Respectful people honestly I got a very great service easy simple and smooth thank you ",
    userName: "Ingy Hamdy",
    commentType: trans("facebookComment"),
    image: <CommentsIcon type="facebook" />
  },
  {
    comment: "تستحقو الثقه و التفدير",
    userName: "Themagician1919",
    commentType: trans("instagramComment"),
    image: <CommentsIcon type="instagram" />
  },
  {
    comment: "شركه محترمه كل الالتزام و التقدير شكرا جزيلا",
    userName: "Sherif Sabakhawy",
    commentType: trans("facebookComment"),
    image: <CommentsIcon type="facebook" />
  },
  {
    comment: "شركه محترمه شكرا استاذ وسام شكرا استاذ عمرو بالتوفيق يا رب ",
    userName: "Rehab Deab",
    commentType: trans("facebookComment"),
    image: <CommentsIcon type="facebook" />
  },
  {
    comment: "انا بصراحه كنت اول مره اتعامل معاهم لكن كانت معامله ممتازه الحمد لله   ",
    userName: "Hesham Alsabahi",
    commentType: trans("facebookComment"),
    image: <CommentsIcon type="facebook" />
  },
  {
    comment: "والله بروفسير ربنا يوفقكم ",
    userName: "عز العارف",
    commentType: trans("facebookComment"),
    image: <CommentsIcon type="facebook" />
  },
  {
    comment: "انا اتعاملت معاهم وناس قمه فى الاحترام ",
    userName: "Ola Khorshid",
    commentType: trans("facebookComment"),
    image: <CommentsIcon type="facebook" />
  },
  // {
  //   comment: trans("commentThree"),
  //   userName: trans("userNameThree"),
  //   commentType: trans("twitterComment"),
  //   image: <CommentsIcon type="twitter" />
  // },
]
const Comments = () => {
  return (
    <Container>
      <CommentsWrapper>
        <H3>{trans("commentsTitle")}</H3>
        <SliderWrapper>
          <CommentsSlider comments={comments} />
        </SliderWrapper>
      </CommentsWrapper>
    </Container>
  )
}

export default Comments
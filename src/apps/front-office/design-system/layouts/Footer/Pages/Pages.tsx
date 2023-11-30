import { trans } from "@mongez/localization"
import Button from "apps/front-office/design-system/components/Button"
import { Flex } from "apps/front-office/design-system/components/Grids"
import { P4 } from "apps/front-office/design-system/components/Typography"
import { theme } from "apps/front-office/design-system/utils/theme"
import URLS from "apps/front-office/utils/urls"

const Pages = () => {
  const pagesLinks = [
    {
      url: URLS.contactUs,
      text: trans('contactUs')
    },
    {
      url: URLS.faq,
      text: trans('faq')
    },
    
    // {
    //   url: URLS.aboutUs,
    //   text: trans('aboutUs')
    // },
    // {
    //   url: URLS.projects,
    //   text: trans('ourProjects')
    // },
    // {
    //   url: URLS.team,
    //   text: trans('ourTeam')
    // },
    // {
    //   url: URLS.contactUs,
    //   text: trans('contactUs')
    // },
    // {
    //   url: URLS.services,
    //   text: trans('services')
    // },
  ]
  return (
    <Flex direction="column" >
      <P4 color={theme.colors.dark} weight="600">{trans('pages')}</P4>

      <Flex direction="column" align="start">
        {pagesLinks.map(link => (
          <Button noStyle key={link.url}>
            <a href={link.url}>
              <P4 color={theme.colors.paragraph}>
                {link.text}
              </P4>
            </a>
          </Button>
        ))}
      </Flex>

    </Flex>
  )
}

export default Pages
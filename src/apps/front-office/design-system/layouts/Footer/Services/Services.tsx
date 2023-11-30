import { trans } from "@mongez/localization"
import Button from "apps/front-office/design-system/components/Button"
import { Flex } from "apps/front-office/design-system/components/Grids"
import { P4 } from "apps/front-office/design-system/components/Typography"
import { theme } from "apps/front-office/design-system/utils/theme"
import URLS from "apps/front-office/utils/urls"


const Services = () => {
  const servicesLinks = [
    {
      url: URLS.rentPayment,
      text: trans("rentPayment")
    },
    {
      url: URLS.rentCollection,
      text: trans("rentCollection")
    },
    {
      url: URLS.units,
      text: trans("units") 
    }
    // {
    //   url: URLS.kitchen,
    //   text: trans('kitchen')
    // },
    // {
    //   url: URLS.livingArea,
    //   text: trans('livingArea')
    // },
    // {
    //   url: URLS.bathroom,
    //   text: trans('bathroom')
    // },
    // {
    //   url: URLS.dinningHall,
    //   text: trans('dinningHall')
    // },
    // {
    //   url: URLS.bedroom,
    //   text: trans('bedroom')
    // },
  ];
  
  return (
    <Flex direction="column" >
      <P4 color={theme.colors.dark} weight="600">{trans('services')}</P4>

      <Flex direction="column" align="start">
        {servicesLinks.map(link => (
          <Button noStyle>
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

export default Services
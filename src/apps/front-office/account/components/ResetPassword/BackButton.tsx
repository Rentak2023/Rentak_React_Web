import { trans } from '@mongez/localization'
import { navigateTo } from '@mongez/react-router'
import Button from 'apps/front-office/design-system/components/Button'
import { Flex } from 'apps/front-office/design-system/components/Grids'
import URLS from 'apps/front-office/utils/urls'
import { ArrowIcon } from 'shared/assets/svgs'

const BackButton = () => {
  return (
    <Button noStyle onClick={() => navigateTo(URLS.auth.login)}>
      <Flex gap="0.5rem" align='center'>
        <ArrowIcon type="left" size={24} />
        {trans("backToLogin")}
      </Flex>
    </Button>
  )
}

export default BackButton
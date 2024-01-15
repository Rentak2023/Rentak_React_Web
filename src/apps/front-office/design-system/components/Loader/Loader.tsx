import { Loader } from '@mantine/core';
import { Flex } from '../Grids';
import { theme } from '../../utils/theme';

export default function Spinner() {
  return (
    <Flex fullWidth justify='center' align='center'>
      <Loader color={theme.colors.primaryColor} />
    </Flex>
  );
}

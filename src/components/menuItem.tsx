import { Button, Icon, Link, Text } from "@chakra-ui/react";

interface Props {
  linkTo?: string;
  title: string;
  icon: any;
}

export const TabItem = ({ linkTo, title, icon }: Props) => {
  return (
    <Link _hover={{ textDecor: "none" }} href={linkTo}>
      <Button ml={3} colorScheme="facebook">
        <Icon as={icon} />
        <Text pl={3}>{title}</Text>
      </Button>
    </Link>
  );
};

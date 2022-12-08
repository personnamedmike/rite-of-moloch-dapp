import { Flex, Heading, Image } from "@raidguild/design-system";

export const Page404 = () => {
  return (
    <Flex w="100%">
      <Image src="/assets/illustrations/404.svg" alt="raid-banner" w="200px" />
      <Heading fontFamily="spaceMono" mt="2rem">
        Page not found
      </Heading>
    </Flex>
  );
};

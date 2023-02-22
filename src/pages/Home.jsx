import {
  SimpleGrid,
  Center,
  Text,
  Group,
  Space,
  Image,
  Card,
  ActionIcon
} from "@mantine/core";
import {
  BrandTwitter,
  BrandInstagram,
  BrandPinterest,
  BrandFacebook,
  BrandYoutube
} from "tabler-icons-react";
import shop from "../assets/shop.jpg";
import store from "../assets/store.jpg";
import jewlery2 from "../assets/jewlery2.jpg";
import PinterestCarousel from "../components/PinterestCarousel";

import HomeBanner from "../components/HomeBanner";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <Space h="xl" />

      <Group position="center">
        <ActionIcon size="lg">
          <BrandFacebook size={33} stroke-width={1.5} color={"#4d1919"} />
        </ActionIcon>
        <ActionIcon size="lg">
          <BrandPinterest size={33} stroke-width={1.5} color={"#4d1919"} />
        </ActionIcon>
        <ActionIcon size="lg">
          <BrandYoutube size={33} stroke-width={1.5} color={"#4d1919"} />
        </ActionIcon>
        <ActionIcon size="lg">
          <BrandInstagram size={33} stroke-width={1.5} color={"#4d1919"} />
        </ActionIcon>
        <ActionIcon size="lg">
          <BrandTwitter size={33} stroke-width={1.5} color={"#4d1919"} />
        </ActionIcon>
      </Group>
      <Space h="xl" />
      <Center>
        <SimpleGrid
          cols={3}
          spacing="lg"
          verticalSpacing="xl"
          breakpoints={[
            { maxWidth: "sm", cols: 2, spacing: "sm" },
            { maxWidth: "xs", cols: 1, spacing: "sm" }
          ]}
        >
          <div>
            <Card
              shadow="sm"
              p="xl"
              component="a"
              href="https://www.ross-simons.com/"
              target="_blank"
              withBorder
              radius="md"
            >
              <Text color="dark" align="center" weight={500} size="lg" mt="md">
                Shop Ross Simmons
              </Text>
              <Space h="md" />
              <Card.Section>
                <Image src={shop} height={160} alt="Shop" />
              </Card.Section>
            </Card>
          </div>
          <div>
            <Card
              shadow="sm"
              p="xl"
              component="a"
              href="https://www.ross-simons.com/"
              target="_blank"
              withBorder
              radius="md"
            >
              <Text color="dark" align="center" weight={500} size="lg" mt="md">
                Store Locator
              </Text>
              <Space h="md" />
              <Card.Section>
                <Image src={store} height={160} alt="Store Locator" />
              </Card.Section>
            </Card>
          </div>
          <div>
            <Card
              radius="md"
              shadow="sm"
              p="xl"
              component="a"
              href="https://www.ross-simons.com/"
              target="_blank"
              withBorder
            >
              <Text color="dark" align="center" weight={500} size="lg" mt="md">
                Popular Styles
              </Text>
              <Space h="md" />
              <Card.Section>
                <Image src={jewlery2} height={160} alt="Store Locator" />
              </Card.Section>
            </Card>
          </div>
        </SimpleGrid>
      </Center>
      <Space h="xl" />
      <PinterestCarousel />
    </>
  );
}

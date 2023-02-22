import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  createStyles,
  Header,
  Group,
  ActionIcon,
  Container,
  Burger,
  Image,
  Drawer,
  ScrollArea,
  Divider,
  Text
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  BrandTwitter,
  BrandInstagram,
  BrandPinterest,
  BrandFacebook,
  BrandYoutube
} from "tabler-icons-react";
import logo from "../assets/logo.png";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start"
    }
  },

  links: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      display: "none"
    }
  },

  social: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
      display: "none"
    }
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan("sm")]: {
      display: "none"
    }
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none"
    }
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0]
    }
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: "gray.1"
      }).background,
      color: theme.fn.variant({ variant: "light", color: "dark" }).color
    }
  }
}));

const links = [
  { link: "/", label: "Home" },
  { link: "/contactUs", label: "Contact Us" },
  { link: "/careers", label: "Careers" }
];

export default function HeaderMiddle() {
  const navigate = useNavigate();
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx, theme } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        navigate(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <>
      <Header height={56} mb={22}>
        <Container className={classes.inner}>
          <Burger
            opened={opened}
            onClick={toggle}
            size="sm"
            className={classes.burger}
          />
          <Group className={classes.links} spacing={5}>
            {items}
          </Group>

          <Group position="center">
            <Image
              src={logo}
              alt="logo"
              width={233}
              height={99}
              fit="contain"
            />
          </Group>
          <Group spacing={5} className={classes.social} position="right" noWrap>
            <ActionIcon size="lg">
              <BrandFacebook size={18} stroke-width={1.5} color={"#4d1919"} />
            </ActionIcon>
            <ActionIcon size="lg">
              <BrandPinterest size={18} stroke-width={1.5} color={"#4d1919"} />
            </ActionIcon>
            <ActionIcon size="lg">
              <BrandYoutube size={18} stroke-width={1.5} color={"#4d1919"} />
            </ActionIcon>
            <ActionIcon size="lg">
              <BrandInstagram size={18} stroke-width={1.5} color={"#4d1919"} />
            </ActionIcon>
            <ActionIcon size="lg">
              <BrandTwitter size={18} stroke-width={1.5} color={"#4d1919"} />
            </ActionIcon>
          </Group>
        </Container>
      </Header>

      <Drawer
        opened={opened}
        onClose={toggle}
        padding="md"
        size="md"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx="-md">
          <Group position="center">
            <Image src={logo} alt="logo" width={222} />
          </Group>
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Link to="/" className={classes.link}>
            <Text sx={{ marginLeft: 10 }} align="center">
              Home
            </Text>
          </Link>
          <Link to="/careers" className={classes.link}>
            <Text sx={{ marginLeft: 10 }} align="center">
              Careers
            </Text>
          </Link>
          <Link to="/contactUs" className={classes.link}>
            <Text sx={{ marginLeft: 10 }} align="center">
              Contact Us
            </Text>
          </Link>

          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Group position="center" grow pb="sm" px="md">
            <ActionIcon size="xl">
              <BrandFacebook size={18} stroke-width={1.5} color={"#4d1919"} />
            </ActionIcon>
            <ActionIcon size="xl">
              <BrandPinterest size={18} stroke-width={1.5} color={"#4d1919"} />
            </ActionIcon>
            <ActionIcon size="xl">
              <BrandYoutube size={18} stroke-width={1.5} color={"#4d1919"} />
            </ActionIcon>
            <ActionIcon size="xl">
              <BrandInstagram size={18} stroke-width={1.5} color={"#4d1919"} />
            </ActionIcon>
            <ActionIcon size="xl">
              <BrandTwitter size={18} stroke-width={1.5} color={"#4d1919"} />
            </ActionIcon>
          </Group>
          <Divider color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />
        </ScrollArea>
      </Drawer>
    </>
  );
}

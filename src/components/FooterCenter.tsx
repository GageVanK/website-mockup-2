import {
  createStyles,
  Anchor,
  Group,
  ActionIcon,
  Image,
  Button
} from "@mantine/core";
import {
  BrandTwitter,
  BrandInstagram,
  BrandPinterest,
  BrandFacebook,
  BrandYoutube
} from "tabler-icons-react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/lbh-logo.png";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column"
    }
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm
    }
  }
}));

const links = [
  { link: "/", label: "Home" },
  { link: "/contactUs", label: "Contact Us" },
  { link: "/careers", label: "Careers" }
];

export default function FooterCenter() {
  const navigate = useNavigate();
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor<"a">
      color="dimmed"
      size="sm"
      key={link.label}
      sx={{ lineHeight: 1 }}
      onClick={(event) => {
        event.preventDefault();
        navigate(link.link);
      }}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Button component={Link} to="/" variant="white">
          <Image src={logo} alt="logo" width={222} fit="contain" />
        </Button>
        <Group className={classes.links}>{items}</Group>

        <Group spacing="xs" position="right" noWrap>
          <ActionIcon size="lg">
            <BrandFacebook size={22} stroke-width={1.5} color={"#4d1919"} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandPinterest size={22} stroke-width={1.5} color={"#4d1919"} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandYoutube size={22} stroke-width={1.5} color={"#4d1919"} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandInstagram size={22} stroke-width={1.5} color={"#4d1919"} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandTwitter size={22} stroke-width={1.5} color={"#4d1919"} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}

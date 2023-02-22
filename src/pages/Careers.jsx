import {
  createStyles,
  Text,
  Title,
  Button,
  Image,
  Card,
  Stack
} from "@mantine/core";
import work from "../assets/work.jpg";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing.xl * 3,
    borderRadius: theme.radius.md,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "column-reverse",
      padding: theme.spacing.xl
    }
  },

  image: {
    maxWidth: "30%",

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "60%"
    }
  },

  body: {
    paddingRight: theme.spacing.xl * 4,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl
    }
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md
  },

  controls: {
    display: "flex",
    marginTop: theme.spacing.xl
  },

  inputWrapper: {
    width: "100%",
    flex: "1"
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  }
}));

export default function Careers() {
  const { classes } = useStyles();
  return (
    <Card shadow="xl" p="xl" withBorder>
      <Stack align="center">
        <Title className={classes.title}>
          <Text color={"#862d47"}>Careers</Text>
        </Title>
        <Image radius="md" alt="Careers" src={work} className={classes.image} />

        <Text align="center" size="sm" color="dimmed">
          Luxury Brand Holdings is always looking for intelligent and
          self-motivated people for all levels of our company
        </Text>

        <Text align="center" size="sm" color="dimmed">
          We pride ourselves on providing an exceptional shopping experience and
          building profitable long-term customer relationships.
        </Text>

        <Text align="center" size="sm" color="dimmed">
          Our employees are our number one asset. We offer competitive benefits
          and opportunities to help you grow with us.{" "}
        </Text>

        <Text align="center" size="sm" color="dimmed">
          Whether you are an experienced professional or a first time job
          seeker, we have a wide range of career opportunities.
        </Text>

        <Button
          component="a"
          href="https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=b4fadde9-8ed0-42cf-a8af-215ce4e70c37&ccId=19000101_000001&type=MP&lang=en_US"
          loaderPosition="center"
          variant="gradient"
          gradient={{ from: "dark", to: "red" }}
          color="red"
          radius="md"
        >
          Explore Career Opportunities
        </Button>
      </Stack>
    </Card>
  );
}

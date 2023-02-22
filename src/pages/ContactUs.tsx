import {
  createStyles,
  ThemeIcon,
  Text,
  Center,
  Box,
  Stack,
  Card,
  Title,
  Space
} from "@mantine/core";
import { Sun, Phone, Mail, Location, Home } from "tabler-icons-react";

type ContactIconVariant = "white" | "gradient";

interface ContactIconStyles {
  variant: ContactIconVariant;
}

const useStyles = createStyles((theme, { variant }: ContactIconStyles) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    color: theme.white,
    marginLeft: 50,
    marginRight: 50
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundImage:
      variant === "gradient"
        ? `linear-gradient(135deg, ${theme.colors["gray"][9]} 0%, ${theme.colors["pink"][8]} 100%)`
        : "none",
    backgroundColor: "transparent"
  },

  cardTitle: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md
  },

  title: {
    color:
      variant === "gradient"
        ? theme.colors.gray[6]
        : theme.colors[theme.primaryColor][0]
  },

  description: {
    color: variant === "gradient" ? theme.black : theme.white
  }
}));

interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
  variant?: ContactIconVariant;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  variant = "gradient",
  className,
  ...others
}: ContactIconProps) {
  const { classes, cx } = useStyles({ variant });
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      {variant === "gradient" ? (
        <ThemeIcon size={40} radius="md" className={classes.icon}>
          <Icon size={24} />
        </ThemeIcon>
      ) : (
        <Box mr="md">
          <Icon size={24} />
        </Box>
      )}

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

interface ContactIconsListProps {
  data?: ContactIconProps[];
  variant?: ContactIconVariant;
}

const CONTACTDATA = [
  {
    title: "Email",
    description: "clientservices@luxurybrandholdings.com",
    icon: Mail
  },
  { title: "Phone", description: "(401)-463-3100", icon: Phone },
  {
    title: "Address",
    description: "9 Ross Simons Drive, Cranston, RI, 02920 ",
    icon: Location
  },
  {
    title: "Working hours",
    description: "8:30 AM - 5:30 PM",
    icon: Sun
  },
  {
    title: "Stores",
    description: "Warwick, RI",
    icon: Home
  }
];

export function ContactIconsList({
  data = CONTACTDATA,
  variant
}: ContactIconsListProps) {
  const items = data.map((item, index) => (
    <ContactIcon key={index} variant={variant} {...item} />
  ));
  return <Stack>{items}</Stack>;
}

export default function ContactUs() {
  return (
    <Card shadow="xl" p="xl" withBorder>
      <Center>
        <Title>
          <Text color={"#862d47"}>Contact Us</Text>
        </Title>
      </Center>
      <Space h="md" />
      <Center>
        <ContactIconsList />
      </Center>
      <Space h="md" />
    </Card>
  );
}

import { MDXProvider as Default } from '@mdx-js/react'
import {
    Heading,
    Text,
    UnorderedList,
    OrderedList,
    ListItem,
    Divider,
    Link,
} from '@chakra-ui/react'

const mdComponents = {
    h1: (props) => <Heading as="h1" mb="4" textAlign="center" {...props} />,
    h2: (props) => <Heading as="h2" size="xl" mb="4" {...props} />,
    h3: (props) => <Heading as="h3" size="lg" mb="4" {...props} />,
    h4: (props) => <Heading as="h4" size="md" mb="4" {...props} />,
    h5: (props) => <Heading as="h5" size="sm" mb="4" {...props} />,
    h6: (props) => <Heading as="h6" size="xs" mb="4" {...props} />,
    p: (props) => <Text mb="4" {...props} />,
    ul: (props) => <UnorderedList {...props} />,
    ol: (props) => <OrderedList {...props} />,
    li: (props) => <ListItem {...props} mb="2" />,
    hr: (props) => <Divider {...props} />,
    a: (props) => (
        <Link {...props} isExternal variant="yellow" rel="noopener" />
    ),
}

const MDXProvider = ({ children }) => (
    <Default components={mdComponents}>{children}</Default>
)

export default MDXProvider

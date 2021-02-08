import { AspectRatioProps, AspectRatio } from '@chakra-ui/react'

interface YouTubeEmbedProps extends AspectRatioProps {
    /**
     * The YouTube Video ID
     * For example the last part "PYu_5R50v3s" from https://youtube.com/watch?v=PYu_5R50v3s
     */
    videoID: string
}

const YouTubeEmbed: FC<YouTubeEmbedProps> = ({ videoID, ...props }) => (
    <AspectRatio
        maxW="560px"
        ratio={16 / 9}
        style={{ margin: '32px auto' }}
        {...props}
    >
        <iframe
            width="560"
            height="315"
            src={`https://www.youtube-nocookie.com/embed/${videoID}?rel=0`}
            frameBorder="0"
            allowFullScreen
        />
    </AspectRatio>
)

export default YouTubeEmbed

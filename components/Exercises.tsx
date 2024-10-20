'use client'

import { FC } from 'react'
import { Text, Heading, Box } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

import Card from './Card'

interface Exercise {
    title: string
    description: string
    link: string
    emoji: string
}

type ExerciseType = 'Trumpet' | 'Valthorn' | 'Baryton/Tuba'

const exerciseLinks: Record<ExerciseType, Exercise[]> = {
    Trumpet: [
        {
            title: 'Övning 1',
            description: 'Uppvärmning och flexibilitet',
            link: '/ovningar/trumpet-1',
            emoji: '🎺',
        },
        {
            title: 'Övning 2',
            description: 'Mellan till avancerad flexibilitetsövning',
            link: '/ovningar/trumpet-2',
            emoji: '🥁',
        },
    ],
    Valthorn: [
        {
            title: 'Övning 1',
            description: 'Uppvärmning och flexibilitet för horn',
            link: '/ovningar/valthorn-1',
            emoji: '🌍',
        },
    ],
    'Baryton/Tuba': [
        {
            title: 'Övning 1',
            description: 'Uppvärmning och flexibilitet för baryton',
            link: '/ovningar/baryton-1',
            emoji: '🌍',
        },
    ],
}

interface ExercisesProps {
    type: ExerciseType
}

const Exercises: FC<ExercisesProps> = ({ type }) => {
    return exerciseLinks[type].length ? (
        <>
            <Card mx="auto" my="12" p="2">
                <Heading textAlign="center" my="2">
                    {type}
                </Heading>
                {exerciseLinks[type].map((exercise, i) => (
                    <Link href={exercise.link} key={exercise.link + i}>
                        <Box
                            borderRadius="lg"
                            p={['4', null, null, '5']}
                            style={{
                                textDecoration: 'none !important',
                            }}
                            _hover={{
                                cursor: 'pointer',
                                backgroundImage:
                                    'linear-gradient(25deg,#009eea,#fff)',
                            }}
                            position="relative"
                        >
                            <Heading as="h3" fontSize="md" pr="4">
                                {exercise.emoji} {exercise.title}
                            </Heading>
                            <Text
                                position="absolute"
                                top="4"
                                right="4"
                                as="span"
                            >
                                →
                            </Text>
                            <Text fontSize="1rem" mt="1">
                                <Text as="span" fontWeight="normal">
                                    {exercise.description}
                                </Text>{' '}
                            </Text>
                        </Box>
                    </Link>
                ))}
            </Card>
        </>
    ) : null
}

export default Exercises

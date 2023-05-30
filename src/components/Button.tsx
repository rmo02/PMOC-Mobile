import { Button as ButtonNaviteBase, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
    title: string;
    variant?: 'solid' | 'outline';
};


export function Button ({title, ...rest} : Props) {
    return (
        <ButtonNaviteBase
        marginTop={5}
        w='full'
        h={10}
        bg={title === 'Agendada' ? 'blue.200' : 'green.400' }
       rounded={20}
        alignItems='center'
        {...rest}
        >
            <Text color='white' fontFamily='button'>{title}</Text>
        </ButtonNaviteBase>
    );
}